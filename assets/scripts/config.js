window.app ??= {};

app.minZoom = 1;
app.maxZoom = 5;
app.tileSize = 256;
app.transparentMarkerOpacity = 0.5;

app.quickSubmit = {
	enable: true,
	links: {
		m01: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+1:+The+Atlantic+Wall&entry.859563308=',
		m02: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+2:+Occupied+Residence&entry.859563308=',
		m03: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+3:+Spy+Academy&entry.859563308=',
		m04: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+4:+War+Factory&entry.859563308=',
		m05: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+5:+Festung+Guernsey&entry.859563308=',
		m06: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+6:+Lib%C3%A9ration&entry.859563308=',
		m07: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+7:+Secret+Weapons&entry.859563308=',
		m08: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=Mission+8:+Rubble+And+Ruin&entry.859563308=',
		dlc1: 'https://docs.google.com/forms/d/e/1FAIpQLSdhfsM1iEMTF8O1jji7uJ5UBxJBb2ajm0ql8X5Kqwv13bC6FA/viewform?usp=pp_url&entry.1647979432=DLC+1:+Kill+Hitler&entry.859563308=',
	}
};

app.maps = {
	m01: 'm01-the-atlantic-wall',
	m02: 'm02-occupied-residence',
	m03: 'm03-spy-academy',
	m04: 'm04-war-factory',
	m05: 'm05-festung-guernsey',
	m06: 'm06-liberation',
	m07: 'm07-secret-weapon',
	m08: 'm08-rubble-and-ruin',
	dlc1: 'dlc1-kill-hitler'
};

app.enabledMaps = [
	'm01-the-atlantic-wall',
	'm02-occupied-residence',
	'm03-spy-academy',
	'm04-war-factory',
	'm05-festung-guernsey',
	'm06-liberation',
	'm07-secret-weapon',
	'm08-rubble-and-ruin',
	'dlc1-kill-hitler'
];

app.markerGroups = {
	'letter': {},
	'document': {},
	'personal-item': {},
	'workbench': {},
	'dead-eye-target': {},
	'other': {sidebarIcon: 'generator'},
};

app.markerTypes = {
	'letter': {},
	'document': {},
	'personal-item': {},
	'workbench': {},
	'dead-eye-target': {},
	
	'primary': {group: 'objective', showSubIds: true},
	'secondary': {group: 'objective', showSubIds: true},
	'kill-list': {group: 'objective', showSubIds: true},
	'start': {group: 'objective', showSubIds: true},
	'exit': {group: 'objective', showSubIds: true},
	
	'alarm': {group: 'other'},
	'ammo': {group: 'other'},
	'emplacement': {group: 'other'},
	'generator': {group: 'other'},
	'intel': {group: 'other'},
	'searchlight': {group: 'other'},
	'speaker': {group: 'other'},
	'phonograph': {group: 'other', icon: 'default'},
	'key': {group: 'other', icon: 'default'},
	'bolt-cutters': {group: 'other', icon: 'default'},
	'crowbar': {group: 'other', icon: 'default'},
	
	'supply-crate': {group:'other', icon:'ammo'},
	'invasion': {group:'other'},
};

app.defaultIcon = 'default';
app.defaultIconSize = [39, 39];
app.markerIcons = {
	'letter': {folder: 'collectibles'},
	'document': {folder: 'collectibles'},
	'personal-item': {folder: 'collectibles'},
	'workbench': {folder: 'collectibles'},
	'dead-eye-target': {folder: 'collectibles'},
	
	'alarm': {folder: 'poi', size: [28, 28]},
	'ammo': {folder: 'poi', size: [28, 28]},
	'emplacement': {folder: 'poi', size: [28, 28]},
	'generator': {folder: 'poi', size: [28, 28]},
	'intel': {folder: 'poi', size: [28, 28]},
	'searchlight': {folder: 'poi', size: [28, 28]},
	'speaker': {folder: 'poi', size: [28, 28]},
	'invasion': {folder: 'poi', size: [28, 28]},
	
	'waypoint': {size: [45, 45]},
	'default': {size: [24, 24]},
};

app.helpText = `
	<p>
	You can move the map by dragging with your mouse. Using the scroll wheel will change the zoom level.
	Alternatively, you can also double-click to zoom in and shift + double-click to zoom out.
	Holding shift and drawing a box with your mouse will zoom to fit said box into view.
	</p>
	<p>
	Click on a marker to open a popup with more information about the point of interest.
	Right-clicking a marker will make it transparent, that way you can track which items you have collected already.
	You can reset all markers to their non-transparent state with the "Reset Markers" button in the sidebar.
	The pills next to each marker group in the sidebar show how many non-transparent markers of that type remain.
	You can hide this information with the "Hide Counts" button.
	</p>
	<p>
	Speaking of marker groups, each group can be individually enabled or disabled, so you can focus on just the ones you need.
	Simply click the entry in the sidebar's marker group list. You can also hide or show all of them at once using the "Hide All" / "Show All" button.
	</p>
	<p>
	If you are looking for a specific item, you might want to try out the search function.
	Simply click the magnifying glass icon in the top right corner and enter part of the item name.
	It will then display a list of all markers matching the entered text.
	Click on one of the entries to focus the corresponding marker on the map.
	</p>
	<p>
	With this release we rely on marker submissions by the community (at least until we find time to play the game ourselves).
	That's why right-clicking on any part of the map will give you the option to submit a new marker at that location.
	</p>
`;

app.creditsText = `
	<h3>Contributors</h3>
	<p>
		Sniper Elite 5 map is a rewrite by
		<a href="https://github.com/AtomCrafty" target="_blank">AtomCrafty</a>
		and other
		<a href="https://github.com/lordfiSh/sniperelite5maps/graphs/contributors">contributors</a>,
		based on the
		<a href="https://github.com/witcher3map/witcher3map">witcher3map</a>
		project by
		<a href="https://github.com/untamed0" target="_blank">untamed0</a>,
		<a href="https://github.com/mcarver" target="_blank">mcarver</a>
		and the help of
		<a href="https://github.com/witcher3map/witcher3map/graphs/contributors" target="_blank">many more</a>.
	</p>
	
	<h3>Sniper Elite 5 assets</h3>
	<p>Sniper Elite 5 logo, icons, map &amp; text are the property of <a href="https://www.rebellion.co.uk/" target="_blank">Rebellion</a> and used without their permission. </p>
	
	<h3>Javascript libraries used</h3>
	<ul>
		<li><a href="https://jquery.com" target="_blank">jQuery</a> (MIT)</li>
		<li><a href="https://git.io/vkLly" target="_blank">jQuery.NiceScroll</a> (MIT)</li>
		<li><a href="https://leafletjs.com" target="_blank">Leaflet</a> (BSD2)</li>
		<li><a href="https://git.io/vkfA2" target="_blank">Leaflet.label</a> (MIT)</li>
		<li><a href="https://git.io/mwK1oA" target="_blank">Leaflet-hash</a> (MIT)</li>
		<li><a href="https://git.io/vJw5v" target="_blank">Leaflet.fullscreen</a> (BSD2)</li>
		<li><a href="https://git.io/vkCPC" target="_blank">Leaflet Control Search</a> (MIT)</li>
		<li><a href="https://git.io/vIAs2" target="_blank">Font Awesome</a> (MIT)</li>
	</ul>
`;

console.log("Configuration loaded");
