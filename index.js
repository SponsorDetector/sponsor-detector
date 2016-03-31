'use strict';
/*
  Using Rivets(http://rivetsjs.com/) and Pure.css(http://purecss.io/)
*/
var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');
var p = require('./local/properties.js')

/*
    CREATE TOOLBAR BUTTON
*/


var toolBarButton = buttons.ActionButton({
    id : "my-toolbar-button",
    label: "This is a test",
    icon: {
      "16": p.properties.imageFolder() + "icon-16.png",
      "32": p.properties.imageFolder() + "icon-32.png",
      "64": p.properties.imageFolder() + "icon-64.png"
    },
    onClick: togglePopup
  });

/*

  POPUP

*/
var popupPanel = require("sdk/panel").Panel({
  contentURL: p.properties.popupFolder() + "popup.html",
  contentScriptFile: [
    p.properties.popupLibsFolder() + "rivets.bundled.min.js",
    p.properties.sourceFolder() + "utils.js",
    p.properties.popupFolder() + "popup.js"
   ],
  contentStyleFile: p.properties.popupLibsFolder() + "pure-min.css"
});


popupPanel.on("show", function() {
  popupPanel.port.emit("show", tabs.activeTab.url);
});

var pageMod = require('sdk/page-mod').PageMod({
    include : "*",
    contentStyleFile: p.properties.injectedFolder() + "addEntry/addEntry.css",
    onAttach: function(worker) {
      console.log("CSS file attached");
    }
});

// In this implementation we'll just log the text to the console.
popupPanel.port.on("injectAddEntryForm", function (text) {
  console.log("Inject requested");
  tabs.activeTab.attach({
    contentScriptFile: [
      p.properties.sourceFolder() + "utils.js",
      p.properties.servicesFolder() + "SponsorDetectorServices.js",
      p.properties.servicesFolder() + "SponsorExtractorServices.js",
      p.properties.injectedFolder() + "model/FormFactory.js",
      p.properties.injectedFolder() + "model/BannerFactory.js"
      p.properties.injectedFolder() + "addEntry/addEntry.js",
      p.properties.injectedFolder() + "main.js"
    ]
  });
  popupPanel.hide();
});

function togglePopup(state) {
  popupPanel.show();
}

exports.toolBarButton = toolBarButton;
