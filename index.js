'use strict';

var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');
var commons = require('./app/commons.js')

function handleClick(state) {
  tabs.open("http://github.com/ogdabou");
}

console.log(commons.properties.imageFolder + "icon-16.png");
var toolBarButton = buttons.ActionButton({
    id : "my-toolbar-button",
    label: "This is a test",
    icon: {
      "16": commons.properties.imageFolder + "icon-16.png",
      "32": commons.properties.imageFolder + "icon-32.png",
      "64": commons.properties.imageFolder + "icon-64.png"
    },
    onClick: handleClick
  });


exports.toolBarButton = toolBarButton;
