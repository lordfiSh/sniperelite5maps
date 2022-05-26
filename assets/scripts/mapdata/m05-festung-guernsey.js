app.mapData = {
	name: 'm05-festung-guernsey',
	tilePath: 'maps/m05-festung-guernsey/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [7808, 6463],
	//focus: [100, 100]
};

app.mapData.markers = [

	// Collect 41 Personal letters.
	makeMarker('letter', 22, 0, 0),
	makeMarker('letter', 23, 0, 0),
	makeMarker('letter', 24, 0, 0),
	makeMarker('letter', 25, 0, 0),
	makeMarker('letter', 26, 0, 0),


	// Collect 39 classified documents.
	makeMarker('document', 20, 0, 0),
	makeMarker('document', 21, 0, 0),
	makeMarker('document', 22, 0, 0),
	makeMarker('document', 23, 0, 0),
	makeMarker('document', 24, 0, 0),

	// Collect 24 Hidden Items.
	makeMarker('personal-item', 13, 0, 0),
	makeMarker('personal-item', 15, 0, 0),
	makeMarker('personal-item', 15, 0, 0),


	// Destroy 24 Dead-eye Targets.
	makeMarker('dead-eye-target', 13, 0, 0),
	makeMarker('dead-eye-target', 14, 0, 0),
	makeMarker('dead-eye-target', 15, 0, 0),


	// Gehr-Werkbänke 
	makeMarker('personal-item', 13, 0, 0),

	// MP-Werkbänke 
	makeMarker('personal-item', 14, 0, 0),
	
	// Pistolen-Werkbänke 
	makeMarker('personal-item', 15, 0, 0),

	
];