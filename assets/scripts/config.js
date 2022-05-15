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

console.log("Configuration loaded");
