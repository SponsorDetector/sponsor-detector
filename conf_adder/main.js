'use strict';

var removeAuthor = function() {
  form.element.removeChild(form.authorExEl);
    form.element.removeChild(form.authorInput);
}


var bindForm = function(banner, conf) {
  var form = banner.form;
  /**
   * In order to use the send button you must test your configuration
   */
  // banner.sendButton.disabled = true;

  /**
   * Toggles author's inputs
   */
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

    conf.domain = Utils.getDomain(window.location.hostname);
    conf.name = conf.domain;

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

  var printResults = function(result) {
    if (result.author) {
      form.authorInput.value = 'Published : ' + result.author;
    }
    if (result.sponsorised) {
      form.sponsorDetected.value = 'Sponsorised : ' + true;
    }
    if (result.sponsor) {
      form.sponsorInput.value = 'Sponsor : ' + result.sponsor;
    }
  }

  banner.sendButton.onclick = function() {

    var conf = buildConf();
    var result = SponsorDetector.apply(conf, conf.domain);
    printResults(result);
    if (result.sponsorised) {
      console.log('---------------------------')
      console.log('Trying to save configuration');
      console.log(JSON.stringify(conf, null, 4));
      console.log('---------------------------')
      ConfigurationServices.save(conf).then(function(result) {
        printResults({
          "author": "saved!",
          "sponsor" : "saved!"
        });
        banner.element.style.visibility = 'hidden';
        console.log("Saved a new configuration !", conf);
      })
      .catch(function(error) {
        console.log("Error while saving configuration, won't close adder banner");
        // TODO print error to client
      });
    }
  }

  banner.testButton.onclick = function() {
    console.log('Testing configuration');
    var conf = buildConf();
    var result = SponsorDetector.apply(conf, conf.domain);

    /**
     * TODO : Configuration & result Validation
     */

    console.log('result---------------');
    console.log(JSON.stringify(result, null, 4));
    console.log('------------------------------');
    printResults(result);
    banner.sendButton.disabled = false;
  }
}

var attachBanner = function() {
  var banner = BannerFactory.build("right");
  var conf = {};

  ConfigurationServices.get().then(function(conf) {
      bindForm(banner, conf);
      document.getElementsByTagName('body')[0].appendChild(banner.element);
  })
  .catch(function(error) {
    banner.form = bindForm(banner, conf);
    document.getElementsByTagName('body')[0].appendChild(banner.element);
  });
}

attachBanner();
