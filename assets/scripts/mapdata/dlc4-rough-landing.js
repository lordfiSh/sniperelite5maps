app.mapData = {
	name: 'dlc4-rough-landing',
	tilePath: 'maps/m_dlc02_marathon/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [4400, 3680],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('letter', 1, 2253,2802),
	makeMarker('letter', 2, 1314,2550),
	makeMarker('letter', 3, 1008,1513),
	makeMarker('document', 1, 999,3016),
	makeMarker('document', 2, 944,2989),

	// objectives
	makeMarker('primary', 1, 1314,2704),
	makeMarker('primary', 2, 2293,2493),
	makeMarker('primary', 3, 1609,1053),
	makeMarker('primary', 4, 2420,1381),

	makeMarker('secondary', 1, 1453,2723),
	makeMarker('secondary', 2.1, 1836,2796),
	makeMarker('secondary', 2.2, 2203,2040),
	makeMarker('secondary', 3, 2337,2791),

	makeMarker('kill-list', 1, 2002,1138),
	makeMarker('key', 1, 2420,1381),
	makeMarker('hidden-item', 1, 2631,1489),
	makeMarker('hidden-item', 2, 2208,2516),
	makeMarker('stone-eagle', 1, 1730,1877),
	makeMarker('stone-eagle', 2, 2182,2780),
	makeMarker('stone-eagle', 3, 2868,2098),
	makeMarker('generator', 0, 1399,2362),
	makeMarker('generator', 0, 1534,2617),
	makeMarker('truck', 0, 1836,2906),
	makeMarker('truck', 0, 1762,2629),
	makeMarker('truck', 0, 2338,3148),
	makeMarker('truck', 0, 2270,1486),
	makeMarker('vip-car', 0, 2371,2418),
	makeMarker('vip-car', 0, 2451,1525),
	makeMarker('workbench', 1, 965,3033),
	makeMarker('workbench', 2, 980,1496),
	makeMarker('workbench', 3, 2220,1504),

	// tools
	makeMarker('bolt-cutters', 0, 1790,2514),
	makeMarker('satchel-charge', 0, 1796,2519),
];
