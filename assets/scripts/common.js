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
		app.initLanguageSwitcher = initLanguageSwitcher;
		app.initI18Next = initI18Next;
		app.loadLocalizationNamespace = loadLocalizationNamespace;
		app.localizeDocument = localizeDocument;
		app.setLanguage = setLanguage;
		app.initLocalization = initLocalization;
		
		let isLocalizationInitialized = false;
		
		function initLanguageSwitcher() {
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
		}
		
		async function initI18Next() {
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
		}
		
		function localizeDocument() {
			if(!isLocalizationInitialized) {
				console.error("Cannot localize document before localization is initialized");
				return;
			}
			
			$(document).localize();
			console.log('Localized document');
		}
		
		function loadLocalizationNamespace(namespaces) {
			return new Promise(resolve => i18next.loadNamespaces(namespaces, () => resolve()));
		}
		
		function setLanguage(lang) {
			if(localStorage['lang'] !== lang) {
				localStorage['lang'] = lang;
				window.location.reload();
			}
		}
		
		async function initLocalization() {
			await app.initI18Next();
			app.initLanguageSwitcher();
			app.localizeDocument();
		}
	}
	
	// utility
	{
		app.runScript = runScript;
		app.getConfigValue = getConfigValue;
		
		function runScript(url, options) {
			return $.ajax($.extend(options || {}, {
				dataType: "script",
				cache: false, // todo change this back to true when releasing
				url: app.basePath + url
			}));
		}
		
		function getConfigValue(key, fallback) {
			const string = localStorage[key];
			return string === undefined ? fallback : JSON.parse(string);
		}
	}
})();