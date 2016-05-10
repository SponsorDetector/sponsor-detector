'use strict';

var removeAuthor = function() {
  form.element.removeChild(form.authorExEl);
    form.element.removeChild(form.authorInput);
}


var bindForm = function(banner, conf) {
  var form = banner.form;

  var togglerAuthor = function() {
    if (form.authored.checked) {
      form.element.appendChild(form.authorExEl);
      form.element.appendChild(form.authorInput);
    }
    else {
      form.element.removeChild(form.authorExEl);
      form.element.removeChild(form.authorInput);
    }
  }

  if (conf && conf.author) {
    console.log("configuration found");
    form.authored.checked = true;
    togglerAuthor();
  }

  form.authored.onclick = function() {
    togglerAuthor();
  }

  var getParams = function(inputs) {
    var params = [];
    for (var i = 0; i < inputs.length; i++) {
      params.push(inputs[i].value);
    }
    return params;
  }

  var defined = function(array) {
      for (var i = 0; array && i < array.length; i++) {
        console.log(array[i]);
        if (!array[i]) {
          return false;
        }
      }
      return true;
    }

  var buildConf = function() {
    var authorParams = getParams(form.authorExInputs);
    var sponsorExParams = getParams(form.sponsorExInputs);
    var sponsorDetParams = getParams(form.sponsorDetInputs);
    if (form.authored.checked && authorParams.length > 0) {
      conf.author = {
        extractor : {
          name : form.authorExElChooser.options[form.authorExElChooser.selectedIndex].value,
          params : authorParams
        }
      };
    };

    if (sponsorDetParams.length > 0) {
      conf.sponsor = {
        detector : {
          name : form.sponsorDetElChooser.options[form.sponsorDetElChooser.selectedIndex].value,
          params : sponsorDetParams
        }
      };
    }

    if (sponsorExParams.length > 0) {
      if (!conf.sponsor) {
        conf.sponsor = {};
      }
      conf.sponsor.extractor = {
          name : form.sponsorExElChooser.options[form.sponsorExElChooser.selectedIndex].value,
          params : sponsorExParams
        }
    }


    return conf;
  }

  var showErrors = function(result) {
    if (conf) {
      if (conf.author && form.authorExInputs) {
        form.authorExInputs.style["border"] = '2px solid green';
      }
    }
  }


  banner.sendButton.onclick = function() {
    var conf = buildConf();
    var result = SponsorDetector.apply(conf, conf.domain);
    if (result.sponsorised) {
      ConfigurationServices.save(conf).then(function(result) {
        console.log("saved a conf !", conf);
      })
    }
    // play with result
  }

  banner.testButton.onclick = function() {

    var conf = buildConf();
    var result = SponsorDetector.apply(conf, conf.domain);
    var valid = showErrors(result);
    console.log("result---------------");
    console.log(JSON.stringify(result, null, 4));
    console.log("------------------------------");

    if (result.author) {
      form.authorInput.value = result.author;
    }
    if (result.sponsorised) {
      form.sponsorDetected.value = true;
    }
    if (result.sponsor) {
      form.sponsorInput.value = result.sponsor;
    }
  }
}




var attachBanner = function() {
  var banner = BannerFactory.build("right");
  var conf = {};
   ConfigurationServices.get().then(function(conf) {
     bindForm(banner, conf)
  });
  banner.form = bindForm(banner, conf);
  document.getElementsByTagName('body')[0].appendChild(banner.element);
}

attachBanner();
