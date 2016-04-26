'use strict';

var BannerFactory = new function() {

  var createBannerElement = function(location) {
    var banner = document.createElement('div');
    banner.setAttribute('id', 'ffun-addEntry-banner');
    banner.className = "fffun-css-reset fffun-banner sponsor-detector-banner-" + location;
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

  var createTestButton = function() {
    var testButton = document.createElement('button');
    testButton.className = 'pure-button pure-input-1 pure-button-primary';
    testButton.textContent = "Test";
    return testButton;
  }
  var createSendButton = function() {
    var sendButton = document.createElement('button');
    sendButton.className = 'pure-button pure-input-1 pure-input-disabled';
    sendButton.textContent = "Send";
    return sendButton;
  }


  this.build = function(location) {
    console.log("creating banner");
    var banner = {
      element : createBannerElement(location),
      menu : MenuFactory.build(),
      form : FormFactory.build()
    };
    var element = document.createElement('body');
    banner = buildBanner(banner);
    banner.testButton = createTestButton();
    banner.element.appendChild(banner.testButton);

    banner.sendButton = createSendButton();
    banner.element.appendChild(banner.sendButton);

    console.log("banner created");
    return banner;
  };
}
