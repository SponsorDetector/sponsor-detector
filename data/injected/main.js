'use strict';

var baseUrl = "/api/conf/";
var domain = Utils.getDomain(window.location.hostname);
domain = baseUrl + domain;
console.log("sponsor-detector loaded for domain", domain);

var banner = DetectorBannerFactory.build();
document.getElementsByTagName('body')[0].appendChild(banner.element);

var createP = function(message) {
  var p = document.createElement('p');
  p.textContent = message;
  return p;
}

var printResult = function(result, stat) {
  var message = createP("This content has been ");
  message.style["display"] = 'inline-block';

  var author = createP(result.author);
  author.className = 'tag';
  if (result.author) {
    message.textContent = message.textContent + "published by ";
    banner.element.appendChild(message);
  }
  banner.element.appendChild(author);
  var sponsor = createP(result.sponsor);
  if (result.sponsor) {
    var sponsoMsg = createP(" and sponsored by ");
    sponsor.className = 'tag';
    sponsor.title = "The concerned author is " + result.sponsor;
    sponsoMsg.style["display"] = 'inline-block';
    banner.element.appendChild(sponsoMsg);
  }
  banner.element.appendChild(sponsor);

  if (stat) {
    var authored = document.createElement('p');
    authored.textContent = stat.authored;
    authored.className = 'tag tag-authored';
    author.appendChild(authored);

    var sponsored = document.createElement('p');
    sponsored.textContent = stat.sponsored;
    sponsored.className = 'tag tag-sponsored';
    sponsor.appendChild(sponsored);
  }
}

var result = {
  sponsor : "Bandai Namco",
  author : "CyprienGaming"
}

var stat = {
  authored : 45,
  sponsored : 10
}

printResult(result, stat);

if (domain != baseUrl && Confs[domain]) {
  var result = SponsorDetector.apply(Confs[domain], domain);

  if (result) {
    var msg = "Sponsored content";
    if (result.sponsor) {
      msg = msg + " by " + result.sponsor;
    }
    msg = msg + ".";
  }
}
