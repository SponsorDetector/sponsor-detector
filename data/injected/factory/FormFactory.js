'use strict';

var FormFactory = new function() {



  var createFieldSet = function(name) {
    var fieldset = document.createElement('fieldset');
    fieldset.className = 'pure-group';
    var legend = document.createElement('legend');
    legend.textContent = name;
    fieldset.appendChild(legend);
    return fieldset;
  }

  var createForm = function() {
    var form = document.createElement('form');
    form.className = 'pure-form';
    return form;
  }


  var createOption = function(opt) {
    console.log(opt);
    var option = document.createElement('option');
    option.textContent = opt;
    return option;
  }

  var createChooser = function(service) {
    var chooser = document.createElement('select');
    chooser.className = 'pure-input-1';
    for (var attribute in service) {
      if (service.hasOwnProperty(attribute)) {
        chooser.appendChild(createOption(attribute));
      }
    }
    return chooser;
  }

  var buildForm = function(form) {
    for (var attribute in form) {
      if (form.hasOwnProperty(attribute) && attribute != 'element' && attribute.indexOf("ElChooser") < 0) {
        console.log(attribute + "Chooser");
        form[attribute].appendChild(form[attribute + "Chooser"]);
        form.element.appendChild(form[attribute]);
      }
    }
    return form;
  }


  this.build = function() {
    console.log("building form");
    var form = {
      element : createForm(),
      authorExtractorEl : createFieldSet("Extractor"),
      authorExtractorElChooser : createChooser(DetectorServices.getDetectors()),
      sponsorDetectorEl : createFieldSet("Detector"),
      sponsorDetectorElChooser : createChooser(DetectorServices.getDetectors()),
      sponsorExtractorEl : createFieldSet("Extractor"),
      sponsorExtractorElChooser : createChooser(ExtractorServices),
    };
    form = buildForm(form);
    console.log("form done");
    return form;
  }
}
