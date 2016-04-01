'use strict';

var bindForm = function(form) {

  form.domainInput.setAttribute('disabled', 'true');
  form.sponsorFnSelectorEl.setAttribute('disabled', true);
  form.sponsorEl.setAttribute('disabled', 'true');

  form.submitButton.click = function() {
    if (!form.domainInput.value || !form.isSponsoredInput.value || !forrm.sponsorBlockQS.value)
    {
      console.log("ERROR : every fields shoudd be complete");
      return;
    }
    else {
      var entry = {
        domain : form.domainInput.value,
        isSponsoredInput : form.isSponsoredInput.value,
        sponsorBlockQS : forrm.sponsorBlockQS.value
      }
      console.log(entry);
    }
  }

  form.testButton.onclick = function() {
    var detectorName = form.detectorServiceSelector.options[form.detectorServiceSelector.selectedIndex].value;
    var query = form.isSponsoredInput.value;
    if (detectorName && query && DetectorServices.isPresent(detectorName, query)) {
      form.isSponsorisedEl.checked = true;
      form.isSponsorisedEl.setAttribute('title', 'Sponsor indicator detected !');
      var sponsor = ExtractorServices.findIntHtmlElement(form.sponsorBlockQS.value, form.sponsorRegExpInput.value);
      if (sponsor) {
        form.sponsorEl.value = sponsor;
      }
    }
  }
}


var attachBanner = function() {
  var banner = BannerFactory.build();
  banner.form = bindForm(banner.form);
  document.getElementsByTagName('body')[0].appendChild(banner.element);
}

attachBanner();
