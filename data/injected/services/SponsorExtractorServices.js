'use strict';

var SponsorExtractorServices = new function() {

  // extract the smth using regex
  this.findIntHtmlElement = function(cssQuery, regexString) {
    var result;
    console.log(cssQuery, regexString);
    var element = document.querySelector(cssQuery);
    var regexToMatch = new RegExp(regexString);
    console.log(element.innerHTML, regexToMatch);
    var match = element.innerHTML.match(regexToMatch);
    if (match && match[1]) {
      result = match[1];
    }
    return result;
  }
};
