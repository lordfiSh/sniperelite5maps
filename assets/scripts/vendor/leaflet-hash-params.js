// based on https://github.com/sephcoster/leaflet-hash
(function(window) {
	const HAS_HASHCHANGE = (function() {
		// noinspection JSUnresolvedVariable
		const doc_mode = window.documentMode;
		return ('onhashchange' in window) &&
			(doc_mode === undefined || doc_mode > 7);
	})();
	
	L.Hash = function(map, options) {
		this.onHashChange = L.Util.bind(this.onHashChange, this);
		this.init(map, options);
	};
	
	// Return the hash parameters from a string. [based on source](http://goo.gl/mebsOI)
	L.Hash.getHashParams = function() {
		const str = window.location.hash.split("/")[3];
		if(!str) return {};
		const hashParams = {};
		
		// Regex for replacing addition symbol with a space
		const a = /\+/g;
		const r = /([^!&;=<>]+)(!?[=><]?)([^&;]*)/g;
		const q = str.replace(/^!\/?/, '');
		
		function decode(s) {
			return decodeURIComponent(s.replace(a, ' '));
		}
		
		let e;
		while(e = r.exec(q)) {
			hashParams[decode(e[1])] = decode(e[3]);
		}
		
		return hashParams;
	};
	
	L.Hash.removeParam = function(paramName) {
		const hashParams = this.getHashParams();
		delete hashParams[paramName];
		this.updateUrlHash(hashParams);
	};
	
	L.Hash.setParam = function(paramName, value) {
		const hashParams = this.getHashParams();
		hashParams[paramName] = value;
		this.updateUrlHash(hashParams);
	};
	
	L.Hash.getBaseHash = function() {
		const args = window.location.hash.split("/");
		if(args.length >= 3 && args.length <= 4) {
			return args.splice(0, 3).join("/");
		} else {
			return window.location.hash;
		}
	};
	
	L.Hash.parseHash = function(hash) {
		hash ??= location.hash;
		if(hash.indexOf('#') === 0) {
			hash = hash.substr(1);
		}
		const args = hash.split("/");
		if(args.length >= 3 && args.length <= 4) {
			const zoom = parseInt(args[0], 10),
				lat = parseFloat(args[1]),
				lon = parseFloat(args[2]),
				params = this.getHashParams();
			if(isNaN(zoom) || isNaN(lat) || isNaN(lon)) {
				return false;
			} else {
				return {
					center: new L.LatLng(lat, lon),
					zoom: zoom,
					params: params
				};
			}
		} else {
			return false;
		}
	};
	
	L.Hash.formatHash = function(map) {
		const center = map.getCenter();
		const zoom = map.getZoom();
		const precision = this.precision ?? Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));
		
		const baseHash = "#" + [zoom,
			center.lat.toFixed(precision),
			center.lng.toFixed(precision)
		].join("/");
		
		const hashParams = this.getHashParams();
		
		if(hashParams) {
			const hashParamsTemp = [];
			// Loop through params, stringify them and push them into the temp array.
			for(const param in hashParams) {
				hashParamsTemp.push(param + '=' + hashParams[param]);
			}
			return baseHash + '/' + hashParamsTemp.join('&');
		} else {
			return baseHash;
		}
	};
	
	L.Hash.prototype = {
		map: null,
		lastHash: null,
		precision: undefined,
		
		getHashParams: L.Hash.getHashParams,
		setParam: L.Hash.setParam,
		removeParam: L.Hash.removeParam,
		getBaseHash: L.Hash.getBaseHash,
		parseHash: L.Hash.parseHash,
		formatHash: L.Hash.formatHash,
		
		updateUrlHash: function(hashParams) {
			const parts = [];
			
			for(const [key, value] of Object.entries(hashParams)) {
				parts.push(key + '=' + value);
			}
			
			const baseHash = this.getBaseHash();
			window.location.hash = this.lastHash = baseHash + '/' + parts.join('&');
		},
		
		init: function(map, options) {
			this.map = map;
			
			if(options) {
				this.precision = options.precision;
			}
			
			if(!map) return;
			
			// reset the hash
			this.lastHash = null;
			this.onHashChange();
			
			if(!this.isListening) {
				this.startListening();
			}
		},
		
		addTo: function(map) {
			if(this.map) {
				this.removeFrom(this.map);
				this.map = undefined;
			}
			
			this.init(map);
		},
		
		removeFrom: function(map) {
			if(this.changeTimeout) {
				clearTimeout(this.changeTimeout);
			}
			
			if(this.isListening) {
				this.stopListening();
			}
			
			this.map = null;
		},
		
		onMapMove: function() {
			// bail if we're moving the map (updating from a hash),
			// or if the map is not yet loaded
			
			if(!this.map || this.movingMap || !this.map._loaded) {
				return false;
			}
			
			const hash = this.formatHash(this.map);
			if(this.lastHash !== hash) {
				location.replace(window.location.pathname + hash);
				this.lastHash = hash;
			}
		},
		
		movingMap: false,
		update: function() {
			if(!this.map) return;
			
			const hash = location.hash;
			if(hash === this.lastHash) {
				return;
			}
			const parsed = this.parseHash(hash);
			if(parsed) {
				this.movingMap = true;
				
				this.map.setView(parsed.center, parsed.zoom, {animate: false});
				
				this.movingMap = false;
			} else {
				this.onMapMove(this.map);
			}
		},
		
		// defer hash change updates every 200ms
		changeDefer: 200,
		changeTimeout: null,
		onHashChange: function() {
			// throttle calls to update() so that they only happen every
			// `changeDefer` ms
			if(!this.changeTimeout) {
				const that = this;
				this.changeTimeout = setTimeout(function() {
					that.update();
					that.changeTimeout = null;
				}, this.changeDefer);
			}
		},
		
		isListening: false,
		hashChangeInterval: null,
		startListening: function() {
			if(!this.map) return;
			this.map.on("moveend", this.onMapMove, this);
			
			if(HAS_HASHCHANGE) {
				L.DomEvent.addListener(window, "hashchange", this.onHashChange);
			} else {
				clearInterval(this.hashChangeInterval);
				this.hashChangeInterval = setInterval(this.onHashChange, 500);
			}
			this.isListening = true;
		},
		
		stopListening: function() {
			if(!this.map) return;
			this.map.off("moveend", this.onMapMove, this);
			
			if(HAS_HASHCHANGE) {
				L.DomEvent.removeListener(window, "hashchange", this.onHashChange);
			} else {
				clearInterval(this.hashChangeInterval);
			}
			this.isListening = false;
		}
	};
	
	L.hash = function(map, options) {
		return new L.Hash(map, options);
	};
	L.Map.prototype.addHash = function() {
		this._hash = L.hash(this);
	};
	L.Map.prototype.removeHash = function() {
		this._hash.removeFrom();
	};
})(window);
