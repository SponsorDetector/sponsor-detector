'use_strict';

var ConfigurationServices = new function() {
  var domain = Utils.getDomain(window.location.hostname);
  var host = "dev.ogdabou.ninja";
  var port = "10010";
  var url = "http://" + host + ":" + port + "/api/conf/";

  domain =  Utils.getDomain("http://youtube.com");

  var getConf = function() {
    return new Promise(function(resolve, reject) {
      var target = url + domain;
      console.log("Getting configuration for ", domain);

      promise.get(target, {}, { "Content-Type" : "application/json" })
        .then(function(error, confString, xhr) {
          if (error) {
            console.log("error", error);
            reject(error);
          }
          else {
            resolve(JSON.parse(confString));
          }
        })
    });
  }

  var getByAuthor = function(author) {
    return new Promise(function(resolve, reject) {
      var target = url + domain + "/" + author;
      console.log("Getting configuration for author " + author);
      promise.get(target, {}, { "Content-Type" : "application/json" })
        .then(function(error, confString, xhr) {
          if (error) {
            reject(error);
          }
          else {
            resolve(JSON.parse(confString));
          }
        });
    })
  }

  var save = function(conf) {
    return new Promise(function(resolve, reject) {
      console.log("Saving conf ", conf);
      promise.post(target, conf, { "Content-Type" : "application/json" })
        .then(function(error, resultSring, xhr) {
          if (error) {
            console.log(error);
            reject(error);
          }
          else {
            resolve(JSON.parse(resultSring));
          }
        });

    });
  }

  var get = function() {
    return new Promise(function(resolve, reject) {
      var conf = getConf().then(function(conf) {
        var result = SponsorDetector.apply(conf);
        if (result.author) {
          resolve(getByAuthor(conf));
        }
        else {
          resolve(conf);
        }
      });
    });
  }

  return {
    "get" : get,
    "save" : save
  }
}
