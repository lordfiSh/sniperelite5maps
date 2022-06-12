app.mapData = {
	name: 'm03-spy-academy',
	tilePath: 'maps/m_island/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [4800, 4792],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('letter', 1, 2134, 1973),
	makeMarker('letter', 2, 1170, 2446),
	makeMarker('letter', 3, 2254, 1954),
	makeMarker('letter', 4, 2770, 2961),
	makeMarker('letter', 5, 2561, 2746),
	
	// Starting Location 1: 2369,1959
	makeMarker('intel', -1, 2369,1959, false, "???", "Recon planes suggest this as a suitable infiltration point for this mission."),

	makeMarker('document', 1, 2275,2508),
	makeMarker('document', 2, 2165,2724),
	makeMarker('document', 3, 3071,2438),
	makeMarker('document', 4, 2560,2765),
	makeMarker('document', 5, 2163,2733),

	makeMarker('hidden-item', 1, 2285,1908),
	makeMarker('hidden-item', 2, 3119,2439),
	makeMarker('hidden-item', 3, 2930,2258),

	makeMarker('stone-eagle', 1, 1955,2108, false, undefined, ""),
	makeMarker('stone-eagle', 2, 2757,2623, false, undefined, ""),
	makeMarker('stone-eagle', 3, 3687,1875, false, undefined, ""),

	makeMarker('workbench', 1, 2963,2245, false, "Rifle Workbench", ""),
	makeMarker('workbench', 2, 2334,2898, false, "SMG Workbench", "Inside the Ressitance Hideout, can be acced from the Steet. Look for white Paint on the Wall where you can climp up."),
	makeMarker('workbench', 3, 2382,2446, false, "Pistol Workbench", "Inside the 'Waffenkammer'"),
	
	
];
