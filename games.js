var date = 'Sun Aug 28 15:57:35 2016';
// Note: the difference between overall_odds and cash_odds is that cash_odds excludes 'ticket' prizes.
var games = [
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/$1000000-jackpot-1170
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/$1000000-jackpot-1170', cost: 10, lines: [
        { prize: 1000000, odds: 2424300, wins_total: 6, wins_claimed: 5, wins_left: 1 },
        { prize: 20000, odds: 1212150, wins_total: 12, wins_claimed: 11, wins_left: 1 },
        { prize: 10000, odds: 606075, wins_total: 24, wins_claimed: 20, wins_left: 4 },
        { prize: 5000, odds: 303038, wins_total: 48, wins_claimed: 43, wins_left: 5 },
        { prize: 1000, odds: 24043, wins_total: 605, wins_claimed: 564, wins_left: 41 },
        { prize: 500, odds: 3007, wins_total: 4838, wins_claimed: 4633, wins_left: 205 },
        { prize: 200, odds: 774, wins_total: 18795, wins_claimed: 17993, wins_left: 802 },
        { prize: 100, odds: 70, wins_total: 206331, wins_claimed: 197739, wins_left: 8592 },
        { prize: 50, odds: 44, wins_total: 327243, wins_claimed: 313955, wins_left: 13288 },
        { prize: 25, odds: 36, wins_total: 400114, wins_claimed: 382752, wins_left: 17362 },
        { prize: 20, odds: 17, wins_total: 872748, wins_claimed: 835814, wins_left: 36934 },
        { prize: 15, odds: 10, wins_total: 1454580, wins_claimed: 1387128, wins_left: 67452 },
        { prize: 'ticket', odds: 17, wins_total: 872748, wins_claimed: 823576, wins_left: 49172 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/lucky-gems-1212
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/lucky-gems-1212', cost: 10, lines: [
        { prize: 1000000, odds: 2464808, wins_total: 6, wins_claimed: 4, wins_left: 2 },
        { prize: 20000, odds: 1232404, wins_total: 12, wins_claimed: 6, wins_left: 6 },
        { prize: 10000, odds: 616202, wins_total: 24, wins_claimed: 12, wins_left: 12 },
        { prize: 5000, odds: 308101, wins_total: 48, wins_claimed: 28, wins_left: 20 },
        { prize: 1000, odds: 23892, wins_total: 619, wins_claimed: 303, wins_left: 316 },
        { prize: 500, odds: 2979, wins_total: 4965, wins_claimed: 3207, wins_left: 1758 },
        { prize: 200, odds: 772, wins_total: 19158, wins_claimed: 12334, wins_left: 6824 },
        { prize: 100, odds: 70, wins_total: 209919, wins_claimed: 135468, wins_left: 74451 },
        { prize: 50, odds: 44, wins_total: 333218, wins_claimed: 215221, wins_left: 117997 },
        { prize: 25, odds: 36, wins_total: 407341, wins_claimed: 262373, wins_left: 144968 },
        { prize: 20, odds: 17, wins_total: 887331, wins_claimed: 573392, wins_left: 313939 },
        { prize: 15, odds: 10, wins_total: 1478885, wins_claimed: 953007, wins_left: 525878 },
        { prize: 'ticket', odds: 17, wins_total: 887331, wins_claimed: 569502, wins_left: 317829 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/set-for-life-1205
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/set-for-life-1205', cost: 10, lines: [
        { prize: 6000000, odds: 3008314, wins_total: 7, wins_claimed: 5, wins_left: 2 },
        { prize: 10000, odds: 601663, wins_total: 35, wins_claimed: 21, wins_left: 14 },
        { prize: 1000, odds: 12013, wins_total: 1753, wins_claimed: 949, wins_left: 804 },
        { prize: 500, odds: 7569, wins_total: 2782, wins_claimed: 1804, wins_left: 978 },
        { prize: 400, odds: 3995, wins_total: 5271, wins_claimed: 3401, wins_left: 1870 },
        { prize: 100, odds: 100, wins_total: 210874, wins_claimed: 136214, wins_left: 74660 },
        { prize: 50, odds: 133, wins_total: 157882, wins_claimed: 101399, wins_left: 56483 },
        { prize: 40, odds: 120, wins_total: 175572, wins_claimed: 112590, wins_left: 62982 },
        { prize: 30, odds: 50, wins_total: 420720, wins_claimed: 269702, wins_left: 151018 },
        { prize: 20, odds: 17, wins_total: 1263492, wins_claimed: 806212, wins_left: 457280 },
        { prize: 15, odds: 10, wins_total: 2105820, wins_claimed: 1335563, wins_left: 770257 },
        { prize: 'ticket', odds: 17, wins_total: 1263492, wins_claimed: 789305, wins_left: 474187 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/the-price-is-right-1222
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/the-price-is-right-1222', cost: 10, lines: [
        { prize: 1000000, odds: 2415620, wins_total: 5, wins_claimed: 3, wins_left: 2 },
        { prize: 20000, odds: 1207810, wins_total: 10, wins_claimed: 2, wins_left: 8 },
        { prize: 10000, odds: 603905, wins_total: 20, wins_claimed: 1, wins_left: 19 },
        { prize: 5000, odds: 301953, wins_total: 40, wins_claimed: 11, wins_left: 29 },
        { prize: 1000, odds: 23729, wins_total: 509, wins_claimed: 93, wins_left: 416 },
        { prize: 500, odds: 2985, wins_total: 4046, wins_claimed: 1711, wins_left: 2335 },
        { prize: 200, odds: 776, wins_total: 15572, wins_claimed: 6644, wins_left: 8928 },
        { prize: 100, odds: 73, wins_total: 165436, wins_claimed: 69739, wins_left: 95697 },
        { prize: 50, odds: 44, wins_total: 271662, wins_claimed: 114935, wins_left: 156727 },
        { prize: 25, odds: 36, wins_total: 332091, wins_claimed: 138394, wins_left: 193697 },
        { prize: 20, odds: 17, wins_total: 724686, wins_claimed: 303211, wins_left: 421475 },
        { prize: 15, odds: 10, wins_total: 1207810, wins_claimed: 500299, wins_left: 707511 },
        { prize: 'ticket', odds: 17, wins_total: 724686, wins_claimed: 298358, wins_left: 426328 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/50X-the-money-1229
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/50X-the-money-1229', cost: 10, lines: [
        { prize: 1000000, odds: 1206475, wins_total: 12, wins_claimed: 0, wins_left: 12 },
        { prize: 20000, odds: 603238, wins_total: 24, wins_claimed: 0, wins_left: 24 },
        { prize: 10000, odds: 603238, wins_total: 24, wins_claimed: 0, wins_left: 24 },
        { prize: 5000, odds: 301619, wins_total: 48, wins_claimed: 0, wins_left: 48 },
        { prize: 1000, odds: 2866, wins_total: 5052, wins_claimed: 0, wins_left: 5052 },
        { prize: 500, odds: 1262, wins_total: 11476, wins_claimed: 348, wins_left: 11128 },
        { prize: 100, odds: 82, wins_total: 176256, wins_claimed: 5324, wins_left: 170932 },
        { prize: 50, odds: 100, wins_total: 144882, wins_claimed: 4318, wins_left: 140564 },
        { prize: 30, odds: 100, wins_total: 144779, wins_claimed: 4198, wins_left: 140581 },
        { prize: 20, odds: 11, wins_total: 1302975, wins_claimed: 38257, wins_left: 1264718 },
        { prize: 15, odds: 25, wins_total: 579108, wins_claimed: 16526, wins_left: 562582 },
        { prize: 10, odds: 12, wins_total: 1158252, wins_claimed: 32678, wins_left: 1125574 },
        { prize: 'ticket', odds: 17, wins_total: 868662, wins_claimed: 24518, wins_left: 844144 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/mystery-crossword-1187
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/mystery-crossword-1187', cost: 10, lines: [
        { prize: 750000, odds: 1232500, wins_total: 40, wins_claimed: 34, wins_left: 6 },
        { prize: 10000, odds: 593976, wins_total: 83, wins_claimed: 61, wins_left: 22 },
        { prize: 4000, odds: 483333, wins_total: 102, wins_claimed: 72, wins_left: 30 },
        { prize: 2000, odds: 391270, wins_total: 126, wins_claimed: 88, wins_left: 38 },
        { prize: 1000, odds: 7949, wins_total: 6202, wins_claimed: 4421, wins_left: 1781 },
        { prize: 400, odds: 4766, wins_total: 10344, wins_claimed: 8706, wins_left: 1638 },
        { prize: 200, odds: 530, wins_total: 93098, wins_claimed: 78367, wins_left: 14731 },
        { prize: 100, odds: 49, wins_total: 1001244, wins_claimed: 844698, wins_left: 156546 },
        { prize: 60, odds: 100, wins_total: 494461, wins_claimed: 416078, wins_left: 78383 },
        { prize: 40, odds: 63, wins_total: 782990, wins_claimed: 660103, wins_left: 122887 },
        { prize: 20, odds: 13, wins_total: 3944000, wins_claimed: 3316939, wins_left: 627061 },
        { prize: 'ticket', odds: 6, wins_total: 7888000, wins_claimed: 6474284, wins_left: 1413716 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$10-scratchers/silver-and-gold-1196
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$10-scratchers/silver-and-gold-1196', cost: 10, lines: [
        { prize: 1000000, odds: 1209836, wins_total: 11, wins_claimed: 10, wins_left: 1 },
        { prize: 20000, odds: 1209836, wins_total: 11, wins_claimed: 10, wins_left: 1 },
        { prize: 10000, odds: 604918, wins_total: 22, wins_claimed: 16, wins_left: 6 },
        { prize: 5000, odds: 604918, wins_total: 22, wins_claimed: 16, wins_left: 6 },
        { prize: 1000, odds: 16034, wins_total: 830, wins_claimed: 658, wins_left: 172 },
        { prize: 500, odds: 3002, wins_total: 4433, wins_claimed: 3776, wins_left: 657 },
        { prize: 200, odds: 659, wins_total: 20205, wins_claimed: 17356, wins_left: 2849 },
        { prize: 100, odds: 93, wins_total: 143261, wins_claimed: 124071, wins_left: 19190 },
        { prize: 50, odds: 61, wins_total: 216570, wins_claimed: 187470, wins_left: 29100 },
        { prize: 25, odds: 37, wins_total: 354972, wins_claimed: 306496, wins_left: 48476 },
        { prize: 20, odds: 14, wins_total: 931325, wins_claimed: 802817, wins_left: 128508 },
        { prize: 15, odds: 10, wins_total: 1331152, wins_claimed: 1145150, wins_left: 186002 },
        { prize: 'ticket', odds: 17, wins_total: 798492, wins_claimed: 682622, wins_left: 115870 }
    ]},
    // http://www.calottery.com/play/draw-games/mega-millions
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/mega-millions', cost: 1, lines: [
        { prize: 84000000, odds: 258890850 },   // 5 + MEGA
        { prize: 330321, odds: 18492203.57 },   // 5
        { prize: 8298, odds: 739688.14 },   // 4 + MEGA
        { prize: 422, odds: 52834.87 },   // 4
        { prize: 49, odds: 10720.12 },   // 3 + MEGA
        { prize: 6, odds: 765.72 },   // 3
        { prize: 6, odds: 472.95 },   // 2 + MEGA
        { prize: 2, odds: 56.47 },   // 1 + MEGA
        { prize: 1, odds: 21.39 }   // MEGA
    ]},
    // http://www.calottery.com/play/draw-games/superlotto-plus
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/superlotto-plus', cost: 1, lines: [
        { prize: 30000000, odds: 41416353 },   // 5 + MEGA
        { prize: 41331, odds: 1592936.65384615 },   // 5
        { prize: 1589, odds: 197220.728571429 },   // 4 + MEGA
        { prize: 120, odds: 7585.41263736264 },   // 4
        { prize: 61, odds: 4810.26167247387 },   // 3 + MEGA
        { prize: 11, odds: 185.010064325918 },   // 3
        { prize: 11, odds: 360.76962543554 },   // 2 + MEGA
        { prize: 2, odds: 74.0040257303672 },   // 1 + MEGA
        { prize: 1, odds: 48.6868590331363 }   // MEGA
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/5m-platinum-payout-1219
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/5m-platinum-payout-1219', cost: 20, lines: [
        { prize: 5000000, odds: 3020085, wins_total: 4, wins_claimed: 3, wins_left: 1 },
        { prize: 100000, odds: 604017, wins_total: 20, wins_claimed: 7, wins_left: 13 },
        { prize: 10000, odds: 59509, wins_total: 203, wins_claimed: 67, wins_left: 136 },
        { prize: 1000, odds: 1003, wins_total: 12042, wins_claimed: 3714, wins_left: 8328 },
        { prize: 500, odds: 521, wins_total: 23169, wins_claimed: 12031, wins_left: 11138 },
        { prize: 400, odds: 363, wins_total: 33261, wins_claimed: 17330, wins_left: 15931 },
        { prize: 100, odds: 46, wins_total: 262111, wins_claimed: 136679, wins_left: 125432 },
        { prize: 50, odds: 30, wins_total: 402678, wins_claimed: 207840, wins_left: 194838 },
        { prize: 40, odds: 30, wins_total: 402678, wins_claimed: 207585, wins_left: 195093 },
        { prize: 30, odds: 15, wins_total: 805356, wins_claimed: 414484, wins_left: 390872 },
        { prize: 25, odds: 15, wins_total: 805356, wins_claimed: 416251, wins_left: 389105 },
        { prize: 'ticket', odds: 10, wins_total: 1208034, wins_claimed: 620260, wins_left: 587774 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/extreme-green-1200
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/extreme-green-1200', cost: 20, lines: [
        { prize: 5000000, odds: 3007170, wins_total: 5, wins_claimed: 4, wins_left: 1 },
        { prize: 100000, odds: 751793, wins_total: 20, wins_claimed: 15, wins_left: 5 },
        { prize: 25000, odds: 59430, wins_total: 253, wins_claimed: 169, wins_left: 84 },
        { prize: 5000, odds: 23641, wins_total: 636, wins_claimed: 417, wins_left: 219 },
        { prize: 1000, odds: 2394, wins_total: 6280, wins_claimed: 3987, wins_left: 2293 },
        { prize: 500, odds: 399, wins_total: 37677, wins_claimed: 28940, wins_left: 8737 },
        { prize: 250, odds: 148, wins_total: 101451, wins_claimed: 77882, wins_left: 23569 },
        { prize: 100, odds: 52, wins_total: 288067, wins_claimed: 220727, wins_left: 67340 },
        { prize: 50, odds: 21, wins_total: 701659, wins_claimed: 535985, wins_left: 165674 },
        { prize: 25, odds: 25, wins_total: 601462, wins_claimed: 460096, wins_left: 141366 },
        { prize: 20, odds: 8, wins_total: 2004780, wins_claimed: 1524828, wins_left: 479952 },
        { prize: 'ticket', odds: 10, wins_total: 1503585, wins_claimed: 1136904, wins_left: 366681 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/deluxe-7s-playbook-1175
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/deluxe-7s-playbook-1175', cost: 20, lines: [
        { prize: 1000000, odds: 1215966, wins_total: 10, wins_claimed: 7, wins_left: 3 },
        { prize: 25000, odds: 607983, wins_total: 20, wins_claimed: 13, wins_left: 7 },
        { prize: 10000, odds: 303992, wins_total: 40, wins_claimed: 29, wins_left: 11 },
        { prize: 5000, odds: 303992, wins_total: 40, wins_claimed: 30, wins_left: 10 },
        { prize: 1000, odds: 3423, wins_total: 3552, wins_claimed: 2571, wins_left: 981 },
        { prize: 500, odds: 664, wins_total: 18300, wins_claimed: 13971, wins_left: 4329 },
        { prize: 100, odds: 49, wins_total: 247613, wins_claimed: 187872, wins_left: 59741 },
        { prize: 50, odds: 21, wins_total: 567715, wins_claimed: 431304, wins_left: 136411 },
        { prize: 40, odds: 19, wins_total: 649043, wins_claimed: 492655, wins_left: 156388 },
        { prize: 25, odds: 9, wins_total: 1296502, wins_claimed: 980606, wins_left: 315896 },
        { prize: 20, odds: 5, wins_total: 2349812, wins_claimed: 1771139, wins_left: 578673 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/100X-the-money-1230
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/100X-the-money-1230', cost: 20, lines: [
        { prize: 5000000, odds: 2994894, wins_total: 5, wins_claimed: 0, wins_left: 5 },
        { prize: 100000, odds: 748724, wins_total: 20, wins_claimed: 0, wins_left: 20 },
        { prize: 25000, odds: 58955, wins_total: 254, wins_claimed: 0, wins_left: 254 },
        { prize: 5000, odds: 23656, wins_total: 633, wins_claimed: 0, wins_left: 633 },
        { prize: 1000, odds: 2436, wins_total: 6146, wins_claimed: 0, wins_left: 6146 },
        { prize: 500, odds: 401, wins_total: 37362, wins_claimed: 869, wins_left: 36493 },
        { prize: 250, odds: 148, wins_total: 101166, wins_claimed: 2391, wins_left: 98775 },
        { prize: 100, odds: 52, wins_total: 286911, wins_claimed: 6939, wins_left: 279972 },
        { prize: 50, odds: 21, wins_total: 698698, wins_claimed: 17239, wins_left: 681459 },
        { prize: 25, odds: 25, wins_total: 599200, wins_claimed: 14453, wins_left: 584747 },
        { prize: 20, odds: 8, wins_total: 1996596, wins_claimed: 48388, wins_left: 1948208 },
        { prize: 'ticket', odds: 10, wins_total: 1497447, wins_claimed: 35688, wins_left: 1461759 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/ultimate-riches-1160
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/ultimate-riches-1160', cost: 20, lines: [
        { prize: 5000000, odds: 3090000, wins_total: 6, wins_claimed: 5, wins_left: 1 },
        { prize: 100000, odds: 686667, wins_total: 27, wins_claimed: 20, wins_left: 7 },
        { prize: 25000, odds: 60195, wins_total: 308, wins_claimed: 240, wins_left: 68 },
        { prize: 5000, odds: 23380, wins_total: 793, wins_claimed: 594, wins_left: 199 },
        { prize: 1000, odds: 2379, wins_total: 7793, wins_claimed: 5769, wins_left: 2024 },
        { prize: 500, odds: 398, wins_total: 46603, wins_claimed: 35909, wins_left: 10694 },
        { prize: 250, odds: 147, wins_total: 125705, wins_claimed: 97127, wins_left: 28578 },
        { prize: 100, odds: 52, wins_total: 356282, wins_claimed: 275582, wins_left: 80700 },
        { prize: 50, odds: 21, wins_total: 864858, wins_claimed: 668352, wins_left: 196506 },
        { prize: 25, odds: 25, wins_total: 742284, wins_claimed: 571074, wins_left: 171210 },
        { prize: 20, odds: 8, wins_total: 2472000, wins_claimed: 1900684, wins_left: 571316 },
        { prize: 'ticket', odds: 10, wins_total: 1854000, wins_claimed: 1417605, wins_left: 436395 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$20-scratchers/max-a-millions-1191
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$20-scratchers/max-a-millions-1191', cost: 20, lines: [
        { prize: 5000000, odds: 3029475, wins_total: 4, wins_claimed: 3, wins_left: 1 },
        { prize: 100000, odds: 605895, wins_total: 20, wins_claimed: 15, wins_left: 5 },
        { prize: 10000, odds: 58825, wins_total: 206, wins_claimed: 152, wins_left: 54 },
        { prize: 1000, odds: 999, wins_total: 12134, wins_claimed: 8779, wins_left: 3355 },
        { prize: 500, odds: 521, wins_total: 23258, wins_claimed: 18832, wins_left: 4426 },
        { prize: 400, odds: 363, wins_total: 33389, wins_claimed: 27120, wins_left: 6269 },
        { prize: 100, odds: 46, wins_total: 262732, wins_claimed: 209050, wins_left: 53682 },
        { prize: 50, odds: 30, wins_total: 403930, wins_claimed: 319504, wins_left: 84426 },
        { prize: 40, odds: 30, wins_total: 403930, wins_claimed: 319219, wins_left: 84711 },
        { prize: 30, odds: 15, wins_total: 807860, wins_claimed: 636315, wins_left: 171545 },
        { prize: 25, odds: 15, wins_total: 807860, wins_claimed: 648072, wins_left: 159788 },
        { prize: 'ticket', odds: 10, wins_total: 1211790, wins_claimed: 963464, wins_left: 248326 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/set-for-life-1203
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/set-for-life-1203', cost: 2, lines: [
        { prize: 1200000, odds: 6033186, wins_total: 7, wins_claimed: 5, wins_left: 2 },
        { prize: 3000, odds: 586560, wins_total: 72, wins_claimed: 41, wins_left: 31 },
        { prize: 1000, odds: 118964, wins_total: 355, wins_claimed: 211, wins_left: 144 },
        { prize: 200, odds: 19977, wins_total: 2114, wins_claimed: 1520, wins_left: 594 },
        { prize: 100, odds: 3997, wins_total: 10566, wins_claimed: 7622, wins_left: 2944 },
        { prize: 40, odds: 753, wins_total: 56086, wins_claimed: 40769, wins_left: 15317 },
        { prize: 30, odds: 276, wins_total: 153067, wins_claimed: 110851, wins_left: 42216 },
        { prize: 20, odds: 100, wins_total: 422323, wins_claimed: 303168, wins_left: 119155 },
        { prize: 10, odds: 50, wins_total: 844646, wins_claimed: 603022, wins_left: 241624 },
        { prize: 5, odds: 25, wins_total: 1689292, wins_claimed: 1162659, wins_left: 526633 },
        { prize: 3, odds: 20, wins_total: 2111615, wins_claimed: 1446593, wins_left: 665022 },
        { prize: 'ticket', odds: 10, wins_total: 4223230, wins_claimed: 2841782, wins_left: 1381448 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/suits-1207
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/suits-1207', cost: 2, lines: [
        { prize: 20000, odds: 616527, wins_total: 33, wins_claimed: 24, wins_left: 9 },
        { prize: 1000, odds: 120387, wins_total: 169, wins_claimed: 111, wins_left: 58 },
        { prize: 200, odds: 39893, wins_total: 510, wins_claimed: 389, wins_left: 121 },
        { prize: 100, odds: 8617, wins_total: 2361, wins_claimed: 1842, wins_left: 519 },
        { prize: 50, odds: 568, wins_total: 35804, wins_claimed: 27885, wins_left: 7919 },
        { prize: 20, odds: 100, wins_total: 203454, wins_claimed: 157777, wins_left: 45677 },
        { prize: 15, odds: 83, wins_total: 244120, wins_claimed: 187507, wins_left: 56613 },
        { prize: 10, odds: 38, wins_total: 529030, wins_claimed: 406919, wins_left: 122111 },
        { prize: 5, odds: 33, wins_total: 610438, wins_claimed: 466686, wins_left: 143752 },
        { prize: 3, odds: 17, wins_total: 1220556, wins_claimed: 919503, wins_left: 301053 },
        { prize: 'ticket', odds: 10, wins_total: 2034540, wins_claimed: 1506480, wins_left: 528060 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/10X-the-money-1227
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/10X-the-money-1227', cost: 2, lines: [
        { prize: 20000, odds: 611518, wins_total: 34, wins_claimed: 0, wins_left: 34 },
        { prize: 1000, odds: 125251, wins_total: 166, wins_claimed: 0, wins_left: 166 },
        { prize: 500, odds: 14926, wins_total: 1393, wins_claimed: 37, wins_left: 1356 },
        { prize: 100, odds: 3628, wins_total: 5731, wins_claimed: 179, wins_left: 5552 },
        { prize: 50, odds: 600, wins_total: 34655, wins_claimed: 1121, wins_left: 33534 },
        { prize: 20, odds: 80, wins_total: 259871, wins_claimed: 7938, wins_left: 251933 },
        { prize: 10, odds: 33, wins_total: 623878, wins_claimed: 18619, wins_left: 605259 },
        { prize: 5, odds: 25, wins_total: 831500, wins_claimed: 24103, wins_left: 807397 },
        { prize: 3, odds: 17, wins_total: 1247496, wins_claimed: 34894, wins_left: 1212602 },
        { prize: 'ticket', odds: 10, wins_total: 2079160, wins_claimed: 56407, wins_left: 2022753 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/the-price-is-right-1220
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/the-price-is-right-1220', cost: 2, lines: [
        { prize: 20000, odds: 1207560, wins_total: 15, wins_claimed: 4, wins_left: 11 },
        { prize: 1000, odds: 116861, wins_total: 155, wins_claimed: 35, wins_left: 120 },
        { prize: 200, odds: 14982, wins_total: 1209, wins_claimed: 594, wins_left: 615 },
        { prize: 100, odds: 1998, wins_total: 9067, wins_claimed: 4433, wins_left: 4634 },
        { prize: 50, odds: 501, wins_total: 36188, wins_claimed: 17552, wins_left: 18636 },
        { prize: 25, odds: 104, wins_total: 174900, wins_claimed: 84052, wins_left: 90848 },
        { prize: 15, odds: 83, wins_total: 217369, wins_claimed: 103605, wins_left: 113764 },
        { prize: 10, odds: 71, wins_total: 253593, wins_claimed: 120050, wins_left: 133543 },
        { prize: 5, odds: 31, wins_total: 579579, wins_claimed: 268897, wins_left: 310682 },
        { prize: 3, odds: 14, wins_total: 1267962, wins_claimed: 576847, wins_left: 691115 },
        { prize: 'ticket', odds: 11, wins_total: 1630206, wins_claimed: 723851, wins_left: 906355 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$2-scratchers/7-11-21-1214
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$2-scratchers/7-11-21-1214', cost: 2, lines: [
        { prize: 21000, odds: 603427, wins_total: 30, wins_claimed: 19, wins_left: 11 },
        { prize: 777, odds: 58585, wins_total: 309, wins_claimed: 174, wins_left: 135 },
        { prize: 77, odds: 1578, wins_total: 11474, wins_claimed: 8403, wins_left: 3071 },
        { prize: 30, odds: 469, wins_total: 38605, wins_claimed: 28337, wins_left: 10268 },
        { prize: 21, odds: 100, wins_total: 181028, wins_claimed: 132572, wins_left: 48456 },
        { prize: 11, odds: 50, wins_total: 362049, wins_claimed: 265411, wins_left: 96638 },
        { prize: 7, odds: 33, wins_total: 543276, wins_claimed: 395968, wins_left: 147308 },
        { prize: 5, odds: 31, wins_total: 578924, wins_claimed: 418925, wins_left: 159999 },
        { prize: 3, odds: 17, wins_total: 1086355, wins_claimed: 779604, wins_left: 306751 },
        { prize: 'ticket', odds: 13, wins_total: 1448224, wins_claimed: 1023525, wins_left: 424699 }
    ]},
    // http://www.calottery.com/play/draw-games/powerball
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/powerball', cost: 2, lines: [
        { prize: 154000000, odds: 292201338 },   // 5 + Powerball
        { prize: 675933, odds: 11688053.52 },   // 5
        { prize: 37776, odds: 913129.18 },   // 4 + Powerball
        { prize: 393, odds: 36525.17 },   // 4
        { prize: 254, odds: 14494.11 },   // 3 + Powerball
        { prize: 8, odds: 579.76 },   // 3
        { prize: 9, odds: 701.33 },   // 2 + Powerball
        { prize: 5, odds: 91.98 },   // 1 + Powerball
        { prize: 4, odds: 38.32 }   // Powerball
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/ea$y-ca$h-1164
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/ea$y-ca$h-1164', cost: 1, lines: [
        { prize: 1000, odds: 478764, wins_total: 90, wins_claimed: 66, wins_left: 24 },
        { prize: 100, odds: 11966, wins_total: 3601, wins_claimed: 2614, wins_left: 987 },
        { prize: 40, odds: 1613, wins_total: 26712, wins_claimed: 19564, wins_left: 7148 },
        { prize: 20, odds: 313, wins_total: 137769, wins_claimed: 100161, wins_left: 37608 },
        { prize: 10, odds: 96, wins_total: 448360, wins_claimed: 325354, wins_left: 123006 },
        { prize: 5, odds: 52, wins_total: 827510, wins_claimed: 591063, wins_left: 236447 },
        { prize: 4, odds: 42, wins_total: 1034140, wins_claimed: 735682, wins_left: 298458 },
        { prize: 2, odds: 17, wins_total: 2584755, wins_claimed: 1790153, wins_left: 794602 },
        { prize: 'ticket', odds: 10, wins_total: 4136520, wins_claimed: 2810593, wins_left: 1325927 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/match-3-tripler-1206
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/match-3-tripler-1206', cost: 1, lines: [
        { prize: 1000, odds: 233997, wins_total: 99, wins_claimed: 73, wins_left: 26 },
        { prize: 100, odds: 8027, wins_total: 2886, wins_claimed: 2350, wins_left: 536 },
        { prize: 50, odds: 1128, wins_total: 20546, wins_claimed: 16722, wins_left: 3824 },
        { prize: 20, odds: 250, wins_total: 92663, wins_claimed: 74877, wins_left: 17786 },
        { prize: 10, odds: 89, wins_total: 259437, wins_claimed: 208371, wins_left: 51066 },
        { prize: 5, odds: 66, wins_total: 352181, wins_claimed: 279172, wins_left: 73009 },
        { prize: 3, odds: 45, wins_total: 518890, wins_claimed: 399771, wins_left: 119119 },
        { prize: 2, odds: 17, wins_total: 1352857, wins_claimed: 1047536, wins_left: 305321 },
        { prize: 'ticket', odds: 10, wins_total: 2316575, wins_claimed: 1752738, wins_left: 563837 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/lucky-spot-1213
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/lucky-spot-1213', cost: 1, lines: [
        { prize: 1000, odds: 475529, wins_total: 60, wins_claimed: 34, wins_left: 26 },
        { prize: 100, odds: 12049, wins_total: 2368, wins_claimed: 1613, wins_left: 755 },
        { prize: 40, odds: 1607, wins_total: 17758, wins_claimed: 11796, wins_left: 5962 },
        { prize: 20, odds: 313, wins_total: 91252, wins_claimed: 60055, wins_left: 31197 },
        { prize: 10, odds: 96, wins_total: 296796, wins_claimed: 197069, wins_left: 99727 },
        { prize: 5, odds: 52, wins_total: 548010, wins_claimed: 356997, wins_left: 191013 },
        { prize: 4, odds: 42, wins_total: 684760, wins_claimed: 431316, wins_left: 253444 },
        { prize: 2, odds: 17, wins_total: 1711575, wins_claimed: 1072244, wins_left: 639331 },
        { prize: 'ticket', odds: 10, wins_total: 2739048, wins_claimed: 1670675, wins_left: 1068373 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/i-heart-california-1223
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/i-heart-california-1223', cost: 1, lines: [
        { prize: 1000, odds: 233725, wins_total: 129, wins_claimed: 2, wins_left: 127 },
        { prize: 100, odds: 8017, wins_total: 3761, wins_claimed: 742, wins_left: 3019 },
        { prize: 50, odds: 1249, wins_total: 24133, wins_claimed: 4874, wins_left: 19259 },
        { prize: 20, odds: 250, wins_total: 120602, wins_claimed: 23717, wins_left: 96885 },
        { prize: 10, odds: 89, wins_total: 337714, wins_claimed: 66066, wins_left: 271648 },
        { prize: 5, odds: 66, wins_total: 458242, wins_claimed: 87509, wins_left: 370733 },
        { prize: 3, odds: 45, wins_total: 675360, wins_claimed: 125133, wins_left: 550227 },
        { prize: 2, odds: 17, wins_total: 1760778, wins_claimed: 317520, wins_left: 1443258 },
        { prize: 'ticket', odds: 10, wins_total: 3015050, wins_claimed: 523507, wins_left: 2491543 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/find-the-9s-1217
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/find-the-9s-1217', cost: 1, lines: [
        { prize: 999, odds: 480198, wins_total: 63, wins_claimed: 25, wins_left: 38 },
        { prize: 100, odds: 234516, wins_total: 129, wins_claimed: 76, wins_left: 53 },
        { prize: 99, odds: 7686, wins_total: 3936, wins_claimed: 2667, wins_left: 1269 },
        { prize: 40, odds: 4620, wins_total: 6548, wins_claimed: 4232, wins_left: 2316 },
        { prize: 30, odds: 2833, wins_total: 10678, wins_claimed: 6920, wins_left: 3758 },
        { prize: 25, odds: 2401, wins_total: 12598, wins_claimed: 8022, wins_left: 4576 },
        { prize: 19, odds: 250, wins_total: 121010, wins_claimed: 79323, wins_left: 41687 },
        { prize: 15, odds: 250, wins_total: 121091, wins_claimed: 78163, wins_left: 42928 },
        { prize: 9, odds: 83, wins_total: 362983, wins_claimed: 234450, wins_left: 128533 },
        { prize: 5, odds: 52, wins_total: 580716, wins_claimed: 371958, wins_left: 208758 },
        { prize: 2, odds: 16, wins_total: 1936094, wins_claimed: 1217200, wins_left: 718894 },
        { prize: 'ticket', odds: 10, wins_total: 3025250, wins_claimed: 1881022, wins_left: 1144228 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$1-scratchers/set-for-life-1202
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$1-scratchers/set-for-life-1202', cost: 1, lines: [
        { prize: 600000, odds: 6001906, wins_total: 8, wins_claimed: 5, wins_left: 3 },
        { prize: 500, odds: 738696, wins_total: 65, wins_claimed: 51, wins_left: 14 },
        { prize: 100, odds: 12156, wins_total: 3950, wins_claimed: 3135, wins_left: 815 },
        { prize: 40, odds: 9181, wins_total: 5230, wins_claimed: 4110, wins_left: 1120 },
        { prize: 30, odds: 6006, wins_total: 7994, wins_claimed: 6279, wins_left: 1715 },
        { prize: 20, odds: 1248, wins_total: 38469, wins_claimed: 30731, wins_left: 7738 },
        { prize: 15, odds: 625, wins_total: 76811, wins_claimed: 61409, wins_left: 15402 },
        { prize: 10, odds: 104, wins_total: 460834, wins_claimed: 361949, wins_left: 98885 },
        { prize: 5, odds: 60, wins_total: 806694, wins_claimed: 625161, wins_left: 181533 },
        { prize: 3, odds: 31, wins_total: 1536488, wins_claimed: 1169156, wins_left: 367332 },
        { prize: 2, odds: 16, wins_total: 3072976, wins_claimed: 2250154, wins_left: 822822 },
        { prize: 'ticket', odds: 11, wins_total: 4225342, wins_claimed: 3132732, wins_left: 1092610 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/win-it-all-1225
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/win-it-all-1225', cost: 5, lines: [
        { prize: 100000, odds: 2407330, wins_total: 8, wins_claimed: 0, wins_left: 8 },
        { prize: 10000, odds: 234861, wins_total: 82, wins_claimed: 0, wins_left: 82 },
        { prize: 1000, odds: 14987, wins_total: 1285, wins_claimed: 12, wins_left: 1273 },
        { prize: 500, odds: 12112, wins_total: 1590, wins_claimed: 355, wins_left: 1235 },
        { prize: 400, odds: 3426, wins_total: 5622, wins_claimed: 1332, wins_left: 4290 },
        { prize: 200, odds: 1623, wins_total: 11866, wins_claimed: 2776, wins_left: 9090 },
        { prize: 100, odds: 600, wins_total: 32092, wins_claimed: 7510, wins_left: 24582 },
        { prize: 75, odds: 594, wins_total: 32409, wins_claimed: 7409, wins_left: 25000 },
        { prize: 50, odds: 437, wins_total: 44113, wins_claimed: 10422, wins_left: 33691 },
        { prize: 40, odds: 367, wins_total: 52478, wins_claimed: 12102, wins_left: 40376 },
        { prize: 30, odds: 198, wins_total: 97161, wins_claimed: 21732, wins_left: 75429 },
        { prize: 25, odds: 198, wins_total: 97452, wins_claimed: 21319, wins_left: 76133 },
        { prize: 20, odds: 40, wins_total: 481418, wins_claimed: 110035, wins_left: 371383 },
        { prize: 15, odds: 32, wins_total: 601989, wins_claimed: 140448, wins_left: 461541 },
        { prize: 10, odds: 21, wins_total: 902610, wins_claimed: 210286, wins_left: 692324 },
        { prize: 6, odds: 16, wins_total: 1203665, wins_claimed: 276819, wins_left: 926846 },
        { prize: 'ticket', odds: 10, wins_total: 1925864, wins_claimed: 427969, wins_left: 1497895 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/power-5s-1216
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/power-5s-1216', cost: 5, lines: [
        { prize: 555555, odds: 1510543, wins_total: 24, wins_claimed: 14, wins_left: 10 },
        { prize: 5000, odds: 594312, wins_total: 61, wins_claimed: 27, wins_left: 34 },
        { prize: 1000, odds: 59237, wins_total: 612, wins_claimed: 256, wins_left: 356 },
        { prize: 500, odds: 4011, wins_total: 9038, wins_claimed: 4809, wins_left: 4229 },
        { prize: 100, odds: 343, wins_total: 105562, wins_claimed: 55403, wins_left: 50159 },
        { prize: 50, odds: 200, wins_total: 181652, wins_claimed: 95149, wins_left: 86503 },
        { prize: 25, odds: 92, wins_total: 392785, wins_claimed: 203133, wins_left: 189652 },
        { prize: 20, odds: 40, wins_total: 906376, wins_claimed: 473413, wins_left: 432963 },
        { prize: 15, odds: 33, wins_total: 1087596, wins_claimed: 568538, wins_left: 519058 },
        { prize: 10, odds: 18, wins_total: 1993810, wins_claimed: 1035413, wins_left: 958397 },
        { prize: 5, odds: 16, wins_total: 2265815, wins_claimed: 1166080, wins_left: 1099735 },
        { prize: 'ticket', odds: 13, wins_total: 2718978, wins_claimed: 1401518, wins_left: 1317460 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/double-sided-dollars-1211
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/double-sided-dollars-1211', cost: 5, lines: [
        { prize: 150000, odds: 1612235, wins_total: 15, wins_claimed: 7, wins_left: 8 },
        { prize: 10000, odds: 780114, wins_total: 31, wins_claimed: 18, wins_left: 13 },
        { prize: 1000, odds: 39580, wins_total: 611, wins_claimed: 252, wins_left: 359 },
        { prize: 500, odds: 2660, wins_total: 9090, wins_claimed: 4550, wins_left: 4540 },
        { prize: 150, odds: 1604, wins_total: 15079, wins_claimed: 7588, wins_left: 7491 },
        { prize: 100, odds: 432, wins_total: 56015, wins_claimed: 28084, wins_left: 27931 },
        { prize: 75, odds: 653, wins_total: 37028, wins_claimed: 18687, wins_left: 18341 },
        { prize: 50, odds: 142, wins_total: 169958, wins_claimed: 84697, wins_left: 85261 },
        { prize: 25, odds: 210, wins_total: 115056, wins_claimed: 57072, wins_left: 57984 },
        { prize: 20, odds: 40, wins_total: 604588, wins_claimed: 299759, wins_left: 304829 },
        { prize: 15, odds: 27, wins_total: 906882, wins_claimed: 447588, wins_left: 459294 },
        { prize: 10, odds: 16, wins_total: 1511470, wins_claimed: 741093, wins_left: 770377 },
        { prize: 5, odds: 27, wins_total: 906882, wins_claimed: 432421, wins_left: 474461 },
        { prize: 'ticket', odds: 11, wins_total: 2116058, wins_claimed: 1010562, wins_left: 1105496 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/poker-night-1218
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/poker-night-1218', cost: 5, lines: [
        { prize: 75000, odds: 1201971, wins_total: 19, wins_claimed: 6, wins_left: 13 },
        { prize: 5000, odds: 116518, wins_total: 196, wins_claimed: 64, wins_left: 132 },
        { prize: 1000, odds: 19893, wins_total: 1148, wins_claimed: 346, wins_left: 802 },
        { prize: 500, odds: 2995, wins_total: 7625, wins_claimed: 3726, wins_left: 3899 },
        { prize: 100, odds: 333, wins_total: 68526, wins_claimed: 33316, wins_left: 35210 },
        { prize: 50, odds: 100, wins_total: 228428, wins_claimed: 110602, wins_left: 117826 },
        { prize: 20, odds: 40, wins_total: 570936, wins_claimed: 278367, wins_left: 292569 },
        { prize: 15, odds: 27, wins_total: 856404, wins_claimed: 414016, wins_left: 442388 },
        { prize: 10, odds: 20, wins_total: 1141872, wins_claimed: 548376, wins_left: 593496 },
        { prize: 6, odds: 16, wins_total: 1427340, wins_claimed: 680286, wins_left: 747054 },
        { prize: 'ticket', odds: 11, wins_total: 1998276, wins_claimed: 940662, wins_left: 1057614 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/set-for-life-1204
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/set-for-life-1204', cost: 5, lines: [
        { prize: 3000000, odds: 4029817, wins_total: 7, wins_claimed: 6, wins_left: 1 },
        { prize: 5000, odds: 1007454, wins_total: 28, wins_claimed: 20, wins_left: 8 },
        { prize: 1000, odds: 397306, wins_total: 71, wins_claimed: 53, wins_left: 18 },
        { prize: 500, odds: 6011, wins_total: 4693, wins_claimed: 3952, wins_left: 741 },
        { prize: 100, odds: 299, wins_total: 94325, wins_claimed: 80019, wins_left: 14306 },
        { prize: 50, odds: 199, wins_total: 141451, wins_claimed: 119453, wins_left: 21998 },
        { prize: 30, odds: 115, wins_total: 246185, wins_claimed: 206602, wins_left: 39583 },
        { prize: 20, odds: 53, wins_total: 529022, wins_claimed: 441404, wins_left: 87618 },
        { prize: 15, odds: 40, wins_total: 705218, wins_claimed: 587338, wins_left: 117880 },
        { prize: 10, odds: 20, wins_total: 1410219, wins_claimed: 1165649, wins_left: 244570 },
        { prize: 5, odds: 13, wins_total: 2115654, wins_claimed: 1719047, wins_left: 396607 },
        { prize: 'ticket', odds: 13, wins_total: 2115654, wins_claimed: 1695678, wins_left: 419976 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/mega-crossword-1226
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/mega-crossword-1226', cost: 5, lines: [
        { prize: 75000, odds: 1236000, wins_total: 20, wins_claimed: 2, wins_left: 18 },
        { prize: 5000, odds: 80260, wins_total: 308, wins_claimed: 13, wins_left: 295 },
        { prize: 1000, odds: 40458, wins_total: 611, wins_claimed: 16, wins_left: 595 },
        { prize: 500, odds: 2652, wins_total: 9323, wins_claimed: 1729, wins_left: 7594 },
        { prize: 100, odds: 591, wins_total: 41820, wins_claimed: 7872, wins_left: 33948 },
        { prize: 50, odds: 319, wins_total: 77512, wins_claimed: 14611, wins_left: 62901 },
        { prize: 30, odds: 199, wins_total: 124491, wins_claimed: 23381, wins_left: 101110 },
        { prize: 25, odds: 160, wins_total: 154314, wins_claimed: 29303, wins_left: 125011 },
        { prize: 20, odds: 40, wins_total: 618351, wins_claimed: 116579, wins_left: 501772 },
        { prize: 15, odds: 21, wins_total: 1177602, wins_claimed: 221248, wins_left: 956354 },
        { prize: 10, odds: 12, wins_total: 2095395, wins_claimed: 393000, wins_left: 1702395 },
        { prize: 'ticket', odds: 11, wins_total: 2163000, wins_claimed: 386391, wins_left: 1776609 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/hit-$500-1159
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/hit-$500-1159', cost: 5, lines: [
        { prize: 500, odds: 686, wins_total: 29294, wins_claimed: 22806, wins_left: 6488 },
        { prize: 100, odds: 401, wins_total: 50141, wins_claimed: 39099, wins_left: 11042 },
        { prize: 50, odds: 214, wins_total: 93745, wins_claimed: 73146, wins_left: 20599 },
        { prize: 30, odds: 133, wins_total: 150757, wins_claimed: 117241, wins_left: 33516 },
        { prize: 20, odds: 64, wins_total: 313907, wins_claimed: 243041, wins_left: 70866 },
        { prize: 15, odds: 40, wins_total: 502286, wins_claimed: 387054, wins_left: 115232 },
        { prize: 10, odds: 9, wins_total: 2134759, wins_claimed: 1641395, wins_left: 493364 },
        { prize: 'ticket', odds: 16, wins_total: 1255715, wins_claimed: 943880, wins_left: 311835 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/winning-777-1209
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/winning-777-1209', cost: 5, lines: [
        { prize: 77777, odds: 1210378, wins_total: 25, wins_claimed: 15, wins_left: 10 },
        { prize: 5000, odds: 117285, wins_total: 258, wins_claimed: 166, wins_left: 92 },
        { prize: 1000, odds: 12113, wins_total: 2498, wins_claimed: 1578, wins_left: 920 },
        { prize: 200, odds: 1998, wins_total: 15145, wins_claimed: 11804, wins_left: 3341 },
        { prize: 100, odds: 301, wins_total: 100653, wins_claimed: 77939, wins_left: 22714 },
        { prize: 50, odds: 120, wins_total: 252163, wins_claimed: 194482, wins_left: 57681 },
        { prize: 20, odds: 40, wins_total: 756567, wins_claimed: 588833, wins_left: 167734 },
        { prize: 15, odds: 27, wins_total: 1134729, wins_claimed: 878402, wins_left: 256327 },
        { prize: 10, odds: 16, wins_total: 1891053, wins_claimed: 1449080, wins_left: 441973 },
        { prize: 6, odds: 16, wins_total: 1891215, wins_claimed: 1425767, wins_left: 465448 },
        { prize: 'ticket', odds: 11, wins_total: 2647701, wins_claimed: 1951197, wins_left: 696504 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/the-price-is-right-1221
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/the-price-is-right-1221', cost: 5, lines: [
        { prize: 100000, odds: 1209957, wins_total: 15, wins_claimed: 3, wins_left: 12 },
        { prize: 10000, odds: 235706, wins_total: 77, wins_claimed: 15, wins_left: 62 },
        { prize: 1000, odds: 13414, wins_total: 1353, wins_claimed: 255, wins_left: 1098 },
        { prize: 400, odds: 2773, wins_total: 6545, wins_claimed: 2474, wins_left: 4071 },
        { prize: 200, odds: 1203, wins_total: 15090, wins_claimed: 5760, wins_left: 9330 },
        { prize: 100, odds: 460, wins_total: 39449, wins_claimed: 15091, wins_left: 24358 },
        { prize: 50, odds: 160, wins_total: 113413, wins_claimed: 42505, wins_left: 70908 },
        { prize: 30, odds: 120, wins_total: 151308, wins_claimed: 57086, wins_left: 94222 },
        { prize: 20, odds: 40, wins_total: 453843, wins_claimed: 170083, wins_left: 283760 },
        { prize: 15, odds: 33, wins_total: 544340, wins_claimed: 201935, wins_left: 342405 },
        { prize: 10, odds: 24, wins_total: 771341, wins_claimed: 283382, wins_left: 487959 },
        { prize: 6, odds: 16, wins_total: 1134335, wins_claimed: 404562, wins_left: 729773 },
        { prize: 'ticket', odds: 10, wins_total: 1814936, wins_claimed: 648806, wins_left: 1166130 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/superstar-crossword-1190
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/superstar-crossword-1190', cost: 5, lines: [
        { prize: 75000, odds: 1234476, wins_total: 21, wins_claimed: 18, wins_left: 3 },
        { prize: 5000, odds: 118374, wins_total: 219, wins_claimed: 199, wins_left: 20 },
        { prize: 500, odds: 3432, wins_total: 7554, wins_claimed: 7021, wins_left: 533 },
        { prize: 250, odds: 2089, wins_total: 12407, wins_claimed: 11530, wins_left: 877 },
        { prize: 100, odds: 398, wins_total: 65189, wins_claimed: 60666, wins_left: 4523 },
        { prize: 50, odds: 217, wins_total: 119359, wins_claimed: 109885, wins_left: 9474 },
        { prize: 30, odds: 184, wins_total: 140556, wins_claimed: 130540, wins_left: 10016 },
        { prize: 20, odds: 40, wins_total: 648100, wins_claimed: 597720, wins_left: 50380 },
        { prize: 15, odds: 17, wins_total: 1554628, wins_claimed: 1430541, wins_left: 124087 },
        { prize: 10, odds: 17, wins_total: 1556658, wins_claimed: 1420589, wins_left: 136069 },
        { prize: 'ticket', odds: 10, wins_total: 2592400, wins_claimed: 2244705, wins_left: 347695 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/20X-the-money-1228
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/20X-the-money-1228', cost: 5, lines: [
        { prize: 200000, odds: 1203552, wins_total: 20, wins_claimed: 0, wins_left: 20 },
        { prize: 10000, odds: 601776, wins_total: 40, wins_claimed: 0, wins_left: 40 },
        { prize: 1000, odds: 13373, wins_total: 1800, wins_claimed: 0, wins_left: 1800 },
        { prize: 500, odds: 3017, wins_total: 7978, wins_claimed: 217, wins_left: 7761 },
        { prize: 100, odds: 400, wins_total: 60204, wins_claimed: 1658, wins_left: 58546 },
        { prize: 50, odds: 185, wins_total: 130016, wins_claimed: 3565, wins_left: 126451 },
        { prize: 30, odds: 92, wins_total: 260774, wins_claimed: 7268, wins_left: 253506 },
        { prize: 20, odds: 40, wins_total: 601776, wins_claimed: 16419, wins_left: 585357 },
        { prize: 15, odds: 33, wins_total: 722112, wins_claimed: 19537, wins_left: 702575 },
        { prize: 10, odds: 18, wins_total: 1323936, wins_claimed: 35234, wins_left: 1288702 },
        { prize: 6, odds: 16, wins_total: 1504440, wins_claimed: 38067, wins_left: 1466373 },
        { prize: 'ticket', odds: 13, wins_total: 1805328, wins_claimed: 46138, wins_left: 1759190 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/mega-crossword-1201
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/mega-crossword-1201', cost: 5, lines: [
        { prize: 75000, odds: 1235652, wins_total: 23, wins_claimed: 21, wins_left: 2 },
        { prize: 5000, odds: 80969, wins_total: 351, wins_claimed: 322, wins_left: 29 },
        { prize: 1000, odds: 39916, wins_total: 712, wins_claimed: 645, wins_left: 67 },
        { prize: 500, odds: 2381, wins_total: 11938, wins_claimed: 11443, wins_left: 495 },
        { prize: 100, odds: 586, wins_total: 48494, wins_claimed: 46428, wins_left: 2066 },
        { prize: 50, odds: 320, wins_total: 88886, wins_claimed: 84864, wins_left: 4022 },
        { prize: 30, odds: 200, wins_total: 142310, wins_claimed: 135844, wins_left: 6466 },
        { prize: 25, odds: 159, wins_total: 178371, wins_claimed: 170700, wins_left: 7671 },
        { prize: 20, odds: 40, wins_total: 710891, wins_claimed: 676409, wins_left: 34482 },
        { prize: 15, odds: 21, wins_total: 1349882, wins_claimed: 1287854, wins_left: 62028 },
        { prize: 10, odds: 12, wins_total: 2415020, wins_claimed: 2285011, wins_left: 130009 },
        { prize: 'ticket', odds: 11, wins_total: 2486750, wins_claimed: 2254966, wins_left: 231784 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$5-scratchers/extra-play-1167
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$5-scratchers/extra-play-1167', cost: 5, lines: [
        { prize: 150000, odds: 1628017, wins_total: 23, wins_claimed: 18, wins_left: 5 },
        { prize: 10000, odds: 814009, wins_total: 46, wins_claimed: 40, wins_left: 6 },
        { prize: 1000, odds: 39624, wins_total: 945, wins_claimed: 834, wins_left: 111 },
        { prize: 500, odds: 2670, wins_total: 14022, wins_claimed: 12921, wins_left: 1101 },
        { prize: 150, odds: 1603, wins_total: 23359, wins_claimed: 21631, wins_left: 1728 },
        { prize: 100, odds: 433, wins_total: 86453, wins_claimed: 79667, wins_left: 6786 },
        { prize: 75, odds: 652, wins_total: 57434, wins_claimed: 52993, wins_left: 4441 },
        { prize: 50, odds: 142, wins_total: 263161, wins_claimed: 242164, wins_left: 20997 },
        { prize: 25, odds: 210, wins_total: 178079, wins_claimed: 162783, wins_left: 15296 },
        { prize: 20, odds: 40, wins_total: 936110, wins_claimed: 859537, wins_left: 76573 },
        { prize: 15, odds: 27, wins_total: 1404165, wins_claimed: 1283578, wins_left: 120587 },
        { prize: 10, odds: 16, wins_total: 2340275, wins_claimed: 2125196, wins_left: 215079 },
        { prize: 5, odds: 27, wins_total: 1404165, wins_claimed: 1238319, wins_left: 165846 },
        { prize: 'ticket', odds: 11, wins_total: 3276385, wins_claimed: 2896232, wins_left: 380153 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-bonus-crossword-1215
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/tripling-bonus-crossword-1215', cost: 3, lines: [
        { prize: 20000, odds: 1235813, wins_total: 23, wins_claimed: 9, wins_left: 14 },
        { prize: 3000, odds: 604760, wins_total: 47, wins_claimed: 15, wins_left: 32 },
        { prize: 1000, odds: 192052, wins_total: 148, wins_claimed: 52, wins_left: 96 },
        { prize: 300, odds: 60348, wins_total: 471, wins_claimed: 252, wins_left: 219 },
        { prize: 150, odds: 10840, wins_total: 2622, wins_claimed: 1388, wins_left: 1234 },
        { prize: 100, odds: 1465, wins_total: 19408, wins_claimed: 10317, wins_left: 9091 },
        { prize: 60, odds: 1092, wins_total: 26033, wins_claimed: 13857, wins_left: 12176 },
        { prize: 50, odds: 363, wins_total: 78249, wins_claimed: 41818, wins_left: 36431 },
        { prize: 30, odds: 304, wins_total: 93608, wins_claimed: 50135, wins_left: 43473 },
        { prize: 20, odds: 166, wins_total: 171096, wins_claimed: 90002, wins_left: 81094 },
        { prize: 15, odds: 125, wins_total: 226993, wins_claimed: 119352, wins_left: 107641 },
        { prize: 12, odds: 100, wins_total: 283444, wins_claimed: 147423, wins_left: 136021 },
        { prize: 10, odds: 62, wins_total: 456591, wins_claimed: 240436, wins_left: 216155 },
        { prize: 5, odds: 12, wins_total: 2331140, wins_claimed: 1209916, wins_left: 1121224 },
        { prize: 4, odds: 9, wins_total: 3122679, wins_claimed: 1604322, wins_left: 1518357 },
        { prize: 'ticket', odds: 17, wins_total: 1705422, wins_claimed: 817323, wins_left: 888099 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/quick-win-bingo-1210
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/quick-win-bingo-1210', cost: 3, lines: [
        { prize: 20000, odds: 618000, wins_total: 44, wins_claimed: 24, wins_left: 20 },
        { prize: 1000, odds: 292387, wins_total: 93, wins_claimed: 56, wins_left: 37 },
        { prize: 500, odds: 60427, wins_total: 450, wins_claimed: 326, wins_left: 124 },
        { prize: 100, odds: 1083, wins_total: 25118, wins_claimed: 17689, wins_left: 7429 },
        { prize: 50, odds: 597, wins_total: 45569, wins_claimed: 31909, wins_left: 13660 },
        { prize: 40, odds: 599, wins_total: 45408, wins_claimed: 32187, wins_left: 13221 },
        { prize: 30, odds: 315, wins_total: 86240, wins_claimed: 60732, wins_left: 25508 },
        { prize: 25, odds: 194, wins_total: 140344, wins_claimed: 101748, wins_left: 38596 },
        { prize: 20, odds: 125, wins_total: 217848, wins_claimed: 150417, wins_left: 67431 },
        { prize: 15, odds: 125, wins_total: 217483, wins_claimed: 156169, wins_left: 61314 },
        { prize: 10, odds: 83, wins_total: 325992, wins_claimed: 217384, wins_left: 108608 },
        { prize: 9, odds: 45, wins_total: 598277, wins_claimed: 430675, wins_left: 167602 },
        { prize: 5, odds: 17, wins_total: 1576618, wins_claimed: 1082304, wins_left: 494314 },
        { prize: 4, odds: 13, wins_total: 2120923, wins_claimed: 1443424, wins_left: 677499 },
        { prize: 'ticket', odds: 13, wins_total: 2175360, wins_claimed: 1473626, wins_left: 701734 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/5x-crossword-1208
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/5x-crossword-1208', cost: 3, lines: [
        { prize: 20000, odds: 1210882, wins_total: 28, wins_claimed: 17, wins_left: 11 },
        { prize: 1000, odds: 80725, wins_total: 420, wins_claimed: 212, wins_left: 208 },
        { prize: 100, odds: 1202, wins_total: 28207, wins_claimed: 18995, wins_left: 9212 },
        { prize: 50, odds: 203, wins_total: 166791, wins_claimed: 111736, wins_left: 55055 },
        { prize: 20, odds: 71, wins_total: 474644, wins_claimed: 311844, wins_left: 162800 },
        { prize: 10, odds: 38, wins_total: 881761, wins_claimed: 584372, wins_left: 297389 },
        { prize: 5, odds: 12, wins_total: 2780395, wins_claimed: 1828300, wins_left: 952095 },
        { prize: 4, odds: 9, wins_total: 3728767, wins_claimed: 2420489, wins_left: 1308278 },
        { prize: 'ticket', odds: 17, wins_total: 2034282, wins_claimed: 1255210, wins_left: 779072 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/word-games-1224
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/word-games-1224', cost: 3, lines: [
        { prize: 30000, odds: 603015, wins_total: 33, wins_claimed: 0, wins_left: 33 },
        { prize: 3000, odds: 117056, wins_total: 170, wins_claimed: 1, wins_left: 169 },
        { prize: 300, odds: 10025, wins_total: 1985, wins_claimed: 630, wins_left: 1355 },
        { prize: 75, odds: 662, wins_total: 30065, wins_claimed: 9356, wins_left: 20709 },
        { prize: 50, odds: 415, wins_total: 47970, wins_claimed: 14685, wins_left: 33285 },
        { prize: 25, odds: 203, wins_total: 97866, wins_claimed: 30162, wins_left: 67704 },
        { prize: 20, odds: 100, wins_total: 198995, wins_claimed: 61064, wins_left: 137931 },
        { prize: 15, odds: 100, wins_total: 198995, wins_claimed: 61054, wins_left: 137941 },
        { prize: 10, odds: 31, wins_total: 636887, wins_claimed: 195567, wins_left: 441320 },
        { prize: 5, odds: 9, wins_total: 2109141, wins_claimed: 632476, wins_left: 1476665 },
        { prize: 'ticket', odds: 10, wins_total: 1989950, wins_claimed: 588914, wins_left: 1401036 }
    ]},
    // http://www.calottery.com/play/scratchers-games/$3-scratchers/loteria-1199
    { state: 'CA', type: 'scratcher', name: 'http://www.calottery.com/play/scratchers-games/$3-scratchers/loteria-1199', cost: 3, lines: [
        { prize: 30000, odds: 607006, wins_total: 47, wins_claimed: 38, wins_left: 9 },
        { prize: 3000, odds: 116923, wins_total: 244, wins_claimed: 188, wins_left: 56 },
        { prize: 300, odds: 7980, wins_total: 3575, wins_claimed: 3258, wins_left: 317 },
        { prize: 75, odds: 631, wins_total: 45199, wins_claimed: 42424, wins_left: 2775 },
        { prize: 50, odds: 414, wins_total: 68960, wins_claimed: 63547, wins_left: 5413 },
        { prize: 25, odds: 203, wins_total: 140263, wins_claimed: 130737, wins_left: 9526 },
        { prize: 20, odds: 100, wins_total: 285293, wins_claimed: 261504, wins_left: 23789 },
        { prize: 15, odds: 100, wins_total: 285267, wins_claimed: 264610, wins_left: 20657 },
        { prize: 10, odds: 31, wins_total: 912767, wins_claimed: 827375, wins_left: 85392 },
        { prize: 5, odds: 9, wins_total: 3024525, wins_claimed: 2711489, wins_left: 313036 },
        { prize: 'ticket', odds: 10, wins_total: 2852930, wins_claimed: 2522508, wins_left: 330422 }
    ]},
    // http://www.calottery.com/play/draw-games/fantasy-5
    { state: 'CA', type: 'draw', name: 'http://www.calottery.com/play/draw-games/fantasy-5', cost: 1, lines: [
        { prize: 66000, odds: 575757 },   // Matched 5 of 5 numbers
        { prize: 333, odds: 3386.80588235294 },   // Matched 4 of 5 Numbers
        { prize: 12, odds: 102.630481283422 },   // Matched 3 of 5 Numbers
        { prize: 'ticket', odds: 9.62160762032086 }   // Matched 2 of 5 Numbers
    ]},

];
