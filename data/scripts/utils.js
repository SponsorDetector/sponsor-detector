var Utils = {
  getDomain : function(url) {
    var domain;
    // only http protocol
    if (url.indexOf("://") > -1){
      domain = url.split('/')[2];
    }
    else {
      domain = url.split('/')[0];
    }

    //find & remove port number
    domain = domain.split(':')[0];
    return domain;
  }
};

var SponsorDetectors = {
  querySelector : function(querySelector) {
    return document.querySelector(querySelector) != null;
  },

  titleContains : function(textToContain) {
    return document.title.indexOf(textToContain) > -1;
  },
  // extract the smth using regex
  htmlBlockContains : function(querySelector, regexString) {
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
