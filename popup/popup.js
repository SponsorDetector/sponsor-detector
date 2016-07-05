'use strict';

var adderScripts = [
	// libs
	'/libs/promise.min.js',
	'/commons/utils.js',

	// dom factories
	'/commons/dom/FormFactory.js',
	'/commons/dom/MenuFactory.js',
	'/commons/dom/BannerFactory.js',

	// detector services
	'/commons/services/ConfigurationServices.js',
	'/commons/services/ExtractorServices.js',
	'/commons/services/DetectorServices.js',
	'/commons/services/SponsorDetector.js',

	// adder main (controller)
	'/conf_adder/main.js'
];

var adderCss = [
        '/libs/pure-min.css',
        '/libs/grids-responsive-min.css',
	    '/css/detector.css'
]

var injectScripts = function(scripts) {
	for (var i = 0; i < scripts.length; i ++) {
		console.log('Injecting js ' + scripts[i]);
		browser.tabs.executeScript({
			file : scripts[i]
		});
	}
}

var injectCss = function(css) {
	for (var i = 0; i < css.length; i++) {
		console.log('Injecting css ' + css[i]);
		browser.tabs.insertCSS({
			file : css[i]
		})
	}
}

var loadConfigurationAdder = function() {
	injectCss(adderCss);
	injectScripts(adderScripts);
}

document.getElementById("add-new-entry-button")
	.addEventListener('click', function() {
		console.log('Request to add new entry.');
		loadConfigurationAdder();
	});

