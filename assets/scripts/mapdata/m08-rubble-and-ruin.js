app.mapData = {
	name: 'm08-rubble-and-ruin',
	tilePath: 'maps/m08-rubble-and-ruin/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [6111, 6720],
	//focus: [100, 100]
};

app.mapData.markers = [

	// Collect 41 Personal letters.
	makeMarker('letter', 37, 0, 0),
	makeMarker('letter', 38, 0, 0),
	makeMarker('letter', 39, 0, 0),
	makeMarker('letter', 40, 0, 0),
	makeMarker('letter', 41, 0, 0),


	// Collect 39 classified documents.
	makeMarker('document', 35, 0, 0),
	makeMarker('document', 36, 0, 0),
	makeMarker('document', 37, 0, 0),
	makeMarker('document', 38, 0, 0),
	makeMarker('document', 39, 0, 0),

	// Collect 24 Hidden Items.
	makeMarker('personal-item', 22, 0, 0),
	makeMarker('personal-item', 23, 0, 0),
	makeMarker('personal-item', 24, 0, 0),


	// Destroy 24 Dead-eye Targets.
	makeMarker('dead-eye-target', 22, 0, 0),
	makeMarker('dead-eye-target', 23, 0, 0),
	makeMarker('dead-eye-target', 24, 0, 0),


	// Gehr-Werkbänke 
	makeMarker('personal-item', 22, 0, 0),

	// MP-Werkbänke 
	makeMarker('personal-item', 23, 0, 0),
	
	// Pistolen-Werkbänke 
	makeMarker('personal-item', 24, 0, 0),

	
];