app.mapData = {
	name: 'm02-occupied-residence',
	tilePath: 'maps/m_chateau/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [3408, 3408],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('letter', 1, 2033,1666),
	makeMarker('letter', 2, 2188,1666),
	makeMarker('letter', 3, 1981,1760),
	makeMarker('letter', 4, 2214,2078),
	makeMarker('document', 1, 2030,1684), // also 2119,1272 & 1516,1636
	makeMarker('document', 2, 2013,1598),
	makeMarker('document', 3, 2041,1610),
	makeMarker('document', 4, 1710,2326),
	makeMarker('document', 5, 1672,2383),
	makeMarker('document', 6, 2037,1624),
	makeMarker('personal-item', 1, 2189,1651),
	makeMarker('personal-item', 2, 1983,1747),
	makeMarker('personal-item', 3,2201,2072),
	makeMarker('dead-eye-target', 1, 2202,2155),
	makeMarker('dead-eye-target', 2, 1702,1390),
	makeMarker('dead-eye-target', 3, 1898,823),
	makeMarker('workbench', 1, 1967,1789),
	makeMarker('workbench', 2, 1702,2341),
	makeMarker('workbench', 3, 2325,1221),


];
