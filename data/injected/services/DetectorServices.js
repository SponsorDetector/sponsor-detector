'use strict';

var DetectorServices = new function() {
  var self = this;

  self.services = {
    querySelector :  {
        placeHolders : [ "Css query" ],
        call : function(querySelector) {
          return document.querySelector(querySelector) != null;
        }
    },
    titleContains :  {
        placeHolders : [ "RegExp" ],
        call : function(textToContain) {
          return document.title.indexOf(textToContain) > -1;
        }
    },
    urlContains :  {
        placeHolders : [ "RegExp" ],
        call : function(textToContain) {
          return window.location.href.indexOf(textToContain) > -1;
        },
    },

    findIntHtmlElement : ExtractorServices.findIntHtmlElement
  };

  this.isPresent = function(detectoName, query) {
    console.log("detectoName",detectoName, "query", query);
    var detector = this.detectors[detectoName];
    var detected = detector(query);
    if (detected) {
      console.log("Sponsorised indicator Detected");
    }
    else {
      console.log("Sposorised indicator absent");
    }
    return detected;
  }
};
