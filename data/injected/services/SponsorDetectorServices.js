'use strict';

var SponsorDetectorServices = new function() {

  var _detectors = {
    querySelector : function(querySelector) {
      return document.querySelector(querySelector) != null;
    },

    titleContains : function(textToContain) {
      return document.title.indexOf(textToContain) > -1;
    }
  };

  this.isPresent = function(selectedDetector, value) {
    console.log("get", value);
    var detector = _detectors[selectedDetector];
    var detected = detector(value);
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
