app.mapData = {
	name: 'm05-festung-guernsey',
	tilePath: 'maps/m_guernsey/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [4160, 4152],
	//focus: [100, 100]
};

app.mapData.markers = [
	// collectibles
	makeMarker('letter', 1, 1740,2233),
	makeMarker('letter', 2, 2065,2169),
	makeMarker('letter', 3, 2615,2868),
	makeMarker('letter', 4, 1664,1400),
	makeMarker('letter', 5, 2553,2399),
	makeMarker('document', 1, 1393,1687),
	makeMarker('document', 2, 2595,1215),
	makeMarker('document', 3, 2525,2169),
	makeMarker('document', 4, 2775,2191),
	makeMarker('document', 5, 2329,1006),
	makeMarker('hidden-item', 1, 2873,2647),
	makeMarker('hidden-item', 2, 2058,2171),
	makeMarker('hidden-item', 3, 2377,1695),
	makeMarker('stone-eagle', 1, 2032,1705),
	makeMarker('stone-eagle', 2, 2347,981),
	makeMarker('stone-eagle', 3, 3280,2971),
	makeMarker('workbench', 1, 2028,1683),
	makeMarker('workbench', 2, 2555,2383),
	makeMarker('workbench', 3, 2739,1300),

	// objectives
	makeMarker('primary', 1.1, ),
	makeMarker('primary', 1.2, ),
	makeMarker('primary', 2.1, 2686,1274),
	makeMarker('primary', 2.1, 2671,1181),
	makeMarker('primary', 2.2, 2663,1241),
	makeMarker('primary', 2.3, 2686,1281),
	makeMarker('primary', 2.4, 2590,1227),
	makeMarker('primary', 2.4, 2576,1100),
	makeMarker('primary', 2.5, 2762,988),
	makeMarker('primary', 2.5, 2519,973),
	makeMarker('primary', 2.6, 2633,794),
	makeMarker('primary', 2.6, 2669,1039),
	makeMarker('primary', 3.1, 3445,2434),
	makeMarker('primary', 3.2, 3541,2173),
	makeMarker('primary', 3.3, 2765,2249),
	makeMarker('primary', 3.4, 3543,2253),
	makeMarker('primary', 4, 3056,1656),
	makeMarker('primary', 4, 3642,2849),
	makeMarker('primary', 4, 1451,2514),
	makeMarker('secondary', 1.1, 1329,1677),
	makeMarker('secondary', 1.1, 1179,1608),
	makeMarker('secondary', 1.2, 1273,1567),
	makeMarker('secondary', 2, 2862,2779),
	makeMarker('kill-list', 1, 2620,2671),
	makeMarker('intel', 1, 3487,3190),
	makeMarker('intel', 2, 3626,2851),
	makeMarker('intel', 3, 2303,2598),
	makeMarker('intel-source', 4, 1267,1568),
	makeMarker('intel', 4, 1732,2257),
	makeMarker('intel-source', 5, 1278,1571),
	makeMarker('intel', 5, 3242,2974),
	makeMarker('intel-source', 6, 2570,2146),
	makeMarker('intel', 6, 1456,2507),
	makeMarker('intel-source', 7, 2781,2227),
	makeMarker('intel', 7, 2811,1459),
	makeMarker('intel', 8, 1526,1873),
	makeMarker('intel-source', 9, 2771,2173),
	
	// tools
	makeMarker('bolt-cutters', 0, 1247,1570),
	makeMarker('bolt-cutters', 0, 1168,1732),
	makeMarker('bolt-cutters', 0, 1359,1680),
	makeMarker('bolt-cutters', 0, 2134,1365),
	makeMarker('bolt-cutters', 0, 2382,1003),
	makeMarker('bolt-cutters', 0, 2646,2652),
	makeMarker('bolt-cutters', 0, 2923,1444),
	makeMarker('bolt-cutters', 0, 2578,1070),
	makeMarker('crowbar', 0, 1066,1569),
	makeMarker('crowbar', 0, 1178,1617),
	makeMarker('crowbar', 0, 2343,1274),
	makeMarker('crowbar', 0, 2651,2289),
	makeMarker('crowbar', 0, 3572,2368),
	makeMarker('crowbar', 0, 2682,1218),
	makeMarker('crowbar', 0, 2471,1690),
	makeMarker('crowbar', 0, 2586,2182),
	makeMarker('door', 'padlock', 1370,1678),
	makeMarker('door', 'padlock', 2540,2407),
	makeMarker('door', 'padlock', 3480,3194),
	makeMarker('door', 'padlock', 2779,1204),
	makeMarker('door', 'padlock', 2713,1195),
	makeMarker('door', 'padlock', 2580,1198),
	makeMarker('code', 1, 1345,1687),
	makeMarker('code', 2, 3366,2424),
	makeMarker('code', 3, 3538,2176),
	makeMarker('code', 4, 2692,1143),
	makeMarker('code', 5, 2586,1225),
	makeMarker('code', 6, 2415,1696),
	makeMarker('satchel-charge', 0, 1101,1800),
	makeMarker('satchel-charge', 0, 2076,1359),
	makeMarker('satchel-charge', 0, 2111,1353),
	makeMarker('satchel-charge', 0, 2414,1231),
	makeMarker('satchel-charge', 0, 2369,1015),
	makeMarker('satchel-charge', 0, 1533,1878),
	makeMarker('satchel-charge', 0, 3239,2980),
	makeMarker('satchel-charge', 0, 3245,2331),
	makeMarker('satchel-charge', 0, 3231,2362),
	makeMarker('satchel-charge', 0, 3596,2332),
	makeMarker('satchel-charge', 0, 2737,1298),
	makeMarker('satchel-charge', 0, 2741,977),
	
	// vehicles
	makeMarker('motorbike', 0, 1175,1688),
	makeMarker('motorbike', 0, 1684,2247),
	makeMarker('truck', 0, 1737,2111),
	makeMarker('truck', 0, 3632,2853),
	makeMarker('truck', 0, 3047,1662),
	makeMarker('truck', 0, 2450,1779),
	makeMarker('truck', 0, 2443,1754),
	makeMarker('truck', 0, 1600,1767),
	makeMarker('truck', 0, 2451,1720),
	makeMarker('truck', 0, 2505,1783),
	makeMarker('tank', 0, 1791,2196),
	makeMarker('vip-car', 0, 2483,1761),
	
	// utilities
	makeMarker('body-box', 0, 1119,1809),
	makeMarker('body-box', 0, 1251,1722),
	makeMarker('body-box', 0, 1341,1628),
	makeMarker('body-box', 0, 1189,1639),
	makeMarker('body-box', 0, 1631,1371),
	makeMarker('body-box', 0, 1678,1428),
	makeMarker('body-box', 0, 2385,1328),
	makeMarker('body-box', 0, 2388,1010),
	makeMarker('body-box', 0, 1541,1894),
	makeMarker('body-box', 0, 1728,2235),
	makeMarker('body-box', 0, 2525,2178),
	makeMarker('body-box', 0, 2628,2657),
	makeMarker('body-box', 0, 2719,2873),
	makeMarker('body-box', 0, 3493,2351),
	makeMarker('body-box', 0, 3425,2283),
	makeMarker('body-box', 0, 3267,2259),
	makeMarker('body-box', 0, 3215,2401),
	makeMarker('body-box', 0, 2845,1027),
	makeMarker('body-box', 0, 2622,986),
	makeMarker('body-box', 0, 2618,930),
	makeMarker('body-box', 0, 2734,1047),
	makeMarker('body-box', 0, 2580,1000),
	makeMarker('body-box', 0, 2419,1777),
	makeMarker('body-box', 0, 2517,1719),
	makeMarker('emplacement', 0, 1375,1604),
	makeMarker('emplacement', 0, 1638,1495),
	makeMarker('emplacement', 0, 1654,1556),
	makeMarker('emplacement', 0, 1823,1373),
	makeMarker('emplacement', 0, 1660,2139),
	makeMarker('emplacement', 0, 2178,2081),
	makeMarker('emplacement', 0, 2777,2373),
	makeMarker('emplacement', 0, 3285,2983),
	makeMarker('emplacement', 0, 3536,2581),
	makeMarker('emplacement', 0, 2924,1481),
	makeMarker('emplacement', 0, 2764,1440),
	makeMarker('generator', 0, 1349,1696),
	makeMarker('generator', 0, 2358,1024),
	makeMarker('generator', 0, 2679,2198),
	makeMarker('generator', 0, 2947,1571),
	makeMarker('generator', 0, 2857,1006),
	makeMarker('supply-crate', 'crowbar', 2373,1248),
	makeMarker('supply-crate', 'crowbar', 2565,2279),
	makeMarker('supply-crate', 'crowbar', 2875,1037),
	makeMarker('supply-crate', 'padlock', 2605,2868),
	makeMarker('supply-crate', 'padlock', 3447,2266),
	makeMarker('supply-crate', 'open', 3455,2259),
	makeMarker('supply-crate', 'open', 2857,1045),
	
	// other
	makeMarker('alarm', 1, 1300,1678),
	makeMarker('alarm', 2, 3245,2407),
	makeMarker('alarm', 3, 2842,1435),
	makeMarker('alarm', 4, 2582,2211),
	makeMarker('invasion', 0, 1668,1436),
	makeMarker('invasion', 0, 2351,992),
	makeMarker('invasion', 0, 2783,2252),
	makeMarker('invasion', 0, 3583,2502),
	makeMarker('invasion', 0, 1372,1684),
	makeMarker('speaker', 2, 3249,2291),
	makeMarker('speaker', 2, 3237,2489),
	makeMarker('speaker', 3, 2913,1480),
	
	// gnomes
	makeMarker('special', 1, 622,1459),
	makeMarker('special', 1, 2531,1266),
	makeMarker('special', 1, 2533,2394),
	makeMarker('special', 1, 3361,2571),
	makeMarker('special', 1, 2895,1388),
	makeMarker('special', 1, 2035,1685),
	makeMarker('special', 1, 2364,1639),
	makeMarker('special', 1, 3477,3177),
	makeMarker('special', 1, 2315,2597),
	makeMarker('special', 1, 2581,2297),
	
	makeMarker('special', 2, 2562,2282),
];

app.mapData.ziplines = [
	makeZipline(1, [1391,1691], [1412,1851]),
	makeZipline(2, [1747,2256], [2045,2223]),
	makeZipline(3, [2613,2371], [3018,2546]),
	makeZipline(4, [2999,2764], [2686,2733]),
	makeZipline(5, [2270,2566], [1929,2240]),
	makeZipline(6, [2038,1700], [2290,2017]),
];
