'use strict';

var BannerFactory = new function() {

  var createBannerElement = function() {
    var banner = document.createElement('div');
    banner.setAttribute('id', 'ffun-addEntry-banner');
    banner.className = 'fffun-css-reset fffun-banner';

    var p = document.createElement('p');
    p.textContent = "Sponsor Detector";
    banner.appendChild(p);
    return banner;
  };

  var buildBanner = function(banner) {
    for (var attribute in banner) {
      if (banner.hasOwnProperty(attribute) && attribute != "element") {
        banner.element.appendChild(banner[attribute].element);
      }
    }
    return banner;
  };

  this.build = function() {
    console.log("creating banner");
    var banner = {
      element : createBannerElement(),
      menu : MenuFactory.build(),
      form : FormFactory.build()
    };
    var element = document.createElement('body');
    banner = buildBanner(banner);
    console.log("banner created");
    return banner;
  };
}
