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
    LISTEN TO TAB OPENING
*/

tabs.on("ready", function(tab) {
  console.log(tab.url);
  tab.attach({
    contentScriptFile: commons.properties.sourceFolder + "page.js"
  })
});

/*

  POPUP

*/
var popupPanel = require("sdk/panel").Panel({
  contentURL: commons.properties.popupFolder + "popup.html",
  contentScriptFile:[commons.properties.libsFolder + "rivets.bundled.min.js", commons.properties.popupFolder + "popup.js"] ,
  contentStyleFile: commons.properties.libsFolder + "pure-min.css"
});


popupPanel.on("show", function() {
  popupPanel.port.emit("show");
});

// Listen for messages called "text-entered" coming from
// the content script. The message payload is the text the user
// entered.
// In this implementation we'll just log the text to the console.
popupPanel.port.on("text-entered", function (text) {
  console.log(text);
  popupPanel.hide();
});

function togglePopup(state) {
  popupPanel.show();
  //tabs.open("http://github.com/ogdabou");
}

exports.toolBarButton = toolBarButton;
