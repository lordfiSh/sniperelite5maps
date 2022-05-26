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
	makeMarker('letter', 1, 2502,2916),
	makeMarker('letter', 2, 3057,1878),
	makeMarker('letter', 3, 2023,1392),
	makeMarker('letter', 4, 1596,928),
	makeMarker('letter', 5, 1255,1059),
	makeMarker('letter', 6, 1982,2124),
	makeMarker('document', 1, 1290,3043),
	makeMarker('document', 2, 2821,2641),
	makeMarker('document', 3, 3036,1954),
	makeMarker('document', 4, 3039,1103),
	makeMarker('personal-item', 1, 2428,836),
	makeMarker('personal-item', 2, 1665,1219),
	makeMarker('personal-item', 3, 2033,2089),
	makeMarker('dead-eye-target', 1,2553,3187),
	makeMarker('dead-eye-target', 2, 2027,1360),
	makeMarker('dead-eye-target', 3, 1315,2530),
	makeMarker('workbench', 1,1603,3105),
	makeMarker('workbench', 2, 3058,1116),
	makeMarker('workbench', 3, 1597,942),


	makeMarker('other', 1, 1289,1051),
];
