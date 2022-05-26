app.mapData = {
	name: 'm03-spy-academy',
	tilePath: 'maps/m03-spy-academy/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [7359, 6720],
	//focus: [100, 100]
};

app.mapData.markers = [

	// Collect 41 Personal letters.
	makeMarker('letter', 11, 0, 0),
	makeMarker('letter', 12, 0, 0),
	makeMarker('letter', 13, 0, 0),
	makeMarker('letter', 14, 0, 0),
	makeMarker('letter', 15, 0, 0),

	// Collect 39 classified documents.
	makeMarker('document', 11, 0, 0),
	makeMarker('document', 12, 0, 0),
	makeMarker('document', 13, 0, 0),
	makeMarker('document', 14, 0, 0),
	makeMarker('document', 15, 0, 0),


	// Collect 24 Hidden Items.
	makeMarker('personal-item', 7, 0, 0),
	makeMarker('personal-item', 8, 0, 0),
	makeMarker('personal-item', 9, 0, 0),


	// Destroy 24 Dead-eye Targets.
	makeMarker('dead-eye-target', 7, 0, 0),
	makeMarker('dead-eye-target', 8, 0, 0),
	makeMarker('dead-eye-target', 9, 0, 0),


	// Gehr-Werkbänke 
	makeMarker('workbensh', 7, 0, 0),

	// MP-Werkbänke 
	makeMarker('workbench', 8, 0, 0),
	
	// Pistolen-Werkbänke 
	makeMarker('workbench', 9, 0, 0),

	
];
