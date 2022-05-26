app.mapData = {
	name: 'm07-secret-weapon',
	tilePath: 'maps/m07-secret-weapon/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [6848, 6879],
	//focus: [100, 100]
};

app.mapData.markers = [

	// Collect 41 Personal letters.
	makeMarker('letter', 32, 0, 0),
	makeMarker('letter', 33, 0, 0),
	makeMarker('letter', 34, 0, 0),
	makeMarker('letter', 35, 0, 0),
	makeMarker('letter', 36, 0, 0),


	// Collect 39 classified documents.
	makeMarker('document', 30, 0, 0),
	makeMarker('document', 31, 0, 0),
	makeMarker('document', 32, 0, 0),
	makeMarker('document', 33, 0, 0),
	makeMarker('document', 34, 0, 0),

	// Collect 24 Hidden Items.
	makeMarker('personal-item', 19, 0, 0),
	makeMarker('personal-item', 20, 0, 0),
	makeMarker('personal-item', 21, 0, 0),


	// Destroy 24 Dead-eye Targets.
	makeMarker('dead-eye-target', 19, 0, 0),
	makeMarker('dead-eye-target', 20, 0, 0),
	makeMarker('dead-eye-target', 21, 0, 0),


	// Gehr-Werkbänke 
	makeMarker('personal-item', 19, 0, 0),

	// MP-Werkbänke 
	makeMarker('personal-item', 20, 0, 0),
	
	// Pistolen-Werkbänke 
	makeMarker('personal-item', 21, 0, 0),

	
];
