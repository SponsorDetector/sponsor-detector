'use strict';

var SponsorDetectorServices = {
  isPresent : function(selectedDetector, value) {
    console.log("get", value);
    var detector = SponsorDetectorServices[selectedDetector];
    var detected = detector(value);
    if (detected) {
      console.log("Sponsorised indicator Detected");
    }
    else {
      console.log("Sposorised indicator absent");
    }
    return detected;
  },

  querySelector : function(querySelector) {
    return document.querySelector(querySelector) != null;
  },

  titleContains : function(textToContain) {
    return document.title.indexOf(textToContain) > -1;
  }
};
