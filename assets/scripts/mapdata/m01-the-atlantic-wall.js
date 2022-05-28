app.mapData = {
	name: 'm01-the-atlantic-wall',
	tilePath: 'maps/m_coast/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4, // the zoom level where the combined tile size equals the dimensions below
	defaultZoom: 2,
	dimensions: [3840, 3840],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('letter', 1, 2502, 2916),
	makeMarker('letter', 2, 1967, 2125),
	makeMarker('letter', 3, 3057, 1878),
	makeMarker('letter', 4, 2044, 1392),
	makeMarker('letter', 5, 1255, 1059),
	makeMarker('letter', 6, 1596, 928),
	makeMarker('document', 1, 1290, 3043),
	makeMarker('document', 2, 3034, 1101),
	makeMarker('document', 3, 2745, 2619),
	makeMarker('document', 4, 3036, 1954),
	makeMarker('personal-item', 1, 1682, 1212),
	makeMarker('personal-item', 2, 2044, 2087),
	makeMarker('personal-item', 3, 2415, 826),
	makeMarker('dead-eye-target', 1, 2551, 3208),
	makeMarker('dead-eye-target', 2, 2027, 1360),
	makeMarker('dead-eye-target', 3, 1311, 2525),
	makeMarker('workbench', 1, 1618, 3166),
	makeMarker('workbench', 2, 3059, 1123),
	makeMarker('workbench', 3, 1621, 951),
];
