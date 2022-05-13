(async () => {
	if(!app.loaded) {
		console.error("map.js must be loaded after common.js");
		return;
	}
	
	app.basePath = location.origin + location.pathname.substr(0, location.pathname.lastIndexOf('/', location.pathname.length - 2) + 1);
	console.log("Resource path: " + app.basePath);
	
	await app.init();
	console.log("App initialized");
	
})();