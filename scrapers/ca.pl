#!/usr/bin/perl

use strict;
use warnings;

use LWP::Simple;

my $url = "http://www.calottery.com";

my $data = get($url);
my @urls = $data =~ /["'](\/play\/.+?-games\/[^\/]+?)["']/g;

# Extract unique urls.
my %hash = map { $_, 1 } @urls;

# Remove non-game URLs.
delete $hash{"/play/scratchers-games/faqs"};
delete $hash{"/play/scratchers-games/how-to-play"};
delete $hash{"/play/scratchers-games/end-of-game-info"};
delete $hash{"/play/scratchers-games/top-prizes-remaining"};

# Remove non-supported games.   TODO: add support for these.
delete $hash{"/play/draw-games/hot-spot"};
delete $hash{"/play/draw-games/daily-4"};
delete $hash{"/play/draw-games/daily-3"};
delete $hash{"/play/draw-games/daily-derby"};

print "var date = '" . localtime() . "';\n";
print "// Note: the difference between overall_odds and cash_odds is that cash_odds excludes 'ticket' prizes.\n";
print "var games = [";

my $sawone = 0;
my $so;
foreach (keys %hash) {
print STDERR "Processing: $_\n";
    print $sawone ? ",\n" : "\n";
    $sawone = 1;

    my $game_url = "$url$_";
    if (/draw-games/) {   # Lottery.
        output_game_info($game_url);
    } else {   # Scratchers.
        sleep(2);   # Don't bombard the lottery server.

        my $regex = "($_/.+?)";
        $regex =~ s/\$/\\\$/g;   # "$1-scratcher" --> "\$1-scratcher"

        $data = get($game_url);
        @urls = $data =~ /["']$regex["']/g;
        my %hash2 = map { $_, 1 } @urls;
        if (scalar(keys %hash2) == 0) {
            print STDERR "No games available for '$game_url'\n";
            $sawone = 0;   # Skip outputting ",\n" at beginning of loop.
        }
        $so = 0;
        foreach (keys %hash2) {
            print $so ? ",\n" : "";
            $so = 1;

            output_game_info("$url$_");
        }
    }
}
print "\n";
print "];\n";

sub output_game_info {
    my ($url) = @_;
    my $max_prize;

    print "    // $url\n";

    sleep(2);   # Don't bombard the lottery server.

    my $data = get($url);
    my ($cost, $matches, $prize, $odds, $winners, $claimed, $left);
    if ($url =~ /draw-games/) {   # Lottery.
        if ($data =~ /<div class="coming-soon-.+">/) {
            print STDERR "Drawing in progress, no data available for '$url'";
            return;
        }

        $cost = 1;
        if ($url =~ /powerball/) {
            $cost = 2;
        }
        print "    { state: 'CA', type: 'draw', name: '$url', cost: $cost, lines: [\n";

        if ($data =~ /<h2>\$(\d+) MILLION<\/h2>/) {
            $max_prize = $1 * 1000000;
        } elsif ($data =~ /<h2>\$([\d,]+)<\/h2>/) {
            $max_prize = $1;
            $max_prize =~ s/,//g;
        } else {
            die "Cannot find max prize for '$url'";
        }

        # TODO: interpolate prizes based on current jackpot.

        $so = 0;
        while ($data =~ /<tr><td><b>(.*?)<\/b><\/td><td>(.*?)<\/td><td>(\$[\d,]+|Free Play)<\/td><\/tr>/g) {
            if ($so) {
                $prize = $3;
                print ",   // $matches\n";
            } else {
                $prize = $max_prize;
            }
            $so = 1;

            $matches = $1;
            $winners = $2;

            $winners =~ s/,//g;
            $matches =~ s/^\s+//g;
            $matches =~ s/\s+$//g;
            $prize =~ s/[\$,]//g;
            $prize = "ticket" if $prize eq "Free Play";
            $odds = get_odds($url, $matches);

            print "        { prize: " . ($prize eq "ticket" ? "'$prize'" : $prize) . ", odds: $odds }";
        }
        print "   // $matches\n";
        print "    ]}";
    } else {   # Scratchers.
        # TODO: incorporate second_chance?

        if ($data =~ /Ticket Price: \$?(\d+)/) {
            $cost = $1;
        } else {
            die "Cannot find cost for '$url'";
        }

        print "    { state: 'CA', type: 'scratcher', name: '$url', cost: $cost, lines: [\n";

        $so = 0;
        while ($data =~ /<tr><td>(\$[\d,]+|Ticket)<\/td><td>([\d,]+)<\/td><td>([\d,]+)<\/td><td>([\d,]+)<\/td><td>([\d,]+)<\/td><\/tr>/g) {
            print $so ? ",\n" : "";
            $so = 1;

            $prize = $1;
            $odds = $2;
            $winners = $3;
            $claimed = $4;
            $left = $5;

            $prize =~ s/[\$,]//g;
            $prize = "ticket" if $prize eq "Ticket";
            $odds =~ s/,//g;
            $winners =~ s/,//g;
            $claimed =~ s/,//g;
            $left =~ s/,//g;

            print "        { prize: " . ($prize eq "ticket" ? "'$prize'" : $prize) . ", odds: $odds, wins_total: $winners, wins_claimed: $claimed, wins_left: $left }";
        }
        print "\n";
        print "    ]}";
    }
}

sub get_odds {
    my ($url, $matches) = @_;

# TODO: why do we get an error when defining this constant outside of the odds_lookup function?
my %odds_lookup = (
    "powerball" => {
       # http://www.durangobill.com/PowerballOdds.html
       "5 + POWERBALL" => 292201338.00,
       "5"             => 11688053.52,
       "4 + POWERBALL" => 913129.18,
       "4"             => 36525.17,
       "3 + POWERBALL" => 14494.11,
       "3"             => 579.76,
       "2 + POWERBALL" => 701.33,
       "1 + POWERBALL" => 91.98,
       "POWERBALL"     => 38.32
    },
    # http://www.durangobill.com/MegaMillionsOdds.html
    "mega-millions" => {
       "5 + MEGA" => 258890850.00,
       "5"        => 18492203.57,
       "4 + MEGA" => 739688.14,
       "4"        => 52834.87,
       "3 + MEGA" => 10720.12,
       "3"        => 765.72,
       "2 + MEGA" => 472.95,
       "1 + MEGA" => 56.47,
       "MEGA"     => 21.39
   },
   "superlotto-plus" => {
       "5 + MEGA" => 41416353,
       "5"        => 1592936.653846153846154,
       "4 + MEGA" => 197220.728571428571429,
       "4"        => 7585.412637362637363,
       "3 + MEGA" => 4810.261672473867596,
       "3"        => 185.010064325917984,
       "2 + MEGA" => 360.76962543554007,
       "1 + MEGA" => 74.004025730367194,
       "MEGA"     => 48.686859033136312
   },
   "fantasy-5" => {
       "MATCHED 5 OF 5 NUMBERS" => 575757,
       "MATCHED 4 OF 5 NUMBERS" => 3386.805882352941176,
       "MATCHED 3 OF 5 NUMBERS" => 102.63048128342246,
       "MATCHED 2 OF 5 NUMBERS" => 9.621607620320856
   }
);

    my @parts = split '/', $url;
    my $game = $parts[$#parts];

    if (!defined $odds_lookup{$game}{uc $matches}) {
       die "Cannot find odds for match '$matches' in game '$game'\n";
    }

    return $odds_lookup{$game}{uc $matches};
}
