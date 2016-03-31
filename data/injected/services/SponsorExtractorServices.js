'use strict';

var SponsorExtractorServices = {

  // extract the smth using regex
  findIntHtmlElement : function(querySelector, regexString) {
    var result;
    console.log(querySelector, regexString);
    var element = document.querySelector(querySelector);
    var regexToMatch = new RegExp(regexString);
    console.log(element.innerHTML, regexToMatch);
    var match = element.innerHTML.match(regexToMatch);
    console.log("match", match);
    if (match && match[1]) {
      result = match[1];
    }
    return result;
  }
};
