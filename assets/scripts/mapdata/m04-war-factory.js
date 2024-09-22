app.mapData = {
	name: 'm04-war-factory',
	tilePath: 'maps/m_factory/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [3512, 3520],
	//focus: [100, 100]
};

app.mapData.markers = [
	// collectibles
	makeMarker('letter', 1, 2654,1403),
	makeMarker('letter', 2, 2758,1701),
	makeMarker('letter', 3, 1655,2029),
	makeMarker('letter', 4, 2142,2030),
	makeMarker('letter', 5, 2332,1986),
	makeMarker('letter', 6, 1781,1456),
	makeMarker('document', 1, 1371,1725),
	makeMarker('document', 2, 2794,2034),
	makeMarker('document', 3, 1991,1652),
	makeMarker('document', 4, 2326,2346),
	makeMarker('hidden-item', 1, 2700,1967),
	makeMarker('hidden-item', 2, 1464,1741),
	makeMarker('hidden-item', 3, 1062,1852),
	makeMarker('stone-eagle', 1, 1842,1266),
	makeMarker('stone-eagle', 2, 1670,2078),
	makeMarker('stone-eagle', 3, 955,2182),
	makeMarker('workbench', 1, 2298,1977),
	makeMarker('workbench', 2, 1715,1744),
	makeMarker('workbench', 3, 2276,2335),
	
	// objectives
	makeMarker('primary', 1.1, 1669,2096),
	makeMarker('primary', 1.2, 1765,2131),
	makeMarker('primary', 1.2, 1645,2129),
	makeMarker('primary', 2, 2352,2273),
	makeMarker('primary', 3, 1377,1725),
	makeMarker('primary', 4, 1050,2015),
	makeMarker('secondary', 1.1, 2803,1677),
	makeMarker('secondary', 1.2, 2772,1656),
	makeMarker('secondary', 1.2, 2749,1763),
	makeMarker('secondary', 2.1, 1811,1989),
	makeMarker('secondary', 2.2, 1838,2018),
	makeMarker('kill-list', 1, 1552,1603),
	makeMarker('intel', 1, 1749,1665),
	makeMarker('intel', 2, 2829,2177),
	makeMarker('intel', 3, 2359,2017),
	makeMarker('intel', 4, 1771,1466),
	
	// tools
	makeMarker('bolt-cutters', 0, 2162,2321),
	makeMarker('bolt-cutters', 0, 2192,2240),
	makeMarker('bolt-cutters', 0, 2064,2035),
	makeMarker('bolt-cutters', 0, 2128,2032),
	makeMarker('bolt-cutters', 0, 1811,1518),
	
	makeMarker('crowbar', 0, 2389,1204),
	makeMarker('crowbar', 0, 1746,1582),
	
	makeMarker('door', 'padlock', 2339,2331),
	makeMarker('door', 'padlock', 2397,2332),
	makeMarker('door', 1, 2290,2011),
	makeMarker('door', 2, 2308,2329),
	makeMarker('door', 4, 1716,1718),
	makeMarker('key', 2, 2448,2224),
	makeMarker('key', 3, 1985,2001),
	makeMarker('key', 4, 1614,1684),
	makeMarker('code', 1, 1556,1725),
	
	makeMarker('satchel-charge', 0, 2150,2064),
	makeMarker('satchel-charge', 0, 2295,2355),
	
	// utilities
	makeMarker('body-box', 0, 2824,1755),
	makeMarker('body-box', 0, 2364,1997),
	makeMarker('body-box', 0, 2414,2329),
	makeMarker('body-box', 0, 2158,1918),
	makeMarker('body-box', 0, 1569,2039),
	makeMarker('body-box', 0, 1756,2085),
	makeMarker('body-box', 0, 1715,1618),
	makeMarker('body-box', 0, 1428,1731),
	makeMarker('body-box', 0, 1224,1823),
	makeMarker('body-box', 0, 1241,1902),
	makeMarker('body-box', 0, 1565,1750),
	
	makeMarker('generator', 0, 2698,1961),
	makeMarker('generator', 0, 2410,2092),
	makeMarker('generator', 0, 1527,2099),
	makeMarker('generator', 0, 1860,1706),
	makeMarker('generator', 0, 1372,1917),
	makeMarker('generator', 0, 1522,1594),
	
	makeMarker('supply-crate', 'crowbar', 2685,1438),
	makeMarker('supply-crate', 'padlock', 2691,1765),
	makeMarker('supply-crate', 'crowbar', 2306,1996),
	makeMarker('supply-crate', 'padlock', 2284,1996),
	makeMarker('supply-crate', 'padlock', 2255,2348),
	makeMarker('supply-crate', 'padlock', 2299,1895),
	makeMarker('supply-crate', 'padlock', 1886,1624),
	makeMarker('supply-crate', 'open', 1513,2164),
	makeMarker('supply-crate', 'open', 1550,1588),
	makeMarker('supply-crate', 'crowbar', 1702,1740),
	makeMarker('supply-crate', 'padlock', 1727,1737),
	makeMarker('supply-crate', 'open', 1224,1917),
	makeMarker('supply-crate', 'padlock', 1066,1819),
	makeMarker('supply-crate', 'crowbar', 1777,1500),
	makeMarker('supply-crate', 'crowbar', 1906,1268),
	makeMarker('supply-crate', 'padlock', 2611,2076),
	makeMarker('supply-crate', 'open', 2551,2282),
	
	// vehicles
	makeMarker('armoured-car', 0, 2009,2114),
	makeMarker('armoured-car', 0, 2019,2094),
	makeMarker('armoured-car', 0, 1734,1652),
	makeMarker('armoured-car', 0, 1740,1615),
	
	makeMarker('truck', 0, 2162,1863),
	makeMarker('truck', 0, 1933,2090),
	makeMarker('truck', 0, 2226,1857),
	makeMarker('truck', 0, 1751,1621),
	makeMarker('truck', 0, 1666,1623),
	
	// other
	makeMarker('rat-bomb', 0, 2786,912),
	
	makeMarker('searchlight', 0, 2731,1858),
	makeMarker('searchlight', 0, 2615,2089),
	makeMarker('searchlight', 0, 1499,1628),
	
	makeMarker('invasion', 0, 2363,1974),
	makeMarker('invasion', 0, 2216,2167),
	makeMarker('invasion', 0, 1988,1922),
	makeMarker('invasion', 0, 2088,1724),
	makeMarker('invasion', 0, 1383,1724),
	makeMarker('invasion', 0, 1575,2087),
	
	makeMarker('alarm', 1, 2710,1986),
	makeMarker('speaker', 1, 2750,1855),
	makeMarker('speaker', 1, 2634,1979),
	makeMarker('speaker', 1, 2786,2119),
	
	makeMarker('alarm', 2, 2207,2158),
	makeMarker('speaker', 2, 2354,2125),
	makeMarker('speaker', 2, 2085,2173),
	
	makeMarker('alarm', 3, 1295,1941),
	makeMarker('speaker', 3, 1317,2029),
	makeMarker('speaker', 3, 1303,1741),
	makeMarker('speaker', 3, 1105,1982),
	
	
	makeMarker('special', 1, 1562,1603),
	makeMarker('special', 1, 1588,1612),
	makeMarker('special', 1, 1578,1619),
	
	makeMarker('special', 2, 1266,1821),
];

app.mapData.ziplines = [
	makeZipline(1, [2745,942], [2517,1146]),
	makeZipline(2, [2348,1227], [2231,1490]),
	makeZipline(3, [2304,1193], [2092,1230]),
	makeZipline(4, [2014,1220], [1873,1154]),
	makeZipline(5, [2217,2204], [2120,2084]),
];
