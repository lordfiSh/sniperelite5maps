$(function() {
	
	

	
	$(function() {
		//fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
		$('.dd-selected').on('click', function() {
			setTimeout(function() {
				$("#sidebar").getNiceScroll().resize();
			}, 500);
		});
	});
	
	window.go = function(lat, lng) {
		map.setView([lat, lng], map.getZoom());
		new L.marker([lat, lng], {
			icon: L.icon({
				iconUrl: 'images/searchhover.png',
				iconSize: [22, 22]
			})
		}).addTo(map);
	};
	
	const hash = new L.Hash(map);
	
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

		

		
		return search;
	}
	
	map.addControl(makeZoomControl());
	map.addControl(makeFullscreenControl());
	map.addControl(makeSearchControl());
	
	map.dragging._draggable.on('predrag', function() {
		const pos = map._initialTopLeftPoint.subtract(this._newPos);
		this._newPos = this._newPos.subtract(map._getBoundsOffset(new L.Bounds(pos, pos.add(map.getSize())), map.options.maxBounds));
	});
	
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
				fileSaver = $.getScript('../scripts/FileSaver.min.js', function() {
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
	
	L.easyButton('fa-crosshairs', function(btn, map) {
		hashParams = hash.getHashParams();
		if(hashParams && hashParams.m) {
			var hashMarker = hashParams.m.split(",");
			map.setView([hashMarker[0], hashMarker[1]]);
		} else {
			map.setView(map_center);
		}
	}, $.t('controls.center-on-focused-marker'), 'centerButton').addTo(map);
	
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
