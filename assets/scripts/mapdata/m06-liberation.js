app.mapData = {
	name: 'm06-liberation',
	tilePath: 'maps/m_villages/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [3512, 5120],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('letter', 1, 1555,2272),
	makeMarker('letter', 2, 2019,1426),
	makeMarker('letter', 3, 3096,2069),
	makeMarker('letter', 4, 2812,2267), 
	makeMarker('letter', 5, 2433,1562),
	makeMarker('document', 1, 1765,1974),
	makeMarker('document', 2, 3229,1845),
	makeMarker('document', 3, 1557,1975),
	makeMarker('document', 4, 2305,2201), // also at 2698,2378
	makeMarker('document', 5, 2792,1616),
	makeMarker('hidden-item', 1, 2376,1961),
	makeMarker('hidden-item', 2, 2726,1801),
	makeMarker('hidden-item', 3, 3732,2083),
	makeMarker('stone-eagle', 1, 2044,2296),
	makeMarker('stone-eagle', 2, 2900,1311),
	makeMarker('stone-eagle', 3, 3833,2124),
	makeMarker('workbench', 1, 3771,2137),
	makeMarker('workbench', 2, 2715,1784),
	makeMarker('workbench', 3, 1919,2098),

	makeMarker('intel', 1, 3464,2143),
	makeMarker('intel', 2, 2307,1296),

	makeMarker('primary', 1, 3680,2028),
	makeMarker('primary', 2, 1685,2028),
	makeMarker('secondary', 1, 3208,1926),
	makeMarker('secondary', 2, 2692,1436),
	makeMarker('secondary', 3, 1951,2241),
	
	makeMarker('kill-list', 1, 2090,1441),
];
