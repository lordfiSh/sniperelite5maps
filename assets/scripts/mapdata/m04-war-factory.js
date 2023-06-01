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
	makeMarker('letter', 3, 1660,2000, true),
	makeMarker('letter', 4, 2142,2030),
	makeMarker('letter', 5, 2332,1986),
	makeMarker('letter', 6, 1781,1456, true),
	makeMarker('document', 1, 1553,1724, true),
	makeMarker('document', 2, 2794,2034),
	makeMarker('document', 3, 1992,1660, true),
	makeMarker('document', 4, 2326,2346),
	makeMarker('hidden-item', 1),
	makeMarker('hidden-item', 2, 2700,1967),
	makeMarker('hidden-item', 3),
	makeMarker('stone-eagle', 1),
	makeMarker('stone-eagle', 2),
	makeMarker('stone-eagle', 3),
	makeMarker('workbench', 1, 2298,1977),
	makeMarker('workbench', 2),
	makeMarker('workbench', 3, 2276,2335),
	
	// objectives
	makeMarker('primary', 1, 2352,2273),
	makeMarker('secondary', 1.1, 2803,1677),
	makeMarker('secondary', 1.2, 2772,1656),
	makeMarker('secondary', 1.2, 2749,1763),
	makeMarker('secondary', 2.1, 1811,1989),
	makeMarker('secondary', 2.2, 1838,2018),
	makeMarker('intel', 1, 1749,1665),
	makeMarker('intel', 2, 2829,2177),
	makeMarker('intel', 3, 2359,2017),
	
	// tools
	makeMarker('bolt-cutters', 0, 2194,2239),
	makeMarker('bolt-cutters', 0, 2162,2321),
	makeMarker('bolt-cutters', 0, 2192,2240),
	makeMarker('bolt-cutters', 0, 2064,2035),
	makeMarker('bolt-cutters', 0, 2128,2032),
	
	makeMarker('crowbar', 0, 2389,1204),
	
	makeMarker('door', 'padlock', 2339,2331),
	makeMarker('door', 'padlock', 2397,2332),
	makeMarker('door', 1, 2290,2011),
	makeMarker('door', 2, 2308,2329),
	makeMarker('key', 2, 2448,2224),
	makeMarker('key', 3, 1985,2001),
	
	makeMarker('satchel-charge', 0, 2150,2064),
	makeMarker('satchel-charge', 0, 2295,2355),
	
	// utilities
	makeMarker('body-box', 0, 2824,1755),
	makeMarker('body-box', 0, 2364,1997),
	makeMarker('body-box', 0, 2414,2329),
	makeMarker('body-box', 0, 2158,1918),
	makeMarker('body-box', 0, 1569,2039),
	
	makeMarker('generator', 0, 2698,1961),
	makeMarker('generator', 0, 2410,2092),
	
	makeMarker('supply-crate', 'crowbar', 2685,1438),
	makeMarker('supply-crate', 'padlock', 2691,1765),
	makeMarker('supply-crate', 'crowbar', 2306,1996),
	makeMarker('supply-crate', 'padlock', 2284,1996),
	makeMarker('supply-crate', 'padlock', 2255,2348),
	makeMarker('supply-crate', 'padlock', 2299,1895),
	
	makeMarker('zipline-start', 1, 2745,942),
	makeMarker('zipline-end', 1, 2517,1146),
	makeMarker('zipline-start', 2, 2348,1227),
	makeMarker('zipline-end', 2, 2231,1490),
	makeMarker('zipline-start', 3, 2304,1193),
	makeMarker('zipline-end', 3, ),
	makeMarker('zipline-start', 4, 2217,2204),
	makeMarker('zipline-end', 4, 2120,2084),
	
	// vehicles
	makeMarker('armoured-car', 0, 2009,2114),
	makeMarker('truck', 0, 2162,1863),
	makeMarker('truck', 0, 1933,2090),
	makeMarker('truck', 0, 2226,1857),
	
	// other
	makeMarker('rat-bomb', 0, 2786,912),
	
	makeMarker('searchlight', 0, 2731,1858),
	makeMarker('searchlight', 0, 2615,2089),
	
	makeMarker('invasion', 0, 2363,1974),
	makeMarker('invasion', 0, 2216,2167),
	makeMarker('invasion', 0, 1988,1922),
	
	makeMarker('alarm', 1, 2710,1986),
	makeMarker('speaker', 1, 2750,1855),
	makeMarker('speaker', 1, 2634,1979),
	makeMarker('speaker', 1, 2786,2119),
	
	makeMarker('alarm', 2, 2207,2158),
	makeMarker('speaker', 2, 2354,2125),
	makeMarker('speaker', 2, 2085,2173),
];
