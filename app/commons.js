'use strict';

var IMAGE_FOLDER_PATH = "./imgs/";
var SOURCE_FOLDER = "./scripts/";
var POPUP_FOLDER = "./popup/";
var LIBS_FOLDER = "./libs/"

function properties() {
  return {
    imageFolder : IMAGE_FOLDER_PATH,
    sourceFolder: SOURCE_FOLDER,
    popupFolder : POPUP_FOLDER,
    libsFolder : LIBS_FOLDER
  }
};

exports.properties = new properties();
