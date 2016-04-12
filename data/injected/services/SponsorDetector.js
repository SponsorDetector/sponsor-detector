'use strict';

var SponsorDetector = new function() {

  this.apply = function(conf, domain) {
    var result = {
      author : null,
      sponsor : null,
      domain : domain,
      title : document.title,
      link : window.location.href
    };

    console.log(conf);

    if (conf.author) {
      var author = ExtractorServices[conf.author.extractor.name].apply(null, conf.author.extractor.params);
      result.author = author;
      if (author) {
        //conf = Confs[domain + "/" + author];
      }
    }

    if (conf.sponsor && conf.sponsor.extractor) {
        var sponsor = ExtractorServices[conf.sponsor.extractor.name].apply(null, conf.sponsor.extractor.params);
        result.sponsor = sponsor;
    }

    if (result.sponsor) {
      // afficher
      // publier les stats
    }

    if (!result.sponsor && conf.sponsor && conf.sponsor.detector) {
      var sponsorised = DetectorServices[conf.sponsor.dectector.name].apply(null, conf.sponsor.dectector.params);
      if (sponsorised) {
        // afficher
      }
    }
  }
}
