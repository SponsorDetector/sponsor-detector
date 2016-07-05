'use strict';

var ExtractorServices = new function() {
  this.services = {
    findIntHtmlElement : {
      placeHolders : [ "Css query", "RegExp" ],
      call : function(cssQuery, regexString) {
          var result;
          if (cssQuery && cssQuery != "") {
            var element = document.querySelector(cssQuery);
            if(element) {
              if (!regexString || regexString === "") {
                console.log(element.innerHTML);
                result = element.innerHTML;
              }
              else {
                var regexToMatch = new RegExp(regexString);
                var match = element.innerHTML.match(regexToMatch);
                if (match && match[1]) {
                  result = match[1];
                }
              }
              result = result.trim();
            }
          }
          return result;
        }
      }
    }
  // extract the smth using regex
};
