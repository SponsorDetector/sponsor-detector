'use strict';

var ExtractorServices = new function() {
  this.services = {
    findIntHtmlElement : {
      placeHolders : [ "Css query", "RegExp" ],
      call : function(cssQuery, regexString) {
          this.nbParams = 2;
          var result;
          console.log("query", cssQuery, "regEx", regexString);
          var element = document.querySelector(cssQuery);

          if (!regexString || regexString === "") {
            result = element.innerHTML;
          }
          else {
            var regexToMatch = new RegExp(regexString);
            var match = element.innerHTML.match(regexToMatch);
            if (match && match[1]) {
              result = match[1];
            }
          }
          return result.trim();
        }
      }
    }
  // extract the smth using regex
};
