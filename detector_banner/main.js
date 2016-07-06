'use strict';

var baseUrl = "api/conf/";
var domain = Utils.getDomain(window.location.hostname);
console.log("sponsor-detector loaded for domain", domain);

var Detector = new function() {
  var printResult = function(result, stat) {
    if (stat) {
      console.log('stats');
      var banner = DetectorBannerFactory.build();
      document.getElementsByTagName('body')[0].appendChild(banner.element);
      if (result.author) {
        banner.author.textContent = result.author;
        banner.element.appendChild(banner.publishedBy);
        banner.element.appendChild(banner.author);
      /*  banner.author.title = "Published " + stat.authored + " sponsored content.";*/
      }

      if (result.sponsor) {
        banner.sponsor.textContent = result.sponsor;
        banner.element.appendChild(banner.sponsoredBy);
        banner.element.appendChild(banner.sponsor);
       /* banner.sponsor.title = "Sponsored " + stat.sponsored + " content.";*/
      }
    }
  }

  return {
    'printResult' : printResult
  }
}

var stats = {
  authored : 45,
  sponsored : 10
}

var refreshDetector = function() {
  ConfigurationServices.get().then(function(conf) {
      conf = conf[0]["_source"];
      var result = SponsorDetector.apply(conf);
      console.log(JSON.stringify(conf, null, 4));
      console.log(result);
      Detector.printResult(result, stats);
  })
  .catch(function(error) {
    console.log("Error : " + error);
  });
}
refreshDetector();
