'use strict';

var IMAGE_FOLDER_PATH = "./imgs/";
var SOURCE_FOLDER = "./scripts/";

function properties() {
  return {
    imageFolder : IMAGE_FOLDER_PATH,
    sourceFolder: SOURCE_FOLDER
  }
};

exports.properties = new properties();
