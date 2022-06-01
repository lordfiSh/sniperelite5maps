app.mapData = {
	name: 'dlc1-kill-hitler',
	tilePath: 'maps/m_dlc_killhitler/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [3408, 3408],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('letter', 1),
	makeMarker('letter', 2),
	makeMarker('letter', 3),
	makeMarker('letter', 4),
	makeMarker('letter', 5),
	makeMarker('document', 1),
	makeMarker('document', 2),
	makeMarker('document', 3),
	makeMarker('document', 4),
	makeMarker('document', 5),
	makeMarker('personal-item', 1),
	makeMarker('personal-item', 2),
	makeMarker('personal-item', 3),
	makeMarker('dead-eye-target', 1),
	makeMarker('dead-eye-target', 2),
	makeMarker('dead-eye-target', 3),
	makeMarker('workbench', 0),
	makeMarker('workbench', 0),
	makeMarker('workbench', 0),
];
