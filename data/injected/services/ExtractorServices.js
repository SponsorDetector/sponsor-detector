'use strict';

var ExtractorServices = new function() {

  // extract the smth using regex
  this.findIntHtmlElement = function(cssQuery, regexString) {
    var result;
    console.log("query", cssQuery, "regEx", regexString);
    var element = document.querySelector(cssQuery);
    var regexToMatch = new RegExp(regexString);
    var match = element.innerHTML.match(regexToMatch);
    if (match && match[1]) {
      result = match[1];
    }
    return result;
  }
};
