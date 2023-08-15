app.mapData = {
	name: 'm05-festung-guernsey',
	tilePath: 'maps/m_guernsey/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [4160, 4152],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('letter', 1, 1733,2257),
	makeMarker('letter', 2, 2053,2159),
	makeMarker('letter', 3, 2618,2887),
	makeMarker('letter', 4, 1616,1336),
	makeMarker('letter', 5, 2557,2393),
	makeMarker('document', 1, 1393,1687),
	makeMarker('document', 2, 2591,1165),
	makeMarker('document', 3, 2521,2169), // bunker
	makeMarker('document', 4, 2770,2200), // bunker
	makeMarker('document', 5, 2352,1018),
	makeMarker('hidden-item', 1, 2877,2645),
	makeMarker('hidden-item', 2, 2056,2172),
	makeMarker('hidden-item', 3, 2383,1694),
	makeMarker('stone-eagle', 1, 2018,1703),
	makeMarker('stone-eagle', 2, 2356,980),
	makeMarker('stone-eagle', 3, 3271,2973),
	makeMarker('workbench', 1, 2027,1681),
	makeMarker('workbench', 2, 2555,2383),
	makeMarker('workbench', 3, 2732,1307),

	makeMarker('kill-list', 1, 2779,2799),

	makeMarker('intel', 1, 3498,3180),
	makeMarker('intel', 2, 3626,2851),
	makeMarker('intel', 2, 2303,2598),

	makeMarker('secondary', 1.1, 1247,1611),
	makeMarker('secondary', 1.2, 1335,1683),

	makeMarker('crowbar', 0, 1062,1566),
	makeMarker('crowbar', 0, 1177,1625),
	makeMarker('bolt-cutters', 0, 1258,1564),
];
