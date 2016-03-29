'use strict';
var {Cc, Ci} = require("chrome");
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

console.log("barButton");

function handleClick(state) {
  tabs.open("http://github.com/ogdabou");
}

var toolBarButton =  function() {
  var button = buttons.ActionButton({
    id : "my-toolbar-button",
    label: "This is a test",
    icon: {
      "16": "./icon-16.png",
      "32": "./icon-32.png",
      "64": "./icon-64.png"
    },
    onClick: handleClick
  });

  this.get = function() { return button };

  return "coucou hiboux xD";
}

exports.toolBarButton = toolBarButton;
