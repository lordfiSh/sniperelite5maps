app.mapData = {
	name: 'm04-war-factory',
	tilePath: 'maps/m04-war-factory/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [6592, 7039],
	//focus: [100, 100]
};

app.mapData.markers = [

	// Collect 41 Personal letters.
	makeMarker('letter', 16, 0, 0),
	makeMarker('letter', 17, 0, 0),
	makeMarker('letter', 18, 0, 0),
	makeMarker('letter', 19, 0, 0),
	makeMarker('letter', 20, 0, 0),
	makeMarker('letter', 21, 0, 0),

	// Collect 39 classified documents.
	makeMarker('document', 16, 0, 0),
	makeMarker('document', 17, 0, 0),
	makeMarker('document', 18, 0, 0),
	makeMarker('document', 19, 0, 0),

	// Collect 24 Hidden Items.
	makeMarker('personal-item', 10, 0, 0),
	makeMarker('personal-item', 11, 0, 0),
	makeMarker('personal-item', 12, 0, 0),


	// Destroy 24 Dead-eye Targets.
	makeMarker('dead-eye-target', 10, 0, 0),
	makeMarker('dead-eye-target', 11, 0, 0),
	makeMarker('dead-eye-target', 12, 0, 0),


	// Gehr-Werkbänke 
	makeMarker('personal-item', 10, 0, 0),

	// MP-Werkbänke 
	makeMarker('personal-item', 11, 0, 0),
	
	// Pistolen-Werkbänke 
	makeMarker('personal-item', 12, 0, 0),

	
];