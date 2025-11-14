app.mapData = {
  name: "dlc2-landing-force",
  tilePath: "maps/m_dlc01_dragoon/{z}/{x}/{y}.png",
  minZoom: 1,
  maxZoom: 4,
  neutralZoom: 4,
  defaultZoom: 2,
  dimensions: [2880, 2880],
  //focus: [100, 100]
};

app.mapData.markers = [
  makeMarker("letter", 1, 1421, 1816),
  makeMarker("letter", 2, 1863, 1933),
  makeMarker("letter", 3, 894, 560),
  makeMarker("document", 1, 1454, 1363),
  makeMarker("document", 2, 1327, 2255),
  makeMarker("hidden-item", 1, 1407, 1655),
  makeMarker("hidden-item", 2, 823, 1804),
  makeMarker("stone-eagle", 1, 938, 537),
  makeMarker("stone-eagle", 2, 1889, 1914),
  makeMarker("stone-eagle", 3, 1137, 1942),
  makeMarker("workbench", 1, 1462, 1507),
  makeMarker("workbench", 2, 1306, 2260),
  makeMarker("workbench", 3, 883, 662),

  // Naval gun
  makeMarker("primary", 1.1, 892, 577),
  makeMarker("primary", 1.2, 1038, 1554),
  makeMarker("primary", 1.3, 1676, 1785),
  makeMarker("primary", 1.4, 1622, 1773),
  makeMarker("primary", 1.5, 1637, 1827),
  makeMarker("primary", 1.6, 1599, 1858),

  // Take out comms
  makeMarker("primary", 2.1, 977, 566),
  makeMarker("primary", 2.2, 1020, 542),
  makeMarker("primary", 2.3, 817, 619),

  // Exfiltrate
  makeMarker("primary", 3, 883, 1794),

  // U-boat
  makeMarker("secondary", 1.1, 1507, 1041),
  makeMarker("secondary", 1.2, 1616, 1036),

  // AA-guns
  makeMarker("secondary", 2.1, 1161, 1380),
  makeMarker("secondary", 2.2, 1408, 1761),

  makeMarker("kill-list", 1, 1445, 1378),

  makeMarker("intel", 1, 2220, 1333),
  makeMarker("intel", 2, 1591, 2413),
  makeMarker("intel", 3, 699, 1274),
  makeMarker("intel", 4, 890, 660),
  makeMarker("intel", 5, 888, 593),

  makeMarker("searchlight", 0, 898, 787),
  makeMarker("searchlight", 0, 1733, 1761),
  makeMarker("searchlight", 0, 959, 1555),
  makeMarker("searchlight", 0, 1308, 1565),

  makeMarker("invasion", 0, 1448, 1464),
  makeMarker("invasion", 0, 911, 555),
  makeMarker("invasion", 0, 1035, 1563),
  makeMarker("invasion", 0, 1670, 1771),
  makeMarker("invasion", 0, 1645, 1901),

  makeMarker("alarm", 1, 978, 637),
  makeMarker("speaker", 1, 1112, 695),
  makeMarker("speaker", 1, 893, 597),
  makeMarker("speaker", 1, 978, 620),

  makeMarker("alarm", 2, 1539, 1774),
  makeMarker("speaker", 2, 1526, 1845),

  makeMarker("emplacement", 0, 981, 802),

  makeMarker("bolt-cutters", 0, 1311, 1272),
  makeMarker("bolt-cutters", 0, 1044, 649),
  makeMarker("bolt-cutters", 0, 978, 1601),
  makeMarker("bolt-cutters", 0, 1330, 2256),
  makeMarker("bolt-cutters", 0, 1235, 1660),

  makeMarker("crowbar", 0, 1467, 1307),
  makeMarker("crowbar", 0, 973, 678),
  makeMarker("crowbar", 0, 1354, 1794),

  makeMarker("satchel-charge", 0, 1440, 1484),
  makeMarker("satchel-charge", 0, 885, 672),
  makeMarker("satchel-charge", 0, 1563, 1801),

  makeMarker("generator", 0, 1735, 1757),
  makeMarker("generator", 0, 1474, 1443),
  makeMarker("generator", 0, 1493, 1034),
  makeMarker("generator", 0, 959, 1562),
  makeMarker("generator", 0, 833, 1836),
  makeMarker("generator", 0, 1285, 1779),

  makeMarker("supply-crate", "padlock", 1325, 1107),
  makeMarker("supply-crate", "padlock", 1358, 2113),

  makeMarker("body-box", 0, 1400, 1481),
  makeMarker("body-box", 0, 1361, 1059),
  makeMarker("body-box", 0, 1244, 1231),
  makeMarker("body-box", 0, 862, 666),
  makeMarker("body-box", 0, 859, 573),
  makeMarker("body-box", 0, 1002, 609),
  makeMarker("body-box", 0, 999, 643),
  makeMarker("body-box", 0, 1024, 1562),
  makeMarker("body-box", 0, 980, 1583),
  makeMarker("body-box", 0, 863, 1847),
  makeMarker("body-box", 0, 1869, 1943),
  makeMarker("body-box", 0, 1294, 1584),
  makeMarker("body-box", 0, 1373, 1801),
  makeMarker("body-box", 0, 1508, 1869),
  makeMarker("body-box", 0, 1546, 1818),

  makeMarker("truck", 0, 1024, 777),
  makeMarker("truck", 0, 1295, 1195),
  makeMarker("truck", 0, 1362, 1088),
  makeMarker("truck", 0, 1426, 1287),
  makeMarker("truck", 0, 1412, 1758),
  makeMarker("truck", 0, 1080, 1500),
  makeMarker("truck", 0, 1308, 1809),
  makeMarker("truck", 0, 1325, 1815),

  makeMarker("motorbike", 0, 1349, 1238),
  makeMarker("motorbike", 0, 1027, 1651),
  makeMarker("motorbike", 0, 1242, 1932),

  makeMarker("boat", 0, 2216, 1684),
  makeMarker("boat", 0, 1592, 781),
  makeMarker("boat", 0, 650, 1669),

  makeMarker("special", 1, 1535, 1414),
  makeMarker("special", 2, 1491, 1370),
  makeMarker("special", 3, 861, 707),
];

app.mapData.ziplines = [
  makeZipline(1, [1020, 548], [938, 509]),
  makeZipline(2, [1863, 1921], [1662, 1930]),
  makeZipline(3, [1694, 1624], [1603, 1570]),
  makeZipline(4, [1362, 1831], [1271, 1756]),
];
