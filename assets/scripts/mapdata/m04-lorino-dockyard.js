window.map = {
	name: 'm04-lorino-dockyard',
	tilePath: 'maps/m04-lorino-dockyard/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([210, 200], [15, 10]),
	center: [115,65]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 127.766,111.328),
	makeMarker('letter-from-home', 2, 118.641,103.859),
	makeMarker('letter-from-home', 3, 136.703,143.891),
	makeMarker('letter-from-home', 4, 81.000,133.719),
	makeMarker('letter-from-home', 5, 96.906,153.688),
	
	makeMarker('letter-to-home', 1, 100.984,72.625),
	makeMarker('letter-to-home', 2, 82.375,95.906),
	makeMarker('letter-to-home', 3, 64.109,108.313),
	makeMarker('letter-to-home', 4, 113.453,63.672),
	makeMarker('letter-to-home', 5, 88.094,119.281),
	
	makeMarker('last-letter', 1, 126.500,84.844),
	makeMarker('last-letter', 2, 140.375,126.031),
	makeMarker('last-letter', 3, 95.891,131.063),
	makeMarker('last-letter', 4, 80.844,119.719),
	makeMarker('last-letter', 5, 75.625,97.250),
	
	makeMarker('misc-document', 1, 135.500,104.141),
	makeMarker('misc-document', 2, 69.016,99.000),
	makeMarker('misc-document', 3, 95.109,80.797),
	makeMarker('misc-document', 4, 134.656,102.813),
	makeMarker('misc-document', 5, 84.406,133.156),
	makeMarker('misc-document', 6, 76.688,110.750),
	makeMarker('misc-document', 7, 84.750,113.406),
	makeMarker('misc-document', 8, 69.609,98.781),
	
	makeMarker('duty-roster', 1, 85.469,122.594),
	makeMarker('duty-roster', 2, 69.063,101.188),
	makeMarker('duty-roster', 3, 88.719,82.688),
	makeMarker('duty-roster', 4, 126.594,77.594),
	
	makeMarker('sniper-report', 1, 62.906,138.188),
	makeMarker('sniper-report', 2, 138.797,143.609),
	
	makeMarker('deadeye-target', 1, 80.250,182.109),
	makeMarker('deadeye-target', 2, 71.484,81.500),
	makeMarker('deadeye-target', 3, 45.406,95.734),
	
	makeMarker('generator', 0, 137.203,143.250),
	makeMarker('generator', 0, 140.219,111.594),
	makeMarker('generator', 0, 80.813,135.375),
	makeMarker('generator', 0, 76.938,104.531),
	makeMarker('generator', 0, 58.031,117.500),
	
	makeMarker('objective-primary', 1, 148.688,110.906),
	makeMarker('objective-primary', 1, 75.063,97.484),
	makeMarker('objective-primary', 2.1, 87.078,88.641),
	makeMarker('objective-primary', 2.1, 64.688,115.094),
	makeMarker('objective-primary', 2.1, 54.422,145.719),
	makeMarker('objective-primary', 2.1, 143.297,127.328),
	makeMarker('objective-primary', 2.1, 123.281,157.422),
	makeMarker('objective-primary', 2.2, 104.594,123.188),
	makeMarker('objective-primary', 2.3, 134.953,104.000),
	
	makeMarker('objective-optional', 1, 68.547,101.391),
	makeMarker('objective-optional', 2, 52.859,114.203),
	makeMarker('objective-optional', 2, 143.719,111.406),
	makeMarker('objective-optional', 3, 82.078,127.656),
	makeMarker('objective-optional', 4, 148.594,117.563)
];