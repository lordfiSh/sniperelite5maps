app.mapData = {
	name: 'm02-occupied-residence',
	tilePath: 'maps/m02-occupied-residence/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [5344, 5632],
	//focus: [100, 100]
};

app.mapData.markers = [

	// Collect 41 Personal letters.
	makeMarker('letter', 7, 0, 0),
	makeMarker('letter', 8, 0, 0),
	makeMarker('letter', 9, 0, 0),
	makeMarker('letter', 10, 0, 0),


	// Collect 39 classified documents.
	makeMarker('document', 5, 0, 0),
	makeMarker('document', 6, 0, 0),
	makeMarker('document', 7, 0, 0),
	makeMarker('document', 8, 0, 0),
	makeMarker('document', 9, 0, 0),
	makeMarker('document', 10, 0, 0),

	// Collect 24 Hidden Items.
	makeMarker('personal-item', 4, 0, 0),
	makeMarker('personal-item', 5, 0, 0),
	makeMarker('personal-item', 6, 0, 0),


	// Destroy 24 Dead-eye Targets.
	makeMarker('dead-eye-target', 4, 0, 0),
	makeMarker('dead-eye-target', 5, 0, 0),
	makeMarker('dead-eye-target', 6, 0, 0),


	// Gehr-Werkbänke 
	makeMarker('workbench', 4, 0, 0),

	// MP-Werkbänke 
	makeMarker('workbench', 5, 0, 0),
	
	// Pistolen-Werkbänke 
	makeMarker('workbench', 6, 0, 0),

	
];
