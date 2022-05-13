const leaflet = L;
$(function() {
	const L = leaflet;
	window.allLayers = Object.values(layers).filter(el => el !== undefined);
	
	const hideAllButton = $('#hide-all');
	const showAllButton = $('#show-all');
	const hideCountsButton = $('#hide-counts');
	const showCountsButton = $('#show-counts');
	
	if(localStorage['hide-all-' + window.map.name]) {
		hideAllButton.hide();
		showAllButton.show();
	}
	
	$(function() {
		//fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
		$('.dd-selected').on('click', function() {
			setTimeout(function() {
				$("#sidebar").getNiceScroll().resize();
			}, 500);
		});
	});
	
	const map = L.map('map', {
		zoom: window.map.defaultZoom ?? 3,
		minZoom: window.map.minZoom ?? 2,
		maxZoom: window.map.maxZoom ?? 5,
		center: window.map.center,
		attributionControl: false,
		zoomControl: false,
		layers: allLayers,
		continuousWorld: true,
		crs: L.CRS.Simple
	});
	window.leafletMap = map;
	
	window.go = function(lat, lng) {
		map.setView([lat, lng], map.getZoom());
		new L.marker([lat, lng], {
			icon: L.icon({
				iconUrl: '/files/images/searchhover.png',
				iconSize: [22, 22]
			})
		}).addTo(map);
	};
	
	const hash = new L.Hash(map);
	const bounds = window.map.bounds;
	map.setMaxBounds(bounds);
	
	function makeZoomControl() {
		return new L.Control.Zoom({
			position: 'topright',
			zoomInTitle: $.t('controls.zoom-in'),
			zoomOutTitle: $.t('controls.zoom-out')
		});
	}
	
	function makeFullscreenControl() {
		return new L.Control.Fullscreen({
			position: 'topright',
			title: {'false': $.t('controls.fullscreen-enter'), 'true': $.t('controls.fullscreen-exit')}
		});
	}
	
	function makeSearchControl() {
		const searchData = window.map.markers.map(marker => ({
			loc: marker.position,
			title: marker.label
		}));
		
		const fuse = new Fuse(searchData, {
			caseSensitive: false,
			includeScore: false,
			shouldSort: true,
			tokenize: false,
			threshold: 0.2,
			location: 0,
			distance: 10000,
			maxPatternLength: 32,
			keys: ["title"]
		});
		
		const search = new L.Control.Search({
			autoResize: false,
			autoType: false,
			minLength: 2,
			position: 'topright',
			autoCollapse: false,
			zoom: 5,
			text: $.t('controls.search'),
			filterJSON: json => json,
			callData: function(text, callResponse) {
				callResponse(fuse.search(text));
				setTimeout(() => $('.search-tooltip').getNiceScroll().resize(), 200);
				return {abort: () => console.log('aborted request: ' + text)};
			}
		});
		
		$('.search-tooltip').niceScroll({
			cursorcolor: '#5E4F32',
			cursorborder: 'none',
			horizrailenabled: false
		});
		
		return search;
	}
	
	function makeTileLayer(tilePath) {
		return L.tileLayer(tilePath, {
			tms: true,
			bounds: bounds,
			noWrap: true,
			continuousWorld: true,
			crs: L.CRS.Simple
		});
	}
	
	map.addLayer(makeTileLayer(window.map.tilePath));
	map.addControl(makeZoomControl());
	map.addControl(makeFullscreenControl());
	map.addControl(makeSearchControl());
	
	map.dragging._draggable.on('predrag', function() {
		const pos = map._initialTopLeftPoint.subtract(this._newPos);
		this._newPos = this._newPos.subtract(map._getBoundsOffset(new L.Bounds(pos, pos.add(map.getSize())), map.options.maxBounds));
	});
	
	// waypoint logic
	let wayPointMarker;
	
	function createWayPointMarker() {
		const icon = L.icon({
			iconUrl: '/files/images/icons/marker.png',
			iconSize: [48, 48]
		});
		const marker = new L.Marker([0, 0], {icon});
		marker.on('click', hideWayPointMarker);
		marker.on('contextmenu', hideWayPointMarker);
		return marker;
	}
	
	function showWayPointMarkerAt(position) {
		if(!wayPointMarker) wayPointMarker = createWayPointMarker();
		wayPointMarker.setLatLng(position);
		map.addLayer(wayPointMarker);
		hash.addParam('w', position.lat.toFixed(3) + ',' + position.lng.toFixed(3));
	}
	
	function hideWayPointMarker() {
		map.removeLayer(wayPointMarker);
		hash.removeParam('w');
	}
	
	map.on('contextmenu', function(e) {
		if(!bounds.contains(e.latlng)) return;
		showWayPointMarkerAt(e.latlng);
	});
	
	// selected marker logic
	let circle = null;
	
	function createCircleMarker() {
		return L.circleMarker([0, 0], {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: 20
		});
	}
	
	// todo move this
	function noteExistsAt(position) {
		const noteKey = getNoteKey(position.lat, position.lng);
		return notes[getNoteIndex(noteKey)];
	}
	
	function selectMarkerAt(position) {
		if(!circle) circle = createCircleMarker();
		circle.setLatLng(position);
		map.addLayer(circle);
		
		// only add param and show center button if the marker is not a note
		if(!noteExistsAt(position)) {
			hash.addParam('m', position.lat + ',' + position.lng);
			$('#centerButton').show();
		}
	}
	
	function deselectMarker() {
		map.removeLayer(circle);
		hash.removeParam('m');
		$('#centerButton').hide();
	}
	
	const infoContentDiv = $('#info-content');
	const infoContainerDiv = $('#info-container');
	
	infoContentDiv.niceScroll({
		cursorcolor: '#5E4F32',
		cursorborder: 'none',
	});
	
	// popup logic
	function openPopup(position, content) {
		selectMarkerAt(position);
		infoContainerDiv.stop();
		infoContentDiv.html(content);
		infoContentDiv.getNiceScroll(0).doScrollTop(0, 0);
		infoContainerDiv.fadeIn('fast');
		// todo this is ugly
		if(infoContentDiv.html().indexOf('class="note-row"') > -1) {
			notePopupStart();
		}
		console.log('Popup at [' + writeLatLng(position) + ']');
	}
	
	function closePopup() {
		infoContainerDiv.fadeOut('fast', () => {
			infoContentDiv.html('');
			deselectMarker();
			map.closePopup();
		});
		if(notePopupOpen) notePopupEnd();
	}
	
	map.on('popupopen', e => openPopup(e.popup._latlng, e.popup._content));
	map.on('popupclose', closePopup);
	
	function applyLayerVisibility() {
		const storageKey = 'markers-' + window.map.name;
		const layerVisibility = parseFromLocalStorage(storageKey, {'other': false});
		for(const [layer, visible] of Object.entries(layerVisibility)) {
			if(!visible) {
				$('i.' + layer).parent().addClass('layer-disabled');
				map.removeLayer(window.layers[layer]);
			}
		}
	}
	
	applyLayerVisibility();
	
	function createCounterPills() {
		for(const e of $('ul.key:not(.controls) li:not(.none) i').toArray()) {
			const marker = $(e).attr('class');
			const pill = $("<div class='pill item-count-pill'>" + (window.markerCount[marker] ?? 0) + "</div>");
			$(e).next().after(pill);
			if(localStorage['hide-counts']) {
				pill.hide();
			}
		}
		
		if(localStorage['hide-counts']) {
			hideCountsButton.hide();
			showCountsButton.show();
		}
	}
	
	createCounterPills();
	
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
	
	hideCountsButton.on('click', () => hideMarkerCounts());
	showCountsButton.on('click', () => showMarkerCounts());
	
	$('#reset-tracking').on('click', function(e) {
		e.preventDefault();
		if(confirm($.t('controls.reset-markers-confirm'))) {
			resetTransparentMarkers();
		}
	});
	
	function toggleMarkerGroup(groupName) {
		if(isMarkerGroupEnabled(groupName))
			disableMarkerGroup(groupName);
		else
			enableMarkerGroup(groupName);
	}
	
	function parseFromLocalStorage(key, fallback) {
		const string = localStorage[key];
		return string === undefined ? fallback : JSON.parse(string);
	}
	
	function saveMarkerGroupVisibility(groupName, visible) {
		const storageKey = 'markers-' + window.map.name;
		const enabledMarkers = parseFromLocalStorage(storageKey, {'other': false});
		enabledMarkers[groupName] = visible;
		localStorage[storageKey] = JSON.stringify(enabledMarkers);
	}
	
	function enableMarkerGroup(groupName) {
		const li = $('ul.key:not(.controls) i.' + groupName).parent();
		li.removeClass('layer-disabled');
		map.addLayer(window.layers[groupName]);
		saveMarkerGroupVisibility(groupName, true);
	}
	
	window.enableMarkerGroup = enableMarkerGroup;
	
	function disableMarkerGroup(groupName) {
		const li = $('ul.key:not(.controls) i.' + groupName).parent();
		li.addClass('layer-disabled');
		map.removeLayer(window.layers[groupName]);
		saveMarkerGroupVisibility(groupName, false);
	}
	
	window.disableMarkerGroup = disableMarkerGroup;
	
	function isMarkerGroupEnabled(groupName) {
		return !$('ul.key:not(.controls) i.' + groupName).parent()
			.hasClass('layer-disabled');
	}
	
	window.isMarkerGroupEnabled = isMarkerGroupEnabled;
	
	$('ul.key:not(.controls)').on('click', 'li:not(.none)', function() {
		toggleMarkerGroup($(this).find('i').attr('class'));
	});
	
	function initHideAllButton() {
		hideAllButton.on('click', () => {
			window.markerTypes.forEach(disableMarkerGroup);
			hideAllButton.hide();
			showAllButton.show();
			localStorage['hide-all-' + window.map.name] = true;
		});
	}
	
	initHideAllButton();
	
	function initShowAllButton() {
		showAllButton.on('click', () => {
			window.markerTypes.forEach(enableMarkerGroup);
			hideAllButton.show();
			showAllButton.hide();
			localStorage.removeItem('hide-all-' + window.map.name);
		});
	}
	
	initShowAllButton();
	
	function initSidebar() {
		const sidebarContainerDiv = $('#sidebar-container');
		const sidebarToggleDiv = $('#sidebar-toggle');
		const mapDiv = $('#map');
		const sidebarAnimationDuration = 200;
		
		
		$('#sidebar').niceScroll({
			cursorcolor: '#5E4F32',
			cursorborder: 'none',
		});
		
		let sidebarSmall;
		let sidebarWidth;
		let mapLeft;
		
		function isSidebarHidden() {
			return localStorage['hide-sidebar'];
		}
		
		function stopSidebarAnimation() {
			sidebarContainerDiv.stop();
			sidebarToggleDiv.stop();
			mapDiv.stop();
		}
		
		function hideSidebar(duration) {
			stopSidebarAnimation();
			infoContainerDiv.addClass('full-width');
			sidebarToggleDiv.addClass('show-sidebar');
			sidebarToggleDiv.animate({left: '0px'}, duration);
			sidebarContainerDiv.animate({width: '15px'}, duration);
			mapDiv.animate({left: '0px'}, {
				duration,
				step: () => map.invalidateSize(),
				complete: () => map.invalidateSize()
			});
			localStorage['hide-sidebar'] = true;
		}
		
		function showSidebar(duration) {
			stopSidebarAnimation();
			sidebarToggleDiv.animate({left: mapLeft + 'px'}, duration);
			sidebarToggleDiv.removeClass('show-sidebar');
			mapDiv.animate({left: mapLeft + 'px'}, {
				duration,
				step: () => map.invalidateSize(),
				complete: () => map.invalidateSize()
			});
			sidebarContainerDiv.animate({width: sidebarWidth + 'px'}, duration, function() {
				infoContainerDiv.removeClass('full-width');
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
			map.invalidateSize();
		}
		
		updateSidebar();
		
		sidebarToggleDiv.on('click', () => toggleSidebar());
		$(window).on('resize', () => updateSidebar());
	}
	
	initSidebar();
	
	function initMobileWarning() {
		const mobileWarningDiv = $('div#mobile-warning');
		
		function removeMobileWarning() {
			mobileWarningDiv.remove();
		}
		
		if(localStorage['hide-mobile-warning']) {
			removeMobileWarning();
		} else {
			mobileWarningDiv.css({display: 'block'});
		}
		
		mobileWarningDiv.on('click', function(e) {
			localStorage['hide-mobile-warning'] = true;
			removeMobileWarning();
		});
	}
	
	initMobileWarning();
	
	var popupClick = function(e) {
		if($(e.target).is('#popup-content') || $(e.toElement.offsetParent).is('#popup-content') || $(e.toElement.offsetParent).is('#popup-wrap')) {
			return;
		}
		console.log("popupClick");
		closePopup();
	};
	
	window.popupClose = function() {
		$('#popup-wrap').remove();
		$(document).off('click', '*', popupClick);
	};
	
	var popup = function(title, content) {
		$('body').prepend('<div id="popup-wrap"><div id="popup-border"><img id="popup-close" src="../files/images/exit.png" alt="Close" onclick="popupClose();"><div id="popup-content"><h1>' + title + '</h1><hr>' + content + '</div></div></div>');
		$('div#popup-content').niceScroll({
			cursorcolor: '#5E4F32',
			cursorborder: 'none',
			autohidemode: false,
			railpadding: {top: 22, right: 5, bottom: 5}
		});
		$(document).on('click', '*', popupClick);
	};
	
	$(document).on('click', '.credits', function(e) {
		e.preventDefault();
		popup('Credits', [
			'<p>Sniper Elite 4 Map created by <a href="https://wiiare.in" target="_blank">lordfiSh</a>. Original Code by <a href="https://github.com/untamed0" target="_blank">untamed0</a>, with contributions from:</p>',
			'<ul>',
			'<li><a href="https://github.com/mcarver" target="_blank">mcarver</a> (lead contributor) - Marker count, hash permalink improvements, backup/restore settings, numerous fixes etc.</li>',
			'<li><a href="https://github.com/ankri" target="_blank">ankri</a> - Ability to hide markers on right or double click</li>',
			'<li><a href="https://github.com/ITroxxCH" target="_blank">ITroxxCH</a> - Translation/i18n implementation</li>',
			'<li><a href="https://github.com/msmorgan" target="_blank">msmorgan</a> - Javascript &amp; map data structure improvements</li>',
			'<li><a href="https://github.com/AtomCrafty" target="_blank">AtomCrafty</a> - 2021 software rewrite, high resolution maps and icons, updated marker placement</li>',
			'<li><a href="https://github.com/CBernjus" target="_blank">CBernjus</a> - Updated marker placement and detailed descriptions</li>',
			'</ul>',
			'<h3>Sniper Elite 4 Assets</h3>',
			'<p>Sniper Elite 4 logo, icons, map &amp; text are the property of <a href="http://www.rebellion.co.uk/" target="_blank">Rebellion</a> and used without their permission. </p>',
			'<h3>Javascript libraries used</h3>',
			'<ul>',
			'<li><a href="http://jquery.com" target="_blank">jQuery</a> (MIT)</li>',
			'<li><a href="http://git.io/vkLly" target="_blank">jQuery.NiceScroll</a> (MIT)</li>',
			'<li><a href="http://leafletjs.com" target="_blank">Leaflet</a> (BSD2)</li>',
			'<li><a href="http://git.io/vkfA2" target="_blank">Leaflet.label</a> (MIT)</li>',
			'<li><a href="http://git.io/mwK1oA" target="_blank">Leaflet-hash</a> (MIT)</li>',
			'<li><a href="http://git.io/vJw5v" target="_blank">Leaflet.fullscreen</a> (BSD2)</li>',
			'<li><a href="http://git.io/vkCPC" target="_blank">Leaflet Control Search</a> (MIT)</li>',
			'<li><a href="http://git.io/vIAs2" target="_blank">Font Awesome</a> (MIT)</li>',
			'</ul>'
		].join('\n'));
	});
	
	setTimeout(function() {
		$('ul.key:not(.controls) li:not(.none) i').each(function(i, e) {
			var key = $(this).attr('class');
			key = $.t("sidebar." + key);
			var tooltip = $("<span class='tooltip'>" + key + "</span>");
			
			var ellipsis = $(this).next();
			if(ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
				$(this).parent().mousemove(function(e) {
					var x = e.clientX,
						y = e.clientY;
					
					// calculate y-position to counteract scroll offset
					var offset = $("#logo").offset();
					y = y - offset.top;
					
					tooltip.css('top', (y + 15) + 'px');
					tooltip.css('left', (x + 15) + 'px');
					tooltip.css('display', 'block');
				}).mouseleave(function() {
					tooltip.css('display', 'none');
				});
			}
			
			$("#sidebar-content").append(tooltip);
		});
		$('ul.controls li:not(.none) i').each(function(i, e) {
			var key = $(this).next().text();
			var tooltip = $("<span class='tooltip'>" + key + "</span>");
			
			var ellipsis = $(this).next();
			if(ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
				$(this).parent().mousemove(function(e) {
					var x = e.clientX,
						y = e.clientY;
					
					// calculate y-position to counteract scroll offset
					var offset = $("#logo").offset();
					y = y - offset.top;
					
					tooltip.css('top', (y + 15) + 'px');
					tooltip.css('left', (x + 15) + 'px');
					tooltip.css('display', 'block');
				}).mouseleave(function() {
					tooltip.css('display', 'none');
				});
			}
			
			$("#sidebar-content").append(tooltip);
		});
	}, 100);
	
	var fileSaver = null;
	var backupData = function() {
		var currentDate = new Date();
		var formattedDate = currentDate.getFullYear() + '-' + ((currentDate.getMonth() + 1 < 10) ? '0' : '') + (currentDate.getMonth() + 1) + '-' + ((currentDate.getDate() < 10) ? '0' : '') + currentDate.getDate();
		var backupFileName = 'sniperelite4_map_backup_' + formattedDate + '.json';
		if(confirm($.t('controls.backup-save-confirm', {fileName: backupFileName}))) {
			if(!fileSaver) {
				fileSaver = $.getScript('../files/scripts/FileSaver.min.js', function() {
					var blob = new Blob([JSON.stringify(localStorage)], {type: "text/plain;charset=utf-8"});
					saveAs(blob, backupFileName);
				});
			}
		}
	};
	var showRestore = function() {
		if(!window.File && !window.FileReader && !window.FileList && !window.Blob) {
			alert($.t('controls.backup-load-unsupported'));
			return;
		}
		if($('#restoreDiv').length) return;
		var restoreButtonPos = $('#restoreButton')[0].getBoundingClientRect();
		var restoreDiv = '<div id="restoreDiv" style="top:' + restoreButtonPos.top + 'px;right:' + (14 + restoreButtonPos.right - restoreButtonPos.left) + 'px;"><div style="float:right;"><button class="fa fa-times-circle" onclick="$(\'#restoreDiv\').remove()" style="cursor:pointer" /></div><strong>' + $.t('controls.backup-load-label') + '</strong><br/><input type="file" id="files" name="file[]" /></div>';
		$('body').append($(restoreDiv));
		var filesInput = document.getElementById('files');
		filesInput.addEventListener('change', function(e) {
			var file = e.target.files[0];
			var reader = new FileReader();
			reader.onload = function(e) {
				var content = e.target.result;
				try {
					var restoreData = JSON.parse(content);
					console.log('restore started.');
					for(var prop in restoreData) {
						console.log('restoring property:' + prop + ' using value:' + restoreData[prop]);
						localStorage[prop] = restoreData[prop];
					}
					console.log('restore complete!');
					alert($.t('controls.backup-load-success'));
					location.reload();
				} catch(err) {
					alert($.t('controls.backup-load-fail'));
					console.log(err.message);
				} finally {
					$('#restoreDiv').remove();
				}
			};
			reader.readAsText(file);
		});
	};
	
	var backupButton = L.easyButton('fa-download', function(btn, map) {
		backupData();
	}, $.t('controls.backup-save'));
	var restoreButton = L.easyButton('fa-upload', function(btn, map) {
		showRestore();
	}, $.t('controls.backup-load'), 'restoreButton');
	L.easyBar([backupButton, restoreButton]).addTo(map);
	
	window.noteMarkers = {};
	var noteStatus = false;
	var noteCursorCss = null;
	var notePopupOpen = false;
	L.easyButton('fa-book', function(btn, map) {
		if(!noteStatus) {
			startNote();
		} else {
			endNote();
		}
	}, $.t('controls.note-add'), 'noteButton').addTo(map);
	
	L.easyButton('fa-crosshairs', function(btn, map) {
		hashParams = hash.getHashParams();
		if(hashParams && hashParams.m) {
			var hashMarker = hashParams.m.split(",");
			map.setView([hashMarker[0], hashMarker[1]]);
		} else {
			map.setView(map_center);
		}
	}, $.t('controls.center-on-focused-marker'), 'centerButton').addTo(map);
	
	// todo replace this?
	window.getNoteKey = (lat, lng) => writeLatLng(L.latLng(lat, lng));
	
	window.getNoteIndex = function(noteKey) {
		for(var i = 0; i < notes.length; i++) {
			if(notes[i].key == noteKey) return i;
		}
		return -1;
	};
	
	var startNote = function() {
		console.log('starting note');
		$('#noteButton').attr('title', $.t('controls.note-cancel')).addClass('activeEasyButton');
		$(document).on('keyup.addnote', function(e) {
			if(e.keyCode === 27) endNote();
		});
		noteStatus = true;
		noteCursorCss = $('.leaflet-container').css('cursor');
		$('.leaflet-container').css('cursor', 'crosshair');
		map.addEventListener('click', addNote);
	};
	
	var backupNotes = function() {
		localStorage['notes' + window.map.name] = JSON.stringify(notes);
	};
	
	window.saveNote = function(noteKey) {
		var note = notes[getNoteIndex(noteKey)];
		note.label = $('#note-label').val();
		note.title = $('#note-title').val();
		note.text = $('#note-text').val();
		var marker = noteMarkers[note.key];
		marker.bindLabel(note.label);
		marker.bindPopup(getNotePopup(note));
		noteMarkers[note.key] = marker;
		backupNotes();
		$('#note-save').attr('disabled', true);
	};
	
	window.deleteNote = function(noteKey) {
		map.removeLayer(noteMarkers[noteKey]);
		notes.splice(getNoteIndex(noteKey), 1);
		delete noteMarkers[noteKey];
		backupNotes();
		closePopup();
	};
	
	var getNotePopup = function(note) {
		var popupContent = "<div id=\"note-popup\"><div class=\"note-row\"><label for=\"note-label\" class=\"label\" data-i18n=\"notes.label\"></label><input type=\"text\" id=\"note-label\" data-i18n=\"[placeholder]notes.enterLabel\" value=\"" + note.label + "\" /></div>";
		popupContent += "<div class=\"note-row\"><label for=\"note-title\" class=\"label\" data-i18n=\"notes.title\"></label><input type=\"text\" id=\"note-title\" data-i18n=\"[placeholder]notes.enterTitle\" value=\"" + note.title + "\" /></div>";
		popupContent += "<div class=\"note-row\"><label for=\"note-text\" class=\"label top\" data-i18n=\"notes.note\"></label><textarea id=\"note-text\" data-i18n=\"[placeholder]notes.enterText\">" + note.text + "</textarea></div>";
		popupContent += "<div><button id=\"note-save\" onclick=\"saveNote('" + note.key + "')\" disabled><i class=\"fa fa-floppy-o\"></i>&nbsp;<span data-i18n=\"notes.saveNote\"></span></button>";
		popupContent += "<button onclick=\"deleteNote('" + note.key + "')\"><i class=\"fa fa-trash-o\"></i>&nbsp;<span data-i18n=\"notes.deleteNote\"></span></button></div></div>";
		return popupContent;
	};
	
	var createNote = function(note) {
		var noteMarker = null;
		if(note.label && note.label !== '') noteMarker = L.marker(L.latLng(note.lat, note.lng), setMarker(icons['note_marker'])).bindLabel(note.label).bindPopup(getNotePopup(note)).openPopup();
		else noteMarker = L.marker(L.latLng(note.lat, note.lng), setMarker(icons['note_marker'])).bindPopup(getNotePopup(note)).openPopup();
		noteMarker.addTo(map);
		noteMarkers[note.key] = noteMarker;
	};
	
	var addNote = function(e) {
		var note = {
			key: getNoteKey(e.latlng.lat, e.latlng.lng),
			lat: e.latlng.lat,
			lng: e.latlng.lng,
			label: '',
			title: '',
			text: ''
		};
		createNote(note);
		notes.push(note);
		backupNotes();
		endNote();
		return false;
	};
	
	var endNote = function() {
		$('#noteButton').attr('title', $.t('controls.note-add')).removeClass('activeEasyButton');
		$(document).off('keyup.addnote');
		noteStatus = false;
		$('.leaflet-container').css('cursor', noteCursorCss);
		map.removeEventListener('click');
		console.log('stopping note');
	};
	
	var notePopupStart = function() {
		notePopupOpen = true;
		infoContentDiv.i18n();
		$('#note-label, #note-title, #note-text').on('keyup.notechange', function() {
			$('#note-save').attr('disabled', false);
		});
		console.log('note popup started!');
	};
	
	var notePopupEnd = function() {
		$('#note-label, #note-title, #note-text').off('keyup.notechange');
		console.log('note popup ended!');
	};
	
	//create saved notes on load
	for(let i = 0; i < notes.length; i++) {
		createNote(notes[i]);
	}
	
	function writeLatLng(latlng) {
		return latlng.lat.toFixed(3) + ',' + latlng.lng.toFixed(3);
	}
	
	function parseLatLng(str) {
		const parts = str.split(',');
		return L.latLng(parts[0], parts[1]);
	}
	
	function applyHashParams() {
		const hashParams = hash.getHashParams();
		if(hashParams) {
			if(hashParams.w) {
				showWayPointMarkerAt(parseLatLng(hashParams.w));
			}
			if(hashParams.m) {
				const position = parseLatLng(hashParams.m);
				
				for(const marker of allLayers.flatMap(layer => layer.getLayers())) {
					if(marker.getLatLng().equals(position)) {
						marker.openPopup();
						break;
					}
				}
			} else {
				$('#centerButton').hide();
			}
		} else {
			$('#centerButton').hide();
		}
	}
	
	applyHashParams();
});
