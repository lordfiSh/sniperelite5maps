app.mapData = {
	name: 'm01',
	tilePath: 'maps/m01/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([175, 160], [7, 1]),
	center: [65, 75]
};

app.mapData.markers = [
	makeMarker('letter-from-home', 1, 95.453, 71.766),
	makeMarker('letter-from-home', 2, 78.969, 76.703),
	makeMarker('letter-from-home', 3, 92.891, 83.672),
	makeMarker('letter-from-home', 4, 78.750, 86.266),
	makeMarker('letter-from-home', 5, 97.828, 61.703),
	
	makeMarker('letter-to-home', 1, 85.734, 88.672),
	makeMarker('letter-to-home', 2, 116.016, 97.547),
	makeMarker('letter-to-home', 3, 99.344, 69.672),
	makeMarker('letter-to-home', 4, 105.156, 98.219),
	makeMarker('letter-to-home', 5, 108.594, 62.016),
	
	makeMarker('last-letter', 1, 116.688, 96.703),
	makeMarker('last-letter', 2, 106.359, 66.375),
	makeMarker('last-letter', 3, 55.375, 67.750),
	makeMarker('last-letter', 4, 109.391, 74.938),
	makeMarker('last-letter', 5, 111.156, 102.375),
	
	makeMarker('misc-document', 1, 91.734, 59.031),
	makeMarker('misc-document', 2, 110.875, 80.188),
	makeMarker('misc-document', 3, 69.328, 100.750),
	makeMarker('misc-document', 4, 90.828, 77.750),
	makeMarker('misc-document', 5, 77.938, 101.813),
	makeMarker('misc-document', 6, 105.219, 49.156),
	makeMarker('misc-document', 7, 85.625, 83.453),
	makeMarker('misc-document', 8, 64.750, 65.484),
	makeMarker('misc-document', 9, 84.984, 81.500),
	makeMarker('misc-document', 10, 98.516, 82.141),
	
	makeMarker('duty-roster', 1, 89.469, 75.969),
	makeMarker('duty-roster', 2, 102.547, 70.984),
	makeMarker('duty-roster', 3, 114.891, 95.703),
	makeMarker('duty-roster', 4, 70.125, 80.234),
	
	makeMarker('sniper-report', 1, 80.984, 111.547),
	
	makeMarker('deadeye-target', 1, 109.906, 89.219),
	makeMarker('deadeye-target', 2, 73.234, 83.516),
	makeMarker('deadeye-target', 3, 78.375, 45.250),
	
	makeMarker('generator', 0, 80.375, 112.109),
	makeMarker('generator', 0, 113.109, 102.813),
	makeMarker('generator', 0, 117.375, 100.125),
	makeMarker('generator', 0, 110.375, 71.719),
	makeMarker('generator', 0, 79.438, 84.750),
	makeMarker('generator', 0, 91.109, 80.531),
	makeMarker('generator', 0, 64.031, 84.938),
	makeMarker('generator', 0, 99.984, 71.234),
	makeMarker('generator', 0, 99.109, 80.844),
	
	makeMarker('objective-primary', 1.1, 87.969, 83.828),
	makeMarker('objective-primary', 1.2, 116.359, 87.953),
	
	makeMarker('objective-optional', 1, 105.156, 49.672),
	makeMarker('objective-optional', 2, 110.313, 96.813),
	makeMarker('objective-optional', 3, 80.438, 111.125)
];
