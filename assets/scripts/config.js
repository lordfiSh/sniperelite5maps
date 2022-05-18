app.transparentMarkerOpacity = 0.5;

app.maps = {
	m01: 'm01-the-atlantic-wall',
	m02: 'm02-occupied-residence',
	m03: 'm03-spy-academy',
	m04: 'm04-war-factory',
	m05: 'm05-festung-guernsey',
	m06: 'm06-liberation',
	m07: 'm07-secret-weapon',
	m08: 'm08-rubble-and-ruin',
};

app.markerGroups = [
	{name: 'letter-from-home'},
	{name: 'letter-to-home'},
	{name: 'last-letter'},
	{name: 'misc-document'},
	{name: 'duty-roster'},
	{name: 'sniper-report'},
	
	{name: 'objective-primary'},
	{name: 'objective-optional'},
	{name: 'deadeye-target'},
	
	{name: 'generator'},
	{name: 'other', icon: 'pin'},
];

app.iconTypes = {
	'letter-from-home': {size: [48, 48]},
	'letter-to-home': {size: [48, 48]},
	'last-letter': {size: [48, 48]},
	'misc-document': {size: [48, 48]},
	'duty-roster': {size: [48, 48]},
	'sniper-report': {size: [48, 48]},
	
	'objective-primary': {size: [48, 48]},
	'objective-optional': {size: [48, 48]},
	'objective-exit': {size: [48, 48]},
	'deadeye-target': {size: [48, 48]},
	'generator': {size: [48, 48]},
	
	'car-civilian': {size: [32, 32]},
	'car-transport': {size: [32, 32]},
	'car-tank': {size: [32, 32]},
	'car-tank-big': {size: [32, 32]},
	'turret-pillbox': {size: [32, 32]},
	'turret-panther': {size: [32, 32]},
	'rail': {size: [32, 32]},
	'boat': {size: [32, 32]},
	'plane': {size: [32, 32]},
	'pin': {size: [32, 32]},
	'loot-crate': {size: [32, 32]},
};

app.creditsText = `
	<h3>Contributors</h3>
	<ul>
		<li><a href="https://github.com/untamed0" target="_blank">untamed0</a> - Original implementation</li>
		<li><a href="https://github.com/mcarver" target="_blank">mcarver</a> - Marker count, hash permalink improvements, backup/restore settings, numerous fixes etc.</li>
		<li><a href="https://github.com/ankri" target="_blank">ankri</a> - Ability to hide markers on right or double click</li>
		<li><a href="https://github.com/ITroxxCH" target="_blank">ITroxxCH</a> - Translation/i18n implementation</li>
		<li><a href="https://github.com/msmorgan" target="_blank">msmorgan</a> - Javascript &amp; map data structure improvements</li>
		<li><a href="https://wiiare.in" target="_blank">lordfiSh</a> - </li>
		<li><a href="https://github.com/AtomCrafty" target="_blank">AtomCrafty</a> - 2021 software rewrite, high resolution maps and icons, updated marker placement</li>
		<li><a href="https://github.com/CBernjus" target="_blank">CBernjus</a> - Updated marker placement and detailed descriptions</li>
	</ul>
	
	<h3>Sniper Elite 5 assets</h3>
	<p>Sniper Elite 5 logo, icons, map &amp; text are the property of <a href="http://www.rebellion.co.uk/" target="_blank">Rebellion</a> and used without their permission. </p>
	
	<h3>Javascript libraries used</h3>
	<ul>
		<li><a href="http://jquery.com" target="_blank">jQuery</a> (MIT)</li>
		<li><a href="http://git.io/vkLly" target="_blank">jQuery.NiceScroll</a> (MIT)</li>
		<li><a href="http://leafletjs.com" target="_blank">Leaflet</a> (BSD2)</li>
		<li><a href="http://git.io/vkfA2" target="_blank">Leaflet.label</a> (MIT)</li>
		<li><a href="http://git.io/mwK1oA" target="_blank">Leaflet-hash</a> (MIT)</li>
		<li><a href="http://git.io/vJw5v" target="_blank">Leaflet.fullscreen</a> (BSD2)</li>
		<li><a href="http://git.io/vkCPC" target="_blank">Leaflet Control Search</a> (MIT)</li>
		<li><a href="http://git.io/vIAs2" target="_blank">Font Awesome</a> (MIT)</li>
	</ul>
`;

console.log("Configuration loaded");
