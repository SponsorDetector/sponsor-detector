'use strict';

var baseUrl = "/api/conf/";
var domain = Utils.getDomain(window.location.hostname);
domain = baseUrl + domain;
console.log("sponsor-detector loaded for domain", domain);

var result = {
  author : null,
  sponsor : null,
  domain : domain,
  title : document.title,
  link : window.location.href
};

if (domain != baseUrl && Confs[domain]) {
  var conf = Confs[domain];

  if (conf.author) {

    var author = ExtractorServices[conf.author.extractor.name].apply(null, conf.author.extractor.params);
    result.author = author;
    if (author) {
      conf = Confs[domain + "/" + author];
    }
  }

  if (conf.sponsor.extractor) {
      var sponsor = ExtractorServices[conf.sponsor.extractor.name].apply(null, conf.sponsor.extractor.params);
      result.sponsor = sponsor;
  }

  if (result.sponsor) {
    // afficher
    // publier les stats
  }

  if (!result.sponsor && conf.sponsor.detector) {
    var sponsorised = DetectorServices[conf.sponsor.dectector.name].apply(null, conf.sponsor.dectector.params);
    if (sponsorised) {
      // afficher
    }
  }
}
