(async () => {
	if(!app.loaded) {
		console.error("map.js must be loaded after common.js");
		return;
	}
	
	app.basePath = location.origin + location.pathname.substr(0, location.pathname.lastIndexOf('/', location.pathname.length - 2) + 1);
	console.log("Resource path: " + app.basePath);
	
	await app.init();
	console.log("App initialized");
	
	// sidebar setup
	{
		app.populateSidebar = populateSidebar;
		
		function populateSidebar() {
			const list = document.getElementById('marker-groups');
			list.textContent = '';
			
			for(const group of app.markerGroups) {
				const item = document.createElement('li');
				const icon = document.createElement('img');
				const name = document.createElement('span');
				
				icon.classList.add(group.name);
				icon.src = `${app.basePath}images/icons/${group.icon ?? group.name}.png`;
				name.textContent = $.t(`marker.${group.name}.group`);
				
				item.appendChild(icon);
				item.appendChild(name);
				list.appendChild(item);
			}
			
			if(app.markerGroups.length % 2) {
				const item = document.createElement('li');
				list.appendChild(item);
			}
		}
	}
	
	// leaflet map setup
	{
	
	}
	
	// transparent marker logic
	{
	
	}
	
	// TODO init
	await app.runScript('scripts/config.js');
	app.populateSidebar();
	
})();