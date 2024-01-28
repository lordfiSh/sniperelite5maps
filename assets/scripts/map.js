(() => {
	if(!app.loaded) {
		console.error("map.js must be loaded after common.js");
		return;
	}
	
	app.basePath = location.origin + location.pathname.substring(0, location.pathname.lastIndexOf('/', location.pathname.length - 2) + 1);
	console.log("Resource path: " + app.basePath);
	
	// utility
	{
		app.parseCoordinates = parseCoordinates;
		app.formatCoordinates = formatCoordinates;
		
		function parseCoordinates(string) {
			if(!string) return undefined;
			
			const coords = string.split(',');
			if(coords.length !== 2) {
				console.error('Invalid coordinate string: ' + string);
				return undefined;
			}
			
			const lat = parseFloat(coords[0]);
			const lng = parseFloat(coords[1]);
			if(lat === undefined || lng === undefined) {
				console.error('Invalid coordinate string: ' + string);
				return undefined;
			}
			
			return L.latLng(lat, lng);
		}
		
		function formatCoordinates(coords) {
			coords = L.latLng(coords);
			return `${Math.round(coords.lat)},${Math.round(coords.lng)}`;
		}
	}
	
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
		
		function initUsageModal() {
			$('#usage').on('click', e => {
				e.preventDefault();
				app.pushModal('Usage Hints', app.helpText);
			});
		}
		
		function initCreditsModal() {
			$('#credits').on('click', e => {
				e.preventDefault();
				app.pushModal('Credits', app.creditsText);
			});
		}
		
		function initSidebar() {
			$('#sidebar-content').niceScroll({
				cursorcolor: '#B08948',
				cursorborder: 'none',
			});
			
			updateSidebar();
			
			sidebarToggle.on('click', () => toggleSidebar());
			$(window).on('resize', () => updateSidebar());
			
			initUsageModal();
			initCreditsModal();
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
			} else {
				showMarkerGroup(groupName);
			}
		}
		
		function isMarkerGroupVisible(groupName) {
			return !$(`#marker-groups li[data-layer="${groupName}"]`)
				.hasClass('layer-disabled');
		}
		
		function loadMarkerGroupVisibility() {
			const storageKey = 'group-visibility-' + app.mapData.name;
			return app.getConfigValue(storageKey, Object.fromEntries((app.defaultHiddenGroups ?? ['other']).map(key => [key, false])));
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
				for(const groupName in app.markerGroups) {
					hideMarkerGroup(groupName);
				}
				hideAllButton.hide();
				showAllButton.show();
				localStorage['hide-all-' + app.mapData.name] = true;
			});
			
			showAllButton.on('click', () => {
				for(const groupName in app.markerGroups) {
					showMarkerGroup(groupName);
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
			
			let count = 0;
			for(const [groupName, group] of Object.entries(app.markerGroups)) {
				const item = document.createElement('li');
				const icon = document.createElement('img');
				const name = document.createElement('span');
				
				item.dataset['layer'] = groupName;
				$(item).on('click', () => toggleMarkerGroup(groupName));
				if(!(visibility[groupName] ?? !(app.defaultHiddenGroups ?? []).includes(groupName)))
					item.classList.add('layer-disabled');
				
				icon.classList.add(groupName);
				icon.src = getIconPath(group.sidebarIcon ?? groupName);
				name.textContent = $.t(`sidebar.marker-group.${groupName}`);
				
				item.appendChild(icon);
				item.appendChild(name);
				list.appendChild(item);
				
				count++;
			}
			
			if(count % 2) {
				const item = document.createElement('li');
				list.appendChild(item);
			}
			
			initMarkerGroupVisibilityButtons();
		}
	}
	
	// map marker setup
	{
		app.createLeafletMarker = createLeafletMarker;
		app.findMarkerAt = findMarkerAt;
		app.getIconPath = getIconPath;
		app.getIcon = getIcon;
		app.initMapElements = initMapElements;
		
		function createLeafletMarker(markerInfo) {
			const type = markerInfo.type;
			const typeInfo = app.markerTypes[type];
			if(!typeInfo) console.warn("Unknown marker type: " + type);
			
			const group = markerInfo.group;
			const icon = getIcon(typeInfo?.icon ?? type);
			const marker = L.marker(markerInfo.position, {icon, riseOnHover: true, markerInfo});
			
			const lat = marker.getLatLng().lat;
			const lng = marker.getLatLng().lng;
			
			if(isMarkerTransparent(lat, lng)) {
				marker.setOpacity(app.transparentMarkerOpacity ?? 0.5);
				app.markerCount[group]--;
			}
			
			marker.on('contextmenu', () => {
				app.toggleMarkerTransparency(lat, lng, marker, group);
			});
			
			marker.bindPopup(markerInfo.popupContent, {
				autoClose: false,
				closeButton: false,
				offset: L.point(0, 0),
				interactive: true
			});
			app.bindPopupEvents(marker);
			
			return marker;
		}
		
		function findMarkerAt(position) {
			position = L.latLng(position);
			return Object.values(app.leafletLayers)
				.flatMap(layer => layer.getLayers())
				.find(marker => marker.getLatLng().equals(position));
		}
		
		function getIconPath(name) {
			const info = app.markerIcons[name];
			if(!info) console.warn("Unknown icon type: " + name);
			
			const folder = info?.folder ? info.folder + '/' : '';
			const file = info?.file ?? name;
			
			return `${app.basePath}images/icons/${folder}${file}.png`;
		}
		
		function getIcon(name) {
			app.iconCache ??= {};
			if(app.iconCache[name]) return app.iconCache[name];
			
			const info = app.markerIcons[name];
			
			return app.iconCache[name] = L.icon({
				iconUrl: getIconPath(name),
				iconSize: info?.size ?? app.defaultIconSize ?? [32, 32],
			});
		}
		
		function initMapElements() {
			app.loadTransparentMarkers();
			
			const layers = {};
			
			for(const groupName in app.markerGroups) {
				layers[groupName] = [];
			}
			
			app.markerCount = {};
			
			function addMarker(markerInfo) {
				processMarker(markerInfo);
				
				// skip markers without position
				if(markerInfo.position[0] === 0 && markerInfo.position[1] === 0)
					return;
				
				const group = markerInfo.group;
				app.markerCount[group] ??= 0;
				app.markerCount[group]++;
				
				const marker = createLeafletMarker(markerInfo);
				layers[group] ??= [];
				layers[group].push(marker);
			}
			
			for(const markerInfo of app.mapData.markers) {
				addMarker(markerInfo);
			}
			
			for(const zipline of app.mapData.ziplines ?? []) {
				const points = [
					zipline.startPosition,
					zipline.endPosition
				];
				const polyline = L.polyline(points, {color: 'white'});
				layers['utilities'].push(polyline);
				
				addMarker(zipline.startMarker);
				//addMarker(zipline.endMarker);
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
		const markerGroupsList = $('#marker-groups');
		
		function hideMarkerCounts() {
			markerGroupsList.addClass('hide-pills');
			hideCountsButton.hide();
			showCountsButton.show();
			localStorage['hide-counts'] = true;
		}
		
		function showMarkerCounts() {
			markerGroupsList.removeClass('hide-pills');
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
			}
			
			if(localStorage['hide-counts']) {
				hideMarkerCounts();
			}
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
			
			const globalScale = 1 / Math.pow(2, app.mapData.neutralZoom ?? 5);
			
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
				
				minZoom: app.minZoom ?? 0,
				maxZoom: app.maxZoom ?? 7,
				
				attributionControl: false,
				zoomControl: false,
			});
			
			const [w, h] = app.mapData.dimensions ?? [0, 0];
			app.leafletMap.setMaxBounds(app.mapData.bounds ?? [[0, 0], [h, w]]);
			
			// add only the visible layers to the map
			for(const [group, layer] of Object.entries(app.leafletLayers)) {
				if(app.isMarkerGroupVisible(group)) {
					app.leafletMap.addLayer(layer);
				}
			}
			
			app.leafletMap.on('click', () => {
				updatePermanentMarker(undefined);
			});
			
			// set up hash and parse initial map view
			app.leafletHash = L.hash(app.leafletMap, {precision: 0});
			const hashInfo = app.leafletHash.parseHash();
			const zoom = hashInfo?.zoom ?? app.mapData.defaultZoom ?? 2;
			const center = hashInfo?.center ?? app.mapData.focus ?? [h / 2, w / 2];
			app.leafletMap.setView(center, zoom, {animate: false});
			
			if(app.mapData.tilePath) {
				new L.PixelTileLayer(app.basePath + app.mapData.tilePath, {
					tms: true,
					tileSize: app.tileSize ?? 256,
					minNativeZoom: app.mapData.minZoom ?? 2,
					maxNativeZoom: app.mapData.maxZoom ?? 6,
					bounds: [[0, 0], [h, w]],
					errorTileUrl: app.basePath + 'images/missing.png'
				}).addTo(app.leafletMap);
			}
			
			// remove leaflet-touch class because it messes up the control style
			$('#map').removeClass('leaflet-touch');
			
			/* debug overlay with the full map image
			L.imageOverlay(
				`${app.basePath}maps/m_coast/merged.png`,
				[[0, 0], [h, w]]
			).addTo(app.leafletMap).setOpacity(0.2);
			//*/
			
			/* debug polygon
			L.polygon([[0, 0], [h, 0], [h, w], [0, w]], {
				color: 'blue'
			}).addTo(app.leafletMap);
			//*/
			
			/* debug output on right-click
			app.leafletMap.on('contextmenu', function(e) {
				console.log(`x: ${Math.round(e.latlng.lng)}, y: ${Math.round(e.latlng.lat)}`);
			});
			//*/
		}
	}
	
	// leaflet plugin setup
	{
		app.initZoomControl = initZoomControl;
		app.initFullscreenControl = initFullscreenControl;
		app.initSearchControl = initSearchControl;
		
		function initZoomControl() {
			new L.Control.Zoom({
				position: 'topright',
				zoomInTitle: $.t('controls.zoom-in'),
				zoomOutTitle: $.t('controls.zoom-out')
			}).addTo(app.leafletMap);
		}
		
		function initFullscreenControl() {
			new L.Control.Fullscreen({
				position: 'topright',
				title: {
					'false': $.t('controls.fullscreen-enter'),
					'true': $.t('controls.fullscreen-exit')
				}
			}).addTo(app.leafletMap);
		}
		
		function initSearchControl() {
			const data = app.mapData.markers;//.filter(marker => marker.id !== 0);
			
			const fuse = new window.Fuse(data, {
				isCaseSensitive: false,
				includeScore: false,
				includeMatches: false,
				shouldSort: true,
				threshold: 0.2,
				location: 0,
				distance: 10000,
				maxPatternLength: 32,
				keys: ['searchLabel']
			});
			
			new L.Control.Search({
				autoResize: false,
				autoType: false,
				autoCollapse: false,
				tipAutoSubmit: false,
				minLength: 2,
				position: 'topright',
				propertyLoc: 'position',
				textErr: $.t('controls.search.error'),
				textCancel: $.t('controls.search.cancel'),
				textPlaceholder: $.t('controls.search.placeholder'),
				sourceData: (_, text, callback) => {
					callback(data);
					return {abort: () => 0};
				},
				filterData: (text, allRecords) => {
					// we don't need allRecords because fuse
					// already knows the full dataset
					let counter = 0;
					return Object.fromEntries(
						fuse.search(text)
							.map(record => [counter++, record.item]));
				},
				buildTip: (counter, record) => {
					const elem = document.createElement('span');
					elem.innerText = record.searchLabel;
					elem.addEventListener('click', () => app.focusMarkerAt(record.position));
					return elem;
				}
			}).addTo(app.leafletMap);
			
			$('.search-tooltip').niceScroll({
				cursorcolor: '#B08948',
				cursorborder: 'none',
				horizrailenabled: false
			});
		}
	}
	
	// user marker
	{
		app.showUserMarkerAt = showUserMarkerAt;
		app.hideUserMarker = hideUserMarker;
		app.initUserMarker = initUserMarker;
		
		let userMarker = undefined;
		
		function createUserMarker() {
			const icon = getIcon('waypoint');
			const marker = new L.Marker([0, 0], {icon});
			marker.on('click', hideUserMarker);
			marker.on('contextmenu', hideUserMarker);
			return marker;
		}
		
		function showUserMarkerAt(position) {
			position = L.latLng(position);
			const lat = Math.round(position.lat);
			const lng = Math.round(position.lng);
			userMarker.setLatLng(position);
			if(app.quickSubmit?.enable && app.quickSubmit.links) {
				const url = app.quickSubmit.links[app.mapSlug];
				if(url) {
					userMarker.bindTooltip(`<a href="${url}${lat},${lng}" target="_blank">${$.t('marker.submit', {
						y: lat,
						x: lng
					})}</a>`, {permanent: true, interactive: true});
				} else {
					userMarker.unbindTooltip();
				}
			}
			app.leafletMap.addLayer(userMarker);
			app.leafletHash.setParam('w', app.formatCoordinates(position));
		}
		
		function hideUserMarker() {
			app.leafletMap.removeLayer(userMarker);
			app.leafletHash.removeParam('w');
		}
		
		function initUserMarker() {
			userMarker = createUserMarker();
			
			const params = app.leafletHash.getHashParams();
			if(params['w']) {
				const coords = app.parseCoordinates(params['w']);
				if(coords) showUserMarkerAt(coords);
			}
			
			app.leafletMap.on('contextmenu', function(e) {
				let w = app.mapData.dimensions[0];
				let h = app.mapData.dimensions[1];
				let x = Math.round(Math.max(0, Math.min(e.latlng.lng, w)));
				let y = Math.round(Math.max(0, Math.min(e.latlng.lat, h)));
				
				showUserMarkerAt([y, x]);
			});
		}
	}
	
	// marker selection
	{
		app.bindPopupEvents = bindPopupEvents;
		app.focusMarkerAt = focusMarkerAt;
		app.highlightMarkerAt = highlightMarkerAt;
		app.unhighlightMarker = unhighlightMarker;
		app.initMarkerSelection = initMarkerSelection;
		
		let circle;
		let currentPermanentMarker;
		
		function updatePermanentMarker(marker) {
			if(currentPermanentMarker === marker) {
				currentPermanentMarker = undefined;
				unhighlightMarker();
			} else {
				currentPermanentMarker?.closePopup();
				currentPermanentMarker = marker;
				if(marker) {
					highlightMarkerAt(marker.getLatLng());
				} else {
					unhighlightMarker();
				}
			}
			marker?.updatePopup();
		}
		
		function bindPopupEvents(marker) {
			const popup = marker.getPopup();
			let isMarkerHovered = false;
			let isPopupHovered = false;
			
			marker.updatePopup = updatePopup;
			
			function updatePopup() {
				if(isMarkerHovered || isPopupHovered || currentPermanentMarker === marker) {
					if(!marker.isPopupOpen()) marker.openPopup();
				} else {
					if(marker.isPopupOpen()) marker.closePopup();
				}
			}
			
			marker.on('mouseover', () => {
				isMarkerHovered = true;
				updatePopup();
			});
			
			marker.on('mouseout', () => {
				isMarkerHovered = false;
				setTimeout(updatePopup, 0);
			});
			
			// disable default leaflet behaviour for click event
			marker.off('click');
			marker.on('click', () => {
				updatePermanentMarker(marker);
			});
			
			popup.on('mouseover', () => {
				isPopupHovered = true;
				updatePopup();
			});
			
			popup.on('mouseout', () => {
				isPopupHovered = false;
				setTimeout(updatePopup, 0);
			});
		}
		
		function focusMarkerAt(position, zoom, options) {
			const marker = app.findMarkerAt(position);
			app.showMarkerGroup(marker.options.markerInfo.group);
			updatePermanentMarker(marker);
			if(marker) {
				app.leafletMap.flyTo(position, zoom, options);
			} else {
				console.warn('No marker found at ' + app.formatCoordinates(position));
			}
		}
		
		function highlightMarkerAt(position) {
			circle.setLatLng(position);
			if(app.enableCircleMarker) app.leafletMap.addLayer(circle);
			app.leafletHash.setParam('m', app.formatCoordinates(position));
		}
		
		function unhighlightMarker() {
			circle.setLatLng([0, 0]);
			app.leafletMap.removeLayer(circle);
			app.leafletHash.removeParam('m');
		}
		
		function initMarkerSelection() {
			circle = L.circleMarker([0, 0], {
				color: 'red',
				fillColor: 'red',
				fillOpacity: 0.5,
				radius: 20
			});
			
			const params = app.leafletHash.getHashParams();
			if(params['m']) {
				const coords = app.parseCoordinates(params['m']);
				if(coords) focusMarkerAt(coords);
			}
		}
	}
	
	// modal popups
	{
		app.pushModal = pushModal;
		app.popModal = popModal;
		
		const modals = [];
		let modalId = 1;
		
		function pushModal(title, content) {
			const id = 'modal-' + modalId++;
			
			const modal = $(`
				<div id="${id}" class="popup-overlay">
					<div class="popup-wrap">
						<div class="popup-border">
							<img class="popup-close" src="../images/exit.png" alt="Close" onclick="app.popModal();">
							<div class="popup-content">
								<h1>${title}</h1>
								<hr>
								${content}
							</div>
						</div>
					</div>
				</div>
			`);
			
			if(modals.length > 0) {
				modals[modals.length - 1].remove();
			}
			
			modals.push(modal);
			$('body').prepend(modal);
			
			$(`#${id} .popup-content`).niceScroll({
				cursorcolor: '#5E4F32',
				cursorborder: 'none',
				autohidemode: false,
				railpadding: {top: 22, right: 5, bottom: 5},
				horizrailenabled: false
			});
		}
		
		function popModal() {
			if(modals.length === 0) return;
			
			const current = modals.pop();
			$(current).getNiceScroll().remove();
			current.remove();
			
			if(modals.length > 0) {
				$('body').prepend(modals[modals.length - 1]);
			}
		}
	}
	
	// initialization
	{
		app.initPage = initPage;
		app.initPageTitle = initPageTitle;
		
		async function initPage() {
			app.mapSlug = location.pathname.match(/\/(\w+)\/?$/)[1];
			const mapName = app.maps[app.mapSlug];
			
			await app.initLocalization();
			await app.loadLocalizationNamespace(mapName);
			await app.runScript('scripts/mapdata.js');
			await app.runScript(`scripts/mapdata/${mapName}.js`);
			
			app.initSidebar();
			app.initGroupList();
			app.initPageTitle();
			app.initMapElements();
			
			app.initLeafletMap();
			app.initZoomControl();
			app.initFullscreenControl();
			app.initSearchControl();
			
			app.initUserMarker();
			app.initMarkerSelection();
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
