Installation
--------------------------------------
Ensure you have [git](http://git-scm.com/downloads) and [Node.js](https://nodejs.org/download/) installed.

After cloning the repository run the following commands:

1. `npm install` _(downloads dependencies for the project from NPM and builds the project to the dist/ folder.)_

2. `grunt build` _(lints markup/js/css/json, creates vendor bundle, minifies js/css, builds the dist folder)_

3. `grunt server` _(runs a local webserver listening on port 80 in the background and watches files for changes. Open your web browser to http://localhost)_

Contributing
--------------------------------------
If you want to help translate the page to different languages you can do so on our [Crowdin page](https://crowdin.com/project/sniper-elite-5-maps).

If you want to contribute to the project, feel free to create an issue or open a pull request. Please note that creating a pull request does not guarantee it will be accepted into the project.

1. Fork the project
2. Clone the repository (`git clone git@github.com:YourGitHubAccount/sniperelite5maps.git`)
3. Add upstream repository (`git remote add upstream https://github.com/lordfiSh/sniperelite5maps/sniperelite5maps.git`)
4. Create your feature branch (`git checkout -b feature/AmazingFeature`)
5. Commit your changes (`git commit -m 'add some amazing feature'`)
6. Rebase on upstream (`git fetch upstream` and `git rebase upstream/main`)
7. Fix any merge conflicts you may have
8. Push to the branch (`git push origin feature/AmazingFeature`)
9. Open a pull request

Licence
--------------------------------------
Licensed under [CC BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/4.0/)

Credits
--------------------------------------
Sniper Elite 5 map is a rewrite by [AtomCrafty](https://github.com/AtomCrafty), [lordfiSh](https://github.com/lordfiSh) and [CBernjus](https://github.com/CBernjus), based on the [witcher3map](https://raw.githubusercontent.com/witcher3map/witcher3map/) project by [untamed0](https://github.com/untamed0).
	

This software uses the following libraries developed by third parties, which are licensed separately.
* [jQuery](http://jquery.com) (MIT)
* [jQuery.NiceScroll](http://git.io/vkLly) (MIT)
* [Leaflet](http://leafletjs.com) (BSD2)
* [Leaflet.label](http://git.io/vkfA2) (MIT)
* [Leaflet-hash](http://git.io/mwK1oA) (MIT)
* [Leaflet.fullscreen](http://git.io/vJw5v) (BSD2)
* [Leaflet Control Search](http://git.io/vkCPC) (MIT)
* [Leaflet.EasyButton](http://git.io/vLhAa) (MIT)