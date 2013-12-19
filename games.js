var date = 'Wed Dec 18 09:28:46 2013';
// Note: the difference between overall_odds and cash_odds is that cash_odds excludes 'ticket' prizes.
var games = [
    // http://www.calottery.com/play/draw-games/fantasy-5
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/fantasy-5', cost: 1, lines: [
        { prize: 119000, odds: 575757 },   // Matched 5 of 5 Numbers
        { prize: 468, odds: 3386.80588235294 },   // Matched 4 of 5 Numbers
        { prize: 17, odds: 102.630481283422 },   // Matched 3 of 5 Numbers
        { prize: 'ticket', odds: 9.62160762032086 }   // Matched 2 of 5 Numbers
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/$5-million-jackpot-1100
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/$5-million-jackpot-1100', cost: 20, lines: [
        { prize: 5000000, odds: 2400000, wins_total: 14, wins_claimed: 2, wins_left: 12 },
        { prize: 100000, odds: 600000, wins_total: 56, wins_claimed: 11, wins_left: 45 },
        { prize: 25000, odds: 40000, wins_total: 840, wins_claimed: 180, wins_left: 660 },
        { prize: 5000, odds: 13333, wins_total: 2520, wins_claimed: 506, wins_left: 2014 },
        { prize: 1000, odds: 2400, wins_total: 14000, wins_claimed: 2559, wins_left: 11441 },
        { prize: 500, odds: 420, wins_total: 80080, wins_claimed: 19212, wins_left: 60868 },
        { prize: 100, odds: 33, wins_total: 1008000, wins_claimed: 242428, wins_left: 765572 },
        { prize: 50, odds: 21, wins_total: 1568000, wins_claimed: 376488, wins_left: 1191512 },
        { prize: 25, odds: 30, wins_total: 1120000, wins_claimed: 266377, wins_left: 853623 },
        { prize: 20, odds: 8, wins_total: 4480000, wins_claimed: 1060814, wins_left: 3419186 },
        { prize: 'ticket', odds: 10, wins_total: 3360000, wins_claimed: 789829, wins_left: 2570171 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/sweet-holidays-1101
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/sweet-holidays-1101', cost: 1, lines: [
        { prize: 500, odds: 480000, wins_total: 38, wins_claimed: 16, wins_left: 22 },
        { prize: 100, odds: 48000, wins_total: 380, wins_claimed: 141, wins_left: 239 },
        { prize: 40, odds: 2400, wins_total: 7600, wins_claimed: 3034, wins_left: 4566 },
        { prize: 20, odds: 417, wins_total: 43776, wins_claimed: 16884, wins_left: 26892 },
        { prize: 10, odds: 83, wins_total: 218880, wins_claimed: 81065, wins_left: 137815 },
        { prize: 5, odds: 43, wins_total: 423168, wins_claimed: 158578, wins_left: 264590 },
        { prize: 4, odds: 31, wins_total: 583680, wins_claimed: 216636, wins_left: 367044 },
        { prize: 2, odds: 17, wins_total: 1094400, wins_claimed: 395372, wins_left: 699028 },
        { prize: 'ticket', odds: 12, wins_total: 1532160, wins_claimed: 538176, wins_left: 993984 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/year-of-the-horse-1105
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/year-of-the-horse-1105', cost: 1, lines: [
        { prize: 800, odds: 480000, wins_total: 37, wins_claimed: 0, wins_left: 37 },
        { prize: 100, odds: 36923, wins_total: 481, wins_claimed: 0, wins_left: 481 },
        { prize: 40, odds: 2400, wins_total: 7400, wins_claimed: 0, wins_left: 7400 },
        { prize: 20, odds: 417, wins_total: 42624, wins_claimed: 0, wins_left: 42624 },
        { prize: 10, odds: 114, wins_total: 156288, wins_claimed: 1, wins_left: 156287 },
        { prize: 5, odds: 46, wins_total: 383616, wins_claimed: 0, wins_left: 383616 },
        { prize: 4, odds: 31, wins_total: 568320, wins_claimed: 0, wins_left: 568320 },
        { prize: 2, odds: 17, wins_total: 1065600, wins_claimed: 1, wins_left: 1065599 },
        { prize: 'ticket', odds: 12, wins_total: 1491840, wins_claimed: 1, wins_left: 1491839 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/power-9s-857
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/power-9s-857', cost: 1, lines: [
        { prize: 999, odds: 480000, wins_total: 54, wins_claimed: 42, wins_left: 12 },
        { prize: 100, odds: 240000, wins_total: 108, wins_claimed: 93, wins_left: 15 },
        { prize: 99, odds: 7742, wins_total: 3348, wins_claimed: 2930, wins_left: 418 },
        { prize: 40, odds: 4615, wins_total: 5616, wins_claimed: 4729, wins_left: 887 },
        { prize: 30, odds: 2824, wins_total: 9180, wins_claimed: 7814, wins_left: 1366 },
        { prize: 25, odds: 2400, wins_total: 10800, wins_claimed: 9357, wins_left: 1443 },
        { prize: 19, odds: 250, wins_total: 103680, wins_claimed: 88201, wins_left: 15479 },
        { prize: 15, odds: 250, wins_total: 103680, wins_claimed: 88664, wins_left: 15016 },
        { prize: 9, odds: 83, wins_total: 311040, wins_claimed: 257801, wins_left: 53239 },
        { prize: 5, odds: 52, wins_total: 497664, wins_claimed: 422542, wins_left: 75122 },
        { prize: 2, odds: 16, wins_total: 1658880, wins_claimed: 1388469, wins_left: 270411 },
        { prize: 'ticket', odds: 10, wins_total: 2592000, wins_claimed: 2142910, wins_left: 449090 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/hit-$50-848
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/hit-$50-848', cost: 1, lines: [
        { prize: 50, odds: 400, wins_total: 69600, wins_claimed: 55869, wins_left: 13731 },
        { prize: 20, odds: 417, wins_total: 66816, wins_claimed: 55170, wins_left: 11646 },
        { prize: 10, odds: 139, wins_total: 200448, wins_claimed: 165024, wins_left: 35424 },
        { prize: 5, odds: 63, wins_total: 445440, wins_claimed: 365560, wins_left: 79880 },
        { prize: 3, odds: 43, wins_total: 645888, wins_claimed: 525619, wins_left: 120269 },
        { prize: 2, odds: 17, wins_total: 1648128, wins_claimed: 1332350, wins_left: 315778 },
        { prize: 'ticket', odds: 10, wins_total: 2784000, wins_claimed: 2220442, wins_left: 563558 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/california-lucky-for-life-800
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/california-lucky-for-life-800', cost: 1, lines: [
        { prize: 650000, odds: 6000000, wins_total: 16, wins_claimed: 10, wins_left: 6 },
        { prize: 1000, odds: 750000, wins_total: 128, wins_claimed: 91, wins_left: 37 },
        { prize: 100, odds: 12000, wins_total: 8000, wins_claimed: 5938, wins_left: 2062 },
        { prize: 40, odds: 6667, wins_total: 14400, wins_claimed: 10915, wins_left: 3485 },
        { prize: 20, odds: 500, wins_total: 192000, wins_claimed: 141837, wins_left: 50163 },
        { prize: 10, odds: 100, wins_total: 960000, wins_claimed: 703323, wins_left: 256677 },
        { prize: 5, odds: 59, wins_total: 1632000, wins_claimed: 1197290, wins_left: 434710 },
        { prize: 3, odds: 34, wins_total: 2784000, wins_claimed: 2010100, wins_left: 773900 },
        { prize: 2, odds: 16, wins_total: 6144000, wins_claimed: 4294206, wins_left: 1849794 },
        { prize: 'ticket', odds: 10, wins_total: 9600000, wins_claimed: 6755449, wins_left: 2844551 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/10x-the-money-862
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/10x-the-money-862', cost: 3, lines: [
        { prize: 25000, odds: 600000, wins_total: 30, wins_claimed: 11, wins_left: 19 },
        { prize: 1000, odds: 60000, wins_total: 300, wins_claimed: 99, wins_left: 201 },
        { prize: 200, odds: 12000, wins_total: 1500, wins_claimed: 652, wins_left: 848 },
        { prize: 100, odds: 732, wins_total: 24600, wins_claimed: 10754, wins_left: 13846 },
        { prize: 50, odds: 218, wins_total: 82500, wins_claimed: 36333, wins_left: 46167 },
        { prize: 20, odds: 71, wins_total: 252000, wins_claimed: 111616, wins_left: 140384 },
        { prize: 10, odds: 36, wins_total: 504000, wins_claimed: 220814, wins_left: 283186 },
        { prize: 6, odds: 20, wins_total: 900000, wins_claimed: 391889, wins_left: 508111 },
        { prize: 5, odds: 13, wins_total: 1440000, wins_claimed: 624932, wins_left: 815068 },
        { prize: 'ticket', odds: 10, wins_total: 1800000, wins_claimed: 753228, wins_left: 1046772 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-crossword-1107
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-crossword-1107', cost: 3, lines: [
        { prize: 20000, odds: 1200000, wins_total: 15, wins_claimed: 0, wins_left: 15 },
        { prize: 3000, odds: 600000, wins_total: 30, wins_claimed: 0, wins_left: 30 },
        { prize: 1000, odds: 200000, wins_total: 90, wins_claimed: 0, wins_left: 90 },
        { prize: 300, odds: 60000, wins_total: 300, wins_claimed: 0, wins_left: 300 },
        { prize: 150, odds: 10909, wins_total: 1650, wins_claimed: 0, wins_left: 1650 },
        { prize: 100, odds: 1463, wins_total: 12300, wins_claimed: 0, wins_left: 12300 },
        { prize: 60, odds: 1091, wins_total: 16500, wins_claimed: 0, wins_left: 16500 },
        { prize: 50, odds: 364, wins_total: 49500, wins_claimed: 0, wins_left: 49500 },
        { prize: 30, odds: 300, wins_total: 60000, wins_claimed: 0, wins_left: 60000 },
        { prize: 20, odds: 167, wins_total: 108000, wins_claimed: 0, wins_left: 108000 },
        { prize: 15, odds: 125, wins_total: 144000, wins_claimed: 1, wins_left: 143999 },
        { prize: 12, odds: 100, wins_total: 180000, wins_claimed: 1, wins_left: 179999 },
        { prize: 10, odds: 63, wins_total: 288000, wins_claimed: 1, wins_left: 287999 },
        { prize: 5, odds: 12, wins_total: 1476000, wins_claimed: 1, wins_left: 1475999 },
        { prize: 4, odds: 9, wins_total: 1980000, wins_claimed: 2, wins_left: 1979998 },
        { prize: 'ticket', odds: 17, wins_total: 1080000, wins_claimed: 1, wins_left: 1079999 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-crossword-836
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-crossword-836', cost: 3, lines: [
        { prize: 20000, odds: 1200000, wins_total: 30, wins_claimed: 23, wins_left: 7 },
        { prize: 3000, odds: 600000, wins_total: 60, wins_claimed: 42, wins_left: 18 },
        { prize: 1000, odds: 200000, wins_total: 180, wins_claimed: 125, wins_left: 55 },
        { prize: 300, odds: 60000, wins_total: 600, wins_claimed: 427, wins_left: 173 },
        { prize: 150, odds: 10909, wins_total: 3300, wins_claimed: 2391, wins_left: 909 },
        { prize: 100, odds: 1463, wins_total: 24600, wins_claimed: 17802, wins_left: 6798 },
        { prize: 60, odds: 1091, wins_total: 33000, wins_claimed: 23848, wins_left: 9152 },
        { prize: 50, odds: 364, wins_total: 99000, wins_claimed: 71697, wins_left: 27303 },
        { prize: 30, odds: 300, wins_total: 120000, wins_claimed: 86506, wins_left: 33494 },
        { prize: 20, odds: 167, wins_total: 216000, wins_claimed: 156201, wins_left: 59799 },
        { prize: 15, odds: 125, wins_total: 288000, wins_claimed: 207005, wins_left: 80995 },
        { prize: 12, odds: 100, wins_total: 360000, wins_claimed: 255991, wins_left: 104009 },
        { prize: 10, odds: 63, wins_total: 576000, wins_claimed: 415518, wins_left: 160482 },
        { prize: 5, odds: 12, wins_total: 2952000, wins_claimed: 2103078, wins_left: 848922 },
        { prize: 4, odds: 9, wins_total: 3960000, wins_claimed: 2795685, wins_left: 1164315 },
        { prize: 'ticket', odds: 17, wins_total: 2160000, wins_claimed: 1422101, wins_left: 737899 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/5x-crossword-865
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/5x-crossword-865', cost: 3, lines: [
        { prize: 20000, odds: 1200000, wins_total: 20, wins_claimed: 6, wins_left: 14 },
        { prize: 1000, odds: 80000, wins_total: 300, wins_claimed: 44, wins_left: 256 },
        { prize: 100, odds: 1200, wins_total: 20000, wins_claimed: 5175, wins_left: 14825 },
        { prize: 50, odds: 203, wins_total: 118000, wins_claimed: 30501, wins_left: 87499 },
        { prize: 20, odds: 71, wins_total: 336000, wins_claimed: 85156, wins_left: 250844 },
        { prize: 10, odds: 38, wins_total: 624000, wins_claimed: 159385, wins_left: 464615 },
        { prize: 5, odds: 12, wins_total: 1968000, wins_claimed: 497803, wins_left: 1470197 },
        { prize: 4, odds: 9, wins_total: 2640000, wins_claimed: 659736, wins_left: 1980264 },
        { prize: 'ticket', odds: 17, wins_total: 1440000, wins_claimed: 342069, wins_left: 1097931 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/bingo-boxes-859
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/bingo-boxes-859', cost: 3, lines: [
        { prize: 20000, odds: 533333, wins_total: 45, wins_claimed: 20, wins_left: 25 },
        { prize: 1000, odds: 292683, wins_total: 82, wins_claimed: 45, wins_left: 37 },
        { prize: 500, odds: 54176, wins_total: 443, wins_claimed: 221, wins_left: 222 },
        { prize: 100, odds: 1004, wins_total: 23901, wins_claimed: 11666, wins_left: 12235 },
        { prize: 50, odds: 553, wins_total: 43398, wins_claimed: 21333, wins_left: 22065 },
        { prize: 40, odds: 598, wins_total: 40153, wins_claimed: 24016, wins_left: 16137 },
        { prize: 30, odds: 315, wins_total: 76294, wins_claimed: 44613, wins_left: 31681 },
        { prize: 25, odds: 167, wins_total: 143953, wins_claimed: 61227, wins_left: 82726 },
        { prize: 20, odds: 115, wins_total: 208339, wins_claimed: 100865, wins_left: 107474 },
        { prize: 15, odds: 150, wins_total: 160353, wins_claimed: 102139, wins_left: 58214 },
        { prize: 10, odds: 111, wins_total: 216447, wins_claimed: 152047, wins_left: 64400 },
        { prize: 9, odds: 39, wins_total: 620861, wins_claimed: 287482, wins_left: 333379 },
        { prize: 5, odds: 15, wins_total: 1558230, wins_claimed: 722028, wins_left: 836202 },
        { prize: 4, odds: 12, wins_total: 2031139, wins_claimed: 961572, wins_left: 1069567 },
        { prize: 'ticket', odds: 12, wins_total: 2083200, wins_claimed: 990921, wins_left: 1092279 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/winter-crossword-1103
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/winter-crossword-1103', cost: 3, lines: [
        { prize: 20000, odds: 1200000, wins_total: 15, wins_claimed: 3, wins_left: 12 },
        { prize: 3000, odds: 600000, wins_total: 30, wins_claimed: 2, wins_left: 28 },
        { prize: 1000, odds: 200000, wins_total: 90, wins_claimed: 9, wins_left: 81 },
        { prize: 300, odds: 60000, wins_total: 300, wins_claimed: 68, wins_left: 232 },
        { prize: 150, odds: 10909, wins_total: 1650, wins_claimed: 350, wins_left: 1300 },
        { prize: 100, odds: 1463, wins_total: 12300, wins_claimed: 2555, wins_left: 9745 },
        { prize: 60, odds: 1091, wins_total: 16500, wins_claimed: 3396, wins_left: 13104 },
        { prize: 50, odds: 364, wins_total: 49500, wins_claimed: 10313, wins_left: 39187 },
        { prize: 30, odds: 300, wins_total: 60000, wins_claimed: 12311, wins_left: 47689 },
        { prize: 20, odds: 167, wins_total: 108000, wins_claimed: 21949, wins_left: 86051 },
        { prize: 15, odds: 125, wins_total: 144000, wins_claimed: 29520, wins_left: 114480 },
        { prize: 12, odds: 100, wins_total: 180000, wins_claimed: 36323, wins_left: 143677 },
        { prize: 10, odds: 63, wins_total: 288000, wins_claimed: 58638, wins_left: 229362 },
        { prize: 5, odds: 12, wins_total: 1476000, wins_claimed: 294877, wins_left: 1181123 },
        { prize: 4, odds: 9, wins_total: 1980000, wins_claimed: 390413, wins_left: 1589587 },
        { prize: 'ticket', odds: 17, wins_total: 1080000, wins_claimed: 197224, wins_left: 882776 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/10x-the-money-839
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/10x-the-money-839', cost: 3, lines: [
        { prize: 25000, odds: 600000, wins_total: 30, wins_claimed: 25, wins_left: 5 },
        { prize: 1000, odds: 24000, wins_total: 750, wins_claimed: 657, wins_left: 93 },
        { prize: 500, odds: 12000, wins_total: 1500, wins_claimed: 1319, wins_left: 181 },
        { prize: 100, odds: 632, wins_total: 28500, wins_claimed: 25053, wins_left: 3447 },
        { prize: 50, odds: 218, wins_total: 82500, wins_claimed: 72591, wins_left: 9909 },
        { prize: 20, odds: 83, wins_total: 216000, wins_claimed: 191052, wins_left: 24948 },
        { prize: 10, odds: 38, wins_total: 468000, wins_claimed: 411926, wins_left: 56074 },
        { prize: 6, odds: 21, wins_total: 864000, wins_claimed: 757870, wins_left: 106130 },
        { prize: 4, odds: 10, wins_total: 1764000, wins_claimed: 1538054, wins_left: 225946 },
        { prize: 'ticket', odds: 11, wins_total: 1620000, wins_claimed: 1376100, wins_left: 243900 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-crossword-850
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-crossword-850', cost: 3, lines: [
        { prize: 20000, odds: 1200000, wins_total: 21, wins_claimed: 12, wins_left: 9 },
        { prize: 3000, odds: 600000, wins_total: 42, wins_claimed: 23, wins_left: 19 },
        { prize: 1000, odds: 200000, wins_total: 126, wins_claimed: 66, wins_left: 60 },
        { prize: 300, odds: 60000, wins_total: 420, wins_claimed: 249, wins_left: 171 },
        { prize: 150, odds: 10909, wins_total: 2310, wins_claimed: 1360, wins_left: 950 },
        { prize: 100, odds: 1463, wins_total: 17220, wins_claimed: 10218, wins_left: 7002 },
        { prize: 60, odds: 1091, wins_total: 23100, wins_claimed: 13592, wins_left: 9508 },
        { prize: 50, odds: 364, wins_total: 69300, wins_claimed: 41094, wins_left: 28206 },
        { prize: 30, odds: 300, wins_total: 84000, wins_claimed: 49587, wins_left: 34413 },
        { prize: 20, odds: 167, wins_total: 151200, wins_claimed: 88358, wins_left: 62842 },
        { prize: 15, odds: 125, wins_total: 201600, wins_claimed: 118083, wins_left: 83517 },
        { prize: 12, odds: 100, wins_total: 252000, wins_claimed: 145694, wins_left: 106306 },
        { prize: 10, odds: 63, wins_total: 403200, wins_claimed: 237656, wins_left: 165544 },
        { prize: 5, odds: 12, wins_total: 2066400, wins_claimed: 1194326, wins_left: 872074 },
        { prize: 4, odds: 9, wins_total: 2772000, wins_claimed: 1585799, wins_left: 1186201 },
        { prize: 'ticket', odds: 17, wins_total: 1512000, wins_claimed: 808359, wins_left: 703641 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/cool-cash-853
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/cool-cash-853', cost: 3, lines: [
        { prize: 30000, odds: 600000, wins_total: 30, wins_claimed: 18, wins_left: 12 },
        { prize: 5000, odds: 120000, wins_total: 150, wins_claimed: 85, wins_left: 65 },
        { prize: 1000, odds: 30000, wins_total: 600, wins_claimed: 383, wins_left: 217 },
        { prize: 500, odds: 15000, wins_total: 1200, wins_claimed: 782, wins_left: 418 },
        { prize: 100, odds: 600, wins_total: 30000, wins_claimed: 20251, wins_left: 9749 },
        { prize: 50, odds: 251, wins_total: 71700, wins_claimed: 48128, wins_left: 23572 },
        { prize: 20, odds: 100, wins_total: 180000, wins_claimed: 118187, wins_left: 61813 },
        { prize: 15, odds: 100, wins_total: 180000, wins_claimed: 121565, wins_left: 58435 },
        { prize: 10, odds: 50, wins_total: 360000, wins_claimed: 235655, wins_left: 124345 },
        { prize: 5, odds: 8, wins_total: 2160000, wins_claimed: 1413215, wins_left: 746785 },
        { prize: 'ticket', odds: 10, wins_total: 1800000, wins_claimed: 1179461, wins_left: 620539 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/diamond-millionaire-856
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/diamond-millionaire-856', cost: 10, lines: [
        { prize: 1000000, odds: 1200000, wins_total: 18, wins_claimed: 6, wins_left: 12 },
        { prize: 20000, odds: 600000, wins_total: 36, wins_claimed: 11, wins_left: 25 },
        { prize: 10000, odds: 600000, wins_total: 36, wins_claimed: 12, wins_left: 24 },
        { prize: 5000, odds: 300000, wins_total: 72, wins_claimed: 23, wins_left: 49 },
        { prize: 1000, odds: 2857, wins_total: 7560, wins_claimed: 2419, wins_left: 5141 },
        { prize: 500, odds: 1263, wins_total: 17100, wins_claimed: 6075, wins_left: 11025 },
        { prize: 100, odds: 82, wins_total: 262800, wins_claimed: 92899, wins_left: 169901 },
        { prize: 50, odds: 100, wins_total: 216000, wins_claimed: 76677, wins_left: 139323 },
        { prize: 30, odds: 100, wins_total: 216000, wins_claimed: 75959, wins_left: 140041 },
        { prize: 20, odds: 11, wins_total: 1944000, wins_claimed: 687456, wins_left: 1256544 },
        { prize: 15, odds: 25, wins_total: 864000, wins_claimed: 301060, wins_left: 562940 },
        { prize: 10, odds: 13, wins_total: 1728000, wins_claimed: 605710, wins_left: 1122290 },
        { prize: 'ticket', odds: 17, wins_total: 1296000, wins_claimed: 445218, wins_left: 850782 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/california-lucky-for-life-833
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/california-lucky-for-life-833', cost: 10, lines: [
        { prize: 6500000, odds: 3000000, wins_total: 10, wins_claimed: 6, wins_left: 4 },
        { prize: 20000, odds: 1500000, wins_total: 20, wins_claimed: 14, wins_left: 6 },
        { prize: 10000, odds: 600000, wins_total: 50, wins_claimed: 32, wins_left: 18 },
        { prize: 5000, odds: 300000, wins_total: 100, wins_claimed: 66, wins_left: 34 },
        { prize: 1000, odds: 30000, wins_total: 1000, wins_claimed: 659, wins_left: 341 },
        { prize: 500, odds: 6667, wins_total: 4500, wins_claimed: 3052, wins_left: 1448 },
        { prize: 100, odds: 100, wins_total: 300000, wins_claimed: 203315, wins_left: 96685 },
        { prize: 50, odds: 80, wins_total: 375000, wins_claimed: 254070, wins_left: 120930 },
        { prize: 30, odds: 67, wins_total: 450000, wins_claimed: 303800, wins_left: 146200 },
        { prize: 20, odds: 14, wins_total: 2100000, wins_claimed: 1407521, wins_left: 692479 },
        { prize: 15, odds: 25, wins_total: 1200000, wins_claimed: 792298, wins_left: 407702 },
        { prize: 10, odds: 13, wins_total: 2400000, wins_claimed: 1595533, wins_left: 804467 },
        { prize: 'ticket', odds: 17, wins_total: 1800000, wins_claimed: 1167898, wins_left: 632102 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/20x-crossword-847
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/20x-crossword-847', cost: 10, lines: [
        { prize: 750000, odds: 1200000, wins_total: 22, wins_claimed: 13, wins_left: 9 },
        { prize: 10000, odds: 300000, wins_total: 88, wins_claimed: 48, wins_left: 40 },
        { prize: 4000, odds: 300000, wins_total: 88, wins_claimed: 44, wins_left: 44 },
        { prize: 2000, odds: 300000, wins_total: 88, wins_claimed: 47, wins_left: 41 },
        { prize: 1000, odds: 7059, wins_total: 3740, wins_claimed: 1920, wins_left: 1820 },
        { prize: 400, odds: 5217, wins_total: 5060, wins_claimed: 2892, wins_left: 2168 },
        { prize: 200, odds: 800, wins_total: 33000, wins_claimed: 18991, wins_left: 14009 },
        { prize: 100, odds: 67, wins_total: 396000, wins_claimed: 227765, wins_left: 168235 },
        { prize: 75, odds: 104, wins_total: 253000, wins_claimed: 145932, wins_left: 107068 },
        { prize: 60, odds: 120, wins_total: 220000, wins_claimed: 127223, wins_left: 92777 },
        { prize: 40, odds: 60, wins_total: 440000, wins_claimed: 254120, wins_left: 185880 },
        { prize: 20, odds: 13, wins_total: 2112000, wins_claimed: 1212435, wins_left: 899565 },
        { prize: 'ticket', odds: 6, wins_total: 4224000, wins_claimed: 2359250, wins_left: 1864750 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/california-gold-867
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/california-gold-867', cost: 10, lines: [
        { prize: 1000000, odds: 1200000, wins_total: 19, wins_claimed: 2, wins_left: 17 },
        { prize: 20000, odds: 1200000, wins_total: 19, wins_claimed: 2, wins_left: 17 },
        { prize: 10000, odds: 600000, wins_total: 38, wins_claimed: 3, wins_left: 35 },
        { prize: 5000, odds: 600000, wins_total: 38, wins_claimed: 5, wins_left: 33 },
        { prize: 1000, odds: 16000, wins_total: 1425, wins_claimed: 110, wins_left: 1315 },
        { prize: 500, odds: 3000, wins_total: 7600, wins_claimed: 950, wins_left: 6650 },
        { prize: 200, odds: 659, wins_total: 34580, wins_claimed: 4380, wins_left: 30200 },
        { prize: 100, odds: 93, wins_total: 245100, wins_claimed: 30826, wins_left: 214274 },
        { prize: 50, odds: 62, wins_total: 370500, wins_claimed: 46010, wins_left: 324490 },
        { prize: 25, odds: 38, wins_total: 608000, wins_claimed: 75099, wins_left: 532901 },
        { prize: 20, odds: 14, wins_total: 1596000, wins_claimed: 197900, wins_left: 1398100 },
        { prize: 15, odds: 10, wins_total: 2280000, wins_claimed: 281902, wins_left: 1998098 },
        { prize: 'ticket', odds: 17, wins_total: 1368000, wins_claimed: 164876, wins_left: 1203124 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/1000000-fortune-762
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/1000000-fortune-762', cost: 10, lines: [
        { prize: 1000000, odds: 1200000, wins_total: 25, wins_claimed: 20, wins_left: 5 },
        { prize: 20000, odds: 600000, wins_total: 50, wins_claimed: 45, wins_left: 5 },
        { prize: 10000, odds: 600000, wins_total: 50, wins_claimed: 44, wins_left: 6 },
        { prize: 5000, odds: 300000, wins_total: 100, wins_claimed: 91, wins_left: 9 },
        { prize: 1000, odds: 2857, wins_total: 10500, wins_claimed: 9680, wins_left: 820 },
        { prize: 500, odds: 1263, wins_total: 23750, wins_claimed: 22246, wins_left: 1504 },
        { prize: 100, odds: 82, wins_total: 365000, wins_claimed: 341584, wins_left: 23416 },
        { prize: 50, odds: 100, wins_total: 300000, wins_claimed: 280974, wins_left: 19026 },
        { prize: 30, odds: 100, wins_total: 300000, wins_claimed: 279963, wins_left: 20037 },
        { prize: 20, odds: 11, wins_total: 2700000, wins_claimed: 2523349, wins_left: 176651 },
        { prize: 15, odds: 25, wins_total: 1200000, wins_claimed: 1108006, wins_left: 91994 },
        { prize: 10, odds: 13, wins_total: 2400000, wins_claimed: 2228370, wins_left: 171630 },
        { prize: 'ticket', odds: 17, wins_total: 1800000, wins_claimed: 1639143, wins_left: 160857 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/smokin-hot-cash-854
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/smokin-hot-cash-854', cost: 5, lines: [
        { prize: 250000, odds: 1200000, wins_total: 17, wins_claimed: 7, wins_left: 10 },
        { prize: 10000, odds: 600000, wins_total: 34, wins_claimed: 16, wins_left: 18 },
        { prize: 1000, odds: 13333, wins_total: 1530, wins_claimed: 640, wins_left: 890 },
        { prize: 500, odds: 3000, wins_total: 6800, wins_claimed: 3155, wins_left: 3645 },
        { prize: 100, odds: 400, wins_total: 51000, wins_claimed: 23577, wins_left: 27423 },
        { prize: 50, odds: 219, wins_total: 93160, wins_claimed: 42615, wins_left: 50545 },
        { prize: 30, odds: 92, wins_total: 221000, wins_claimed: 101268, wins_left: 119732 },
        { prize: 20, odds: 40, wins_total: 510000, wins_claimed: 233944, wins_left: 276056 },
        { prize: 15, odds: 33, wins_total: 612000, wins_claimed: 280618, wins_left: 331382 },
        { prize: 10, odds: 18, wins_total: 1122000, wins_claimed: 509040, wins_left: 612960 },
        { prize: 6, odds: 16, wins_total: 1275000, wins_claimed: 573054, wins_left: 701946 },
        { prize: 'ticket', odds: 13, wins_total: 1530000, wins_claimed: 673545, wins_left: 856455 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/20x-the-money-1108
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/20x-the-money-1108', cost: 5, lines: [
        { prize: 200000, odds: 1200000, wins_total: 17, wins_claimed: 0, wins_left: 17 },
        { prize: 10000, odds: 600000, wins_total: 34, wins_claimed: 0, wins_left: 34 },
        { prize: 1000, odds: 13333, wins_total: 1530, wins_claimed: 0, wins_left: 1530 },
        { prize: 500, odds: 3000, wins_total: 6800, wins_claimed: 0, wins_left: 6800 },
        { prize: 100, odds: 400, wins_total: 51000, wins_claimed: 0, wins_left: 51000 },
        { prize: 50, odds: 185, wins_total: 110160, wins_claimed: 1, wins_left: 110159 },
        { prize: 30, odds: 92, wins_total: 221000, wins_claimed: 0, wins_left: 221000 },
        { prize: 20, odds: 40, wins_total: 510000, wins_claimed: 0, wins_left: 510000 },
        { prize: 15, odds: 33, wins_total: 612000, wins_claimed: 1, wins_left: 611999 },
        { prize: 10, odds: 18, wins_total: 1122000, wins_claimed: 0, wins_left: 1122000 },
        { prize: 6, odds: 16, wins_total: 1275000, wins_claimed: 1, wins_left: 1274999 },
        { prize: 'ticket', odds: 13, wins_total: 1530000, wins_claimed: 3, wins_left: 1529997 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/silver-7s-1104
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/silver-7s-1104', cost: 5, lines: [
        { prize: 77777, odds: 1200000, wins_total: 19, wins_claimed: 1, wins_left: 18 },
        { prize: 5000, odds: 120000, wins_total: 190, wins_claimed: 17, wins_left: 173 },
        { prize: 1000, odds: 12000, wins_total: 1900, wins_claimed: 134, wins_left: 1766 },
        { prize: 200, odds: 2000, wins_total: 11400, wins_claimed: 1625, wins_left: 9775 },
        { prize: 100, odds: 300, wins_total: 76000, wins_claimed: 10558, wins_left: 65442 },
        { prize: 50, odds: 120, wins_total: 190000, wins_claimed: 26853, wins_left: 163147 },
        { prize: 20, odds: 40, wins_total: 570000, wins_claimed: 79450, wins_left: 490550 },
        { prize: 15, odds: 27, wins_total: 855000, wins_claimed: 118492, wins_left: 736508 },
        { prize: 10, odds: 16, wins_total: 1425000, wins_claimed: 196518, wins_left: 1228482 },
        { prize: 6, odds: 16, wins_total: 1425000, wins_claimed: 193783, wins_left: 1231217 },
        { prize: 'ticket', odds: 11, wins_total: 1995000, wins_claimed: 270054, wins_left: 1724946 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/75000-poker-851
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/75000-poker-851', cost: 5, lines: [
        { prize: 75000, odds: 1200000, wins_total: 19, wins_claimed: 7, wins_left: 12 },
        { prize: 5000, odds: 120000, wins_total: 190, wins_claimed: 90, wins_left: 100 },
        { prize: 1000, odds: 20000, wins_total: 1140, wins_claimed: 548, wins_left: 592 },
        { prize: 500, odds: 3000, wins_total: 7600, wins_claimed: 4084, wins_left: 3516 },
        { prize: 100, odds: 333, wins_total: 68400, wins_claimed: 36250, wins_left: 32150 },
        { prize: 50, odds: 100, wins_total: 228000, wins_claimed: 120947, wins_left: 107053 },
        { prize: 20, odds: 40, wins_total: 570000, wins_claimed: 305308, wins_left: 264692 },
        { prize: 15, odds: 27, wins_total: 855000, wins_claimed: 454239, wins_left: 400761 },
        { prize: 10, odds: 20, wins_total: 1140000, wins_claimed: 602728, wins_left: 537272 },
        { prize: 6, odds: 16, wins_total: 1425000, wins_claimed: 749185, wins_left: 675815 },
        { prize: 'ticket', odds: 11, wins_total: 1995000, wins_claimed: 1036035, wins_left: 958965 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/mega-crossword-855
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/mega-crossword-855', cost: 5, lines: [
        { prize: 75000, odds: 1200000, wins_total: 20, wins_claimed: 11, wins_left: 9 },
        { prize: 5000, odds: 80000, wins_total: 300, wins_claimed: 189, wins_left: 111 },
        { prize: 1000, odds: 40000, wins_total: 600, wins_claimed: 368, wins_left: 232 },
        { prize: 500, odds: 2400, wins_total: 10000, wins_claimed: 6905, wins_left: 3095 },
        { prize: 100, odds: 591, wins_total: 40600, wins_claimed: 27992, wins_left: 12608 },
        { prize: 50, odds: 320, wins_total: 75000, wins_claimed: 51701, wins_left: 23299 },
        { prize: 30, odds: 200, wins_total: 120000, wins_claimed: 82516, wins_left: 37484 },
        { prize: 25, odds: 160, wins_total: 150000, wins_claimed: 103584, wins_left: 46416 },
        { prize: 20, odds: 40, wins_total: 600000, wins_claimed: 411564, wins_left: 188436 },
        { prize: 15, odds: 21, wins_total: 1140000, wins_claimed: 784410, wins_left: 355590 },
        { prize: 10, odds: 12, wins_total: 2040000, wins_claimed: 1391000, wins_left: 649000 },
        { prize: 'ticket', odds: 11, wins_total: 2100000, wins_claimed: 1367217, wins_left: 732783 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/fortune-55-844
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/fortune-55-844', cost: 5, lines: [
        { prize: 100000, odds: 1200000, wins_total: 19, wins_claimed: 11, wins_left: 8 },
        { prize: 5000, odds: 120000, wins_total: 190, wins_claimed: 147, wins_left: 43 },
        { prize: 1000, odds: 20000, wins_total: 1140, wins_claimed: 889, wins_left: 251 },
        { prize: 200, odds: 1714, wins_total: 13300, wins_claimed: 10628, wins_left: 2672 },
        { prize: 100, odds: 400, wins_total: 57000, wins_claimed: 45569, wins_left: 11431 },
        { prize: 50, odds: 120, wins_total: 190000, wins_claimed: 151107, wins_left: 38893 },
        { prize: 20, odds: 40, wins_total: 570000, wins_claimed: 455754, wins_left: 114246 },
        { prize: 15, odds: 20, wins_total: 1140000, wins_claimed: 907803, wins_left: 232197 },
        { prize: 10, odds: 18, wins_total: 1282500, wins_claimed: 1014461, wins_left: 268039 },
        { prize: 6, odds: 16, wins_total: 1425000, wins_claimed: 1124847, wins_left: 300153 },
        { prize: 'ticket', odds: 13, wins_total: 1710000, wins_claimed: 1335906, wins_left: 374094 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/california-lucky-for-life-832
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/california-lucky-for-life-832', cost: 5, lines: [
        { prize: 3250000, odds: 2400000, wins_total: 17, wins_claimed: 11, wins_left: 6 },
        { prize: 5000, odds: 1200000, wins_total: 34, wins_claimed: 24, wins_left: 10 },
        { prize: 1000, odds: 400000, wins_total: 102, wins_claimed: 68, wins_left: 34 },
        { prize: 500, odds: 12000, wins_total: 3400, wins_claimed: 2430, wins_left: 970 },
        { prize: 100, odds: 645, wins_total: 63240, wins_claimed: 45076, wins_left: 18164 },
        { prize: 40, odds: 350, wins_total: 116620, wins_claimed: 83085, wins_left: 33535 },
        { prize: 20, odds: 53, wins_total: 765000, wins_claimed: 539263, wins_left: 225737 },
        { prize: 15, odds: 40, wins_total: 1020000, wins_claimed: 723381, wins_left: 296619 },
        { prize: 10, odds: 20, wins_total: 2040000, wins_claimed: 1434580, wins_left: 605420 },
        { prize: 5, odds: 11, wins_total: 3570000, wins_claimed: 2476770, wins_left: 1093230 },
        { prize: 'ticket', odds: 10, wins_total: 4080000, wins_claimed: 2733480, wins_left: 1346520 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/win-it-all-860
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/win-it-all-860', cost: 5, lines: [
        { prize: 250000, odds: 1200000, wins_total: 16, wins_claimed: 4, wins_left: 12 },
        { prize: 10000, odds: 600000, wins_total: 32, wins_claimed: 8, wins_left: 24 },
        { prize: 1000, odds: 13333, wins_total: 1440, wins_claimed: 426, wins_left: 1014 },
        { prize: 500, odds: 3000, wins_total: 6400, wins_claimed: 1996, wins_left: 4404 },
        { prize: 100, odds: 400, wins_total: 48000, wins_claimed: 15207, wins_left: 32793 },
        { prize: 50, odds: 219, wins_total: 87680, wins_claimed: 27099, wins_left: 60581 },
        { prize: 30, odds: 92, wins_total: 208000, wins_claimed: 65809, wins_left: 142191 },
        { prize: 20, odds: 40, wins_total: 480000, wins_claimed: 148952, wins_left: 331048 },
        { prize: 15, odds: 33, wins_total: 576000, wins_claimed: 184940, wins_left: 391060 },
        { prize: 10, odds: 18, wins_total: 1056000, wins_claimed: 332719, wins_left: 723281 },
        { prize: 6, odds: 16, wins_total: 1200000, wins_claimed: 371840, wins_left: 828160 },
        { prize: 'ticket', odds: 13, wins_total: 1440000, wins_claimed: 435824, wins_left: 1004176 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/ca$h-up-866
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/ca$h-up-866', cost: 5, lines: [
        { prize: 100000, odds: 1200000, wins_total: 17, wins_claimed: 2, wins_left: 15 },
        { prize: 5000, odds: 120000, wins_total: 170, wins_claimed: 18, wins_left: 152 },
        { prize: 1000, odds: 20000, wins_total: 1020, wins_claimed: 118, wins_left: 902 },
        { prize: 200, odds: 1714, wins_total: 11900, wins_claimed: 2038, wins_left: 9862 },
        { prize: 100, odds: 400, wins_total: 51000, wins_claimed: 8669, wins_left: 42331 },
        { prize: 50, odds: 120, wins_total: 170000, wins_claimed: 28228, wins_left: 141772 },
        { prize: 20, odds: 40, wins_total: 510000, wins_claimed: 86738, wins_left: 423262 },
        { prize: 15, odds: 20, wins_total: 1020000, wins_claimed: 172557, wins_left: 847443 },
        { prize: 10, odds: 18, wins_total: 1147500, wins_claimed: 191858, wins_left: 955642 },
        { prize: 6, odds: 16, wins_total: 1275000, wins_claimed: 212280, wins_left: 1062720 },
        { prize: 'ticket', odds: 13, wins_total: 1530000, wins_claimed: 250073, wins_left: 1279927 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/big-6-bingo-863
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/big-6-bingo-863', cost: 5, lines: [
        { prize: 75000, odds: 1200000, wins_total: 19, wins_claimed: 4, wins_left: 15 },
        { prize: 5000, odds: 60000, wins_total: 380, wins_claimed: 92, wins_left: 288 },
        { prize: 1000, odds: 25000, wins_total: 912, wins_claimed: 192, wins_left: 720 },
        { prize: 500, odds: 2400, wins_total: 9500, wins_claimed: 2608, wins_left: 6892 },
        { prize: 150, odds: 1304, wins_total: 17480, wins_claimed: 4776, wins_left: 12704 },
        { prize: 100, odds: 750, wins_total: 30400, wins_claimed: 8388, wins_left: 22012 },
        { prize: 50, odds: 300, wins_total: 76000, wins_claimed: 15375, wins_left: 60625 },
        { prize: 30, odds: 250, wins_total: 91200, wins_claimed: 24730, wins_left: 66470 },
        { prize: 25, odds: 89, wins_total: 256500, wins_claimed: 65144, wins_left: 191356 },
        { prize: 20, odds: 44, wins_total: 513000, wins_claimed: 130838, wins_left: 382162 },
        { prize: 15, odds: 40, wins_total: 570000, wins_claimed: 142915, wins_left: 427085 },
        { prize: 10, odds: 19, wins_total: 1197000, wins_claimed: 299121, wins_left: 897879 },
        { prize: 6, odds: 13, wins_total: 1710000, wins_claimed: 424206, wins_left: 1285794 },
        { prize: 'ticket', odds: 10, wins_total: 2280000, wins_claimed: 563864, wins_left: 1716136 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/ruby-red-7s-840
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/ruby-red-7s-840', cost: 5, lines: [
        { prize: 77777, odds: 1200000, wins_total: 19, wins_claimed: 16, wins_left: 3 },
        { prize: 5000, odds: 120000, wins_total: 190, wins_claimed: 156, wins_left: 34 },
        { prize: 1000, odds: 12000, wins_total: 1900, wins_claimed: 1565, wins_left: 335 },
        { prize: 200, odds: 2000, wins_total: 11400, wins_claimed: 9719, wins_left: 1681 },
        { prize: 100, odds: 300, wins_total: 76000, wins_claimed: 64968, wins_left: 11032 },
        { prize: 50, odds: 120, wins_total: 190000, wins_claimed: 161960, wins_left: 28040 },
        { prize: 20, odds: 40, wins_total: 570000, wins_claimed: 485752, wins_left: 84248 },
        { prize: 15, odds: 27, wins_total: 855000, wins_claimed: 727172, wins_left: 127828 },
        { prize: 10, odds: 16, wins_total: 1425000, wins_claimed: 1209228, wins_left: 215772 },
        { prize: 6, odds: 16, wins_total: 1425000, wins_claimed: 1202566, wins_left: 222434 },
        { prize: 'ticket', odds: 11, wins_total: 1995000, wins_claimed: 1673981, wins_left: 321019 }
    ]},
    // http://www.calottery.com/play/draw-games/mega-millions
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/mega-millions', cost: 1, lines: [
        { prize: 15000000, odds: 175711536 },   // 5 + MEGA
        { prize: 2621916, odds: 3904700.8 },   // 5
        { prize: 3347, odds: 689065 },   // 4 + MEGA
        { prize: 413, odds: 15313 },   // 4
        { prize: 39, odds: 13781 },   // 3 + MEGA
        { prize: 7, odds: 306 },   // 3
        { prize: 5, odds: 844 },   // 2 + MEGA
        { prize: 1, odds: 141 },   // 1 + MEGA
        { prize: 1, odds: 75 }   // MEGA
    ]},
    // http://www.calottery.com/play/draw-games/superlotto-plus
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/superlotto-plus', cost: 1, lines: [
        { prize: 50000000, odds: 41416353 },   // 5 + MEGA
        { prize: 59300, odds: 1592936.65384615 },   // 5
        { prize: 1235, odds: 197220.728571429 },   // 4 + MEGA
        { prize: 85, odds: 7585.41263736264 },   // 4
        { prize: 51, odds: 4810.26167247387 },   // 3 + MEGA
        { prize: 9, odds: 185.010064325918 },   // 3
        { prize: 10, odds: 360.76962543554 },   // 2 + MEGA
        { prize: 2, odds: 74.0040257303672 },   // 1 + MEGA
        { prize: 1, odds: 48.6868590331363 }   // MEGA
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/chocolate-1106
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/chocolate-1106', cost: 2, lines: [
        { prize: 20000, odds: 600000, wins_total: 30, wins_claimed: 0, wins_left: 30 },
        { prize: 1000, odds: 40000, wins_total: 450, wins_claimed: 0, wins_left: 450 },
        { prize: 200, odds: 12000, wins_total: 1500, wins_claimed: 0, wins_left: 1500 },
        { prize: 100, odds: 1690, wins_total: 10650, wins_claimed: 0, wins_left: 10650 },
        { prize: 40, odds: 414, wins_total: 43500, wins_claimed: 0, wins_left: 43500 },
        { prize: 20, odds: 100, wins_total: 180000, wins_claimed: 0, wins_left: 180000 },
        { prize: 10, odds: 50, wins_total: 360000, wins_claimed: 0, wins_left: 360000 },
        { prize: 5, odds: 26, wins_total: 684000, wins_claimed: 0, wins_left: 684000 },
        { prize: 4, odds: 13, wins_total: 1440000, wins_claimed: 1, wins_left: 1439999 },
        { prize: 'ticket', odds: 13, wins_total: 1440000, wins_claimed: 2, wins_left: 1439998 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/bonus-triple-play-852
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/bonus-triple-play-852', cost: 2, lines: [
        { prize: 20000, odds: 600000, wins_total: 28, wins_claimed: 13, wins_left: 15 },
        { prize: 1000, odds: 120000, wins_total: 140, wins_claimed: 50, wins_left: 90 },
        { prize: 200, odds: 40000, wins_total: 420, wins_claimed: 245, wins_left: 175 },
        { prize: 100, odds: 8571, wins_total: 1960, wins_claimed: 1136, wins_left: 824 },
        { prize: 50, odds: 569, wins_total: 29540, wins_claimed: 16895, wins_left: 12645 },
        { prize: 20, odds: 100, wins_total: 168000, wins_claimed: 92787, wins_left: 75213 },
        { prize: 15, odds: 83, wins_total: 201600, wins_claimed: 115208, wins_left: 86392 },
        { prize: 10, odds: 38, wins_total: 436800, wins_claimed: 248203, wins_left: 188597 },
        { prize: 5, odds: 33, wins_total: 504000, wins_claimed: 282119, wins_left: 221881 },
        { prize: 3, odds: 17, wins_total: 1008000, wins_claimed: 560533, wins_left: 447467 },
        { prize: 'ticket', odds: 10, wins_total: 1680000, wins_claimed: 767839, wins_left: 912161 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/lucky-13-861
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/lucky-13-861', cost: 2, lines: [
        { prize: 13000, odds: 600000, wins_total: 24, wins_claimed: 11, wins_left: 13 },
        { prize: 1000, odds: 200000, wins_total: 72, wins_claimed: 35, wins_left: 37 },
        { prize: 500, odds: 120000, wins_total: 120, wins_claimed: 61, wins_left: 59 },
        { prize: 100, odds: 3077, wins_total: 4680, wins_claimed: 2512, wins_left: 2168 },
        { prize: 50, odds: 600, wins_total: 24000, wins_claimed: 13072, wins_left: 10928 },
        { prize: 20, odds: 80, wins_total: 180000, wins_claimed: 95592, wins_left: 84408 },
        { prize: 10, odds: 33, wins_total: 432000, wins_claimed: 228135, wins_left: 203865 },
        { prize: 6, odds: 25, wins_total: 576000, wins_claimed: 299519, wins_left: 276481 },
        { prize: 3, odds: 17, wins_total: 864000, wins_claimed: 438590, wins_left: 425410 },
        { prize: 'ticket', odds: 10, wins_total: 1440000, wins_claimed: 716342, wins_left: 723658 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/california-lucky-for-life-831
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/california-lucky-for-life-831', cost: 2, lines: [
        { prize: 1300000, odds: 6000000, wins_total: 9, wins_claimed: 7, wins_left: 2 },
        { prize: 5000, odds: 600000, wins_total: 90, wins_claimed: 74, wins_left: 16 },
        { prize: 1000, odds: 120000, wins_total: 450, wins_claimed: 372, wins_left: 78 },
        { prize: 200, odds: 20000, wins_total: 2700, wins_claimed: 2329, wins_left: 371 },
        { prize: 100, odds: 4286, wins_total: 12600, wins_claimed: 10829, wins_left: 1771 },
        { prize: 40, odds: 272, wins_total: 198450, wins_claimed: 169108, wins_left: 29342 },
        { prize: 20, odds: 100, wins_total: 540000, wins_claimed: 460854, wins_left: 79146 },
        { prize: 10, odds: 50, wins_total: 1080000, wins_claimed: 912749, wins_left: 167251 },
        { prize: 5, odds: 25, wins_total: 2160000, wins_claimed: 1798880, wins_left: 361120 },
        { prize: 3, odds: 20, wins_total: 2700000, wins_claimed: 2193734, wins_left: 506266 },
        { prize: 'ticket', odds: 10, wins_total: 5400000, wins_claimed: 4325466, wins_left: 1074534 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/merry-money-1102
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/merry-money-1102', cost: 2, lines: [
        { prize: 20000, odds: 600000, wins_total: 24, wins_claimed: 4, wins_left: 20 },
        { prize: 1000, odds: 40000, wins_total: 360, wins_claimed: 38, wins_left: 322 },
        { prize: 200, odds: 12000, wins_total: 1200, wins_claimed: 324, wins_left: 876 },
        { prize: 100, odds: 1690, wins_total: 8520, wins_claimed: 2440, wins_left: 6080 },
        { prize: 40, odds: 414, wins_total: 34800, wins_claimed: 9372, wins_left: 25428 },
        { prize: 20, odds: 100, wins_total: 144000, wins_claimed: 38771, wins_left: 105229 },
        { prize: 10, odds: 50, wins_total: 288000, wins_claimed: 75516, wins_left: 212484 },
        { prize: 5, odds: 26, wins_total: 547200, wins_claimed: 141295, wins_left: 405905 },
        { prize: 4, odds: 13, wins_total: 1152000, wins_claimed: 295312, wins_left: 856688 },
        { prize: 'ticket', odds: 13, wins_total: 1152000, wins_claimed: 282450, wins_left: 869550 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/7-11-21-864
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/7-11-21-864', cost: 2, lines: [
        { prize: 21000, odds: 600000, wins_total: 30, wins_claimed: 10, wins_left: 20 },
        { prize: 777, odds: 60000, wins_total: 300, wins_claimed: 90, wins_left: 210 },
        { prize: 77, odds: 1579, wins_total: 11400, wins_claimed: 4908, wins_left: 6492 },
        { prize: 30, odds: 469, wins_total: 38400, wins_claimed: 16472, wins_left: 21928 },
        { prize: 21, odds: 100, wins_total: 180000, wins_claimed: 76504, wins_left: 103496 },
        { prize: 11, odds: 50, wins_total: 360000, wins_claimed: 152803, wins_left: 207197 },
        { prize: 7, odds: 33, wins_total: 540000, wins_claimed: 227421, wins_left: 312579 },
        { prize: 5, odds: 31, wins_total: 576000, wins_claimed: 240260, wins_left: 335740 },
        { prize: 3, odds: 17, wins_total: 1080000, wins_claimed: 447232, wins_left: 632768 },
        { prize: 'ticket', odds: 13, wins_total: 1440000, wins_claimed: 588028, wins_left: 851972 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/5x-the-cash-849
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/5x-the-cash-849', cost: 2, lines: [
        { prize: 15000, odds: 600000, wins_total: 30, wins_claimed: 17, wins_left: 13 },
        { prize: 1000, odds: 200000, wins_total: 90, wins_claimed: 52, wins_left: 38 },
        { prize: 500, odds: 120000, wins_total: 150, wins_claimed: 95, wins_left: 55 },
        { prize: 100, odds: 3429, wins_total: 5250, wins_claimed: 3282, wins_left: 1968 },
        { prize: 50, odds: 600, wins_total: 30000, wins_claimed: 18812, wins_left: 11188 },
        { prize: 20, odds: 80, wins_total: 225000, wins_claimed: 141282, wins_left: 83718 },
        { prize: 10, odds: 33, wins_total: 540000, wins_claimed: 336215, wins_left: 203785 },
        { prize: 6, odds: 25, wins_total: 720000, wins_claimed: 442742, wins_left: 277258 },
        { prize: 3, odds: 17, wins_total: 1080000, wins_claimed: 659267, wins_left: 420733 },
        { prize: 'ticket', odds: 10, wins_total: 1800000, wins_claimed: 1070841, wins_left: 729159 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/dazzling-7s-858
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/dazzling-7s-858', cost: 2, lines: [
        { prize: 17000, odds: 600000, wins_total: 30, wins_claimed: 13, wins_left: 17 },
        { prize: 777, odds: 60000, wins_total: 300, wins_claimed: 169, wins_left: 131 },
        { prize: 77, odds: 1579, wins_total: 11400, wins_claimed: 7117, wins_left: 4283 },
        { prize: 50, odds: 496, wins_total: 36300, wins_claimed: 22536, wins_left: 13764 },
        { prize: 20, odds: 100, wins_total: 180000, wins_claimed: 110979, wins_left: 69021 },
        { prize: 10, odds: 50, wins_total: 360000, wins_claimed: 220259, wins_left: 139741 },
        { prize: 7, odds: 33, wins_total: 540000, wins_claimed: 325754, wins_left: 214246 },
        { prize: 5, odds: 31, wins_total: 576000, wins_claimed: 349369, wins_left: 226631 },
        { prize: 3, odds: 17, wins_total: 1080000, wins_claimed: 636105, wins_left: 443895 },
        { prize: 'ticket', odds: 13, wins_total: 1440000, wins_claimed: 834347, wins_left: 605653 }
    ]},
    // http://www.calottery.com/play/draw-games/powerball
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/powerball', cost: 2, lines: [
        { prize: 50000000, odds: 175223510 },   // 5 + Powerball
        { prize: 337441, odds: 5153633 },   // 5
        { prize: 0, odds: 648976 },   // 4 + Powerball
        { prize: 85, odds: 19088 },   // 4
        { prize: 125, odds: 12245 },   // 3 + Powerball
        { prize: 6, odds: 360 },   // 3
        { prize: 8, odds: 706 },   // 2 + Powerball
        { prize: 4, odds: 111 },   // 1 + Powerball
        { prize: 4, odds: 55 }   // Powerball
    ]}
];
