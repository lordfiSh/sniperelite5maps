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
	makeMarker('letter', 1, 2656,1397),
	makeMarker('letter', 2, 2748,1669),
	makeMarker('letter', 3, 1660,2000),
	makeMarker('letter', 4, 2143,2051),
	makeMarker('letter', 5, 2301,1972),
	makeMarker('letter', 6, 1781,1456),
	makeMarker('document', 1, 1553,1724),
	makeMarker('document', 2, 2805,202),
	makeMarker('document', 3, 1992,1660),
	makeMarker('document', 4, 2326,2346),
	makeMarker('hidden-item', 1),
	makeMarker('hidden-item', 2),
	makeMarker('hidden-item', 3),
	makeMarker('stone-eagle', 1),
	makeMarker('stone-eagle', 2),
	makeMarker('stone-eagle', 3),
	makeMarker('workbench', 0),
	makeMarker('workbench', 0),
	makeMarker('workbench', 0),
];
