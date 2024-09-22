app.mapData = {
	name: 'm07-secret-weapons',
	tilePath: 'maps/m_researchbase/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [3464, 3752],
	//focus: [100, 100]
};

app.mapData.markers = [
	// collectibles
	makeMarker('letter', 1, 1747,2367),
	makeMarker('letter', 2, 1892,2773),
	makeMarker('letter', 3.1, 2752,504),
	makeMarker('letter', 3.2, 2109,1372),
	makeMarker('letter', 4, 2227,1747),
	makeMarker('letter', 5, 2636,1869),
	makeMarker('document', 1.1, 1748,2358),
	makeMarker('document', 1.2, 1752,2481),
	makeMarker('document', 2.1, 1838,911),
	makeMarker('document', 2.2, 1681,2524),
	makeMarker('document', 2.2, 2538,2537),
	makeMarker('document', 3, 2401,2114),
	makeMarker('document', 4.1, 1261,1574),
	makeMarker('document', 4.2, 1402,1296),
	makeMarker('document', 4.3, 1846,894),
	makeMarker('document', 5, 1206,836),
	makeMarker('hidden-item', 1, 2582,1811),
	makeMarker('hidden-item', 2, 2770,1121),
	makeMarker('hidden-item', 3, 1721,1185),
	makeMarker('stone-eagle', 1, 1784,2756),
	makeMarker('stone-eagle', 2, 2682,814),
	makeMarker('stone-eagle', 3, 1196,824),
	makeMarker('workbench', 1, 2300,1246),
	makeMarker('workbench', 2, 2539,1725),
	makeMarker('workbench', 3, 1322,1377),
	
	// objectives
	makeMarker('primary', 1, 2764,1730),
	makeMarker('primary', 2.1, 2108,1032),
	makeMarker('primary', 2.2, 2205,1297),
	makeMarker('primary', 3.1, 2483,1843),
	makeMarker('primary', 3.1, 2422,1763),
	makeMarker('primary', 3.2, 2495,1768),
	makeMarker('primary', 4.1, 1982,1652),
	makeMarker('primary', 4, 2232,1732),
	makeMarker('primary', 5, 2766,434),
	makeMarker('primary', 5, 2692,2287),
	makeMarker('primary', 5, 1971,2788),
	
	makeMarker('secondary', 1.1, 1277,902),
	makeMarker('secondary', 1.2, 1393,1013),
	makeMarker('secondary', 1.2, 1405,808),
	makeMarker('secondary', 1.3, 1219,843),
	makeMarker('secondary', 2, 1745,2395),
	makeMarker('secondary', 2, 1717,2554),
	makeMarker('secondary', 3, 2509,2123),
	makeMarker('secondary', 3, 2484,2162),
	makeMarker('secondary', 3, 2476,2093),
	makeMarker('secondary', 3, 2348,2143),
	
	makeMarker('kill-list', 1, 2445,2027),

	makeMarker('intel', 1, 1642,645),
	makeMarker('intel', 2, 1898,2775),
	makeMarker('intel', 3, 2409,2560),
	makeMarker('intel', 4, 1324,1312),
	makeMarker('intel', 5, 1397,1093),
	makeMarker('intel', 6, 2281,1257),
	makeMarker('intel', 7, 1801,1933),
	makeMarker('intel', 8, 2254,2435),
	makeMarker('intel', 9, 1929,2285),
	
	// tools
	makeMarker('bolt-cutters', 0, 1823,2484),
	makeMarker('bolt-cutters', 0, 2528,2249),
	makeMarker('bolt-cutters', 0, 2426,2162),
	makeMarker('bolt-cutters', 0, 2653,1964),
	makeMarker('crowbar', 0, 1684,2521),
	makeMarker('crowbar', 0, 1210,958),
	makeMarker('crowbar', 0, 1844,913),
	makeMarker('crowbar', 0, 1422,2102),
	makeMarker('crowbar', 0, 2427,2197),
	makeMarker('crowbar', 0, 2006,1420),
	makeMarker('door', 1, 1224,846),
	makeMarker('door', 1, 1210,845),
	makeMarker('door', 3, 2334,2175),
	makeMarker('door', 4, 2726,2003),
	makeMarker('door', 5, 2662,1723),
	makeMarker('door', 6, 2553,1751),
	makeMarker('door', 7, 2226,1765),
	makeMarker('door', 8, 2232,1759),
	makeMarker('door', 10, 2758,1765),
	makeMarker('key', 1, 1206,954),
	makeMarker('key', 2, 1754,2379),
	makeMarker('key', 3, 2523,2539),
	makeMarker('key', 3, 2504,2145),
	makeMarker('key', 3, 2471,2178),
	makeMarker('key', 4, 2635,2245),
	makeMarker('key', 5, 2741,1715),
	makeMarker('key', 7, 2473,1844),
	makeMarker('key', 8, 2028,1654),
	makeMarker('key', 9, 2273,1217),
	makeMarker('key', 10, 2587,1979),
	makeMarker('satchel-charge', 0, 1600,1746),
	makeMarker('satchel-charge', 0, 2418,2140),
	makeMarker('satchel-charge', 0, 2659,1964),
	makeMarker('satchel-charge', 0, 2659,1962),
	makeMarker('satchel-charge', 0, 2501,1846),
	makeMarker('satchel-charge', 0, 2608,1826),
	makeMarker('satchel-charge', 0, 2510,1908),
	
	// vehicles
	makeMarker('motorbike', 0, 1271,1540),
	makeMarker('light-car', 0, 2345,2119),
	makeMarker('tank', 0, 1678,1676),
	makeMarker('tank', 0, 1697,2012),
	makeMarker('tank', 0, 2489,2297),
	makeMarker('truck', 0, 1370,871),
	makeMarker('truck', 0, 2139,1736),
	makeMarker('truck', 0, 2467,1633),
	makeMarker('truck', 0, 2720,584),
	makeMarker('truck', 0, 2386,2130),
	makeMarker('boat', 0, 2000,1159),
	
	// utilities
	makeMarker('body-box', 0, 1261,1797),
	makeMarker('body-box', 0, 1275,984),
	makeMarker('body-box', 0, 1217,946),
	makeMarker('body-box', 0, 1335,999),
	makeMarker('body-box', 0, 1252,2019),
	makeMarker('body-box', 0, 1848,2545),
	makeMarker('body-box', 0, 1674,2486),
	makeMarker('body-box', 0,  1730,2362),
	makeMarker('body-box', 0,  1565,2444),
	makeMarker('body-box', 0,  1563,2438),
	makeMarker('body-box', 0,  2394,2247),
	makeMarker('body-box', 0,  2348,2160),
	makeMarker('body-box', 0,  2461,2136),
	makeMarker('body-box', 0,  2491,2125),
	makeMarker('body-box', 0,  2651,1976),
	makeMarker('body-box', 0,  2758,1633),
	makeMarker('body-box', 0,  2657,1815),
	makeMarker('body-box', 0,  2569,1780),
	makeMarker('body-box', 0,  2466,1756),
	makeMarker('body-box', 0,  2315,1747),
	makeMarker('body-box', 0,  2503,1371),
	makeMarker('body-box', 0,  2620,816),
	makeMarker('body-box', 0,  2792,1133),
	makeMarker('body-box', 0,  2257,1315),
	makeMarker('body-box', 0,  2039,1403),
	makeMarker('body-box', 0,  2723,941),
	makeMarker('body-box', 0,  2752,1769),
	makeMarker('generator', 0, 1256,821),
	makeMarker('generator', 0, 1850,915),
	makeMarker('generator', 0, 1692,1326),
	makeMarker('generator', 0, 1539,2471),
	makeMarker('generator', 0, 1840,2547),
	makeMarker('generator', 0, 1899,2752),
	makeMarker('generator', 0, 2354,2230),
	makeMarker('generator', 0, 2443,1294),
	makeMarker('supply-crate', 'padlock', 1690,1319),
	makeMarker('supply-crate', 'padlock', 1597,1726),
	makeMarker('supply-crate', 'padlock', 1635,2380),
	makeMarker('supply-crate', 'padlock', 1601,2483),
	makeMarker('supply-crate', 'padlock', 2546,2310),
	makeMarker('supply-crate', 'crowbar', 1826,2667),
	makeMarker('supply-crate', 'crowbar', 2143,1380),
	
	// other
	makeMarker('alarm', 1, 1283,904),
	makeMarker('alarm', 2, 1732,2443),
	makeMarker('alarm', 3, 2407,2254),
	makeMarker('alarm', 4, 2667,1904),
	makeMarker('alarm', 5, 2337,1770),
	makeMarker('alarm', 6, 2752,1082),
	makeMarker('alarm', 7, 2255,1257),
	makeMarker('invasion', 0, 1386,941),
	makeMarker('invasion', 0, 1713,1327),
	makeMarker('invasion', 0, 1648,2372),
	makeMarker('invasion', 0, 1417,2106),
	makeMarker('invasion', 0, 2671,1899),
	makeMarker('invasion', 0, 2477,2153),
	makeMarker('invasion', 0, 2631,1433),
	makeMarker('invasion', 0, 2780,1107),
	makeMarker('invasion', 0, 2177,1305),
	makeMarker('searchlight', 4, 1300,1027),
	makeMarker('searchlight', 3, 1322,841),
	makeMarker('searchlight', 0, 1721,1335),
	makeMarker('searchlight', 0, 1801,1954),
	makeMarker('searchlight', 1, 1710,2541),
	makeMarker('searchlight', 2, 1467,2342),
	makeMarker('searchlight', 0, 2264,2438),
	makeMarker('speaker', 1, 1377,977),
	makeMarker('speaker', 1, 1391,903),
	makeMarker('speaker', 1, 1207,846),
	makeMarker('speaker', 2, 1482,2359),
	makeMarker('speaker', 2, 1633,2527),
	makeMarker('speaker', 2, 1769,2495),
	makeMarker('speaker', 3, 2436,2515),
	makeMarker('speaker', 3, 2431,2365),
	makeMarker('speaker', 3, 2517,2324),
	makeMarker('speaker', 4, 2713,1742),
	makeMarker('speaker', 4, 2505,1901),
	makeMarker('speaker', 5, 2593,1820),
	makeMarker('speaker', 5, 2459,1826),
	makeMarker('speaker', 5, 2295,1650),
	makeMarker('speaker', 6, 2778,1091),
	makeMarker('speaker', 6, 2624,803),
	makeMarker('speaker', 6, 2710,603),
	makeMarker('speaker', 7, 2161,1316),
	makeMarker('speaker', 7, 2085,1400),
	
	// special
	makeMarker('special', 1, 1207,878),
	makeMarker('special', 2, 1390,1008),
	makeMarker('special', 3, 1324,1321),
	makeMarker('special', 4, 1634,2533),
	makeMarker('special', 5, 1738,2352),
	makeMarker('special', 6, 1413,2093),
	makeMarker('special', 7, 1889,2756),
	makeMarker('special', 8, 1206,836),
	makeMarker('special', 9, 2723,1667),
	makeMarker('special', 9, 2552,1760),
	makeMarker('special', 9, 2224,1341),
	makeMarker('special', 9, 2462,2100),
	makeMarker('special', 9, 2494,2094),
	makeMarker('special', 10, 2783,1115),
	makeMarker('special', 11, 2278,1243),
	makeMarker('special', 12, 1992,1433),
	makeMarker('special', 12, 1859,2348),
];

app.mapData.ziplines = [
	makeZipline(1, [1157,1129], [1266,1026]),
	makeZipline(2, [1421,790], [1624,685]),
	makeZipline(3, [1731,624], [1844,842]),
	makeZipline(4, [1352,1020], [1482,1243]),
	makeZipline(5, [2511,1356], [2556,975]),
	makeZipline(6, [1945,2298], [2089,2113]),
];