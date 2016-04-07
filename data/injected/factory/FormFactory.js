'use strict';

var FormFactory = new function() {

//   var createDomainInputEl = function() {
//     var domainInput = document.createElement('input');
//     domainInput.setAttribute('id', 'domainInput');
//     domainInput.setAttribute('type', 'text');
//     domainInput.setAttribute('value', window.location.hostname);
//     return domainInput;
//   }
//
//   var createSponsorDetectorSelector = function() {
//     var sponsorDetectorElement = document.createElement('select');
//     sponsorDetectorElement.setAttribute('id', 'sponsor-detector-element');
//     var detectors = DetectorServices.getDetectors();
//     for (var querySelectorFn in detectors) {
//       if (detectors.hasOwnProperty(querySelectorFn)) {
//         var detector = document.createElement('option');
//         detector.value = querySelectorFn;
//         detector.text = querySelectorFn;
//         sponsorDetectorElement.appendChild(detector);
//         console.log("Sponsor detector :", querySelectorFn);
//       }
//     }
//     return sponsorDetectorElement;
// }
//
//   var createIsSponsoredInput = function() {
//     var isSponsoredInput = document.createElement('input');
//     isSponsoredInput.setAttribute('id', 'isSponsoredInput');
//     isSponsoredInput.setAttribute('type', 'text');
//     isSponsoredInput.setAttribute('placeholder', "ex: #article.title");
//     return isSponsoredInput;
//   }
//
//   var createSponsorFnSelector = function() {
//     var sponsorFnSelectorEl = document.createElement('select');
//     sponsorFnSelectorEl.setAttribute('id', 'sponsorFnSelectorEl');
//
//     var sponsorFnOption = document.createElement('option');
//     sponsorFnOption.value = "findIntHtmlElement";
//     sponsorFnOption.text = "findIntHtmlElement";
//     sponsorFnSelectorEl.appendChild(sponsorFnOption);
//     return sponsorFnSelectorEl;
//   }
//
//   var createSpronsorBlockQS = function() {
//     var sponsorBlockQS = document.createElement('input');
//     sponsorBlockQS.setAttribute('id', 'spronsorBlockQS');
//     sponsorBlockQS.setAttribute('type', 'text');
//     sponsorBlockQS.setAttribute('placeholder', "ex: #article.sponsor");
//     return sponsorBlockQS;
//   }
//
//   var createSponsorEl = function() {
//     var sponsorEl = document.createElement('input');
//     sponsorEl.setAttribute('type', 'text');
//     sponsorEl.setAttribute('id', 'sponsorEl');
//     return sponsorEl;
//   }
//
//   var createSponsorRegExpInput = function() {
//     var sponsorRegExpInput = document.createElement('input');
//     sponsorRegExpInput.setAttribute('id', 'sponsorRegExpInput');
//     sponsorRegExpInput.setAttribute('type', 'text');
//     sponsorRegExpInput.setAttribute('placeholder', "ex: Sponsorisé par .*");
//     return sponsorRegExpInput;
//   }
//
//   var createSubmitButton = function() {
//     var submitButton = document.createElement('input');
//     submitButton.setAttribute('id', 'add-entry-submit-button');
//     submitButton.setAttribute('type', 'button');
//     submitButton.setAttribute('value', 'Envoyer');
//     return submitButton;
//   }
//   // tmp
//   var createTestButton = function() {
//     var testButton = document.createElement('input');
//     testButton.setAttribute('type', 'button');
//     testButton.setAttribute('value', 'Test');
//
//     return testButton;
//   }
//   // end tmp
//   var createIsSponsoredEl = function() {
//     var isSponsorisedEl = document.createElement('input');
//     isSponsorisedEl.setAttribute('type', 'checkbox');
//     isSponsorisedEl.setAttribute('id', 'isSponsored');
//     isSponsorisedEl.setAttribute('title', 'No sponsor indicator detected');
//     return isSponsorisedEl;
//   }
//
//  // found sponsor, result
//   var createSponsoResultEl = function() {
//     var sponsorEl = document.createElement('input');
//     sponsorEl.setAttribute('type', 'text');
//     return sponsorEl;
//   }
//
//   var buildForm = function(form) {
//     for (var attribute in form) {
//       if (form.hasOwnProperty(attribute) && attribute != 'element') {
//         form.element.appendChild(form[attribute]);
//       }
//     }
//     return form;
//   }

  var createForm = function() {
    var form = document.createElement('form');
    form.class = 'pure-form';
    return form;
  }

  this.build = function() {
    console.log("building form");
    var form = {
      element : createForm(),
      domainInput : createDomainInputEl(),
      detectorServiceSelector : createSponsorDetectorSelector(),
      isSponsoredInput : createIsSponsoredInput(),
      sponsorFnSelectorEl : createSponsorFnSelector(),
      sponsorBlockQS : createSpronsorBlockQS(),
      sponsorRegExpInput : createSponsorRegExpInput(),
      sponsorEl : createSponsorEl(),
      isSponsorisedEl : createIsSponsoredEl(),
      testButton : createTestButton(),
      submitButton : createSubmitButton()
    };
    form = buildForm(form);
    console.log("form done");
    return form;
  }
}
