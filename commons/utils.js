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
    if (!domain)
    {
      domain = "";
    }
    return domain;
  }
};
