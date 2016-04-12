'use strict';

var removeAuthor = function() {
  form.element.removeChild(form.authorExEl);
    form.element.removeChild(form.authorInput);
}


var bindForm = function(banner, conf) {
  var form = banner.form;
  // form.authorExEl.setAttribute('hidden', true);
  console.log(conf);
  // if a configuration is found on the database
  if (conf) {
    //  form.authored.style.visibility  = 'hidden';

  }
  else {

    // show "isAuthored ?"

  }
  console.log(form.authored);

  form.authored.onclick = function() {
    if (form.authored.checked) {
      form.element.appendChild(form.authorExEl);
      form.element.appendChild(form.authorInput);
    }
    else {
      form.element.removeChild(form.authorExEl);
      form.element.removeChild(form.authorInput);
    }
  }

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
  console.log("coucou");


  banner.sendButton.onclick = function() {
    var conf = buildConf();
    console.log(conf);
    var result = SponsorDetector.apply(conf, conf.domain);
    // play with result
  }
    console.log("coucou");

  banner.testButton.onclick = function() {
    var conf = buildConf();
    //var result = SponsorDetector.apply(conf, conf.domain);

  /*  if (result) {
      form.isSponsorisedEl.checked = true;
      form.isSponsorisedEl.setAttribute('title', 'Sponsor indicator detected !');
      if (result.sponsor) {
        form.sponsorEl.value = result.sponsor;
      }
    }*/
  }
}

var getConf = function() {
  var baseUrl = "/api/conf/";
  var domain = Utils.getDomain(window.location.hostname);
  domain = baseUrl + domain;
  return Confs[domain];
}


var attachBanner = function() {
  var banner = BannerFactory.build();
  var conf = getConf();
  banner.form = bindForm(banner, conf);
  document.getElementsByTagName('body')[0].appendChild(banner.element);
}

attachBanner();
