'use strict';

var SponsorDetector = new function() {

  var defined = function(array) {
    for (var i = 0; array && i < array.length; i++) {
      console.log(array[i]);
      if (!array[i]) {
        return false;
      }
    }
    return true;
  }

  this.apply = function(conf, domain) {
    var result = {
      author : null,
      sponsor : null,
      domain : domain,
      title : document.title,
      link : window.location.href
    };
    //console.log(JSON.stringify(conf, null, 4));

    if (conf.author && conf.author.extractor && conf.author.extractor.name) {
      var author = ExtractorServices.services[conf.author.extractor.name].call.apply(null, conf.author.extractor.params);
      if (author) {
        result.author = author;
        console.log("author", author);
      }
    }

    if (conf.sponsor && conf.sponsor.extractor) {
        var sponsor = ExtractorServices.services[conf.sponsor.extractor.name].call.apply(null, conf.sponsor.extractor.params);
        if (sponsor) {
          result.sponsor = sponsor;
          console.log("author", sponsor);
        }
    }
    console.log(console.log(JSON.stringify(conf, null, 4)))
    if (conf.sponsor && conf.sponsor.detector && conf.sponsor.detector.name) {
      var sponsorised = DetectorServices.services[conf.sponsor.detector.name].call.apply(null, conf.sponsor.detector.params);
      if (sponsorised) {
        result.sponsorised = true;
        console.log("sponsorised", sponsorised);
        // afficher
      }
    }
    return result;
  }
}
