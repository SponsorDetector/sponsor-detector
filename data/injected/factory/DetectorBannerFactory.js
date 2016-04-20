'use strict';

var DetectorBannerFactory = new function() {

  var createDetectorBannerElement = function() {
    var banner = document.createElement('div');
    banner.className = "fffun-css-reset fffun-banner sponsor-detector-banner-top";
    return banner;
  }


  var buildBanner = function(banner) {
    return banner;
  }

  this.build = function() {
    var banner = {
      element : createDetectorBannerElement()
    }
    banner = buildBanner(banner);
    return banner;
  }

}
