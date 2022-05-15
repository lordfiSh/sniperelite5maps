(async () => {
	if(!app.loaded) {
		console.error("map.js must be loaded after common.js");
		return;
	}
	
	app.basePath = location.origin + location.pathname.substr(0, location.pathname.lastIndexOf('/', location.pathname.length - 2) + 1);
	console.log("Resource path: " + app.basePath);
	
	// sidebar setup
	{
		app.initSidebar = initSidebar;
		
		function initSidebar() {
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
	
	// map marker setup
	{
		app.createLeafletMarker = createLeafletMarker;
		app.getIcon = getIcon;
		app.initMapMarkers = initMapMarkers;
		
		function createLeafletMarker(markerInfo) {
			const group = markerInfo.group;
			const icon = getIcon(markerInfo.icon ?? group);
			const label = markerInfo.label;
			const popup = "<h1>" + label + "</h1>" + (markerInfo.popup ? markerInfo.popup + "<br>" : "") + "<small>" + $.t(`marker.${group}.desc`) + "</small>";
			const marker = L.marker(markerInfo.position, {icon, riseOnHover: true});
			
			const lat = marker.getLatLng().lat;
			const lng = marker.getLatLng().lng;
			
			marker.bindLabel(label);
			marker.bindPopup(popup, {});
			
			marker.on('contextmenu', () =>
				toggleMarkerTransparency(lat, lng, marker, group));
			
			if(isMarkerTransparent(lat, lng)) {
				marker.setOpacity(app.transparentMarkerOpacity ?? 0.5);
				app.markerCount[group]--;
			}
			
			return marker;
		}
		
		function getIcon(name) {
			app.iconCache ??= {};
			if(app.iconCache[name]) return app.iconCache[name];
			
			const info = app.iconTypes[name];
			if(!info) console.warn("Unknown icon type: " + name);
			
			return app.iconCache[name] = L.icon({
				iconUrl: `${app.basePath}images/icons/${name}.png`,
				iconSize: info?.size ?? [32, 32]
			});
		}
		
		function initMapMarkers() {
			app.loadTransparentMarkers();
			app.loadNotes();
			
			const layers = {};
			
			for(const group of app.markerGroups) {
				layers[group.name] = [];
			}
			
			app.markerCount = {};
			
			for(const markerInfo of app.mapData.markers) {
				const group = markerInfo.group;
				app.markerCount[group] ??= 0;
				app.markerCount[group]++;
				
				const marker = createLeafletMarker(markerInfo);
				layers[group] ??= [];
				layers[group].push(marker);
			}
			
			app.layers = layers;
			app.leafletLayers = {};
			
			for(const group in layers) {
				const layer = layers[group];
				app.leafletLayers[group] = L.layerGroup(layer);
			}
		}
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
				app.markerCount[group]--;
				app.transparentMarkers.push(lat + ';' + lng);
			} else {
				marker.setOpacity(1.0);
				app.markerCount[group]++;
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
			$('ul.key:not(.controls) > li:not(.none) > i.' + group + ' ~ :last').text(app.markerCount[group]);
		}
	}
	
	// custom notes
	{
		app.loadNotes = loadNotes;
		app.saveNotes = saveNotes;
		
		function loadNotes() {
			const key = `notes-${app.mapData.name}`;
			window.notes = JSON.parse(localStorage[key] ?? "[]");
		}
		
		function saveNotes() {
			const key = `notes-${app.mapData.name}`;
			localStorage[key] = JSON.stringify(window.notes);
		}
	}
	
	// initialization
	{
		app.initPage = initPage;
		app.initPageTitle = initPageTitle;
		
		async function initPage() {
			await app.runScript('scripts/config.js');
			
			const namespace = location.pathname.match(/\/(\w+)\/?$/)[1];
			const mapName = app.maps[namespace];
			
			await app.initLocalization();
			await app.loadLocalizationNamespace(mapName);
			await app.runScript('scripts/mapdata.js');
			await app.runScript(`scripts/mapdata/${mapName}.js`);
			
			app.initSidebar();
			app.initMapMarkers();
			app.initPageTitle();
			
			app.initialized = true;
		}
		
		function initPageTitle() {
			const mapTitle = $.t(`maps.${app.mapData.name}`).replace('<br>', ' ');
			const pageTitle = $.t('home.title');
			document.title = `${mapTitle} - ${pageTitle}`;
		}
	}
	
	app.initPage().then(() => console.log("App initialized"));
})();