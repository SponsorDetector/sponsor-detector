'use strict';

var Confs = {
  "/api/conf/ad-assets.nytimes.com" : {
    "sponsor" : {
      "detector" : {
        "name" : "urlContains",
        "params" : [ "/sponsored/" ]
      },
      "extractor" : {
        "name" : "findIntHtmlElement",
        "params" : [ ".author" ]
      }
    }
  },
  "/api/conf/observer.com" : {
    "sponsor" : {
      "extractor" : {
        "name" : "findIntHtmlElement",
        "params" : [ ".entry-teaser", "Sponsored by (.*)" ]
      }
    }
  },
  "/api/conf/bizjournals.com" : {
    "sponsor" : {
      "extractor" : {
        "name" : "findIntHtmlElement",
        "params" : [ ".article__byline", "Sponsor post from (.*)" ]
      }
    }
  }
}
