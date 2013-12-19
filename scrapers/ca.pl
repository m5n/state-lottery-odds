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
print STDERR "processing: $_\n";
    print $sawone ? ",\n" : "\n";
    $sawone = 1;

    if (/draw-games/) {   # Lottery.
        output_game_info("$url$_");
    } else {   # Scratchers.
        sleep(2);   # Don't bombard the lottery server.

        my $regex = "($_/.+?)";
        $regex =~ s/\$/\\\$/g;   # "$1-scratcher" --> "\$1-scratcher"

        $data = get("$url$_");
        @urls = $data =~ /["']$regex["']/g;
        my %hash2 = map { $_, 1 } @urls;
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
       # TODO: get/compute non-rounded odds
       "5 + Powerball" => 175223510,
       "5"             => 5153633,
       "4 + Powerball" => 648976,
       "4"             => 19088,
       "3 + Powerball" => 12245,
       "3"             => 360,
       "2 + Powerball" => 706,
       "1 + Powerball" => 111,
       "Powerball"     => 55
    },
    "mega-millions" => {
       "5 + MEGA" => 175711536,
       "5"        => 3904700.8,
       # TODO: get/compute non-rounded odds
       "4 + MEGA" => 689065,
       "4"        => 15313,
       "3 + MEGA" => 13781,
       "3"        => 306,
       "2 + MEGA" => 844,
       "1 + MEGA" => 141,
       "MEGA"     => 75
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
       "Matched 5 of 5 Numbers" => 575757,
       "Matched 4 of 5 Numbers" => 3386.805882352941176,
       "Matched 3 of 5 Numbers" => 102.63048128342246,
       "Matched 2 of 5 Numbers" => 9.621607620320856
   }
);

    my @parts = split '/', $url;
    my $game = $parts[$#parts];

    if (!defined $odds_lookup{$game}{$matches}) {
       die "Cannot find odds for match '$matches' in game '$game'\n";
    }

    return $odds_lookup{$game}{$matches};
}
