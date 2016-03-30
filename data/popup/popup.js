'use strict';

var entry = {
  domain : ""
}

document.getElementById("add-new-entry-button").onclick = function() {
  console.log("emitting");
  self.port.emit('injectAddEntryForm');
}


var injectAddEntryForm = function () {
  console.log("emitting");
  self.port.emit('injectAddEntryForm');
}

self.port.on("show", function(activeTabUrl) {
  entry.domain = Utils.getDomain(activeTabUrl);
  console.log("Add-on opened for domain : ", entry.domain);
});
