'use strict';

var baseUrl = "api/conf/";
var domain = Utils.getDomain(window.location.hostname);
console.log("sponsor-detector loaded for domain", domain);

var printResult = function(result, stat) {
  if (stat) {
    var banner = DetectorBannerFactory.build();
    document.getElementsByTagName('body')[0].appendChild(banner.element);
    if (result.author) {
      banner.author.textContent = result.author;
      banner.element.appendChild(banner.publishedBy);
      banner.element.appendChild(banner.author);
      banner.author.title = "Published " + stat.authored + " sponsored content.";
    }

    if (result.sponsor) {
      banner.sponsor.textContent = result.sponsor;
      banner.element.appendChild(banner.sponsoredBy);
      banner.element.appendChild(banner.sponsor);
      banner.sponsor.title = "Sponsored " + stat.sponsored + " content.";
    }
  }
}

var res = {
  sponsor : "Bandai Namco",
  author : "CyprienGaming"
}

var stats = {
  authored : 45,
  sponsored : 10
}

ConfigurationServices.get().then(function(conf) {
      var result = SponsorDetector.apply(conf);
      console.log(result);
      printResult(result, stats);
});
