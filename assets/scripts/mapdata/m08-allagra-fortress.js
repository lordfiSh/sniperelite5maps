window.map = {
	name: 'm08-allagra-fortress',
	tilePath: 'maps/m08-allagra-fortress/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([205, 185], [15, 0]),
	center: [65, 100]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 115.766,60.406),
	makeMarker('letter-from-home', 2, 115.531,89.438),
	makeMarker('letter-from-home', 3, 76.344,83.156),
	makeMarker('letter-from-home', 4, 122.031,95.594),
	makeMarker('letter-from-home', 5, 118.547,91.609),
	
	makeMarker('letter-to-home', 1, 117.453,81.859),
	makeMarker('letter-to-home', 2, 95.656,88.344),
	makeMarker('letter-to-home', 3, 106.703,58.500),
	makeMarker('letter-to-home', 4, 109.344,66.422),
	makeMarker('letter-to-home', 5, 116.219,83.969),
	
	makeMarker('last-letter', 1, 111.656,64.688),
	makeMarker('last-letter', 2, 132.422,92.922),
	makeMarker('last-letter', 3, 114.703,81.828),
	makeMarker('last-letter', 4, 93.563,62.188),
	makeMarker('last-letter', 5, 89.750,74.938),
	
	makeMarker('misc-document', 1, 115.766,60.406),
	makeMarker('misc-document', 2, 114.594,58.453),
	makeMarker('misc-document', 3, 119.063,90.438),
	makeMarker('misc-document', 4, 162.281,95.375),
	makeMarker('misc-document', 5, 127.609,85.203),
	makeMarker('misc-document', 6, 116.031,90.875),
	makeMarker('misc-document', 7, 120.328,65.219),
	makeMarker('misc-document', 8, 108.531,62.688),
	
	makeMarker('duty-roster', 1, 139.828,90.594),
	makeMarker('duty-roster', 2, 111.531,84.594),
	makeMarker('duty-roster', 3, 76.375,79.688),
	makeMarker('duty-roster', 4, 60.844,86.906),
	
	makeMarker('sniper-report', 1, 127.484,75.875),
	makeMarker('sniper-report', 2, 148.531,82.031),
	makeMarker('sniper-report', 3, 152.938,85.000),
	makeMarker('sniper-report', 4, 107.594,71.000),
	makeMarker('sniper-report', 5, 111.594,75.031),
	
	makeMarker('deadeye-target', 1, 150.328,93.906),
	makeMarker('deadeye-target', 2, 92.047,93.719),
	makeMarker('deadeye-target', 3, 88.453,55.984),
	
	makeMarker('generator', 0, 60.156,86.719),
	makeMarker('generator', 0, 109.156,55.906),
	makeMarker('generator', 0, 149.328,81.672),
	makeMarker('generator', 0, 94.688,62.953),
	makeMarker('generator', 0, 144.063,74.813),
	
	makeMarker('objective-primary', 1.1, 136.844,90.594),
	makeMarker('objective-primary', 1.1, 123.500,68.125),
	makeMarker('objective-primary', 1.1, 123.578,81.234),
	makeMarker('objective-primary', 1.1, 150.625,85.797),
	makeMarker('objective-primary', 1.2, 100.250,75.063),
	makeMarker('objective-primary', 1.3, 150.313,94.484),
	makeMarker('objective-primary', 2, 169.125,97.000),
	makeMarker('objective-primary', 3, 119.063,90.156),
	
	makeMarker('objective-optional', 1, 114.594,57.922),
	makeMarker('objective-optional', 2, 122.875,86.563),
	makeMarker('objective-optional', 2, 122.656,94.656),
	makeMarker('objective-optional', 2, 149.359,89.859),
	makeMarker('objective-optional', 2, 143.875,95.031),
	makeMarker('objective-optional', 2, 150.766,82.500)
];