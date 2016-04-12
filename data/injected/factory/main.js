'use strict';

var bindForm = function(banner) {
  var form = banner.form;
  // form.domainInput.setAttribute('disabled', 'true');
  // form.sponsorFnSelectorEl.setAttribute('disabled', true);
  // form.sponsorEl.setAttribute('disabled', 'true');

  var getParams = function(inputs) {
    var params = [];
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value)
      {
        params.push(inputs[i].value);
      }
    }
    return params;
  }


  var buildConf = function() {
    var conf = {};
    var authorParams = getParams(form.authorExInputs);
    var sponsorExParams = getParams(form.sponsorExInputs);
    var sponsorDetParams = getParams(form.sponsorDetInputs);
    console.log(authorParams);
    if (authorParams.length > 0) {
      conf.author = {
        extractor : {
          name : form.authorExElChooser.options[form.authorExElChooser.selectedIndex].value,
          params : [ auhorParams ]
        }
      };
    };

    if (sponsorExParams.length > 0) {
      conf.sponsor = {
        detector : {
          name : form.sponsorDetElChooser.options[form.sponsorDetElChooser.selectedIndex].value,
          params : [ ]
        }
      };
    }

    if (sponsorDetParams.length > 0) {
      if (!conf.sponsor) {
        conf.sponsor = {};
      }
      conf.sponsor.extractor = {
          name : form.sponsorExElChooser.options[form.sponsorExElChooser.selectedIndex].value,
          params : []
        }
    }

    return conf;
  }


  banner.sendButton.click = function() {
    var conf = buildConf();
    console.log(conf);
    var result = SponsorDetector.apply(conf, conf.domain);
    // play with result
  }

  banner.testButton.onclick = function() {
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
  banner.form = bindForm(banner);
  document.getElementsByTagName('body')[0].appendChild(banner.element);
}

attachBanner();
