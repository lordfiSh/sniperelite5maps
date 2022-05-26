app.mapData = {
	name: 'm06-liberation',
	tilePath: 'maps/m06-liberation/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [5440, 6783],
	//focus: [100, 100]
};

app.mapData.markers = [

	// Collect 41 Personal letters.
	makeMarker('letter', 27, 0, 0),
	makeMarker('letter', 28, 0, 0),
	makeMarker('letter', 29, 0, 0),
	makeMarker('letter', 30, 0, 0),
	makeMarker('letter', 31, 0, 0),


	// Collect 39 classified documents.
	makeMarker('document', 25, 0, 0),
	makeMarker('document', 26, 0, 0),
	makeMarker('document', 27, 0, 0),
	makeMarker('document', 28, 0, 0),
	makeMarker('document', 29, 0, 0),

	// Collect 24 Hidden Items.
	makeMarker('personal-item', 15, 0, 0),
	makeMarker('personal-item', 16, 0, 0),
	makeMarker('personal-item', 17, 0, 0),


	// Destroy 24 Dead-eye Targets.
	makeMarker('dead-eye-target', 16, 0, 0),
	makeMarker('dead-eye-target', 17, 0, 0),
	makeMarker('dead-eye-target', 18, 0, 0),


	// Gehr-Werkbänke 
	makeMarker('personal-item', 16, 0, 0),

	// MP-Werkbänke 
	makeMarker('personal-item', 18, 0, 0),
	
	// Pistolen-Werkbänke 
	makeMarker('personal-item', 18, 0, 0),

	
];