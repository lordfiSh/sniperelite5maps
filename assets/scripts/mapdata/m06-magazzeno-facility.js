window.map = {
	name: 'm06-magazzeno-facility',
	tilePath: 'maps/m06-magazzeno-facility/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([176, 137], [34, 40]),
	center: [90, 90]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 126.500, 76.219),
	makeMarker('letter-from-home', 2, 112.125, 107.484),
	makeMarker('letter-from-home', 3, 105.438, 79.469),
	makeMarker('letter-from-home', 4, 86.641, 82.078),
	makeMarker('letter-from-home', 5, 70.859, 102.438),
	
	makeMarker('letter-to-home', 1, 121.906, 74.922),
	makeMarker('letter-to-home', 2, 104.656, 58.813),
	makeMarker('letter-to-home', 3, 81.547, 114.172),
	makeMarker('letter-to-home', 4, 132.578, 76.297),
	makeMarker('letter-to-home', 5, 62.781, 63.109),
	
	makeMarker('last-letter', 1, 113.781, 73.219),
	makeMarker('last-letter', 2, 89.656, 103.000),
	makeMarker('last-letter', 3, 132.484, 85.719),
	makeMarker('last-letter', 4, 93.531, 66.266),
	makeMarker('last-letter', 5, 73.703, 83.984),
	
	makeMarker('misc-document', 1, 134.703, 100.984),
	makeMarker('misc-document', 2, 79.203, 84.438),
	makeMarker('misc-document', 3, 136.438, 63.484),
	makeMarker('misc-document', 4, 123.281, 56.406),
	makeMarker('misc-document', 5, 150.672, 74.938),
	makeMarker('misc-document', 6, 128.188, 114.000),
	makeMarker('misc-document', 7, 103.078, 79.391),
	makeMarker('misc-document', 8, 87.500, 87.078),
	
	makeMarker('duty-roster', 1, 72.547, 103.766),
	makeMarker('duty-roster', 2, 90.563, 57.469),
	makeMarker('duty-roster', 3, 88.984, 111.578),
	makeMarker('duty-roster', 4, 89.313, 90.125),
	
	makeMarker('sniper-report', 1, 138.969, 98.203),
	makeMarker('sniper-report', 2, 87.922, 72.688),
	makeMarker('sniper-report', 3, 151.047, 77.875),
	makeMarker('sniper-report', 4, 130.031, 62.078),
	makeMarker('sniper-report', 5, 147.328, 67.859),
	
	makeMarker('deadeye-target', 1, 86.766, 123.422),
	makeMarker('deadeye-target', 2, 139.688, 98.078),
	makeMarker('deadeye-target', 3, 97.938, 75.875),
	
	makeMarker('generator', 0, 83.859, 63.703),
	makeMarker('generator', 0, 102.484, 106.391),
	makeMarker('generator', 0, 135.250, 101.000),
	makeMarker('generator', 0, 123.609, 87.375),
	makeMarker('generator', 0, 152.422, 76.703),
	
	makeMarker('objective-primary', 1.1, 151.359, 97.609),
	makeMarker('objective-primary', 1.2, 127.516, 114.078),
	
	makeMarker('objective-primary', 2.1, 129.859, 73.563),
	makeMarker('objective-primary', 2.2, 121.969, 107.844),
	
	makeMarker('objective-optional', 1, 86.547, 87.078),
	makeMarker('objective-optional', 1, 103.094, 79.906),
	
	makeMarker('objective-optional', 2, 91.531, 108.750),
	
	makeMarker('objective-optional', 3.1, 89.672, 59.891),
	makeMarker('objective-optional', 3.1, 83.094, 59.922),
	makeMarker('objective-optional', 3.1, 81.609, 111.641),
	makeMarker('objective-optional', 3.1, 140.422, 75.938),
	makeMarker('objective-optional', 3.1, 122.438, 55.734),
	
	makeMarker('objective-optional', 3.2, 90.922, 58.516),
];