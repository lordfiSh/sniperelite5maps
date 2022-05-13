window.map = {
	name: 'dlc1-target-fuehrer',
	tilePath: 'maps/dlc1-target-fuehrer/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([0, 0], [185, 150]),
	center: [130, 50]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 44.938,77.938),
	makeMarker('letter-from-home', 2, 82.609,69.063),
	makeMarker('letter-from-home', 3, 116.938,55.063),
	makeMarker('letter-from-home', 4, 57.813,63.125),
	makeMarker('letter-from-home', 5, 74.906,98.313),
	
	makeMarker('letter-to-home', 1, 50.531,81.219),
	makeMarker('letter-to-home', 2, 77.094,98.594),
	makeMarker('letter-to-home', 3, 52.297,82.297),
	makeMarker('letter-to-home', 4, 106.063,69.094),
	makeMarker('letter-to-home', 5, 94.188,62.813),
	
	makeMarker('last-letter', 1, 48.969,74.938),
	makeMarker('last-letter', 2, 51.719,64.063),
	makeMarker('last-letter', 3, 86.359,81.531),
	makeMarker('last-letter', 4, 100.844,78.016),
	makeMarker('last-letter', 5, 119.813,51.938),
	
	makeMarker('misc-document', 1, 125.313,76.875),
	makeMarker('misc-document', 2, 91.094,74.391),
	makeMarker('misc-document', 3, 81.359,69.313),
	makeMarker('misc-document', 4, 93.188,71.688),
	makeMarker('misc-document', 5, 85.828,68.031),
	makeMarker('misc-document', 6, 122.438,59.125),
	
	makeMarker('duty-roster', 1, 124.719,75.125),
	makeMarker('duty-roster', 2, 80.641,69.531),
	makeMarker('duty-roster', 3, 52.031,95.219),
	makeMarker('duty-roster', 4, 71.703,82.859),
	
	makeMarker('sniper-report', 1, 74.766,88.844),
	makeMarker('sniper-report', 2, 113.469,76.750),
	makeMarker('sniper-report', 3, 97.219,67.875),
	
	makeMarker('deadeye-target', 1, 90.094,60.875),
	makeMarker('deadeye-target', 2, 112.219,85.063),
	makeMarker('deadeye-target', 3, 102.813,12.813),
	
	makeMarker('generator', 0, 96.344,73.000),
	makeMarker('generator', 0, 62.719,86.063),
	makeMarker('generator', 0, 47.328,82.875),
	makeMarker('generator', 0, 50.922,102.188),
	makeMarker('generator', 0, 53.781,67.250),
	makeMarker('generator', 0, 103.281,59.000),
	
	makeMarker('objective-primary', 1, 122.047,59.578),
	
	makeMarker('objective-optional', 1, 123.375,61.203),
	makeMarker('objective-optional', 2, 83.406,66.906),
	makeMarker('objective-optional', 2, 46.656,82.969),
	
	makeMarker('objective-exit', 1, 99.391,55.016),
	makeMarker('objective-exit', 1, 79.031,104.031),
];