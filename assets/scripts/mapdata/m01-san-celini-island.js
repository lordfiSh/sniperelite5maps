window.map = {
	name: 'm01-san-celini-island',
	tilePath: 'maps/m01-san-celini-island/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	bounds: L.latLngBounds([177, 192], [0, 4]),
	center: [85, 100]
}

window.map.markers = [
	makeMarker('letter-from-home', 1, 80.641, 129.016),
	makeMarker('letter-from-home', 2, 133.000, 127.156),
	makeMarker('letter-from-home', 3, 78.906, 125.328),
	makeMarker('letter-from-home', 4, 61.250, 78.031),
	makeMarker('letter-from-home', 5, 95.359, 86.516),
	
	makeMarker('letter-to-home', 1, 50.297, 100.594),
	makeMarker('letter-to-home', 2, 74.703, 102.719),
	makeMarker('letter-to-home', 3, 106.344, 131.375),
	makeMarker('letter-to-home', 4, 55.438, 101.531),
	makeMarker('letter-to-home', 5, 87.031, 75.266),
	
	makeMarker('last-letter', 1, 44.234, 114.734),
	makeMarker('last-letter', 2, 132.594, 125.141),
	makeMarker('last-letter', 3, 80.219, 104.750),
	makeMarker('last-letter', 4, 106.844, 91.438),
	makeMarker('last-letter', 5, 110.031, 126.234),
	
	makeMarker('misc-document', 1, 133.719, 122.469),
	makeMarker('misc-document', 2, 47.344, 119.781),
	makeMarker('misc-document', 3, 105.563, 133.594),
	makeMarker('misc-document', 4, 81.875, 137.813),
	makeMarker('misc-document', 5, 107.484, 98.984),
	makeMarker('misc-document', 6, 46.734, 120.563),
	makeMarker('misc-document', 7, 104.094, 137.281),
	makeMarker('misc-document', 8, 78.469, 124.281),
	
	makeMarker('duty-roster', 1, 45.859, 119.375),
	makeMarker('duty-roster', 2, 106.375, 132.844),
	makeMarker('duty-roster', 3, 81.063, 139.297),
	makeMarker('duty-roster', 4, 106.781, 97.891),
	
	makeMarker('sniper-report', 1, 80.172, 60.641),
	
	makeMarker('deadeye-target', 1, 63.672, 156.328),
	makeMarker('deadeye-target', 2, 107.422, 59.297),
	makeMarker('deadeye-target', 3, 42.906, 106.188),
	
	makeMarker('generator', 0, 42.359, 106.078),
	makeMarker('generator', 0, 56.188, 102.547),
	makeMarker('generator', 0, 106.109, 58.375),
	makeMarker('generator', 0, 73.500, 95.391),
	makeMarker('generator', 0, 77.156, 110.938),
	makeMarker('generator', 0, 104.719, 132.781),
	makeMarker('generator', 0, 65.984, 155.266),
	
	makeMarker('objective-primary', 1, 134.563, 122.453),
	
	makeMarker('objective-primary', 2, 106.422, 98.781), // Hans Aegerter
	makeMarker('objective-primary', 2, 46.531, 118.625), // Rudolf Hayler
	makeMarker('objective-primary', 2, 81.078, 138.281), // Oskar Pletcher
	makeMarker('objective-primary', 2, 106.719, 133.500), // Frank Drexler
	
	makeMarker('objective-optional', 1, 83.281, 74.250),
	makeMarker('objective-optional', 1, 83.453, 138.734),
	makeMarker('objective-optional', 1, 135.469, 120.141),
	
	makeMarker('objective-optional', 2, 80.688, 122.313),
	
	makeMarker('objective-exit', 1, 96.438, 111.656),
	makeMarker('objective-exit', 1, 41.063, 118.516)
];