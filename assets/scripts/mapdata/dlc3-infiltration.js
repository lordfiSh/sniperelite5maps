window.map = {
	name: 'dlc3-infiltration',
	tilePath: 'maps/dlc3-infiltration/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([300, 300], [0, 0]),
	center: [100, 100]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, ),
	makeMarker('letter-from-home', 2, ),
	makeMarker('letter-from-home', 3, ),
	makeMarker('letter-from-home', 4, ),
	makeMarker('letter-from-home', 5, ),
	
	makeMarker('letter-to-home', 1, ),
	makeMarker('letter-to-home', 2, ),
	makeMarker('letter-to-home', 3, ),
	makeMarker('letter-to-home', 4, ),
	makeMarker('letter-to-home', 5, ),
	
	makeMarker('last-letter', 1, ),
	makeMarker('last-letter', 2, ),
	makeMarker('last-letter', 3, ),
	makeMarker('last-letter', 4, ),
	makeMarker('last-letter', 5, ),
	
	makeMarker('misc-document', 1, ),
	makeMarker('misc-document', 2, ),
	makeMarker('misc-document', 3, ),
	makeMarker('misc-document', 4, ),
	makeMarker('misc-document', 5, ),
	makeMarker('misc-document', 6, ),
	makeMarker('misc-document', 7, ),
	makeMarker('misc-document', 8, ),
	makeMarker('misc-document', 9, ),
	makeMarker('misc-document', 10, ),
	
	makeMarker('duty-roster', 1, ),
	makeMarker('duty-roster', 2, ),
	makeMarker('duty-roster', 3, ),
	makeMarker('duty-roster', 4, ),
	
	makeMarker('sniper-report', 1, ),
	makeMarker('sniper-report', 2, ),
	
	makeMarker('deadeye-target', 1, ),
	makeMarker('deadeye-target', 2, ),
	makeMarker('deadeye-target', 3, ),
	
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	makeMarker('generator', 0, ),
	
	makeMarker('objective-primary', 1),
	
	makeMarker('objective-optional', 1, ),
	makeMarker('objective-optional', 2, ),
	makeMarker('objective-optional', 3, )
];