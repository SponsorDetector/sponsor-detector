'use strict';
console.log("addEntry.js");

var createBannerElement = function() {
  var banner = document.createElement('div');
  banner.setAttribute('id', 'ffun-addEntry-banner');
  banner.className = 'fffun-css-reset fffun-banner';
  return banner;
}


// depends on utils.js
var createSponsorDetectorSelector = function() {
  var sponsorDetectorElement = document.createElement('select');
  sponsorDetectorElement.setAttribute('id', 'sponsor-detector-element');
  for (var querySelectorFn in SponsorDetectors) {
    if (SponsorDetectors.hasOwnProperty(querySelectorFn)) {
      var detector = document.createElement('option');
      detector.value = querySelectorFn;
      detector.text = querySelectorFn;
      sponsorDetectorElement.appendChild(detector);
      console.log("Sponsor detector :", querySelectorFn);
    }
  }
  return sponsorDetectorElement;
}
createSponsorDetectorSelector();



var get = function(detector, input) {
  var value = input.value;
  console.log("get", value);
  var detected = detector(value);
  if (detected) {
    console.log("Sponsorised indicator Detected");
  }
  else {
    console.log("Sposorised indicator absent");
  }
  return detected;
}

var getSponsor = function() {
  var sponsor;
  console.log('extracting sponsor');
  var sponsorElQuerySelecor = document.getElementById('spronsorBlockQS');
  var sponsorRegExpInput = document.getElementById('sponsorRegExpInput');
  console.log(sponsorElQuerySelecor, sponsorRegExpInput);
  if (sponsorElQuerySelecor && sponsorRegExpInput) {
    sponsor = SponsorDetectors.htmlBlockContains(sponsorElQuerySelecor.value , sponsorRegExpInput.value);
    console.log("sponsor", sponsor)
  }
  return sponsor;
}


var createAddEntryFormElement = function() {
  var addEntryForm = document.createElement('form');

  var domainInput = document.createElement('input');
  domainInput.setAttribute('id', 'domainInput');
  domainInput.setAttribute('type', 'text');
  domainInput.setAttribute('disabled', 'true');
  domainInput.setAttribute('value', window.location.hostname);

  var isSponsoredInput = document.createElement('input');
  isSponsoredInput.setAttribute('id', 'isSponsoredInput');
  isSponsoredInput.setAttribute('type', 'text');
  isSponsoredInput.setAttribute('placeholder', "ex: #article.title");

  var sponsorFnSelectorEl = document.createElement('select');
  sponsorFnSelectorEl.setAttribute('id', 'sponsorFnSelectorEl');
  sponsorFnSelectorEl.setAttribute('disabled', true);
  var sponsorFnOption = document.createElement('option');
  sponsorFnOption.value = "htmlBlockContains";
  sponsorFnOption.text = "htmlBlockContains";
  sponsorFnSelectorEl.appendChild(sponsorFnOption);

  var spronsorBlockQS = document.createElement('input');
  spronsorBlockQS.setAttribute('id', 'spronsorBlockQS');
  spronsorBlockQS.setAttribute('type', 'text');
  spronsorBlockQS.setAttribute('placeholder', "ex: #article.sponsor");

  var sponsorEl = document.createElement('input');
  sponsorEl.setAttribute('id', 'sponsorEl');
  sponsorEl.setAttribute('disabled', 'true');

  var sponsorRegExpInput = document.createElement('input');
  sponsorRegExpInput.setAttribute('id', 'sponsorRegExpInput');
  sponsorRegExpInput.setAttribute('type', 'text');
  sponsorRegExpInput.setAttribute('placeholder', "ex: Sponsorisé par .*");

  var submitButton = document.createElement('input');
  submitButton.setAttribute('id', 'add-entry-submit-button');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('value', 'Envoyer');
  submitButton.onclick = function() {
    if (!document.getElementById("domainInput").value
      || !document.getElementById("isSponsoredInput").value
      || !document.getElementById("sponsorBlockQS").value)
    {
      console.log("ERROR : every fields shoudd be complete");
      return;
    }
    else {
      var entry = {
        domain : document.getElementById("domainInput").value,
        isSponsoredInput : document.getElementById("isSponsoredInput").value,
        sponsorBlockQS : document.getElementById("sponsorBlockQS").value
      }
      console.log(entry);
    }
  }

  var sponsorDetectorSelector = createSponsorDetectorSelector();

  // tmp
  var testButton = document.createElement('input');
  testButton.setAttribute('type', 'button');
  testButton.setAttribute('value', 'Test');
  testButton.onclick = function() {
    var selectedSponsor = sponsorDetectorSelector.options[sponsorDetectorSelector.selectedIndex].value;
    console.log(selectedSponsor);
    if (get(SponsorDetectors[selectedSponsor], document.getElementById("isSponsoredInput"))) {
      var sponsor = getSponsor();
      if (sponsor) {
        var isSponsorisedEl = document.getElementById('isSponsored');
        isSponsorisedEl.checked = true;
        isSponsorisedEl.setAttribute('title', 'Sponsor indicator detected !');
      }
    }
  }
  // end tmp

  var isSponsorisedEl = document.createElement('input');
  isSponsorisedEl.setAttribute('type', 'checkbox');
  isSponsorisedEl.setAttribute('id', 'isSponsored');
  isSponsorisedEl.setAttribute('title', 'No sponsor indicator detected');

  addEntryForm.appendChild(domainInput);
  addEntryForm.appendChild(sponsorDetectorSelector);
  addEntryForm.appendChild(isSponsoredInput);

  addEntryForm.appendChild(sponsorFnSelectorEl);
  addEntryForm.appendChild(spronsorBlockQS);
  addEntryForm.appendChild(sponsorRegExpInput);

  addEntryForm.appendChild(isSponsorisedEl);
  addEntryForm.appendChild(testButton);
  addEntryForm.appendChild(submitButton);
  return addEntryForm;
}




var injectAddEntryBanner = function() {
  var banner = createBannerElement();
  banner.appendChild(createAddEntryFormElement());
  document.getElementsByTagName('body')[0].appendChild(banner);
}

injectAddEntryBanner();
