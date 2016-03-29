console.log("Page " + document.URL + " loaded");

var mentions = [
  "Merci à .* sponsoris[é|er]",
  "sponsoris[é|ée|er]"
]

var getPageDomain = function() { return window.location.hostname; };

var getPageContent = function() {
  var element = document.getElementById("watch-description-content");
  return element.innerText || element.textContent;
};

var injectWarningMessage = function() {
  var dockingEl = document.getElementById("eow-title");

  //dockingEl.innerHTML = "SPONSORISE - " + dockingEl.innerHTML;
  var block = document.createElement('p');
  block.innerHTML = "SPONSORISE";
  block.style["background-color"] = "red";
  block.style.color = "white";

  var titleEl = document.createElement('p');
  titleEl.innerHTML = dockingEl.innerHTML;
  dockingEl.innerHTML = "";
  dockingEl.appendChild(block);
  dockingEl.appendChild(titleEl);
  /*block.style.width = "150px";
  block.style.height = "25px";*/
  /*block.style = {
    "width" : "150px",
    "height" : "20px",
    "color" : "white",
    "background-color" : "red"
  };
  dockingEl.appendChild(block);*/
}

var pageContent = getPageContent();
console.log(mentions);
for (var i = 0; i < mentions.length; i++) {
  var mention = mentions[i];
  if (pageContent.match(mention)) {
    console.log("Sponsorised content detected by : ", mention);
    injectWarningMessage();
    break;
  }
}
