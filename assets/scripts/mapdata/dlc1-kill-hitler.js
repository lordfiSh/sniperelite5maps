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
