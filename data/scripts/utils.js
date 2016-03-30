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
    return document.querySelector(selector) !== null;
  },

  titleContains : function(textToContain) {
    return document.title.indexOf(textToContain) > -1;
  },

  htmlBlockContains : function(querySelector, regexToMatch) {
    var element = document.querySelector(querySelector);
    if (element) {
      return element.innerHTML.match(regexToMatch);
    }
    return false;
  }
};
