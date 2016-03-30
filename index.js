'use strict';

/*
  Using Rivets(http://rivetsjs.com/) and Pure.css(http://purecss.io/)
*/
var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');
var commons = require('./app/commons.js')

/*
    CREATE TOOLBAR BUTTON
*/


var toolBarButton = buttons.ActionButton({
    id : "my-toolbar-button",
    label: "This is a test",
    icon: {
      "16": commons.properties.imageFolder + "icon-16.png",
      "32": commons.properties.imageFolder + "icon-32.png",
      "64": commons.properties.imageFolder + "icon-64.png"
    },
    onClick: togglePopup
  });

/*

  POPUP

*/
var popupPanel = require("sdk/panel").Panel({
  contentURL: commons.properties.popupFolder + "popup.html",
  contentScriptFile: [
    commons.properties.libsFolder + "rivets.bundled.min.js",
    commons.properties.sourceFolder + "utils.js",
    commons.properties.popupFolder + "popup.js"
   ],
  contentStyleFile: commons.properties.libsFolder + "pure-min.css"
});


popupPanel.on("show", function() {
  popupPanel.port.emit("show", tabs.activeTab.url);

  var worker = tabs.activeTab.attach({
    contentScriptFile: commons.properties.sourceFolder + "page.js"
  })
  worker.port.emit("start-listening");
});

var pageMod = require('sdk/page-mod').PageMod({
    include : "*",
    contentStyleFile: commons.properties.injectedFolder + "addEntry/addEntry.css",
    onAttach: function(worker) {
      console.log("CSS file attached");
    }
});

// In this implementation we'll just log the text to the console.
popupPanel.port.on("injectAddEntryForm", function (text) {
  console.log("Inject requested");
  tabs.activeTab.attach({
    contentScriptFile: [
      commons.properties.sourceFolder + "addEntry/utils.js",
      commons.properties.injectedFolder + "addEntry/addEntry.js"
    ]
  });
  popupPanel.hide();
});

function togglePopup(state) {
  popupPanel.show();
}

exports.toolBarButton = toolBarButton;
