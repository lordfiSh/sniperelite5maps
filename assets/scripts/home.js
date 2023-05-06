(async () => {
	if(!app.loaded) {
		console.error("home.js must be loaded after common.js");
		return;
	}
	
	app.basePath = location.origin + location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
	console.log("Resource path: " + app.basePath);
	
	// dynamic background
	{
		app.initBackground = initBackground;
		
		const imageCache = {};
		
		function loadImage(path) {
			if(imageCache[path]) {
				//console.log('serving image from cache: ' + path);
				return Promise.resolve(path);
			}
			
			return new Promise(resolve => {
				//console.log('requesting image ' + path);
				const im = new Image();
				im.onload = function() {
					//console.log('loaded image ' + path);
					imageCache[path] = im;
					resolve(path);
				};
				im.src = app.basePath + path;
			});
		}
		
		let isInTransition = false;
		let transitionPromise = null;
		let currentImage = /*localStorage['start-page-background'] ??*/ 'images/backgrounds/m00-neutral.jpg';
		let nextImage = '';
		let lastRequestPath = '';
		let lastRequest = 0;
		
		const imageLayer = $("#background");
		const fadeLayer = $("#background-fade-layer");
		
		async function performTransition() {
			isInTransition = true;
			currentImage = nextImage;
			await fadeLayer.attr("src", currentImage).promise();
			await fadeLayer.fadeTo(500, 1).promise();
			await imageLayer.attr("src", currentImage).promise();
			await fadeLayer.fadeTo(0, 0).promise();
			isInTransition = false;
		}
		
		async function setBackground(path) {
			// throw out duplicate events
			if(path === lastRequestPath) return;
			
			const request = ++lastRequest;
			
			localStorage['start-page-background'] = lastRequestPath = path;
			nextImage = await loadImage(path);
			
			if(isInTransition) {
				// wait for the current transition to finish
				await transitionPromise;
				// only the newest request should continue
				if(lastRequest !== request) return;
				// if the current image is already the right one, we have nothing to do
				if(currentImage === lastRequestPath) return;
			}
			
			// if we got here, we know that no transition is running
			// and we are the most recent request.
			transitionPromise = performTransition();
			await transitionPromise;
			transitionPromise = null;
		}
		
		function initBackground() {
			// register hover events
			$('#map-list li').each((_, item) => {
				const mapName = $(item).data('map');
				if(!mapName) return;
				$(item).on('mouseover', async () => {
					await setBackground(`images/backgrounds/${mapName}.jpg`);
				});
			});
			
			$(imageLayer).attr('src', currentImage);
		}
	}
	
	// initialization
	{
		app.initMapList = initMapList;
		app.initPage = initPage;
		
		function initMapList() {
			const list = document.getElementById('map-list');
			
			for(const [id, slug] of Object.entries(app.maps)) {
				const name = $.t(`maps.${slug}`);
				const enabled = app.enabledMaps ? app.enabledMaps.includes(slug) : true;
				
				const item = document.createElement('li');
				const link = document.createElement('a');
				const text = document.createElement('span');
				
				item.dataset['map'] = `${slug}`;
				item.classList.add(enabled ? 'enabled' : 'disabled');
				link.href = `${id}/`;
				text.textContent = name;
				
				link.appendChild(text);
				item.appendChild(link);
				list.appendChild(item);
			}
		}
		
		async function initPage() {
			await app.initLocalization();
			
			app.initMapList();
			app.initBackground();
		}
	}
	
	app.initPage().then(() => console.log("App initialized"));
})();