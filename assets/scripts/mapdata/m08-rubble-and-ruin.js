app.mapData = {
	name: 'm08-rubble-and-ruin',
	tilePath: 'maps/m_stnazaire/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [3840, 3840],
	//focus: [100, 100]
};

app.mapData.markers = [
	// collectibles
	makeMarker('letter', 1, 1278,2131),
	makeMarker('letter', 2, 1827,2134),
	makeMarker('letter', 3, 1546,1719),
	makeMarker('letter', 4, 954,1510),
	makeMarker('letter', 5, 1010,2083),
	
	makeMarker('document', 1, 800,1166),
	makeMarker('document', 2, 988,1336),
	makeMarker('document', 3, 1280,1305),
	makeMarker('document', 4, 1382,2135),
	makeMarker('document', 5, 1385,1195),
	
	makeMarker('hidden-item', 1, 1875,2141),
	makeMarker('hidden-item', 2, 2646,2015),
	makeMarker('hidden-item', 3, 1239,1751),
	
	makeMarker('stone-eagle', 1, 464,1348),
	makeMarker('stone-eagle', 2, 2374,2946),
	makeMarker('stone-eagle', 3, 1810,1403),
	
	makeMarker('workbench', 1, 2184,2116),
	makeMarker('workbench', 2, 1627,1502),
	makeMarker('workbench', 3, 1242,1738),
	
	// objectives
	makeMarker('primary', 1.1, 1776,2148),
	makeMarker('primary', 1.2, 1930,2133),
	makeMarker('primary', 2, 2109,2262),
	makeMarker('primary', 2, 2273,2376),
	makeMarker('primary', 2, 2405,2357),
	makeMarker('primary', 3.1, 2655,2026),
	makeMarker('primary', 3.1, 2623,2350),
	makeMarker('primary', 3.1, 2690,2350),
	makeMarker('primary', 3.2, 2717,2910),
	
	makeMarker('secondary', 1.1, 979,1692),
	makeMarker('secondary', 1.1, 978,1791),
	makeMarker('secondary', 1.2, 1144,1741),
	makeMarker('secondary', 1.2, 1239,1741),
	
	makeMarker('kill-list', 1, 1896,1460),
	
	makeMarker('intel', 1, 1281,1336),
	makeMarker('intel', 2, 1387,1181),
	makeMarker('intel', 3, 1254,1741),
	makeMarker('intel', 4, 1627,1486),
	makeMarker('intel', 5, 2181,2123),
	makeMarker('intel', 6, 1040,2062),
	makeMarker('intel', 7, 1328,2128),
	makeMarker('intel', 8, 1870,2145),
	
	// tools
	makeMarker('bolt-cutters', 0, 817,1037),
	makeMarker('bolt-cutters', 0, 1284,1336),
	makeMarker('bolt-cutters', 0, 1386,1167),
	makeMarker('bolt-cutters', 0, 2258,2072),
	makeMarker('crowbar', 0, 850,1182),
	makeMarker('crowbar', 0, 1267,1744),
	makeMarker('crowbar', 0, 1043,2057),
	makeMarker('crowbar', 0, 1289,2131),
	makeMarker('crowbar', 0, 1936,2115),
	makeMarker('crowbar', 0, 2177,2117),
	makeMarker('door', 1, 1019,1345),
	makeMarker('door', 2, 1279,1320),
	makeMarker('door', 3.1, 931,1499),
	makeMarker('door', 3.2, 927,1507),
	makeMarker('door', 4, 1239,1719),
	makeMarker('door', 5, 1371,2135),
	makeMarker('door', 5, 1312,2155),
	makeMarker('door', 6, 1841,1387),
	makeMarker('door', 7, 1860,2145),
	makeMarker('door', 7, 1880,2145),
	makeMarker('door', 8, 2189,2128),
	makeMarker('door', 9, 2174,2283),
	makeMarker('door', 9, 2153,2387),
	makeMarker('door', 9, 2210,2386),
	makeMarker('key', 1, 1025,1353),
	makeMarker('key', 2, 1339,1263),
	makeMarker('key', 3, 932,1514),
	makeMarker('key', 4, 1248,1741),
	makeMarker('key', 5, 1359,2103),
	makeMarker('key', 6.1, 1802,1410),
	makeMarker('key', 6.2, 1862,1347),
	makeMarker('key', 6.3, 1717,1367),
	makeMarker('key', 7, 1923,2123),
	makeMarker('key', 8.1, 2161,2157),
	makeMarker('key', 8.2, 2178,2174),
	makeMarker('key', 9, 2187,2320),
	makeMarker('satchel-charge', 0, 998,1339),
	makeMarker('satchel-charge', 0, 1143,1196),
	makeMarker('satchel-charge', 0, 1302,2164),
	makeMarker('satchel-charge', 0, 1228,1750),
	makeMarker('satchel-charge', 0, 1876,1457),
	
	// vehicles
	makeMarker('truck', 0, 1083,1239),
	makeMarker('truck', 0, 1421,1457),
	makeMarker('truck', 0, 1124,1427),
	makeMarker('truck', 0, 1338,1855),
	makeMarker('truck', 0, 1477,1835),
	makeMarker('truck', 0, 1778,1429),
	makeMarker('armoured-car', 0, 1725,1469),
	
	// utilities
	makeMarker('body-box', 0, 745,1078),
	makeMarker('body-box', 0, 1005,1349),
	makeMarker('body-box', 0, 1074,1272),
	makeMarker('body-box', 0, 1280,1352),
	makeMarker('body-box', 0, 1269,1569),
	makeMarker('body-box', 0, 1127,1500),
	makeMarker('body-box', 0, 1155,1372),
	makeMarker('body-box', 0, 1265,1711),
	makeMarker('body-box', 0, 1321,2097),
	makeMarker('body-box', 0, 1252,2038),
	makeMarker('body-box', 0, 1553,1719),
	makeMarker('body-box', 0, 1847,1565),
	makeMarker('body-box', 0, 1873,1360),
	makeMarker('body-box', 0, 2102,2160),
	makeMarker('body-box', 0, 2181,2153),
	makeMarker('emplacement', 0, 1278,1223),
	makeMarker('emplacement', 0, 1372,1606),
	makeMarker('emplacement', 0, 1029,1612),
	makeMarker('emplacement', 0, 1187,1742),
	makeMarker('emplacement', 0, 1545,2221),
	makeMarker('emplacement', 0, 1535,1754),
	makeMarker('emplacement', 0, 1816,1397),
	makeMarker('emplacement', 0, 1649,1487),
	makeMarker('emplacement', 0, 2294,2210),
	makeMarker('emplacement', 0, 2474,2233),
	makeMarker('emplacement', 0, 2720,2109),
	makeMarker('emplacement', 0, 2777,2234),
	makeMarker('generator', 0, 815,1108),
	makeMarker('generator', 0, 912,1366),
	makeMarker('generator', 0, 1075,1356),
	makeMarker('generator', 0, 1115,1241),
	makeMarker('generator', 0, 1244,1264),
	makeMarker('generator', 0, 1381,1265),
	makeMarker('generator', 0, 1182,1476),
	makeMarker('generator', 0, 939,1501),
	makeMarker('generator', 0, 990,1676),
	makeMarker('generator', 0, 1265,1727),
	makeMarker('generator', 0, 1052,2068),
	makeMarker('generator', 0, 1497,2178),
	makeMarker('generator', 0, 1573,1770),
	makeMarker('generator', 0, 1833,1383),
	makeMarker('generator', 0, 1625,1467),
	makeMarker('generator', 0, 2079,2159),
	makeMarker('generator', 0, 2215,2432),
	makeMarker('generator', 0, 2494,2240),
	makeMarker('supply-crate', 'crowbar', 1026,1352),
	makeMarker('supply-crate', 'crowbar', 1383,1351),
	makeMarker('supply-crate', 'crowbar', 1542,2167),
	makeMarker('supply-crate', 'crowbar', 1864,1345),
	makeMarker('supply-crate', 'crowbar', 2000,2112),
	makeMarker('supply-crate', 'crowbar', 2174,2175),
	makeMarker('supply-crate', 'padlock', 1232,1301),
	makeMarker('supply-crate', 'padlock', 1330,2097),
	makeMarker('supply-crate', 'padlock', 1696,1768),
	makeMarker('supply-crate', 'padlock', 1621,1463),
	makeMarker('supply-crate', 'padlock', 1865,2151),
	
	// other
	makeMarker('alarm', 1, 1081,1449),
	makeMarker('alarm', 2, 1061,1731),
	makeMarker('alarm', 3, 1803,1382),
	makeMarker('invasion', 0, 885,1239),
	makeMarker('invasion', 0, 909,1376),
	makeMarker('invasion', 0, 1351,1344),
	makeMarker('invasion', 0, 1126,1510),
	makeMarker('invasion', 0, 1056,2063),
	makeMarker('invasion', 0, 1369,2148),
	makeMarker('invasion', 0, 1393,1173),
	makeMarker('invasion', 0, 1585,1782),
	makeMarker('invasion', 0, 1854,1351),
	makeMarker('invasion', 0, 1634,1459),
	makeMarker('searchlight', 0, 1435,1769),
	makeMarker('searchlight', 0, 1116,1483),
	makeMarker('searchlight', 0, 2706,2073),
	makeMarker('searchlight', 0, 2777,2243),
	makeMarker('speaker', 1, 1165,1454),
	makeMarker('speaker', 1, 1169,1395),
	makeMarker('speaker', 2, 1179,1672),
	makeMarker('speaker', 2, 1193,1810),
	makeMarker('speaker', 2, 1011,1824),
	makeMarker('speaker', 3, 1853,1476),
	makeMarker('speaker', 3, 1746,1351),
	
	// special
	makeMarker('special', 1, 809,1029),
	makeMarker('special', 1, 857,1238),
	makeMarker('special', 2, 806,1090),
];

app.mapData.ziplines = [
	makeZipline(1, [750,1120], [821,1195]),
	makeZipline(2, [858,1288], [880,1356]),
	makeZipline(3, [1386,1272], [1439,1261]),
	makeZipline(4, [1140,1208], [1141,1250]),
	makeZipline(5, [1334,1363], [1322,1462]),
	makeZipline(6, [1185,1478], [1237,1529]),
	makeZipline(7, [1383,1570], [1439,1564]),
	makeZipline(8, [1260,1753], [1363,1803]),
	makeZipline(9, [1059,2054], [1150,2002]),
	makeZipline(10, [1651,1496], [1716,1575]),
	makeZipline(11, [1625,1462], [1746,1351]),
	makeZipline(12, [1914,1475], [1884,1575]),
	makeZipline(13, [2514,2459], [2651,2422]),
	makeZipline(14, [2774,2517], [2539,2529]),
	makeZipline(15, [2510,2228], [2614,2207]),
	makeZipline(16, [2775,2108], [2774,2269]),
	makeZipline(17, [1389,1203], [1454,1257]),
];

