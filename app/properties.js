'use strict';

var IMAGE_FOLDER_PATH = "./imgs/";
var SOURCE_FOLDER = "./scripts/";
var INJECTED_SOURCES = "./injected/";
var POPUP_FOLDER = "./popup/";
var LIBS_FOLDER = "./libs/"

function properties() {
  return {
    imageFolder : IMAGE_FOLDER_PATH,
    sourceFolder: SOURCE_FOLDER,
    popupFolder : POPUP_FOLDER,
    popupLibsFolder : LIBS_FOLDER,
    injectedFolder : INJECTED_SOURCES
  }
};

exports.properties = new properties();
