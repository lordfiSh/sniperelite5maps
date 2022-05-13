112.203, 95.938
window.map = {
	name: 'm05-abrunza-monastery',
	tilePath: 'maps/m05-abrunza-monastery/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([187, 231], [6, 31]),
	center: [95, 130]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 76.656, 182.125),
	makeMarker('letter-from-home', 2, 89.031, 110.344),
	makeMarker('letter-from-home', 3, 102.813, 98.969),
	makeMarker('letter-from-home', 4, 120.844, 159.781),
	makeMarker('letter-from-home', 5, 110.343, 96.719),
	
	makeMarker('letter-to-home', 1, 140.453, 113.938),
	makeMarker('letter-to-home', 2, 93.406, 109.094),
	makeMarker('letter-to-home', 3, 81.953, 139.672),
	makeMarker('letter-to-home', 4, 77.625, 177.922),
	makeMarker('letter-to-home', 5, 107.500, 89.000),
	
	makeMarker('last-letter', 1, 93.562, 183.391),
	makeMarker('last-letter', 2, 106.328, 102.8120),
	makeMarker('last-letter', 3, 76.219, 135.000),
	makeMarker('last-letter', 4, 58.781, 164.156),
	makeMarker('last-letter', 5, 88.437, 189.047),
	
	makeMarker('misc-document', 1, 94.516, 193.328),
	makeMarker('misc-document', 2, 82.297, 131.6410),
	makeMarker('misc-document', 3, 84.125, 188.766),
	makeMarker('misc-document', 4, 110.828, 189.813),
	makeMarker('misc-document', 5, 113.688, 93.6250),
	makeMarker('misc-document', 6, 133.922, 128.297),
	makeMarker('misc-document', 7, 81.563, 187.734),
	makeMarker('misc-document', 8, 105.516, 127.0470),
	makeMarker('misc-document', 9, 140.594, 114.719),
	makeMarker('misc-document', 10, 94.938, 110.406),
	makeMarker('misc-document', 11, 139.812, 136.188),
	
	makeMarker('duty-roster', 1, 123.969, 156.719),
	makeMarker('duty-roster', 2, 76.031, 178.781),
	makeMarker('duty-roster', 3, 138.719, 130.3750),
	makeMarker('duty-roster', 4, 79.593, 134.8120),
	
	makeMarker('sniper-report', 1, 63.719, 174.812),
	makeMarker('sniper-report', 2, 98.094, 131.781),
	
	makeMarker('deadeye-target', 1, 81.875, 181.407),
	makeMarker('deadeye-target', 2, 126.281, 160.406),
	makeMarker('deadeye-target', 3, 84.906, 132.735),
	
	makeMarker('generator', 0, 112.359, 95.938),
	makeMarker('generator', 0, 89.469, 108.500),
	makeMarker('generator', 0, 103.625, 188.688),
	makeMarker('generator', 0, 78.594, 137.891),
	makeMarker('generator', 0, 124.219, 159.625),
	
	makeMarker('objective-primary', 1, 92.906, 192.282),
	makeMarker('objective-primary', 2, 78.156, 133.156),
	
	makeMarker('objective-optional', 1, 72.500, 130.469),
	makeMarker('objective-optional', 1, 118.593, 123.312),
	makeMarker('objective-optional', 1, 50.470, 168.219),
	
	makeMarker('objective-optional', 2.1, 106.843, 101.562),
	makeMarker('objective-optional', 2.2, 140.906, 113.687),
	makeMarker('objective-optional', 2.3, 108.875, 184.125),
	makeMarker('objective-optional', 2.4, 63.219, 173.281),
	
	makeMarker('objective-optional', 3, 113.094, 93.188),
	makeMarker('objective-optional', 3, 134.953, 128.656),
	makeMarker('objective-optional', 3, 84.125, 188.406),
	makeMarker('objective-optional', 3, 110.312, 190.500),
	
	makeMarker('objective-exit', 1, 53.984, 161.156),
	makeMarker('objective-exit', 1, 128.843, 161.094)
];