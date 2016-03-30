'use strict';

var IMAGE_FOLDER_PATH = "./imgs/";
var SOURCE_FOLDER = "./scripts/";
var INJECTED_SOURCES = "./injected/";
var POPUP_FOLDER = "./popup/";
var POPUP_LIBS_FOLDER = "./popup/libs/"

function properties() {
  return {
    imageFolder : function() { return IMAGE_FOLDER_PATH },
    sourceFolder: function() { return SOURCE_FOLDER },
    popupFolder : function() { return POPUP_FOLDER },
    popupLibsFolder : function() { return POPUP_LIBS_FOLDER },
    injectedFolder : function() { return INJECTED_SOURCES }
  }
};

exports.properties = new properties();
