'use strict';

var DetectorBannerFactory = new function() {

  var createDetectorBannerElement = function() {
    var banner = document.createElement('div');
    banner.className = "fffun-css-reset fffun-banner sponsor-detector-banner-top";
    return banner;
  }

  var createP = function(message) {
    var p = document.createElement('p');
    p.style["display"] = 'inline-block';
    p.textContent = message;
    return p;
  }

  var createTag = function() {
    var tag = createP("");
    tag.className = 'tag';
    return tag;
  }

  var buildBanner = function(banner) {
    return banner;
  }

  this.build = function() {
    var banner = {
      element : createDetectorBannerElement(),
      publishedBy : createP("Published by "),
      sponsoredBy : createP("and sponsored by "),
      author : createTag(),
      sponsor : createTag()
    }
    banner = buildBanner(banner);
    console.log("banner built");
    return banner;
  }

}
