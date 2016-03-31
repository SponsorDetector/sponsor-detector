'use strict';

var BannerFactory = new function() {

  var createBannerElement = function() {
    var banner = document.createElement('div');
    banner.setAttribute('id', 'ffun-addEntry-banner');
    banner.className = 'fffun-css-reset fffun-banner';
    return banner;
  }

  

  var createSponsorDetectorServiceselector = function() {
    var sponsorDetectorElement = document.createElement('select');
    sponsorDetectorElement.setAttribute('id', 'sponsor-detector-element');

    var availableDetectors = SponsorDetectorServices.getDetectors();
    for (var querySelectorFn in availableDetectors) {
      if (availableDetectors.hasOwnProperty(querySelectorFn)) {
        var detector = document.createElement('option');
        detector.value = querySelectorFn;
        detector.text = querySelectorFn;
        sponsorDetectorElement.appendChild(detector);
        console.log("Sponsor detector :", querySelectorFn);
      }
    }
    return sponsorDetectorElement;
  }




  build = function() {
    var banner = createBannerElement();
    banner.appendChild(createAddEntryFormElement());
    createSponsorDetectorServiceselector();
  }
}
