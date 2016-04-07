'use strict';

var bindForm = function(form) {

  form.domainInput.setAttribute('disabled', 'true');
  form.sponsorFnSelectorEl.setAttribute('disabled', true);
  form.sponsorEl.setAttribute('disabled', 'true');

  var buildConf = function() {
    return {
      domain : Utils.getDomain(window.location.hostname),
      sponsor : {
        detector : {
          name : form.detectorServiceSelector.options[form.detectorServiceSelector.selectedIndex].value,
          params : [ form.isSponsoredInput.value ]
        },
        extractor : {
          name : form.sponsorBlockQS.value,
          params : [ form.sponsorRegExpInput.value ]
        }
      },
      author : {}
    }
  }

  form.submitButton.click = function() {
    var conf = buildConf();

    var result = SponsorDetector.apply(conf, conf.domain);

    // play with result

  }

  form.testButton.onclick = function() {
    var conf = buildConf();
    var result = SponsorDetector.apply(conf, conf.domain);

    if (result) {
      form.isSponsorisedEl.checked = true;
      form.isSponsorisedEl.setAttribute('title', 'Sponsor indicator detected !');
      if (result.sponsor) {
        form.sponsorEl.value = result.sponsor;
      }
    }
  }
}


var attachBanner = function() {
  var banner = BannerFactory.build();
  //banner.form = bindForm(banner.form);
  document.getElementsByTagName('body')[0].appendChild(banner.element);
}

attachBanner();
