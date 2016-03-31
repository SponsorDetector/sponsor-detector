'use strict';

var FormFactory = new function() {

  var createDomainInputEl = function() {
    var domainInput = document.createElement('input');
    domainInput.setAttribute('id', 'domainInput');
    domainInput.setAttribute('type', 'text');
    domainInput.setAttribute('disabled', 'true');
    domainInput.setAttribute('value', window.location.hostname);
    return domainInput;
  }

  var createIsSponsoredInput = function() {
    var isSponsoredInput = document.createElement('input');
    isSponsoredInput.setAttribute('id', 'isSponsoredInput');
    isSponsoredInput.setAttribute('type', 'text');
    isSponsoredInput.setAttribute('placeholder', "ex: #article.title");
    return isSponsoredInput;
  }

  var createSponsorDetectorEl = function() {
    var sponsorFnSelectorEl = document.createElement('select');
    sponsorFnSelectorEl.setAttribute('id', 'sponsorFnSelectorEl');
    sponsorFnSelectorEl.setAttribute('disabled', true);

    var sponsorFnOption = document.createElement('option');
    sponsorFnOption.value = "findIntHtmlElement";
    sponsorFnOption.text = "findIntHtmlElement";
    sponsorFnSelectorEl.appendChild(sponsorFnOption);
    return sponsorFnSelectorEl;
  }

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

  var SponsorDetectorServiceselector = createSponsorDetectorServiceselector();

  // tmp
  var testButton = document.createElement('input');
  testButton.setAttribute('type', 'button');
  testButton.setAttribute('value', 'Test');
  testButton.onclick = function() {
    var selectedDetector = SponsorDetectorServiceselector.options[SponsorDetectorServiceselector.selectedIndex].value;
    var isSponsoredCssQuery = document.getElementById("isSponsoredInput").value;
    if (SponsorDetectorServices.isPresent(selectedDetector, isSponsoredCssQuery)) {
      var sponsorElQuerySelecor = document.getElementById('spronsorBlockQS');
      var sponsorRegExpInput = document.getElementById('sponsorRegExpInput');
      var sponsor = getSponsor(sponsorElQuerySelecor.value, sponsorRegExpInput.value);
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


  this.build() = function() {
    var addEntryForm = document.createElement('form');
    addEntryForm.appendChild(domainInput);
    addEntryForm.appendChild(SponsorDetectorServiceselector);
    addEntryForm.appendChild(isSponsoredInput);

    addEntryForm.appendChild(sponsorFnSelectorEl);
    addEntryForm.appendChild(spronsorBlockQS);
    addEntryForm.appendChild(sponsorRegExpInput);

    addEntryForm.appendChild(isSponsorisedEl);
    addEntryForm.appendChild(testButton);
    addEntryForm.appendChild(submitButton);
    return addEntryForm;
  }
}
