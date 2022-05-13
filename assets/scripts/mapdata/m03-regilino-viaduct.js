window.map = {
	name: 'm03-regilino-viaduct',
	tilePath: 'maps/m03-regilino-viaduct/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([212, 212], [9, 5]),
	center: [95, 70]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 151.375,139.234),
	makeMarker('letter-from-home', 2, 112.766,57.234),
	makeMarker('letter-from-home', 3, 64.766,85.922),
	makeMarker('letter-from-home', 4, 54.578,128.953),
	makeMarker('letter-from-home', 5, 98.391,98.609),
	
	makeMarker('letter-to-home', 1, 108.406,163.844),
	makeMarker('letter-to-home', 2, 140.625,63.906),
	makeMarker('letter-to-home', 3, 134.625,152.203),
	makeMarker('letter-to-home', 4, 91.547,100.281),
	makeMarker('letter-to-home', 5, 145.359,97.672),
	
	makeMarker('last-letter', 1, 64.031,95.844),
	makeMarker('last-letter', 2, 90.375,163.547),
	makeMarker('last-letter', 3, 142.188,163.906),
	makeMarker('last-letter', 4, 121.375,47.828),
	makeMarker('last-letter', 5, 102.313,98.656),
	
	makeMarker('misc-document', 1, 127.438,66.750),
	makeMarker('misc-document', 2, 90.938,127.406),
	makeMarker('misc-document', 3, 92.844,143.313),
	makeMarker('misc-document', 4, 134.594,146.031),
	makeMarker('misc-document', 5, 97.266,118.969),
	makeMarker('misc-document', 6, 100.250,98.156),
	
	makeMarker('duty-roster', 1, 156.859,100.375),
	makeMarker('duty-roster', 2, 120.844,49.281),
	makeMarker('duty-roster', 3, 68.234,83.266),
	makeMarker('duty-roster', 4, 58.484,127.266),
	
	makeMarker('sniper-report', 1, 101.844,161.188),
	makeMarker('sniper-report', 2, 133.500,158.969),
	
	makeMarker('deadeye-target', 1, 143.766,189.438),
	makeMarker('deadeye-target', 2, 45.344,61.500),
	makeMarker('deadeye-target', 3, 155.438,110.656),
	
	makeMarker('generator', 0, 104.750,60.734),
	makeMarker('generator', 0, 143.109,62.469),
	makeMarker('generator', 0, 155.219,99.469),
	makeMarker('generator', 0, 135.125,159.906),
	makeMarker('generator', 0, 126.422,128.547),
	makeMarker('generator', 0, 133.359,143.813),
	makeMarker('generator', 0, 85.453,152.938),
	makeMarker('generator', 0, 90.781,139.016),
	makeMarker('generator', 0, 102.391,100.109),
	makeMarker('generator', 0, 113.344,105.406),
	makeMarker('generator', 0, 87.859,105.344),
	makeMarker('generator', 0, 53.422,122.734),
	makeMarker('generator', 0, 66.906,97.078),
	makeMarker('generator', 0, 99.641,157.563),
	
	makeMarker('objective-primary', 1, 112.813,162.734),
	
	makeMarker('objective-optional', 1.1, 91.203,112.891),
	makeMarker('objective-optional', 1.2, 57.313,123.703),
	makeMarker('objective-optional', 2, 153.781,102.922),
	makeMarker('objective-optional', 3.1, 145.188,153.563),
	makeMarker('objective-optional', 3.2, 142.922,157.453),
	makeMarker('objective-optional', 4, 120.063,46.031),
	makeMarker('objective-optional', 4, 148.969,81.500),
	makeMarker('objective-optional', 5, 148.938,130.688)
];