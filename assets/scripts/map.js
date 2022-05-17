(async () => {
	if(!app.loaded) {
		console.error("map.js must be loaded after common.js");
		return;
	}
	
	app.basePath = location.origin + location.pathname.substr(0, location.pathname.lastIndexOf('/', location.pathname.length - 2) + 1);
	console.log("Resource path: " + app.basePath);
	
	// sidebar setup
	{
		app.isSidebarHidden = isSidebarHidden;
		app.hideSidebar = hideSidebar;
		app.showSidebar = showSidebar;
		app.toggleSidebar = toggleSidebar;
		app.updateSidebar = updateSidebar;
		app.initSidebar = initSidebar;
		
		const sidebarContainer = $('#sidebar-container');
		const sidebarToggle = $('#sidebar-toggle');
		const mapElement = $('#map');
		const sidebarAnimationDuration = 200;
		
		let sidebarSmall;
		let sidebarWidth;
		let mapLeft;
		
		function isSidebarHidden() {
			return localStorage['hide-sidebar'];
		}
		
		function stopSidebarAnimation() {
			sidebarContainer.stop();
			sidebarToggle.stop();
			mapElement.stop();
		}
		
		function hideSidebar(duration) {
			stopSidebarAnimation();
			//infoContainerDiv.addClass('full-width');
			sidebarToggle.addClass('show-sidebar');
			sidebarToggle.animate({left: '0px'}, duration);
			sidebarContainer.animate({width: '15px'}, duration);
			mapElement.animate({left: '0px'}, {
				duration,
				step: () => app.leafletMap?.invalidateSize(),
				complete: () => app.leafletMap?.invalidateSize()
			});
			localStorage['hide-sidebar'] = true;
		}
		
		function showSidebar(duration) {
			stopSidebarAnimation();
			sidebarToggle.animate({left: mapLeft + 'px'}, duration);
			sidebarToggle.removeClass('show-sidebar');
			mapElement.animate({left: mapLeft + 'px'}, {
				duration,
				step: () => app.leafletMap?.invalidateSize(),
				complete: () => app.leafletMap?.invalidateSize()
			});
			sidebarContainer.animate({width: sidebarWidth + 'px'}, duration, function() {
				//infoContainerDiv.removeClass('full-width');
			});
			localStorage.removeItem('hide-sidebar');
		}
		
		function toggleSidebar() {
			if(isSidebarHidden())
				showSidebar(sidebarAnimationDuration);
			else
				hideSidebar(sidebarAnimationDuration);
		}
		
		function updateSidebar() {
			sidebarSmall = $(window).width() <= 768;
			sidebarWidth = sidebarSmall ? 220 : 400;
			mapLeft = sidebarWidth - 15;
			
			stopSidebarAnimation();
			if(isSidebarHidden()) {
				hideSidebar(0);
			} else {
				showSidebar(0);
			}
			
			app.leafletMap?.invalidateSize();
		}
		
		function initSidebar() {
			$('#sidebar').niceScroll({
				cursorcolor: '#5E4F32',
				cursorborder: 'none',
			});
			
			updateSidebar();
			
			sidebarToggle.on('click', () => toggleSidebar());
			$(window).on('resize', () => updateSidebar());
		}
	}
	
	// marker group list
	{
		app.initGroupList = initGroupList;
		app.showMarkerGroup = showMarkerGroup;
		app.hideMarkerGroup = hideMarkerGroup;
		app.toggleMarkerGroup = toggleMarkerGroup;
		app.isMarkerGroupVisible = isMarkerGroupVisible;
		app.loadMarkerGroupVisibility = loadMarkerGroupVisibility;
		app.saveMarkerGroupVisibility = saveMarkerGroupVisibility;
		
		const hideAllButton = $('#hide-all');
		const showAllButton = $('#show-all');
		
		function showMarkerGroup(groupName) {
			const li = $(`#marker-groups li[data-layer="${groupName}"]`);
			li.removeClass('layer-disabled');
			if(app.leafletLayers[groupName])
				app.leafletMap.addLayer(app.leafletLayers[groupName]);
			saveMarkerGroupVisibility(groupName, true);
		}
		
		function hideMarkerGroup(groupName) {
			const li = $(`#marker-groups li[data-layer="${groupName}"]`);
			li.addClass('layer-disabled');
			if(app.leafletLayers[groupName])
				app.leafletMap.removeLayer(app.leafletLayers[groupName]);
			saveMarkerGroupVisibility(groupName, false);
		}
		
		function toggleMarkerGroup(groupName) {
			if(isMarkerGroupVisible(groupName)) {
				hideMarkerGroup(groupName);
			}
			else {
				showMarkerGroup(groupName);
			}
		}
		
		function isMarkerGroupVisible(groupName) {
			return !$(`#marker-groups li[data-layer="${groupName}"]`)
				.hasClass('layer-disabled');
		}
		
		function loadMarkerGroupVisibility() {
			const storageKey = 'group-visibility-' + app.mapData.name;
			return app.getConfigValue(storageKey, {'other': false});
		}
		
		function saveMarkerGroupVisibility(groupName, visible) {
			const storageKey = 'group-visibility-' + app.mapData.name;
			const enabledMarkers = loadMarkerGroupVisibility();
			enabledMarkers[groupName] = visible;
			localStorage[storageKey] = JSON.stringify(enabledMarkers);
		}
		
		function initMarkerGroupVisibilityButtons() {
			if(localStorage['hide-all-' + app.mapData.name]) {
				hideAllButton.hide();
				showAllButton.show();
			}
			
			hideAllButton.on('click', () => {
				for(const group of app.markerGroups) {
					hideMarkerGroup(group.name);
				}
				hideAllButton.hide();
				showAllButton.show();
				localStorage['hide-all-' + app.mapData.name] = true;
			});
			
			showAllButton.on('click', () => {
				for(const group of app.markerGroups) {
					showMarkerGroup(group.name);
				}
				hideAllButton.show();
				showAllButton.hide();
				localStorage.removeItem('hide-all-' + app.mapData.name);
			});
		}
		
		function initGroupList() {
			const list = document.getElementById('marker-groups');
			list.textContent = '';
			
			const visibility = app.loadMarkerGroupVisibility();
			
			for(const group of app.markerGroups) {
				const item = document.createElement('li');
				const icon = document.createElement('img');
				const name = document.createElement('span');
				
				item.dataset['layer'] = group.name;
				$(item).on('click', () => toggleMarkerGroup(group.name));
				if(!(visibility[group.name] ?? true))
					item.classList.add('layer-disabled');
				
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
			
			initMarkerGroupVisibilityButtons();
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
			
			//marker.bindLabel(label);
			//marker.bindPopup(popup, {});
			
			marker.on('contextmenu', () =>
				app.toggleMarkerTransparency(lat, lng, marker, group));
			
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
				app.leafletLayers[group] = L.layerGroup(layers[group]);
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
		app.initTracking = initTracking;
		
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
			$(`#marker-groups > li[data-layer="${group}"] > .pill`)
				.text(app.markerCount[group]);
		}
		
		function initTracking() {
			$('#reset-tracking').on('click', function(e) {
				e.preventDefault();
				if(confirm($.t('controls.reset-markers-confirm'))) {
					resetTransparentMarkers();
				}
			});
		}
	}
	
	// marker counter pills
	{
		app.hideMarkerCounts = hideMarkerCounts;
		app.showMarkerCounts = showMarkerCounts;
		app.initCounterPills = initCounterPills;
		
		const hideCountsButton = $('#hide-counts');
		const showCountsButton = $('#show-counts');
		
		function hideMarkerCounts() {
			$('.item-count-pill').hide();
			hideCountsButton.hide();
			showCountsButton.show();
			localStorage['hide-counts'] = true;
		}
		
		function showMarkerCounts() {
			$('.item-count-pill').show();
			hideCountsButton.show();
			showCountsButton.hide();
			localStorage.removeItem('hide-counts');
		}
		
		function initCounterPills() {
			hideCountsButton.on('click', () => hideMarkerCounts());
			showCountsButton.on('click', () => showMarkerCounts());
			
			for(const li of $('#marker-groups li[data-layer]').toArray()) {
				const marker = $(li).attr('data-layer');
				const pill = $(`<div class='pill item-count-pill'>${app.markerCount[marker] ?? 0}</div>`);
				$(li).append(pill);
				if(localStorage['hide-counts']) {
					pill.hide();
				}
			}
			
			if(localStorage['hide-counts']) {
				hideCountsButton.hide();
				showCountsButton.show();
			}
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
	
	// leaflet map setup
	{
		app.initLeafletMap = initLeafletMap;
		
		function initLeafletMap() {
			if(!L) {
				console.error("Leaflet is not loaded");
				return;
			}
			
			if(!app.mapData) {
				console.error("No map data loaded");
				return;
			}
			
			const w = app.mapData.dimensions[0];
			const h = app.mapData.dimensions[1];
			
			// TODO I don't have the slightest clue where this constant comes from, but it results in the "correct" scale
			const globalScale = 8 / 256;
			
			L.CRS.Pixel = L.extend({}, L.CRS.Simple, {
				transformation: new L.Transformation(globalScale, 0, -globalScale, 0)
			});
			
			// TODO this is incredibly janky, but it seems to be the only way to make leaflet load the correct tiles
			L.PixelTileLayer = L.TileLayer.extend({
				getTileUrl: function(coords) {
					const data = {
						x: coords.x,
						y: -coords.y - 1,
						z: this._getZoomForUrl()
					};
					return L.Util.template(this._url, L.Util.extend(data, this.options));
				}
			});
			
			app.leafletMap = L.map('map', {
				crs: L.CRS.Pixel,
				layers: [],
				
				minZoom: 1,
				maxZoom: 7,
				
				attributionControl: false,
				zoomControl: false,
			});
			
			app.leafletMap.setMaxBounds([[0, 0], [h, w]]);
			
			// add only the visible layers to the map
			for(const [group, layer] of Object.entries(app.leafletLayers)) {
				if(app.isMarkerGroupVisible(group)) {
					app.leafletMap.addLayer(layer);
				}
			}
			
			// set up hash and parse initial map view
			app.leafletHash = L.hash(app.leafletMap, {precision: 0});
			const hashInfo = app.leafletHash.parseHash();
			const zoom = hashInfo?.zoom ?? app.mapData.defaultZoom;
			const center = hashInfo?.center ?? app.mapData.focus ?? [h / 2, w / 2];
			app.leafletMap.setView(center, zoom, {animate: false});
			
			new L.PixelTileLayer(app.basePath + app.mapData.tilePath, {
				tms: true,
				// this should always evaluate to 256
				tileSize: 256 * globalScale * 256 / 8,
				minNativeZoom: app.mapData.minZoom ?? 2,
				maxNativeZoom: app.mapData.maxZoom ?? 6,
				bounds: [[0, 0], [h, w]],
				errorTileUrl: app.basePath + 'images/missing.png'
			}).addTo(app.leafletMap);
			
			//* debug overlay with the full map image
			L.imageOverlay(
				`${app.basePath}maps/${app.mapData.name}/complete.png`,
				[[0, 0], [h, w]]
			).addTo(app.leafletMap).setOpacity(0.2);
			//*/
			
			/* debug polygon
			L.polygon([[0, 0], [h, 0], [h, w], [0, w]], {
				color: 'blue'
			}).addTo(app.leafletMap);
			//*/
			
			//* debug output on right-click
			app.leafletMap.on('contextmenu', function(e) {
				console.log(`x: ${e.latlng.lng}, y: ${e.latlng.lat}`);
			});
			//*/
		}
	}
	
	// leaflet plugin setup
	{
	
	}
	
	// user marker
	{
		app.showUserMarkerAt = showUserMarkerAt;
		app.hideUserMarker = hideUserMarker;
		app.initUserMarker = initUserMarker;
		
		let userMarker = undefined;
		
		function createUserMarker() {
			const icon = L.icon({
				iconUrl: `${app.basePath}images/icons/marker.png`,
				iconSize: [48, 48]
			});
			const marker = new L.Marker([0, 0], {icon});
			marker.on('click', hideUserMarker);
			marker.on('contextmenu', hideUserMarker);
			return marker;
		}
		
		function showUserMarkerAt(position) {
			const latlng = L.latLng(position);
			userMarker.setLatLng(position);
			app.leafletMap.addLayer(userMarker);
			app.leafletHash.setParam('w', latlng.lat.toFixed(0) + ',' + latlng.lng.toFixed(0));
		}
		
		function hideUserMarker() {
			app.leafletMap.removeLayer(userMarker);
			app.leafletHash.removeParam('w');
		}
		
		function initUserMarker() {
			userMarker = createUserMarker();
			
			app.leafletMap.on('contextmenu', function(e) {
				let w = app.mapData.dimensions[0];
				let h = app.mapData.dimensions[1];
				let x = Math.round(Math.max(0, Math.min(e.latlng.lng, w)));
				let y = Math.round(Math.max(0, Math.min(e.latlng.lat, h)));
				
				showUserMarkerAt([y, x]);
			});
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
			app.initGroupList();
			app.initPageTitle();
			app.initMapMarkers();
			app.initLeafletMap();
			app.initUserMarker();
			app.initCounterPills();
			app.initTracking();
			
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