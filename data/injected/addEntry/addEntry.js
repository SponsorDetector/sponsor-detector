'use strict';
console.log("addEntry.js");

var createBannerElement = function() {
  var banner = document.createElement('div');
  banner.setAttribute('id', 'ffun-addEntry-banner');
  banner.className = 'fffun-css-reset fffun-banner';
  return banner;
}

var createAddEntryFormElement = function() {
  var addEntryForm = document.createElement('form');

  var domainInput = document.createElement('input');
  domainInput.setAttribute('id', 'domainInput');
  domainInput.setAttribute('type', 'text');
  domainInput.setAttribute('disabled', 'true');
  domainInput.setAttribute('value', window.location.hostname);

  var titleBlockQS = document.createElement('input');
  titleBlockQS.setAttribute('id', 'titleBlockQS');
  titleBlockQS.setAttribute('type', 'text');
  titleBlockQS.setAttribute('placeholder', "ex: #article.title");

  var spronsorBlockQS = document.createElement('input');
  spronsorBlockQS.setAttribute('id', 'spronsorBlockQS');
  spronsorBlockQS.setAttribute('type', 'text');
  spronsorBlockQS.setAttribute('placeholder', "ex: #article.sponsor");

  var submitButton = document.createElement('input');
  submitButton.setAttribute('id', 'add-entry-submit-button');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('value', 'Envoyer');
  submitButton.onclick = function() {
    if (!document.getElementById("domainInput").value
      || !document.getElementById("titleBlockQS").value
      || !document.getElementById("sponsorBlockQS").value)
    {
      console.log("ERROR : every fields shoudd be complete");
      return;
    }
    else {
      var entry = {
        domain : document.getElementById("domainInput").value,
        titleBlockQS : document.getElementById("titleBlockQS").value,
        sponsorBlockQS : document.getElementById("sponsorBlockQS").value
      }
      console.log(entry);
    }
  }

  addEntryForm.appendChild(domainInput);
  addEntryForm.appendChild(titleBlockQS);
  addEntryForm.appendChild(spronsorBlockQS);
  addEntryForm.appendChild(submitButton);
  return addEntryForm;
}


var injectAddEntryBanner = function() {
  var banner = createBannerElement();
  banner.appendChild(createAddEntryFormElement());
  document.getElementsByTagName('body')[0].appendChild(banner);
}

injectAddEntryBanner();
