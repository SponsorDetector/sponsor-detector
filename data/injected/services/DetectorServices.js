'use strict';

var DetectorServices = new function() {

  var _detectors = {
    querySelector : function(querySelector) {
      return document.querySelector(querySelector) != null;
    },

    titleContains : function(textToContain) {
      return document.title.indexOf(textToContain) > -1;
    },

    urlContains : function(textToContain) {
      return window.location.href.indexOf(textToContain) > -1;
    },

    findIntHtmlElement : ExtractorServices.findIntHtmlElement
  };

  this.isPresent = function(detectoName, query) {
    console.log("detectoName",detectoName, "query", query);
    var detector = _detectors[detectoName];
    var detected = detector(query);
    if (detected) {
      console.log("Sponsorised indicator Detected");
    }
    else {
      console.log("Sposorised indicator absent");
    }
    return detected;
  },

  this.getDetectors = function() { return _detectors; };
};
