'use strict';

var baseUrl = "/api/conf/";
var domain = Utils.getDomain(window.location.hostname);
domain = baseUrl + domain;
console.log("sponsor-detector loaded for domain", domain);

if (domain != baseUrl && Confs[domain]) {
  var result = SponsorDetector.apply(Confs[domain], domain);

  if (result) {
    var msg = "Sponsored content";
    if (result.sponsor) {
      msg = msg + " by " + result.sponsor;
    }
    msg = msg + ".";
  }
}
