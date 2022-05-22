$(function() {
	$(function() {
		//fix bug where sidebar scrollbar doesn't appear when the language drop-down opens
		$('.dd-selected').on('click', function() {
			setTimeout(function() {
				$("#sidebar").getNiceScroll().resize();
			}, 500);
		});
	});
	
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
	
	L.easyButton('fa-crosshairs', function(btn, map) {
		hashParams = hash.getHashParams();
		if(hashParams && hashParams.m) {
			var hashMarker = hashParams.m.split(",");
			map.setView([hashMarker[0], hashMarker[1]]);
		} else {
			map.setView(map_center);
		}
	}, $.t('controls.center-on-focused-marker'), 'centerButton').addTo(map);
});
