var date = 'Sun Sep 25 17:42:53 2016';
// Note: the difference between overall_odds and cash_odds is that cash_odds excludes 'ticket' prizes.
var games = [
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/extreme-green-1200
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/extreme-green-1200', cost: 20, lines: [
        { prize: 5000000, odds: 3007170, wins_total: 5, wins_claimed: 4, wins_left: 1 },
        { prize: 100000, odds: 751793, wins_total: 20, wins_claimed: 16, wins_left: 4 },
        { prize: 25000, odds: 59430, wins_total: 253, wins_claimed: 195, wins_left: 58 },
        { prize: 5000, odds: 23641, wins_total: 636, wins_claimed: 475, wins_left: 161 },
        { prize: 1000, odds: 2394, wins_total: 6280, wins_claimed: 4548, wins_left: 1732 },
        { prize: 500, odds: 399, wins_total: 37677, wins_claimed: 30611, wins_left: 7066 },
        { prize: 250, odds: 148, wins_total: 101451, wins_claimed: 82455, wins_left: 18996 },
        { prize: 100, odds: 52, wins_total: 288067, wins_claimed: 233629, wins_left: 54438 },
        { prize: 50, odds: 21, wins_total: 701659, wins_claimed: 567099, wins_left: 134560 },
        { prize: 25, odds: 25, wins_total: 601462, wins_claimed: 486960, wins_left: 114502 },
        { prize: 20, odds: 8, wins_total: 2004780, wins_claimed: 1613782, wins_left: 390998 },
        { prize: 'ticket', odds: 10, wins_total: 1503585, wins_claimed: 1203442, wins_left: 300143 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/deluxe-7s-playbook-1175
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/deluxe-7s-playbook-1175', cost: 20, lines: [
        { prize: 1000000, odds: 1215966, wins_total: 10, wins_claimed: 7, wins_left: 3 },
        { prize: 25000, odds: 607983, wins_total: 20, wins_claimed: 13, wins_left: 7 },
        { prize: 10000, odds: 303992, wins_total: 40, wins_claimed: 29, wins_left: 11 },
        { prize: 5000, odds: 303992, wins_total: 40, wins_claimed: 30, wins_left: 10 },
        { prize: 1000, odds: 3423, wins_total: 3552, wins_claimed: 2648, wins_left: 904 },
        { prize: 500, odds: 664, wins_total: 18300, wins_claimed: 14149, wins_left: 4151 },
        { prize: 100, odds: 49, wins_total: 247613, wins_claimed: 190261, wins_left: 57352 },
        { prize: 50, odds: 21, wins_total: 567715, wins_claimed: 436650, wins_left: 131065 },
        { prize: 40, odds: 19, wins_total: 649043, wins_claimed: 498846, wins_left: 150197 },
        { prize: 25, odds: 9, wins_total: 1296502, wins_claimed: 993102, wins_left: 303400 },
        { prize: 20, odds: 5, wins_total: 2349812, wins_claimed: 1793820, wins_left: 555992 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/100X-the-money-1230
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/100X-the-money-1230', cost: 20, lines: [
        { prize: 5000000, odds: 2994894, wins_total: 5, wins_claimed: 1, wins_left: 4 },
        { prize: 100000, odds: 748724, wins_total: 20, wins_claimed: 0, wins_left: 20 },
        { prize: 25000, odds: 58955, wins_total: 254, wins_claimed: 15, wins_left: 239 },
        { prize: 5000, odds: 23656, wins_total: 633, wins_claimed: 22, wins_left: 611 },
        { prize: 1000, odds: 2436, wins_total: 6146, wins_claimed: 195, wins_left: 5951 },
        { prize: 500, odds: 401, wins_total: 37362, wins_claimed: 7637, wins_left: 29725 },
        { prize: 250, odds: 148, wins_total: 101166, wins_claimed: 20598, wins_left: 80568 },
        { prize: 100, odds: 52, wins_total: 286911, wins_claimed: 58289, wins_left: 228622 },
        { prize: 50, odds: 21, wins_total: 698698, wins_claimed: 142773, wins_left: 555925 },
        { prize: 25, odds: 25, wins_total: 599200, wins_claimed: 121242, wins_left: 477958 },
        { prize: 20, odds: 8, wins_total: 1996596, wins_claimed: 403963, wins_left: 1592633 },
        { prize: 'ticket', odds: 10, wins_total: 1497447, wins_claimed: 299036, wins_left: 1198411 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/ultimate-riches-1160
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/ultimate-riches-1160', cost: 20, lines: [
        { prize: 5000000, odds: 3090000, wins_total: 6, wins_claimed: 5, wins_left: 1 },
        { prize: 100000, odds: 686667, wins_total: 27, wins_claimed: 20, wins_left: 7 },
        { prize: 25000, odds: 60195, wins_total: 308, wins_claimed: 247, wins_left: 61 },
        { prize: 5000, odds: 23380, wins_total: 793, wins_claimed: 611, wins_left: 182 },
        { prize: 1000, odds: 2379, wins_total: 7793, wins_claimed: 5900, wins_left: 1893 },
        { prize: 500, odds: 398, wins_total: 46603, wins_claimed: 36255, wins_left: 10348 },
        { prize: 250, odds: 147, wins_total: 125705, wins_claimed: 98057, wins_left: 27648 },
        { prize: 100, odds: 52, wins_total: 356282, wins_claimed: 278223, wins_left: 78059 },
        { prize: 50, odds: 21, wins_total: 864858, wins_claimed: 674586, wins_left: 190272 },
        { prize: 25, odds: 25, wins_total: 742284, wins_claimed: 576690, wins_left: 165594 },
        { prize: 20, odds: 8, wins_total: 2472000, wins_claimed: 1918892, wins_left: 553108 },
        { prize: 'ticket', odds: 10, wins_total: 1854000, wins_claimed: 1431251, wins_left: 422749 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/max-a-millions-1191
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/max-a-millions-1191', cost: 20, lines: [
        { prize: 5000000, odds: 3029475, wins_total: 4, wins_claimed: 3, wins_left: 1 },
        { prize: 100000, odds: 605895, wins_total: 20, wins_claimed: 16, wins_left: 4 },
        { prize: 10000, odds: 58825, wins_total: 206, wins_claimed: 161, wins_left: 45 },
        { prize: 1000, odds: 999, wins_total: 12134, wins_claimed: 9431, wins_left: 2703 },
        { prize: 500, odds: 521, wins_total: 23258, wins_claimed: 19340, wins_left: 3918 },
        { prize: 400, odds: 363, wins_total: 33389, wins_claimed: 27837, wins_left: 5552 },
        { prize: 100, odds: 46, wins_total: 262732, wins_claimed: 215063, wins_left: 47669 },
        { prize: 50, odds: 30, wins_total: 403930, wins_claimed: 328527, wins_left: 75403 },
        { prize: 40, odds: 30, wins_total: 403930, wins_claimed: 328314, wins_left: 75616 },
        { prize: 30, odds: 15, wins_total: 807860, wins_claimed: 654476, wins_left: 153384 },
        { prize: 25, odds: 15, wins_total: 807860, wins_claimed: 666393, wins_left: 141467 },
        { prize: 'ticket', odds: 10, wins_total: 1211790, wins_claimed: 990692, wins_left: 221098 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/5m-platinum-payout-1219
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/5m-platinum-payout-1219', cost: 20, lines: [
        { prize: 5000000, odds: 3013194, wins_total: 5, wins_claimed: 3, wins_left: 2 },
        { prize: 100000, odds: 602639, wins_total: 25, wins_claimed: 11, wins_left: 14 },
        { prize: 10000, odds: 59549, wins_total: 253, wins_claimed: 95, wins_left: 158 },
        { prize: 1000, odds: 1003, wins_total: 15016, wins_claimed: 5690, wins_left: 9326 },
        { prize: 500, odds: 521, wins_total: 28901, wins_claimed: 13701, wins_left: 15200 },
        { prize: 400, odds: 363, wins_total: 41460, wins_claimed: 19674, wins_left: 21786 },
        { prize: 100, odds: 46, wins_total: 326878, wins_claimed: 155179, wins_left: 171699 },
        { prize: 50, odds: 30, wins_total: 502199, wins_claimed: 235915, wins_left: 266284 },
        { prize: 40, odds: 30, wins_total: 502199, wins_claimed: 235507, wins_left: 266692 },
        { prize: 30, odds: 15, wins_total: 1004398, wins_claimed: 470856, wins_left: 533542 },
        { prize: 25, odds: 15, wins_total: 1004398, wins_claimed: 472750, wins_left: 531648 },
        { prize: 'ticket', odds: 10, wins_total: 1506597, wins_claimed: 704522, wins_left: 802075 }
    ]},
    // http://www.calottery.com/play/draw-games/superlotto-plus
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/superlotto-plus', cost: 1, lines: [
        { prize: 38000000, odds: 41416353 },   // 5 + MEGA
        { prize: 14345, odds: 1592936.65384615 },   // 5
        { prize: 1434, odds: 197220.728571429 },   // 4 + MEGA
        { prize: 84, odds: 7585.41263736264 },   // 4
        { prize: 52, odds: 4810.26167247387 },   // 3 + MEGA
        { prize: 9, odds: 185.010064325918 },   // 3
        { prize: 10, odds: 360.76962543554 },   // 2 + MEGA
        { prize: 2, odds: 74.0040257303672 },   // 1 + MEGA
        { prize: 1, odds: 48.6868590331363 }   // MEGA
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/match-3-tripler-1206
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/match-3-tripler-1206', cost: 1, lines: [
        { prize: 1000, odds: 233997, wins_total: 99, wins_claimed: 80, wins_left: 19 },
        { prize: 100, odds: 8027, wins_total: 2886, wins_claimed: 2378, wins_left: 508 },
        { prize: 50, odds: 1128, wins_total: 20546, wins_claimed: 16980, wins_left: 3566 },
        { prize: 20, odds: 250, wins_total: 92663, wins_claimed: 76054, wins_left: 16609 },
        { prize: 10, odds: 89, wins_total: 259437, wins_claimed: 211807, wins_left: 47630 },
        { prize: 5, odds: 66, wins_total: 352181, wins_claimed: 283754, wins_left: 68427 },
        { prize: 3, odds: 45, wins_total: 518890, wins_claimed: 406624, wins_left: 112266 },
        { prize: 2, odds: 17, wins_total: 1352857, wins_claimed: 1065708, wins_left: 287149 },
        { prize: 'ticket', odds: 10, wins_total: 2316575, wins_claimed: 1783554, wins_left: 533021 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/i-heart-california-1223
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/i-heart-california-1223', cost: 1, lines: [
        { prize: 1000, odds: 233725, wins_total: 129, wins_claimed: 30, wins_left: 99 },
        { prize: 100, odds: 8017, wins_total: 3761, wins_claimed: 1301, wins_left: 2460 },
        { prize: 50, odds: 1249, wins_total: 24133, wins_claimed: 8281, wins_left: 15852 },
        { prize: 20, odds: 250, wins_total: 120602, wins_claimed: 40561, wins_left: 80041 },
        { prize: 10, odds: 89, wins_total: 337714, wins_claimed: 112649, wins_left: 225065 },
        { prize: 5, odds: 66, wins_total: 458242, wins_claimed: 149664, wins_left: 308578 },
        { prize: 3, odds: 45, wins_total: 675360, wins_claimed: 215108, wins_left: 460252 },
        { prize: 2, odds: 17, wins_total: 1760778, wins_claimed: 545728, wins_left: 1215050 },
        { prize: 'ticket', odds: 10, wins_total: 3015050, wins_claimed: 905778, wins_left: 2109272 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/find-the-9s-1217
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/find-the-9s-1217', cost: 1, lines: [
        { prize: 999, odds: 480198, wins_total: 63, wins_claimed: 42, wins_left: 21 },
        { prize: 100, odds: 234516, wins_total: 129, wins_claimed: 91, wins_left: 38 },
        { prize: 99, odds: 7686, wins_total: 3936, wins_claimed: 3161, wins_left: 775 },
        { prize: 40, odds: 4620, wins_total: 6548, wins_claimed: 5005, wins_left: 1543 },
        { prize: 30, odds: 2833, wins_total: 10678, wins_claimed: 8205, wins_left: 2473 },
        { prize: 25, odds: 2401, wins_total: 12598, wins_claimed: 9644, wins_left: 2954 },
        { prize: 19, odds: 250, wins_total: 121010, wins_claimed: 94813, wins_left: 26197 },
        { prize: 15, odds: 250, wins_total: 121091, wins_claimed: 93387, wins_left: 27704 },
        { prize: 9, odds: 83, wins_total: 362983, wins_claimed: 279782, wins_left: 83201 },
        { prize: 5, odds: 52, wins_total: 580716, wins_claimed: 444541, wins_left: 136175 },
        { prize: 2, odds: 16, wins_total: 1936094, wins_claimed: 1455314, wins_left: 480780 },
        { prize: 'ticket', odds: 10, wins_total: 3025250, wins_claimed: 2250560, wins_left: 774690 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/lucky-spot-1213
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/lucky-spot-1213', cost: 1, lines: [
        { prize: 1000, odds: 475529, wins_total: 60, wins_claimed: 39, wins_left: 21 },
        { prize: 100, odds: 12049, wins_total: 2368, wins_claimed: 1765, wins_left: 603 },
        { prize: 40, odds: 1607, wins_total: 17758, wins_claimed: 12955, wins_left: 4803 },
        { prize: 20, odds: 313, wins_total: 91252, wins_claimed: 66006, wins_left: 25246 },
        { prize: 10, odds: 96, wins_total: 296796, wins_claimed: 216675, wins_left: 80121 },
        { prize: 5, odds: 52, wins_total: 548010, wins_claimed: 392630, wins_left: 155380 },
        { prize: 4, odds: 42, wins_total: 684760, wins_claimed: 474801, wins_left: 209959 },
        { prize: 2, odds: 17, wins_total: 1711575, wins_claimed: 1181829, wins_left: 529746 },
        { prize: 'ticket', odds: 10, wins_total: 2739048, wins_claimed: 1843272, wins_left: 895776 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/set-for-life-1202
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/set-for-life-1202', cost: 1, lines: [
        { prize: 600000, odds: 6001906, wins_total: 8, wins_claimed: 5, wins_left: 3 },
        { prize: 500, odds: 738696, wins_total: 65, wins_claimed: 52, wins_left: 13 },
        { prize: 100, odds: 12156, wins_total: 3950, wins_claimed: 3214, wins_left: 736 },
        { prize: 40, odds: 9181, wins_total: 5230, wins_claimed: 4237, wins_left: 993 },
        { prize: 30, odds: 6006, wins_total: 7994, wins_claimed: 6465, wins_left: 1529 },
        { prize: 20, odds: 1248, wins_total: 38469, wins_claimed: 31677, wins_left: 6792 },
        { prize: 15, odds: 625, wins_total: 76811, wins_claimed: 63280, wins_left: 13531 },
        { prize: 10, odds: 104, wins_total: 460834, wins_claimed: 373129, wins_left: 87705 },
        { prize: 5, odds: 60, wins_total: 806694, wins_claimed: 644823, wins_left: 161871 },
        { prize: 3, odds: 31, wins_total: 1536488, wins_claimed: 1206959, wins_left: 329529 },
        { prize: 2, odds: 16, wins_total: 3072976, wins_claimed: 2323868, wins_left: 749108 },
        { prize: 'ticket', odds: 11, wins_total: 4225342, wins_claimed: 3237619, wins_left: 987723 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/ea$y-ca$h-1164
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/ea$y-ca$h-1164', cost: 1, lines: [
        { prize: 1000, odds: 478764, wins_total: 90, wins_claimed: 66, wins_left: 24 },
        { prize: 100, odds: 11966, wins_total: 3601, wins_claimed: 2656, wins_left: 945 },
        { prize: 40, odds: 1613, wins_total: 26712, wins_claimed: 19886, wins_left: 6826 },
        { prize: 20, odds: 313, wins_total: 137769, wins_claimed: 101814, wins_left: 35955 },
        { prize: 10, odds: 96, wins_total: 448360, wins_claimed: 330912, wins_left: 117448 },
        { prize: 5, odds: 52, wins_total: 827510, wins_claimed: 601235, wins_left: 226275 },
        { prize: 4, odds: 42, wins_total: 1034140, wins_claimed: 748304, wins_left: 285836 },
        { prize: 2, odds: 17, wins_total: 2584755, wins_claimed: 1821511, wins_left: 763244 },
        { prize: 'ticket', odds: 10, wins_total: 4136520, wins_claimed: 2860018, wins_left: 1276502 }
    ]},
    // http://www.calottery.com/play/draw-games/mega-millions
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/mega-millions', cost: 1, lines: [
        { prize: 25000000, odds: 258890850 },   // 5 + MEGA
        { prize: 166823, odds: 18492203.57 },   // 5
        { prize: 4221, odds: 739688.14 },   // 4 + MEGA
        { prize: 224, odds: 52834.87 },   // 4
        { prize: 38, odds: 10720.12 },   // 3 + MEGA
        { prize: 5, odds: 765.72 },   // 3
        { prize: 6, odds: 472.95 },   // 2 + MEGA
        { prize: 2, odds: 56.47 },   // 1 + MEGA
        { prize: 1, odds: 21.39 }   // MEGA
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-bonus-crossword-1215
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-bonus-crossword-1215', cost: 3, lines: [
        { prize: 20000, odds: 1235813, wins_total: 23, wins_claimed: 13, wins_left: 10 },
        { prize: 3000, odds: 604760, wins_total: 47, wins_claimed: 24, wins_left: 23 },
        { prize: 1000, odds: 192052, wins_total: 148, wins_claimed: 72, wins_left: 76 },
        { prize: 300, odds: 60348, wins_total: 471, wins_claimed: 299, wins_left: 172 },
        { prize: 150, odds: 10840, wins_total: 2622, wins_claimed: 1665, wins_left: 957 },
        { prize: 100, odds: 1465, wins_total: 19408, wins_claimed: 12476, wins_left: 6932 },
        { prize: 60, odds: 1092, wins_total: 26033, wins_claimed: 16669, wins_left: 9364 },
        { prize: 50, odds: 363, wins_total: 78249, wins_claimed: 50200, wins_left: 28049 },
        { prize: 30, odds: 304, wins_total: 93608, wins_claimed: 60272, wins_left: 33336 },
        { prize: 20, odds: 166, wins_total: 171096, wins_claimed: 108324, wins_left: 62772 },
        { prize: 15, odds: 125, wins_total: 226993, wins_claimed: 143746, wins_left: 83247 },
        { prize: 12, odds: 100, wins_total: 283444, wins_claimed: 177547, wins_left: 105897 },
        { prize: 10, odds: 62, wins_total: 456591, wins_claimed: 289489, wins_left: 167102 },
        { prize: 5, odds: 12, wins_total: 2331140, wins_claimed: 1457318, wins_left: 873822 },
        { prize: 4, odds: 9, wins_total: 3122679, wins_claimed: 1932104, wins_left: 1190575 },
        { prize: 'ticket', odds: 17, wins_total: 1705422, wins_claimed: 984493, wins_left: 720929 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/quick-win-bingo-1210
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/quick-win-bingo-1210', cost: 3, lines: [
        { prize: 20000, odds: 618000, wins_total: 44, wins_claimed: 31, wins_left: 13 },
        { prize: 1000, odds: 292387, wins_total: 93, wins_claimed: 66, wins_left: 27 },
        { prize: 500, odds: 60427, wins_total: 450, wins_claimed: 372, wins_left: 78 },
        { prize: 100, odds: 1083, wins_total: 25118, wins_claimed: 20182, wins_left: 4936 },
        { prize: 50, odds: 597, wins_total: 45569, wins_claimed: 36435, wins_left: 9134 },
        { prize: 40, odds: 599, wins_total: 45408, wins_claimed: 36751, wins_left: 8657 },
        { prize: 30, odds: 315, wins_total: 86240, wins_claimed: 69199, wins_left: 17041 },
        { prize: 25, odds: 194, wins_total: 140344, wins_claimed: 115704, wins_left: 24640 },
        { prize: 20, odds: 125, wins_total: 217848, wins_claimed: 171410, wins_left: 46438 },
        { prize: 15, odds: 125, wins_total: 217483, wins_claimed: 177872, wins_left: 39611 },
        { prize: 10, odds: 83, wins_total: 325992, wins_claimed: 247584, wins_left: 78408 },
        { prize: 9, odds: 45, wins_total: 598277, wins_claimed: 490977, wins_left: 107300 },
        { prize: 5, odds: 17, wins_total: 1576618, wins_claimed: 1234093, wins_left: 342525 },
        { prize: 4, odds: 13, wins_total: 2120923, wins_claimed: 1645676, wins_left: 475247 },
        { prize: 'ticket', odds: 13, wins_total: 2175360, wins_claimed: 1680088, wins_left: 495272 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/loteria-1199
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/loteria-1199', cost: 3, lines: [
        { prize: 30000, odds: 607006, wins_total: 47, wins_claimed: 41, wins_left: 6 },
        { prize: 3000, odds: 116923, wins_total: 244, wins_claimed: 205, wins_left: 39 },
        { prize: 300, odds: 7980, wins_total: 3575, wins_claimed: 3326, wins_left: 249 },
        { prize: 75, odds: 631, wins_total: 45199, wins_claimed: 43327, wins_left: 1872 },
        { prize: 50, odds: 414, wins_total: 68960, wins_claimed: 64869, wins_left: 4091 },
        { prize: 25, odds: 203, wins_total: 140263, wins_claimed: 133581, wins_left: 6682 },
        { prize: 20, odds: 100, wins_total: 285293, wins_claimed: 267191, wins_left: 18102 },
        { prize: 15, odds: 100, wins_total: 285267, wins_claimed: 270528, wins_left: 14739 },
        { prize: 10, odds: 31, wins_total: 912767, wins_claimed: 845992, wins_left: 66775 },
        { prize: 5, odds: 9, wins_total: 3024525, wins_claimed: 2774231, wins_left: 250294 },
        { prize: 'ticket', odds: 10, wins_total: 2852930, wins_claimed: 2581378, wins_left: 271552 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/word-games-1224
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/word-games-1224', cost: 3, lines: [
        { prize: 30000, odds: 603015, wins_total: 33, wins_claimed: 13, wins_left: 20 },
        { prize: 3000, odds: 117056, wins_total: 170, wins_claimed: 45, wins_left: 125 },
        { prize: 300, odds: 10025, wins_total: 1985, wins_claimed: 1060, wins_left: 925 },
        { prize: 75, odds: 662, wins_total: 30065, wins_claimed: 15793, wins_left: 14272 },
        { prize: 50, odds: 415, wins_total: 47970, wins_claimed: 24710, wins_left: 23260 },
        { prize: 25, odds: 203, wins_total: 97866, wins_claimed: 50735, wins_left: 47131 },
        { prize: 20, odds: 100, wins_total: 198995, wins_claimed: 102691, wins_left: 96304 },
        { prize: 15, odds: 100, wins_total: 198995, wins_claimed: 102778, wins_left: 96217 },
        { prize: 10, odds: 31, wins_total: 636887, wins_claimed: 329234, wins_left: 307653 },
        { prize: 5, odds: 9, wins_total: 2109141, wins_claimed: 1066860, wins_left: 1042281 },
        { prize: 'ticket', odds: 10, wins_total: 1989950, wins_claimed: 994436, wins_left: 995514 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/5x-crossword-1208
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/5x-crossword-1208', cost: 3, lines: [
        { prize: 20000, odds: 1210882, wins_total: 28, wins_claimed: 17, wins_left: 11 },
        { prize: 1000, odds: 80725, wins_total: 420, wins_claimed: 258, wins_left: 162 },
        { prize: 100, odds: 1202, wins_total: 28207, wins_claimed: 21390, wins_left: 6817 },
        { prize: 50, odds: 203, wins_total: 166791, wins_claimed: 126022, wins_left: 40769 },
        { prize: 20, odds: 71, wins_total: 474644, wins_claimed: 352238, wins_left: 122406 },
        { prize: 10, odds: 38, wins_total: 881761, wins_claimed: 659716, wins_left: 222045 },
        { prize: 5, odds: 12, wins_total: 2780395, wins_claimed: 2064911, wins_left: 715484 },
        { prize: 4, odds: 9, wins_total: 3728767, wins_claimed: 2732815, wins_left: 995952 },
        { prize: 'ticket', odds: 17, wins_total: 2034282, wins_claimed: 1417225, wins_left: 617057 }
    ]},
    // http://www.calottery.com/play/draw-games/fantasy-5
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/fantasy-5', cost: 1, lines: [
        { prize: 160000, odds: 575757 },   // Matched 5 of 5 numbers
        { prize: 265, odds: 3386.80588235294 },   // Matched 4 of 5 Numbers
        { prize: 12, odds: 102.630481283422 },   // Matched 3 of 5 Numbers
        { prize: 'ticket', odds: 9.62160762032086 }   // Matched 2 of 5 Numbers
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/20X-the-money-1228
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/20X-the-money-1228', cost: 5, lines: [
        { prize: 200000, odds: 1203552, wins_total: 20, wins_claimed: 2, wins_left: 18 },
        { prize: 10000, odds: 601776, wins_total: 40, wins_claimed: 1, wins_left: 39 },
        { prize: 1000, odds: 13373, wins_total: 1800, wins_claimed: 62, wins_left: 1738 },
        { prize: 500, odds: 3017, wins_total: 7978, wins_claimed: 1929, wins_left: 6049 },
        { prize: 100, odds: 400, wins_total: 60204, wins_claimed: 14511, wins_left: 45693 },
        { prize: 50, odds: 185, wins_total: 130016, wins_claimed: 31032, wins_left: 98984 },
        { prize: 30, odds: 92, wins_total: 260774, wins_claimed: 62317, wins_left: 198457 },
        { prize: 20, odds: 40, wins_total: 601776, wins_claimed: 142758, wins_left: 459018 },
        { prize: 15, odds: 33, wins_total: 722112, wins_claimed: 170886, wins_left: 551226 },
        { prize: 10, odds: 18, wins_total: 1323936, wins_claimed: 308370, wins_left: 1015566 },
        { prize: 6, odds: 16, wins_total: 1504440, wins_claimed: 337083, wins_left: 1167357 },
        { prize: 'ticket', odds: 13, wins_total: 1805328, wins_claimed: 406889, wins_left: 1398439 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/win-it-all-1225
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/win-it-all-1225', cost: 5, lines: [
        { prize: 100000, odds: 2407330, wins_total: 8, wins_claimed: 2, wins_left: 6 },
        { prize: 10000, odds: 234861, wins_total: 82, wins_claimed: 16, wins_left: 66 },
        { prize: 1000, odds: 14987, wins_total: 1285, wins_claimed: 243, wins_left: 1042 },
        { prize: 500, odds: 12112, wins_total: 1590, wins_claimed: 515, wins_left: 1075 },
        { prize: 400, odds: 3426, wins_total: 5622, wins_claimed: 1860, wins_left: 3762 },
        { prize: 200, odds: 1623, wins_total: 11866, wins_claimed: 3981, wins_left: 7885 },
        { prize: 100, odds: 600, wins_total: 32092, wins_claimed: 10677, wins_left: 21415 },
        { prize: 75, odds: 594, wins_total: 32409, wins_claimed: 10588, wins_left: 21821 },
        { prize: 50, odds: 437, wins_total: 44113, wins_claimed: 14749, wins_left: 29364 },
        { prize: 40, odds: 367, wins_total: 52478, wins_claimed: 17100, wins_left: 35378 },
        { prize: 30, odds: 198, wins_total: 97161, wins_claimed: 30845, wins_left: 66316 },
        { prize: 25, odds: 198, wins_total: 97452, wins_claimed: 30509, wins_left: 66943 },
        { prize: 20, odds: 40, wins_total: 481418, wins_claimed: 156325, wins_left: 325093 },
        { prize: 15, odds: 32, wins_total: 601989, wins_claimed: 199448, wins_left: 402541 },
        { prize: 10, odds: 21, wins_total: 902610, wins_claimed: 299314, wins_left: 603296 },
        { prize: 6, odds: 16, wins_total: 1203665, wins_claimed: 394612, wins_left: 809053 },
        { prize: 'ticket', odds: 10, wins_total: 1925864, wins_claimed: 610874, wins_left: 1314990 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/set-for-life-1204
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/set-for-life-1204', cost: 5, lines: [
        { prize: 3000000, odds: 4029817, wins_total: 7, wins_claimed: 6, wins_left: 1 },
        { prize: 5000, odds: 1007454, wins_total: 28, wins_claimed: 24, wins_left: 4 },
        { prize: 1000, odds: 397306, wins_total: 71, wins_claimed: 57, wins_left: 14 },
        { prize: 500, odds: 6011, wins_total: 4693, wins_claimed: 4119, wins_left: 574 },
        { prize: 100, odds: 299, wins_total: 94325, wins_claimed: 83314, wins_left: 11011 },
        { prize: 50, odds: 199, wins_total: 141451, wins_claimed: 124322, wins_left: 17129 },
        { prize: 30, odds: 115, wins_total: 246185, wins_claimed: 215057, wins_left: 31128 },
        { prize: 20, odds: 53, wins_total: 529022, wins_claimed: 459860, wins_left: 69162 },
        { prize: 15, odds: 40, wins_total: 705218, wins_claimed: 611957, wins_left: 93261 },
        { prize: 10, odds: 20, wins_total: 1410219, wins_claimed: 1215062, wins_left: 195157 },
        { prize: 5, odds: 13, wins_total: 2115654, wins_claimed: 1792910, wins_left: 322744 },
        { prize: 'ticket', odds: 13, wins_total: 2115654, wins_claimed: 1768893, wins_left: 346761 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/power-5s-1216
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/power-5s-1216', cost: 5, lines: [
        { prize: 555555, odds: 1510543, wins_total: 24, wins_claimed: 14, wins_left: 10 },
        { prize: 5000, odds: 594312, wins_total: 61, wins_claimed: 33, wins_left: 28 },
        { prize: 1000, odds: 59237, wins_total: 612, wins_claimed: 297, wins_left: 315 },
        { prize: 500, odds: 4011, wins_total: 9038, wins_claimed: 5192, wins_left: 3846 },
        { prize: 100, odds: 343, wins_total: 105562, wins_claimed: 60274, wins_left: 45288 },
        { prize: 50, odds: 200, wins_total: 181652, wins_claimed: 103606, wins_left: 78046 },
        { prize: 25, odds: 92, wins_total: 392785, wins_claimed: 221299, wins_left: 171486 },
        { prize: 20, odds: 40, wins_total: 906376, wins_claimed: 515717, wins_left: 390659 },
        { prize: 15, odds: 33, wins_total: 1087596, wins_claimed: 619495, wins_left: 468101 },
        { prize: 10, odds: 18, wins_total: 1993810, wins_claimed: 1128471, wins_left: 865339 },
        { prize: 5, odds: 16, wins_total: 2265815, wins_claimed: 1271147, wins_left: 994668 },
        { prize: 'ticket', odds: 13, wins_total: 2718978, wins_claimed: 1528123, wins_left: 1190855 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/hit-$500-1159
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/hit-$500-1159', cost: 5, lines: [
        { prize: 500, odds: 686, wins_total: 29294, wins_claimed: 23068, wins_left: 6226 },
        { prize: 100, odds: 401, wins_total: 50141, wins_claimed: 39557, wins_left: 10584 },
        { prize: 50, odds: 214, wins_total: 93745, wins_claimed: 73966, wins_left: 19779 },
        { prize: 30, odds: 133, wins_total: 150757, wins_claimed: 118565, wins_left: 32192 },
        { prize: 20, odds: 64, wins_total: 313907, wins_claimed: 245748, wins_left: 68159 },
        { prize: 15, odds: 40, wins_total: 502286, wins_claimed: 391472, wins_left: 110814 },
        { prize: 10, odds: 9, wins_total: 2134759, wins_claimed: 1660112, wins_left: 474647 },
        { prize: 'ticket', odds: 16, wins_total: 1255715, wins_claimed: 954761, wins_left: 300954 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/the-price-is-right-1221
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/the-price-is-right-1221', cost: 5, lines: [
        { prize: 100000, odds: 1209957, wins_total: 15, wins_claimed: 3, wins_left: 12 },
        { prize: 10000, odds: 235706, wins_total: 77, wins_claimed: 25, wins_left: 52 },
        { prize: 1000, odds: 13414, wins_total: 1353, wins_claimed: 465, wins_left: 888 },
        { prize: 400, odds: 2773, wins_total: 6545, wins_claimed: 2880, wins_left: 3665 },
        { prize: 200, odds: 1203, wins_total: 15090, wins_claimed: 6713, wins_left: 8377 },
        { prize: 100, odds: 460, wins_total: 39449, wins_claimed: 17494, wins_left: 21955 },
        { prize: 50, odds: 160, wins_total: 113413, wins_claimed: 49911, wins_left: 63502 },
        { prize: 30, odds: 120, wins_total: 151308, wins_claimed: 66816, wins_left: 84492 },
        { prize: 20, odds: 40, wins_total: 453843, wins_claimed: 198753, wins_left: 255090 },
        { prize: 15, odds: 33, wins_total: 544340, wins_claimed: 236645, wins_left: 307695 },
        { prize: 10, odds: 24, wins_total: 771341, wins_claimed: 331900, wins_left: 439441 },
        { prize: 6, odds: 16, wins_total: 1134335, wins_claimed: 474896, wins_left: 659439 },
        { prize: 'ticket', odds: 10, wins_total: 1814936, wins_claimed: 760924, wins_left: 1054012 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/mega-crossword-1226
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/mega-crossword-1226', cost: 5, lines: [
        { prize: 75000, odds: 1236000, wins_total: 20, wins_claimed: 3, wins_left: 17 },
        { prize: 5000, odds: 80260, wins_total: 308, wins_claimed: 60, wins_left: 248 },
        { prize: 1000, odds: 40458, wins_total: 611, wins_claimed: 96, wins_left: 515 },
        { prize: 500, odds: 2652, wins_total: 9323, wins_claimed: 2953, wins_left: 6370 },
        { prize: 100, odds: 591, wins_total: 41820, wins_claimed: 13297, wins_left: 28523 },
        { prize: 50, odds: 319, wins_total: 77512, wins_claimed: 24738, wins_left: 52774 },
        { prize: 30, odds: 199, wins_total: 124491, wins_claimed: 39628, wins_left: 84863 },
        { prize: 25, odds: 160, wins_total: 154314, wins_claimed: 49741, wins_left: 104573 },
        { prize: 20, odds: 40, wins_total: 618351, wins_claimed: 197299, wins_left: 421052 },
        { prize: 15, odds: 21, wins_total: 1177602, wins_claimed: 375698, wins_left: 801904 },
        { prize: 10, odds: 12, wins_total: 2095395, wins_claimed: 666469, wins_left: 1428926 },
        { prize: 'ticket', odds: 11, wins_total: 2163000, wins_claimed: 655716, wins_left: 1507284 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/double-sided-dollars-1211
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/double-sided-dollars-1211', cost: 5, lines: [
        { prize: 150000, odds: 1612235, wins_total: 15, wins_claimed: 7, wins_left: 8 },
        { prize: 10000, odds: 780114, wins_total: 31, wins_claimed: 18, wins_left: 13 },
        { prize: 1000, odds: 39580, wins_total: 611, wins_claimed: 296, wins_left: 315 },
        { prize: 500, odds: 2660, wins_total: 9090, wins_claimed: 4909, wins_left: 4181 },
        { prize: 150, odds: 1604, wins_total: 15079, wins_claimed: 8175, wins_left: 6904 },
        { prize: 100, odds: 432, wins_total: 56015, wins_claimed: 30333, wins_left: 25682 },
        { prize: 75, odds: 653, wins_total: 37028, wins_claimed: 20165, wins_left: 16863 },
        { prize: 50, odds: 142, wins_total: 169958, wins_claimed: 91515, wins_left: 78443 },
        { prize: 25, odds: 210, wins_total: 115056, wins_claimed: 61646, wins_left: 53410 },
        { prize: 20, odds: 40, wins_total: 604588, wins_claimed: 324067, wins_left: 280521 },
        { prize: 15, odds: 27, wins_total: 906882, wins_claimed: 484001, wins_left: 422881 },
        { prize: 10, odds: 16, wins_total: 1511470, wins_claimed: 801920, wins_left: 709550 },
        { prize: 5, odds: 27, wins_total: 906882, wins_claimed: 467716, wins_left: 439166 },
        { prize: 'ticket', odds: 11, wins_total: 2116058, wins_claimed: 1092733, wins_left: 1023325 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/superstar-crossword-1190
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/superstar-crossword-1190', cost: 5, lines: [
        { prize: 75000, odds: 1234476, wins_total: 21, wins_claimed: 19, wins_left: 2 },
        { prize: 5000, odds: 118374, wins_total: 219, wins_claimed: 208, wins_left: 11 },
        { prize: 500, odds: 3432, wins_total: 7554, wins_claimed: 7141, wins_left: 413 },
        { prize: 250, odds: 2089, wins_total: 12407, wins_claimed: 11713, wins_left: 694 },
        { prize: 100, odds: 398, wins_total: 65189, wins_claimed: 61618, wins_left: 3571 },
        { prize: 50, odds: 217, wins_total: 119359, wins_claimed: 111705, wins_left: 7654 },
        { prize: 30, odds: 184, wins_total: 140556, wins_claimed: 132577, wins_left: 7979 },
        { prize: 20, odds: 40, wins_total: 648100, wins_claimed: 607329, wins_left: 40771 },
        { prize: 15, odds: 17, wins_total: 1554628, wins_claimed: 1453473, wins_left: 101155 },
        { prize: 10, odds: 17, wins_total: 1556658, wins_claimed: 1443421, wins_left: 113237 },
        { prize: 'ticket', odds: 10, wins_total: 2592400, wins_claimed: 2281404, wins_left: 310996 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/poker-night-1218
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/poker-night-1218', cost: 5, lines: [
        { prize: 75000, odds: 1201971, wins_total: 19, wins_claimed: 6, wins_left: 13 },
        { prize: 5000, odds: 116518, wins_total: 196, wins_claimed: 87, wins_left: 109 },
        { prize: 1000, odds: 19893, wins_total: 1148, wins_claimed: 524, wins_left: 624 },
        { prize: 500, odds: 2995, wins_total: 7625, wins_claimed: 4507, wins_left: 3118 },
        { prize: 100, odds: 333, wins_total: 68526, wins_claimed: 40298, wins_left: 28228 },
        { prize: 50, odds: 100, wins_total: 228428, wins_claimed: 133604, wins_left: 94824 },
        { prize: 20, odds: 40, wins_total: 570936, wins_claimed: 336467, wins_left: 234469 },
        { prize: 15, odds: 27, wins_total: 856404, wins_claimed: 500332, wins_left: 356072 },
        { prize: 10, odds: 20, wins_total: 1141872, wins_claimed: 663103, wins_left: 478769 },
        { prize: 6, odds: 16, wins_total: 1427340, wins_claimed: 823519, wins_left: 603821 },
        { prize: 'ticket', odds: 11, wins_total: 1998276, wins_claimed: 1138824, wins_left: 859452 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/extra-play-1167
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/extra-play-1167', cost: 5, lines: [
        { prize: 150000, odds: 1628017, wins_total: 23, wins_claimed: 19, wins_left: 4 },
        { prize: 10000, odds: 814009, wins_total: 46, wins_claimed: 40, wins_left: 6 },
        { prize: 1000, odds: 39624, wins_total: 945, wins_claimed: 851, wins_left: 94 },
        { prize: 500, odds: 2670, wins_total: 14022, wins_claimed: 13035, wins_left: 987 },
        { prize: 150, odds: 1603, wins_total: 23359, wins_claimed: 21847, wins_left: 1512 },
        { prize: 100, odds: 433, wins_total: 86453, wins_claimed: 80416, wins_left: 6037 },
        { prize: 75, odds: 652, wins_total: 57434, wins_claimed: 53526, wins_left: 3908 },
        { prize: 50, odds: 142, wins_total: 263161, wins_claimed: 244398, wins_left: 18763 },
        { prize: 25, odds: 210, wins_total: 178079, wins_claimed: 164356, wins_left: 13723 },
        { prize: 20, odds: 40, wins_total: 936110, wins_claimed: 867552, wins_left: 68558 },
        { prize: 15, odds: 27, wins_total: 1404165, wins_claimed: 1295545, wins_left: 108620 },
        { prize: 10, odds: 16, wins_total: 2340275, wins_claimed: 2145193, wins_left: 195082 },
        { prize: 5, odds: 27, wins_total: 1404165, wins_claimed: 1250228, wins_left: 153937 },
        { prize: 'ticket', odds: 11, wins_total: 3276385, wins_claimed: 2923823, wins_left: 352562 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/winning-777-1209
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/winning-777-1209', cost: 5, lines: [
        { prize: 77777, odds: 1210378, wins_total: 25, wins_claimed: 17, wins_left: 8 },
        { prize: 5000, odds: 117285, wins_total: 258, wins_claimed: 192, wins_left: 66 },
        { prize: 1000, odds: 12113, wins_total: 2498, wins_claimed: 1845, wins_left: 653 },
        { prize: 200, odds: 1998, wins_total: 15145, wins_claimed: 12727, wins_left: 2418 },
        { prize: 100, odds: 301, wins_total: 100653, wins_claimed: 84044, wins_left: 16609 },
        { prize: 50, odds: 120, wins_total: 252163, wins_claimed: 210021, wins_left: 42142 },
        { prize: 20, odds: 40, wins_total: 756567, wins_claimed: 635402, wins_left: 121165 },
        { prize: 15, odds: 27, wins_total: 1134729, wins_claimed: 947649, wins_left: 187080 },
        { prize: 10, odds: 16, wins_total: 1891053, wins_claimed: 1563957, wins_left: 327096 },
        { prize: 6, odds: 16, wins_total: 1891215, wins_claimed: 1538914, wins_left: 352301 },
        { prize: 'ticket', odds: 11, wins_total: 2647701, wins_claimed: 2106091, wins_left: 541610 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/the-price-is-right-1220
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/the-price-is-right-1220', cost: 2, lines: [
        { prize: 20000, odds: 1207560, wins_total: 15, wins_claimed: 9, wins_left: 6 },
        { prize: 1000, odds: 116861, wins_total: 155, wins_claimed: 61, wins_left: 94 },
        { prize: 200, odds: 14982, wins_total: 1209, wins_claimed: 723, wins_left: 486 },
        { prize: 100, odds: 1998, wins_total: 9067, wins_claimed: 5418, wins_left: 3649 },
        { prize: 50, odds: 501, wins_total: 36188, wins_claimed: 21493, wins_left: 14695 },
        { prize: 25, odds: 104, wins_total: 174900, wins_claimed: 102925, wins_left: 71975 },
        { prize: 15, odds: 83, wins_total: 217369, wins_claimed: 126668, wins_left: 90701 },
        { prize: 10, odds: 71, wins_total: 253593, wins_claimed: 147033, wins_left: 106560 },
        { prize: 5, odds: 31, wins_total: 579579, wins_claimed: 329419, wins_left: 250160 },
        { prize: 3, odds: 14, wins_total: 1267962, wins_claimed: 709326, wins_left: 558636 },
        { prize: 'ticket', odds: 11, wins_total: 1630206, wins_claimed: 890248, wins_left: 739958 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/10X-the-money-1227
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/10X-the-money-1227', cost: 2, lines: [
        { prize: 20000, odds: 611518, wins_total: 34, wins_claimed: 4, wins_left: 30 },
        { prize: 1000, odds: 125251, wins_total: 166, wins_claimed: 8, wins_left: 158 },
        { prize: 500, odds: 14926, wins_total: 1393, wins_claimed: 423, wins_left: 970 },
        { prize: 100, odds: 3628, wins_total: 5731, wins_claimed: 1767, wins_left: 3964 },
        { prize: 50, odds: 600, wins_total: 34655, wins_claimed: 10731, wins_left: 23924 },
        { prize: 20, odds: 80, wins_total: 259871, wins_claimed: 79034, wins_left: 180837 },
        { prize: 10, odds: 33, wins_total: 623878, wins_claimed: 188071, wins_left: 435807 },
        { prize: 5, odds: 25, wins_total: 831500, wins_claimed: 245899, wins_left: 585601 },
        { prize: 3, odds: 17, wins_total: 1247496, wins_claimed: 360360, wins_left: 887136 },
        { prize: 'ticket', odds: 10, wins_total: 2079160, wins_claimed: 588649, wins_left: 1490511 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/suits-1207
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/suits-1207', cost: 2, lines: [
        { prize: 20000, odds: 616527, wins_total: 33, wins_claimed: 26, wins_left: 7 },
        { prize: 1000, odds: 120387, wins_total: 169, wins_claimed: 116, wins_left: 53 },
        { prize: 200, odds: 39893, wins_total: 510, wins_claimed: 403, wins_left: 107 },
        { prize: 100, odds: 8617, wins_total: 2361, wins_claimed: 1903, wins_left: 458 },
        { prize: 50, odds: 568, wins_total: 35804, wins_claimed: 28860, wins_left: 6944 },
        { prize: 20, odds: 100, wins_total: 203454, wins_claimed: 163430, wins_left: 40024 },
        { prize: 15, odds: 83, wins_total: 244120, wins_claimed: 194249, wins_left: 49871 },
        { prize: 10, odds: 38, wins_total: 529030, wins_claimed: 421598, wins_left: 107432 },
        { prize: 5, odds: 33, wins_total: 610438, wins_claimed: 483656, wins_left: 126782 },
        { prize: 3, odds: 17, wins_total: 1220556, wins_claimed: 953375, wins_left: 267181 },
        { prize: 'ticket', odds: 10, wins_total: 2034540, wins_claimed: 1561835, wins_left: 472705 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/2-dia-de-los-muertos-1232
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/2-dia-de-los-muertos-1232', cost: 2, lines: [
        { prize: 20000, odds: 615696, wins_total: 26, wins_claimed: 0, wins_left: 26 },
        { prize: 1000, odds: 39821, wins_total: 402, wins_claimed: 0, wins_left: 402 },
        { prize: 200, odds: 12164, wins_total: 1316, wins_claimed: 0, wins_left: 1316 },
        { prize: 100, odds: 1690, wins_total: 9475, wins_claimed: 5, wins_left: 9470 },
        { prize: 40, odds: 414, wins_total: 38698, wins_claimed: 25, wins_left: 38673 },
        { prize: 20, odds: 100, wins_total: 160081, wins_claimed: 74, wins_left: 160007 },
        { prize: 10, odds: 50, wins_total: 320162, wins_claimed: 139, wins_left: 320023 },
        { prize: 5, odds: 26, wins_total: 608519, wins_claimed: 270, wins_left: 608249 },
        { prize: 4, odds: 13, wins_total: 1280384, wins_claimed: 586, wins_left: 1279798 },
        { prize: 'ticket', odds: 13, wins_total: 1280648, wins_claimed: 549, wins_left: 1280099 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/set-for-life-1203
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/set-for-life-1203', cost: 2, lines: [
        { prize: 1200000, odds: 6033186, wins_total: 7, wins_claimed: 5, wins_left: 2 },
        { prize: 3000, odds: 586560, wins_total: 72, wins_claimed: 46, wins_left: 26 },
        { prize: 1000, odds: 118964, wins_total: 355, wins_claimed: 243, wins_left: 112 },
        { prize: 200, odds: 19977, wins_total: 2114, wins_claimed: 1615, wins_left: 499 },
        { prize: 100, odds: 3997, wins_total: 10566, wins_claimed: 8177, wins_left: 2389 },
        { prize: 40, odds: 753, wins_total: 56086, wins_claimed: 43655, wins_left: 12431 },
        { prize: 30, odds: 276, wins_total: 153067, wins_claimed: 118822, wins_left: 34245 },
        { prize: 20, odds: 100, wins_total: 422323, wins_claimed: 325173, wins_left: 97150 },
        { prize: 10, odds: 50, wins_total: 844646, wins_claimed: 646920, wins_left: 197726 },
        { prize: 5, odds: 25, wins_total: 1689292, wins_claimed: 1247167, wins_left: 442125 },
        { prize: 3, odds: 20, wins_total: 2111615, wins_claimed: 1552210, wins_left: 559405 },
        { prize: 'ticket', odds: 10, wins_total: 4223230, wins_claimed: 3050512, wins_left: 1172718 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/7-11-21-1214
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/7-11-21-1214', cost: 2, lines: [
        { prize: 21000, odds: 603427, wins_total: 30, wins_claimed: 24, wins_left: 6 },
        { prize: 777, odds: 58585, wins_total: 309, wins_claimed: 224, wins_left: 85 },
        { prize: 77, odds: 1578, wins_total: 11474, wins_claimed: 9145, wins_left: 2329 },
        { prize: 30, odds: 469, wins_total: 38605, wins_claimed: 30605, wins_left: 8000 },
        { prize: 21, odds: 100, wins_total: 181028, wins_claimed: 143549, wins_left: 37479 },
        { prize: 11, odds: 50, wins_total: 362049, wins_claimed: 287558, wins_left: 74491 },
        { prize: 7, odds: 33, wins_total: 543276, wins_claimed: 429428, wins_left: 113848 },
        { prize: 5, odds: 31, wins_total: 578924, wins_claimed: 454342, wins_left: 124582 },
        { prize: 3, odds: 17, wins_total: 1086355, wins_claimed: 846525, wins_left: 239830 },
        { prize: 'ticket', odds: 13, wins_total: 1448224, wins_claimed: 1111608, wins_left: 336616 }
    ]},
    // http://www.calottery.com/play/draw-games/powerball
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/powerball', cost: 2, lines: [
        { prize: 60000000, odds: 292201338 },   // 5 + Powerball
        { prize: 554313, odds: 11688053.52 },   // 5
        { prize: 12359, odds: 913129.18 },   // 4 + Powerball
        { prize: 280, odds: 36525.17 },   // 4
        { prize: 173, odds: 14494.11 },   // 3 + Powerball
        { prize: 6, odds: 579.76 },   // 3
        { prize: 8, odds: 701.33 },   // 2 + Powerball
        { prize: 5, odds: 91.98 },   // 1 + Powerball
        { prize: 4, odds: 38.32 }   // Powerball
    ]},

    // http://www.calottery.com/play/scratchers-games/$10-scratchers/$1000000-jackpot-1170
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/$1000000-jackpot-1170', cost: 10, lines: [
        { prize: 1000000, odds: 2424300, wins_total: 6, wins_claimed: 5, wins_left: 1 },
        { prize: 20000, odds: 1212150, wins_total: 12, wins_claimed: 11, wins_left: 1 },
        { prize: 10000, odds: 606075, wins_total: 24, wins_claimed: 21, wins_left: 3 },
        { prize: 5000, odds: 303038, wins_total: 48, wins_claimed: 43, wins_left: 5 },
        { prize: 1000, odds: 24043, wins_total: 605, wins_claimed: 566, wins_left: 39 },
        { prize: 500, odds: 3007, wins_total: 4838, wins_claimed: 4641, wins_left: 197 },
        { prize: 200, odds: 774, wins_total: 18795, wins_claimed: 18036, wins_left: 759 },
        { prize: 100, odds: 70, wins_total: 206331, wins_claimed: 198088, wins_left: 8243 },
        { prize: 50, odds: 44, wins_total: 327243, wins_claimed: 314507, wins_left: 12736 },
        { prize: 25, odds: 36, wins_total: 400114, wins_claimed: 383460, wins_left: 16654 },
        { prize: 20, odds: 17, wins_total: 872748, wins_claimed: 837346, wins_left: 35402 },
        { prize: 15, odds: 10, wins_total: 1454580, wins_claimed: 1389842, wins_left: 64738 },
        { prize: 'ticket', odds: 17, wins_total: 872748, wins_claimed: 825257, wins_left: 47491 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/50X-the-money-1229
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/50X-the-money-1229', cost: 10, lines: [
        { prize: 1000000, odds: 1206475, wins_total: 12, wins_claimed: 1, wins_left: 11 },
        { prize: 20000, odds: 603238, wins_total: 24, wins_claimed: 1, wins_left: 23 },
        { prize: 10000, odds: 603238, wins_total: 24, wins_claimed: 2, wins_left: 22 },
        { prize: 5000, odds: 301619, wins_total: 48, wins_claimed: 3, wins_left: 45 },
        { prize: 1000, odds: 2866, wins_total: 5052, wins_claimed: 199, wins_left: 4853 },
        { prize: 500, odds: 1262, wins_total: 11476, wins_claimed: 2896, wins_left: 8580 },
        { prize: 100, odds: 82, wins_total: 176256, wins_claimed: 44462, wins_left: 131794 },
        { prize: 50, odds: 100, wins_total: 144882, wins_claimed: 36616, wins_left: 108266 },
        { prize: 30, odds: 100, wins_total: 144779, wins_claimed: 36598, wins_left: 108181 },
        { prize: 20, odds: 11, wins_total: 1302975, wins_claimed: 326379, wins_left: 976596 },
        { prize: 15, odds: 25, wins_total: 579108, wins_claimed: 143266, wins_left: 435842 },
        { prize: 10, odds: 12, wins_total: 1158252, wins_claimed: 283643, wins_left: 874609 },
        { prize: 'ticket', odds: 17, wins_total: 868662, wins_claimed: 211857, wins_left: 656805 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/the-price-is-right-1222
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/the-price-is-right-1222', cost: 10, lines: [
        { prize: 1000000, odds: 2415620, wins_total: 5, wins_claimed: 3, wins_left: 2 },
        { prize: 20000, odds: 1207810, wins_total: 10, wins_claimed: 4, wins_left: 6 },
        { prize: 10000, odds: 603905, wins_total: 20, wins_claimed: 5, wins_left: 15 },
        { prize: 5000, odds: 301953, wins_total: 40, wins_claimed: 16, wins_left: 24 },
        { prize: 1000, odds: 23729, wins_total: 509, wins_claimed: 193, wins_left: 316 },
        { prize: 500, odds: 2985, wins_total: 4046, wins_claimed: 2023, wins_left: 2023 },
        { prize: 200, odds: 776, wins_total: 15572, wins_claimed: 7786, wins_left: 7786 },
        { prize: 100, odds: 73, wins_total: 165436, wins_claimed: 82056, wins_left: 83380 },
        { prize: 50, odds: 44, wins_total: 271662, wins_claimed: 135185, wins_left: 136477 },
        { prize: 25, odds: 36, wins_total: 332091, wins_claimed: 163061, wins_left: 169030 },
        { prize: 20, odds: 17, wins_total: 724686, wins_claimed: 356754, wins_left: 367932 },
        { prize: 15, odds: 10, wins_total: 1207810, wins_claimed: 589155, wins_left: 618655 },
        { prize: 'ticket', odds: 17, wins_total: 724686, wins_claimed: 351611, wins_left: 373075 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/mystery-crossword-1187
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/mystery-crossword-1187', cost: 10, lines: [
        { prize: 750000, odds: 1231348, wins_total: 46, wins_claimed: 37, wins_left: 9 },
        { prize: 10000, odds: 609054, wins_total: 93, wins_claimed: 70, wins_left: 23 },
        { prize: 4000, odds: 484120, wins_total: 117, wins_claimed: 80, wins_left: 37 },
        { prize: 2000, odds: 387959, wins_total: 146, wins_claimed: 101, wins_left: 45 },
        { prize: 1000, odds: 7953, wins_total: 7122, wins_claimed: 5018, wins_left: 2104 },
        { prize: 400, odds: 4777, wins_total: 11856, wins_claimed: 9428, wins_left: 2428 },
        { prize: 200, odds: 530, wins_total: 106939, wins_claimed: 84815, wins_left: 22124 },
        { prize: 100, odds: 49, wins_total: 1150461, wins_claimed: 915013, wins_left: 235448 },
        { prize: 60, odds: 100, wins_total: 568135, wins_claimed: 450794, wins_left: 117341 },
        { prize: 40, odds: 63, wins_total: 899510, wins_claimed: 715766, wins_left: 183744 },
        { prize: 20, odds: 13, wins_total: 4531360, wins_claimed: 3594767, wins_left: 936593 },
        { prize: 'ticket', odds: 6, wins_total: 9062720, wins_claimed: 7018260, wins_left: 2044460 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/lucky-gems-1212
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/lucky-gems-1212', cost: 10, lines: [
        { prize: 1000000, odds: 2464808, wins_total: 6, wins_claimed: 5, wins_left: 1 },
        { prize: 20000, odds: 1232404, wins_total: 12, wins_claimed: 7, wins_left: 5 },
        { prize: 10000, odds: 616202, wins_total: 24, wins_claimed: 15, wins_left: 9 },
        { prize: 5000, odds: 308101, wins_total: 48, wins_claimed: 32, wins_left: 16 },
        { prize: 1000, odds: 23892, wins_total: 619, wins_claimed: 372, wins_left: 247 },
        { prize: 500, odds: 2979, wins_total: 4965, wins_claimed: 3503, wins_left: 1462 },
        { prize: 200, odds: 772, wins_total: 19158, wins_claimed: 13454, wins_left: 5704 },
        { prize: 100, odds: 70, wins_total: 209919, wins_claimed: 148022, wins_left: 61897 },
        { prize: 50, odds: 44, wins_total: 333218, wins_claimed: 234912, wins_left: 98306 },
        { prize: 25, odds: 36, wins_total: 407341, wins_claimed: 286761, wins_left: 120580 },
        { prize: 20, odds: 17, wins_total: 887331, wins_claimed: 626264, wins_left: 261067 },
        { prize: 15, odds: 10, wins_total: 1478885, wins_claimed: 1041418, wins_left: 437467 },
        { prize: 'ticket', odds: 17, wins_total: 887331, wins_claimed: 622451, wins_left: 264880 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/set-for-life-1205
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/set-for-life-1205', cost: 10, lines: [
        { prize: 6000000, odds: 3008314, wins_total: 7, wins_claimed: 5, wins_left: 2 },
        { prize: 10000, odds: 601663, wins_total: 35, wins_claimed: 23, wins_left: 12 },
        { prize: 1000, odds: 12013, wins_total: 1753, wins_claimed: 1088, wins_left: 665 },
        { prize: 500, odds: 7569, wins_total: 2782, wins_claimed: 1872, wins_left: 910 },
        { prize: 400, odds: 3995, wins_total: 5271, wins_claimed: 3540, wins_left: 1731 },
        { prize: 100, odds: 100, wins_total: 210874, wins_claimed: 141516, wins_left: 69358 },
        { prize: 50, odds: 133, wins_total: 157882, wins_claimed: 105358, wins_left: 52524 },
        { prize: 40, odds: 120, wins_total: 175572, wins_claimed: 116838, wins_left: 58734 },
        { prize: 30, odds: 50, wins_total: 420720, wins_claimed: 280125, wins_left: 140595 },
        { prize: 20, odds: 17, wins_total: 1263492, wins_claimed: 837582, wins_left: 425910 },
        { prize: 15, odds: 10, wins_total: 2105820, wins_claimed: 1387842, wins_left: 717978 },
        { prize: 'ticket', odds: 17, wins_total: 1263492, wins_claimed: 820247, wins_left: 443245 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/silver-and-gold-1196
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/silver-and-gold-1196', cost: 10, lines: [
        { prize: 1000000, odds: 1209836, wins_total: 11, wins_claimed: 10, wins_left: 1 },
        { prize: 20000, odds: 1209836, wins_total: 11, wins_claimed: 10, wins_left: 1 },
        { prize: 10000, odds: 604918, wins_total: 22, wins_claimed: 17, wins_left: 5 },
        { prize: 5000, odds: 604918, wins_total: 22, wins_claimed: 19, wins_left: 3 },
        { prize: 1000, odds: 16034, wins_total: 830, wins_claimed: 693, wins_left: 137 },
        { prize: 500, odds: 3002, wins_total: 4433, wins_claimed: 3866, wins_left: 567 },
        { prize: 200, odds: 659, wins_total: 20205, wins_claimed: 17733, wins_left: 2472 },
        { prize: 100, odds: 93, wins_total: 143261, wins_claimed: 126728, wins_left: 16533 },
        { prize: 50, odds: 61, wins_total: 216570, wins_claimed: 191346, wins_left: 25224 },
        { prize: 25, odds: 37, wins_total: 354972, wins_claimed: 312763, wins_left: 42209 },
        { prize: 20, odds: 14, wins_total: 931325, wins_claimed: 819682, wins_left: 111643 },
        { prize: 15, odds: 10, wins_total: 1331152, wins_claimed: 1168831, wins_left: 162321 },
        { prize: 'ticket', odds: 17, wins_total: 798492, wins_claimed: 696970, wins_left: 101522 }
    ]}
];
