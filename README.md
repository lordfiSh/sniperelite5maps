How do I contribute code changes?
--------------------------------------
Ensure you have [git](http://git-scm.com/downloads) and [Node.js](https://nodejs.org/download/) installed.

After cloning the repository run the following commands:

1. `npm install` _(downloads dependencies for the project from NPM and builds the project to the dist/ folder.)_

2. `grunt build` _(download & extracts map files, lints markup/js/css/json, creates vendor bundle, minifies js/css, builds the dist folder)_

3. `grunt server` _(runs a local webserver listening on port 80 in the background and watches files for changes. Open your web browser to http://localhost)_

Optional: `grunt rebuild` _(same thing as build but doesn't download the maps again.)_

Licence
--------------------------------------
Licensed under [CC BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/4.0/)

Credits
--------------------------------------
Sniper Elite 5 map is a rewrite by [AtomCrafty](https://github.com/AtomCrafty), [lordfiSh](https://github.com/lordfiSh) and [CBernjus](https://github.com/CBernjus) based on the
		[witcher3map](https://raw.githubusercontent.com/witcher3map/witcher3map/)
		project by [untamed0](https://github.com/untamed0)
	

This software uses the following libraries developed by third parties, and are licenced seperately
* [jQuery](http://jquery.com) (MIT)
* [jQuery.NiceScroll](http://git.io/vkLly) (MIT)
* [Leaflet](http://leafletjs.com) (BSD2)
* [Leaflet.label](http://git.io/vkfA2) (MIT)
* [Leaflet-hash](http://git.io/mwK1oA) (MIT)
* [Leaflet.fullscreen](http://git.io/vJw5v) (BSD2)
* [Leaflet Control Search](http://git.io/vkCPC) (MIT)
* [Leaflet.EasyButton](http://git.io/vLhAa) (MIT)