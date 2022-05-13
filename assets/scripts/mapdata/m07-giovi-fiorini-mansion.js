window.map = {
	name: 'm07-giovi-fiorini-mansion',
	tilePath: 'maps/m07-giovi-fiorini-mansion/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([300, 300], [0, 0]),
	center: [100, 100]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 115.031,103.063),
	makeMarker('letter-from-home', 2, 140.609,107.953),
	makeMarker('letter-from-home', 3, 125.078,121.531),
	makeMarker('letter-from-home', 4, 93.234,83.219),
	makeMarker('letter-from-home', 5, 162.891,118.172),
	
	makeMarker('letter-to-home', 1, 130.859,127.688),
	makeMarker('letter-to-home', 2, 141.781,149.203),
	makeMarker('letter-to-home', 3, 121.016,111.203),
	makeMarker('letter-to-home', 4, 119.828,161.938),
	makeMarker('letter-to-home', 5, 113.984,145.297),
	
	makeMarker('last-letter', 1, 94.094,129.031),
	makeMarker('last-letter', 2, 49.375,121.250),
	makeMarker('last-letter', 3, 96.453,67.375),
	makeMarker('last-letter', 4, 147.938,90.938),
	makeMarker('last-letter', 5, 116.719,102.047),
	
	makeMarker('misc-document', 1, 139.438,74.344),
	makeMarker('misc-document', 2, 158.578,100.234),
	makeMarker('misc-document', 3, 66.813,143.688),
	makeMarker('misc-document', 4, 84.641,108.734),
	makeMarker('misc-document', 5, 85.297,108.422),
	makeMarker('misc-document', 6, 85.406,107.672),
	
	makeMarker('duty-roster', 1, 132.188,161.094),
	makeMarker('duty-roster', 2, 126.625,94.188),
	makeMarker('duty-roster', 3, 90.953,99.219),
	makeMarker('duty-roster', 4, 69.969,141.313),
	
	makeMarker('sniper-report', 1, 158.406,99.406),
	
	makeMarker('deadeye-target', 1, 152.328,114.547),
	makeMarker('deadeye-target', 2, 83.563,111.875),
	makeMarker('deadeye-target', 3, 157.047,99.234),
	
	makeMarker('generator', 0, 91.016,83.109),
	makeMarker('generator', 0, 92.219,91.297),
	makeMarker('generator', 0, 95.734,105.625),
	makeMarker('generator', 0, 97.031,69.094),
	
	makeMarker('objective-primary', 1.1, 139.031,74.141),
	makeMarker('objective-primary', 1.2, 85.016,107.500),
	makeMarker('objective-primary', 2.1, 158.016,98.688),
	
	makeMarker('objective-optional', 1.1, 124.609,119.641),
	makeMarker('objective-optional', 1.2, 108.563,45.875),
	makeMarker('objective-optional', 2.1, 112.500,126.625),
	makeMarker('objective-optional', 2.2, 95.625,68.719),
	makeMarker('objective-optional', 2.2, 108.406,104.109),
	makeMarker('objective-optional', 2.2, 138.438,148.938),
	
	makeMarker('objective-exit', 1, 147.578,105.641)
];