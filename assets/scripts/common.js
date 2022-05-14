(() => {
	
	if(document.readyState === 'loading') {
		console.error("common.js must be included with the 'defer' attribute");
		return;
	}
	
	window.app = {
		loaded: true
	};
	
	// localization
	{
		let isLocalizationInitialized = false;
		
		app.initLanguageSwitcher = function() {
			const makeLanguageOption = (code, text) => ({
				text,
				value: code,
				selected: localStorage['lang'] === code,
				description: " ",
				imageSrc: `${app.basePath}images/flags/${code}.png`
			});
			
			const languageOptions = [
				makeLanguageOption('en', "English"),
				makeLanguageOption('de', "Deutsch"),
			];
			
			$('#lang-switcher').ddslick({
				data: languageOptions,
				width: 150,
				onSelected: obj => app.setLanguage(obj.selectedData.value)
			});
		};
		
		app.initLocalization = async function() {
			if(!app.basePath) {
				console.error("app.basePath must be set to initialize localization");
				return;
			}
			
			if(!i18next) {
				console.error("i18next is not loaded");
				return;
			}
			
			if(isLocalizationInitialized) {
				console.error("Multiple calls to app.initLocalization");
				return;
			}
			
			isLocalizationInitialized = true;
			
			const options = {
				debug: false,
				ns: 'general',
				lng: localStorage['lang'],
				fallbackLng: 'en',
				supportedLngs: ['en', 'de'],
				backend: {
					loadPath: `${app.basePath}locales/{{lng}}/{{ns}}.json`,
				}
			};
			
			await i18next.use(i18nextHttpBackend).init(options);
			jqueryI18next.init(i18next, $);
			
			console.log('Initialized localization');
		};
		
		app.localizeDocument = function() {
			if(!isLocalizationInitialized) {
				console.error("Cannot localize document before localization is initialized");
				return;
			}
			
			$(document).localize();
			console.log('Localized document');
		};
		
		app.loadLocalizationNamespace = function(namespaces) {
			return new Promise(resolve => i18next.loadNamespaces(namespaces, () => resolve()));
		};
		
		app.setLanguage = function(lang) {
			if(localStorage['lang'] !== lang) {
				localStorage['lang'] = lang;
				window.location.reload();
			}
		};
	}
	
	// utility
	{
		app.runScript = function(url, options) {
			return $.ajax($.extend(options || {}, {
				dataType: "script",
				cache: false, // todo change this back to true when releasing
				url: app.basePath + url
			}));
		};
	}
	
	app.init = async function() {
		await app.initLocalization();
		app.initLanguageSwitcher();
		app.localizeDocument();
	};
})();