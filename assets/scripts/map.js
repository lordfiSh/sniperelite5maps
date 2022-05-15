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
		app.loadTransparentMarkers = loadTransparentMarkers;
		app.saveTransparentMarkers = saveTransparentMarkers;
		app.resetTransparentMarkers = resetTransparentMarkers;
		app.isMarkerTransparent = isMarkerTransparent;
		app.setMarkerTransparent = setMarkerTransparent;
		app.toggleMarkerTransparency = toggleMarkerTransparency;
		
		function loadTransparentMarkers() {
			const key = `transparent-markers-${app.mapData.name}`;
			app.transparentMarkers = JSON.parse(localStorage[key] ?? "[]");
		}
		
		function saveTransparentMarkers() {
			const key = `transparent-markers-${app.mapData.name}`;
			localStorage[key] = JSON.stringify(app.transparentMarkers);
		}
		
		function resetTransparentMarkers() {
			app.transparentMarkers = [];
			saveTransparentMarkers();
			location.reload();
		}
		
		function isMarkerTransparent(lat, lng) {
			return app.transparentMarkers.includes(lat + ';' + lng);
		}
		
		function setMarkerTransparent(lat, lng, marker, group, transparent) {
			if(transparent === isMarkerTransparent(lat, lng)) return;
			
			if(transparent) {
				marker.setOpacity(app.transparentMarkerOpacity ?? 0.5);
				markerCount[group]--;
				app.transparentMarkers.push(lat + ';' + lng);
			} else {
				marker.setOpacity(1.0);
				markerCount[group]++;
				app.transparentMarkers.splice(app.transparentMarkers.indexOf(lat + ';' + lng), 1);
			}
			
			updateMarkerCountPill(group);
			saveTransparentMarkers();
		}
		
		function toggleMarkerTransparency(lat, lng, marker, group) {
			const isTransparent = isMarkerTransparent(lat, lng);
			setMarkerTransparent(lat, lng, marker, group, !isTransparent);
		}
		
		function updateMarkerCountPill(group) {
			$('ul.key:not(.controls) > li:not(.none) > i.' + group + ' ~ :last').text(markerCount[group]);
		}
	}
	
	// TODO init
	await app.runScript('scripts/config.js');
	await app.runScript('scripts/mapdata.js');
	app.populateSidebar();
	
})();