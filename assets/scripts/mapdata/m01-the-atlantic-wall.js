app.mapData = {
	name: 'm01-the-atlantic-wall',
	tilePath: 'maps/m01-the-atlantic-wall/{z}/{x}/{y}.png',
	minZoom: 2,
	maxZoom: 6,
	defaultZoom: 3,
	dimensions: [6399, 5760],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('misc-document', 1, 2000, 2000, true, "Project Penguin", "This is a very interesting document that gives much needed insight into penguins."),
	makeMarker('misc-document', 2, 2000, 3000),
	makeMarker('misc-document', 3, 2000, 4000),
	makeMarker('misc-document', 4, 2000, 5000),
	makeMarker('last-letter', 1, 3000, 2000),
	makeMarker('last-letter', 2, 3000, 3000),
	makeMarker('last-letter', 3, 3000, 4000),
	makeMarker('last-letter', 4, 3000, 5000),
	makeMarker('duty-roster', 1, 4000, 2000),
	makeMarker('duty-roster', 2, 4000, 3000),
	makeMarker('duty-roster', 3, 4000, 4000),
	makeMarker('duty-roster', 4, 4000, 5000),
];
