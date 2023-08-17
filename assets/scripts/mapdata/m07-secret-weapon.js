app.mapData = {
	name: 'm07-secret-weapon',
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
	makeMarker('letter', 1, 1753,2361),
	makeMarker('letter', 2, 1900,2763),
	makeMarker('letter', 3, 2135,1346),
	makeMarker('letter', 4, 2227,1747),
	makeMarker('letter', 5, 2644,1862),
	makeMarker('document', 1, 1746,2403),
	makeMarker('document', 2, 1846,895),
	makeMarker('document', 3, 2419,2121),
	makeMarker('document', 4, 1271,1540),
	makeMarker('document', 5, 189,843),
	makeMarker('hidden-item', 1, 2618,1812),
	makeMarker('hidden-item', 2, 2770,1121),
	makeMarker('hidden-item', 3, 1721,1185),
	makeMarker('stone-eagle', 1, 1785,2762),
	makeMarker('stone-eagle', 2, 2686,825),
	makeMarker('stone-eagle', 3, 1192,862),
	makeMarker('workbench', 1, 2300,1246),
	makeMarker('workbench', 2, 2554,1715),
	makeMarker('workbench', 3, 1294,1325),

	makeMarker('intel', 1, 1642,645),
	makeMarker('intel', 2, 1898,2775),
	makeMarker('intel', 3, 2409,2560),

	makeMarker('primary', 2, 1982,1652),
	makeMarker('secondary', 1.1, 1405,812),
	makeMarker('secondary', 1.2, 1220,846),
];
