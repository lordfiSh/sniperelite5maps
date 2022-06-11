app.mapData = {
	name: 'm02-occupied-residence',
	tilePath: 'maps/m_chateau/{z}/{x}/{y}.png',
	minZoom: 1,
	maxZoom: 4,
	neutralZoom: 4,
	defaultZoom: 2,
	dimensions: [3408, 3408],
	//focus: [100, 100]
};

app.mapData.markers = [
	makeMarker('letter', 1, 2025,1682, false, undefined, "On a desk on the first floor."),
	makeMarker('letter', 2, 2188,1666),
	makeMarker('letter', 3, 1984,1756, false, undefined, "On a wooden table on the top floor."),
	makeMarker('letter', 4, 2204,2081, false, undefined, "On a small chest in the sniper's hideout on the first floor."),
	makeMarker('document', 1.1, 2028,1694, false, undefined, "On a cabinet on the first floor."),
	makeMarker('document', 1.2, 2118,1262, false, undefined, "On a table in the tent."),
	makeMarker('document', 1.3, 1516,1636, false, undefined, "Inside of the supply crate."),
	makeMarker('document', 1.4, 1295,2029, false, undefined, "On a wooden crate."),
	makeMarker('document', 2, 2018,1594, false, undefined, "On Möller's desk on the first floor."),
	makeMarker('document', 3, 2073,1639, false, undefined, "On a cabinet in Möller's secret room on the first floor."),
	makeMarker('document', 4.1, 1711,2332, false, undefined, "On a wooden table in the building."),
	makeMarker('document', 4.2, 2306,1240, false, undefined, "On a wooden table in the building."),
	makeMarker('document', 4.3, 1903,1693, false, undefined, "On a wooden chest in front of the main entrance."),
	makeMarker('document', 5.1, 1682,2372, false, undefined, "On a wooden table in the building."),
	makeMarker('document', 5.2, 2038,1637, false, undefined, "On the door to the attic above Möller's office."),
	makeMarker('document', 6, 2069,1615, false, undefined, "On a cabinet in Möller's secret room on the first floor."),
	makeMarker('hidden-item', 1, 2182,1650, false, undefined, "In a wall safe hidden behind a painting."),
	makeMarker('hidden-item', 2, 1995,1752, false, undefined, "Inside of a supply crate on the top floor. Can be opened by picking the lock or with bolt cutters."),
	makeMarker('hidden-item', 3,2201,2072),
	makeMarker('stone-eagle', 1, 1898,823, false, undefined, "On top of the chimney."),
	makeMarker('stone-eagle', 2, 1702,1390, false, undefined, "On a cliff next to the river."),
	makeMarker('stone-eagle', 3, 2202,2155, false, undefined, "On the roof."),
	makeMarker('workbench', 1, 2017,1793, false, "Rifle Workbench", "In the basement armoury."),
	makeMarker('workbench', 2, 2326,1231, false, "SMG Workbench", "On the first floor, accessible via some vines on the back side of the building."),
	makeMarker('workbench', 3, 1708,2341, false, "Pistol Workbench", "In the armoury."),
	
	makeMarker('primary', 1, 1984,1748),
	
	makeMarker('intel', -1, 1968,1173, false, "Mill Bridge", "The Germans have a tower overlooking the bridge."),
	makeMarker('intel', -1, 1633,1619, false, "Main Gates", "Germans have set up turrets and blockades down the central path."),
	makeMarker('intel', -1, 1210,1939, false, "Woodland Ford", "A German patrol is guarding the narrow river crossing."),
	makeMarker('intel', -1, 1830,2427, false, "Château Stables", "Recon planes suggest this as a suitable infiltration point for this mission."),
	makeMarker('intel', -1, 1983,815, false, "Munitions Farmhouse", "Recon planes suggest this as a suitable infiltration point for this mission."),
	makeMarker('intel', -1, 1996,1876, false, "Chateau Armoury", "There is an armoury in the Chateau's cellars.<br>The Chateau armoury contains satchel charges."),
	
	makeMarker('phonograph', 0, 918,1913),
	makeMarker('generator', 0, 967,1956),
	makeMarker('generator', 0, 2106,1278),
	makeMarker('speaker', 0, 2182,1914),
	makeMarker('speaker', 0, 2073,1277),
	makeMarker('speaker', 0, 1703,1690),
	makeMarker('speaker', 0, 2199,1785),
	makeMarker('speaker', 0, 1435,1579),
	makeMarker('alarm', 0, 2081,1301),
	makeMarker('alarm', 0, 2110,1811),
	makeMarker('alarm', 0, 1490,1531),
	
	makeMarker('invasion', 0, 930,1923),
	makeMarker('invasion', 0, 1692,2368),
	makeMarker('invasion', 0, 2184,1854),
	makeMarker('invasion', 0, 1902,850),
	
	makeMarker('emplacement', 0, 1308,1931),
	makeMarker('emplacement', 0, 1289,1989),
	makeMarker('emplacement', 0, 2434,1787),
	makeMarker('emplacement', 0, 2073,1264),
	makeMarker('emplacement', 0, 1543,1541),
	makeMarker('emplacement', 0, 1441,1533),
	
	makeMarker('body-box', 0, 962,1946),
	makeMarker('body-box', 0, 1666,2218),
	makeMarker('body-box', 0, 1661,2386),
	makeMarker('body-box', 0, 2069,2242),
	makeMarker('body-box', 0, 1970,1303),
	makeMarker('body-box', 0, 2103,1293),
	makeMarker('body-box', 0, 2280,1226),
	makeMarker('body-box', 0, 1418,1036),
	makeMarker('body-box', 0, 1408,1110),
	makeMarker('body-box', 0, 1331,1141),
	makeMarker('body-box', 0, 1970,2185),
	makeMarker('body-box', 0, 2030,1815), // basement
	makeMarker('body-box', 0, 1992,1678), // ground floor
	makeMarker('body-box', 0, 2168,1679), // ground floor
	makeMarker('body-box', 0, 2207,1720), // ground floor
	makeMarker('body-box', 0, 2015,1854), // ground floor
	makeMarker('body-box', 0, 2030,1924), // ground floor
	makeMarker('body-box', 0, 1971,1897), // ground floor
	makeMarker('body-box', 0, 2237,1676), // first floor
	makeMarker('body-box', 0, 1969,1712), // first floor
	makeMarker('body-box', 0, 1984,1751), // first floor
	
	makeMarker('supply-crate', 'crowbar', 912,1931),
	makeMarker('supply-crate', 'crowbar', 1689,2253),
	makeMarker('supply-crate', 'crowbar', 1960,2120),
	makeMarker('supply-crate', 'crowbar', 2113,1257),
	makeMarker('supply-crate', 'crowbar', 1766,1587),
	makeMarker('supply-crate', 'crowbar', 1182,1499),
	makeMarker('supply-crate', 'padlock', 1979,807),
	makeMarker('supply-crate', 'padlock', 1516,1644),
	
	makeMarker('crowbar', 0, 1574,2390),
	makeMarker('crowbar', 0, 2258,1186),
	makeMarker('crowbar', 0, 1329,1471),
	makeMarker('bolt-cutters', 0, 1683,2368),
	makeMarker('satchel-charge', 0, 2339,1962),
	makeMarker('satchel-charge', 0, 2116,1256),
	
	makeMarker('key', -1, 1669,2388, false, "Armoury Key", "Carried by Officer Markus Bertram."),
	makeMarker('key', -1, 1688,2377, false, "Old Tunnels Key", "On a wooden table in the building."),
	makeMarker('key', -1, 2039,1892, false, "Möller's Office Key", "Carried by officer Friedrich Kümmler."),
	makeMarker('door', -1, 1697,2369, false, "Armoury Door", "Requires armoury key or satchel charge."),
	makeMarker('door', -1, 1733,2064, false, "Old Tunnels Door", "Requires old tunnels key or satchel charge."),
	
	makeMarker('light-car', 0, 1678,2231),
	makeMarker('light-car', 0, 1895,1675),
	makeMarker('light-car', 0, 2152,1812),
	makeMarker('motorbike', 0, 1604,2253),
	makeMarker('motorbike', 0, 1602,2260),
	makeMarker('motorbike', 0, 1620,2295),
	makeMarker('motorbike', 0, 1616,2303),
	makeMarker('motorbike', 0, 1991,1279),
	makeMarker('motorbike', 0, 1874,1749),
	makeMarker('motorbike', 0, 1731,1620),
	makeMarker('motorbike', 0, 2096,1802),
	makeMarker('truck', 0, 1612,2377),
	makeMarker('truck', 0, 1861,874),
	makeMarker('truck', 0, 2146,1718),
	makeMarker('truck', 0, 1447,1121),
	makeMarker('vip-car', 0, 2172,1728),
];
