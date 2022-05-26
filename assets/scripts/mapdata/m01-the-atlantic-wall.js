app.mapData = {
	name: 'm01-the-atlantic-wall',
	tilePath: 'maps/m01-the-atlantic-wall/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [6399, 5760],
	//focus: [100, 100]
};

app.mapData.markers = [

	// Collect 41 Personal letters.
	makeMarker('letter', 1, 0, 0),
	makeMarker('letter', 2, 0, 0),
	makeMarker('letter', 3, 0, 0),
	makeMarker('letter', 4, 0, 0),
	makeMarker('letter', 5, 0, 0),
	makeMarker('letter', 6, 0, 0),

	// Collect 39 classified documents.
	makeMarker('document', 1, 0, 0),
	makeMarker('document', 2, 0, 0),
	makeMarker('document', 3, 0, 0),
	makeMarker('document', 4, 0, 0),

	// Collect 24 Hidden Items.
	makeMarker('personal-item', 1, 0, 0),
	makeMarker('personal-item', 2, 0, 0),
	makeMarker('personal-item', 3, 0, 0),


	// Destroy 24 Dead-eye Targets.
	makeMarker('dead-eye-target', 1, 0, 0),
	makeMarker('dead-eye-target', 2, 0, 0),
	makeMarker('dead-eye-target', 3, 0, 0),


	// Gehr-Werkbänke 
	makeMarker('workbench', 1, 0, 0),

	// MP-Werkbänke 
	makeMarker('pworkbench', 2, 0, 0),
	
	// Pistolen-Werkbänke 
	makeMarker('workbench', 3, 0, 0),


];
