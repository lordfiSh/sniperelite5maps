app.mapData = {
  name: "dlc3-conqueror",
  tilePath: "maps/m_dlc03_overlord/{z}/{x}/{y}.png",
  minZoom: 1,
  maxZoom: 4,
  neutralZoom: 4,
  defaultZoom: 2,
  dimensions: [2048, 2048],
  //focus: [100, 100]
};

app.mapData.markers = [
  makeMarker("letter", 1, 1227, 679),
  makeMarker("letter", 2, 995, 1080),
  makeMarker("letter", 3, 1471, 1103),
  makeMarker("document", 1, 754, 752),
  makeMarker("document", 2, 1330, 646),
  makeMarker("hidden-item", 1, 1059, 578),
  makeMarker("hidden-item", 2, 1243, 1392),
  makeMarker("stone-eagle", 1, 1619, 1104),
  makeMarker("stone-eagle", 2, 811, 557),
  makeMarker("stone-eagle", 3, 1243, 1359),
  makeMarker("workbench", 1, 708, 680),
  makeMarker("workbench", 2, 1125, 1014),
  makeMarker("workbench", 3, 972, 1670),

  // Kill General Konig
  makeMarker("primary", 1, 1263, 1388),

  // Eliminate snipers
  makeMarker("primary", 2.1, 814, 550),
  makeMarker("primary", 2.2, 1033, 605),
  makeMarker("primary", 2.3, 1029, 771),

  // Destroy tiger tank
  makeMarker("primary", 3, 1268, 1595),

  // Exfiltrate
  makeMarker("primary", 4, 1248, 1384),

  // Destroy artillery guns
  makeMarker("secondary", 1.1, 1012, 1076),
  makeMarker("secondary", 1.2, 1060, 1220),

  // Destroy AA-guns
  makeMarker("secondary", 2.1, 1239, 1000),
  makeMarker("secondary", 2.2, 1309, 1214),

  // Destroy vehicles under repair
  makeMarker("secondary", 3.1, 1638, 1362),
  makeMarker("secondary", 3.2, 1567, 1361),
  makeMarker("secondary", 3.3, 1561, 1383),

  makeMarker("kill-list", 1, 1064, 586),

  makeMarker("intel", 1, 409, 1385),
  makeMarker("intel", 2, 1298, 1754),
  makeMarker("intel", 3, 1591, 958),

  makeMarker("invasion", 0, 965, 1542),
  makeMarker("invasion", 0, 1212, 1513),
  makeMarker("invasion", 0, 1214, 1416),
  makeMarker("invasion", 0, 1068, 1043),
  makeMarker("invasion", 0, 1030, 760),

  // Trenches Artillery
  makeMarker("alarm", 1, 1018, 1062),
  makeMarker("speaker", 1, 994, 1184),
  makeMarker("speaker", 1, 931, 1052),

  // Village Tiger Tank
  makeMarker("alarm", 2, 1334, 1543),
  makeMarker("speaker", 2, 1300, 1663),
  makeMarker("speaker", 2, 1220, 1518),

  // Kill list target village
  makeMarker("alarm", 3, 992, 764),
  makeMarker("speaker", 3, 1089, 764),
  makeMarker("speaker", 3, 978, 689),
  makeMarker("speaker", 3, 978, 836),
  makeMarker("speaker", 3, 782, 482),

  // Castle interior
  makeMarker("alarm", 4, 1275, 1237),
  makeMarker("speaker", 4, 1329, 1298),
  makeMarker("speaker", 4, 1218, 1174),

  makeMarker("emplacement", 0, 1036, 1169),
  makeMarker("emplacement", 0, 1525, 1075),

  makeMarker("bolt-cutters", 0, 381, 1379),

  makeMarker("crowbar", 0, 1558, 1357),
  makeMarker("crowbar", 0, 1159, 1359),
  makeMarker("crowbar", 0, 933, 757),

  makeMarker("satchel-charge", 0, 1000, 1233),
  makeMarker("satchel-charge", 0, 931, 1161),
  makeMarker("satchel-charge", 0, 894, 1093),
  makeMarker("satchel-charge", 0, 1064, 1024),
  makeMarker("satchel-charge", 0, 980, 1677),
  makeMarker("satchel-charge", 0, 1646, 1412),
  makeMarker("satchel-charge", 0, 1615, 1263),
  makeMarker("satchel-charge", 0, 1457, 694),
  makeMarker("satchel-charge", 0, 1331, 1133),
  makeMarker("satchel-charge", 0, 1130, 1026),
  makeMarker("satchel-charge", 0, 1188, 1407),
  makeMarker("satchel-charge", 0, 1146, 1375),
  makeMarker("satchel-charge", 0, 1188, 1396),
  makeMarker("satchel-charge", 0, 804, 556),
  makeMarker("satchel-charge", 0, 708, 670),
  makeMarker("satchel-charge", 0, 1033, 562),
  makeMarker("satchel-charge", 0, 1044, 773),
  makeMarker("satchel-charge", 0, 1001, 751),

  makeMarker("key", 1, 1202, 1418),

  makeMarker("door", 1, 1233, 1385),

  makeMarker("generator", 0, 967, 1015),
  makeMarker("generator", 0, 1309, 1669),
  makeMarker("generator", 0, 1328, 1454),
  makeMarker("generator", 0, 1618, 1307),
  makeMarker("generator", 0, 1448, 1001),
  makeMarker("generator", 0, 1057, 816),

  makeMarker("supply-crate", "crowbar", 1616, 1401),
  makeMarker("supply-crate", "crowbar", 1488, 1089),

  makeMarker("supply-crate", "padlock", 1294, 692),
  makeMarker("supply-crate", "padlock", 1314, 1097),

  makeMarker("body-box", 0, 952, 1257),
  makeMarker("body-box", 0, 1059, 1175),
  makeMarker("body-box", 0, 936, 1535),
  makeMarker("body-box", 0, 1127, 1560),
  makeMarker("body-box", 0, 1671, 1349),
  makeMarker("body-box", 0, 1586, 1247),
  makeMarker("body-box", 0, 1416, 1013),
  makeMarker("body-box", 0, 1422, 789),
  makeMarker("body-box", 0, 1263, 1064),
  makeMarker("body-box", 0, 1186, 1215),
  makeMarker("body-box", 0, 1044, 909),
  makeMarker("body-box", 0, 974, 937),
  makeMarker("body-box", 0, 761, 469),
  makeMarker("body-box", 0, 1078, 555),

  makeMarker("armoured-car", 0, 1098, 698),

  makeMarker("truck", 0, 1014, 1541),
  makeMarker("truck", 0, 1277, 1506),
  makeMarker("truck", 0, 1301, 1367),
  makeMarker("truck", 0, 1343, 1336),
  makeMarker("truck", 0, 954, 852),
];

app.mapData.ziplines = [
  makeZipline(1, [1217, 1430], [1227, 1698]),
  makeZipline(2, [1231, 1370], [1127, 1345]),
  makeZipline(3, [1208, 884], [1260, 927]),
  makeZipline(4, [746, 760], [744, 686]),
  makeZipline(5, [741, 544], [727, 622]),
  makeZipline(6, [884, 480], [970, 563]),
  makeZipline(7, [1021, 591], [939, 602]),
  makeZipline(8, [1154, 1066], [1167, 1106]),
];
