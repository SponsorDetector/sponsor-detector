'use strict';

var FormFactory = new function() {
  var self = this;
  var _form = {};

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
    var option = document.createElement('option');
    option.textContent = opt;
    return option;
  }

  var createInput = function(placeHolder) {
    var input = document.createElement('input');
    input.className = 'pure-input-1';
    input.setAttribute("placeHolder", placeHolder);
    return input;
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



  var buildInputs = function(chooser, parent) {
    var fn = chooser.options[chooser.options.selectedIndex].textContent;
    var inputs = [];
    var service;
    if (ExtractorServices.services.hasOwnProperty(fn)) {
      service = ExtractorServices.services[fn];
    } else if (DetectorServices.services.hasOwnProperty(fn)) {
      service = DetectorServices.services[fn];
    }
    for (var i = 0; i < service.placeHolders.length; i++)
    {
      var input = createInput(service.placeHolders[i]);
      inputs.push(input);
      parent.appendChild(input);
    }
    return inputs;
  }

  var createInputs = function() {
    _form.authorExInputs = buildInputs(_form.authorExElChooser, _form.authorExEl);
    _form.sponsorDetInputs = buildInputs(_form.sponsorDetElChooser, _form.sponsorDetEl);
    _form.sponsorExInputs = buildInputs(_form.sponsorExElChooser, _form.sponsorExEl);
  }

  this.updateInputs = function(inputs, chooser, fieldset) {
    for (var i = 0; i < inputs.length; i ++) {
       fieldset.removeChild(inputs[i]);
    }
    inputs = buildInputs(chooser, fieldset);
    return inputs;
  }



  var createInput = function(placeHolder) {
    var input = document.createElement('input');
    input.className = 'pure-input-1';
    input.setAttribute("placeHolder", placeHolder);
    return input;
  }

  var createtResultInput = function() {
    var input = createInput("result=");
    input.className = input.className + ' pure-input-disabled';
    input.setAttribute('disabled', "true");
    return input;
  }

  var createCheckBox = function(title) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'isAuthored');
    return checkbox;
  }

  var buildForm = function(form) {
    var label = document.createElement('label');
    label.setAttribute('for', 'isAuthored')
    label.className = 'pure-checkbox';
    label.appendChild(form.authored);
    label.appendChild(document.createTextNode("Is author specific"));

    form.element.appendChild(label);

    form.element.appendChild(form.sponsorDetEl);
    form.sponsorDetEl.appendChild(form.sponsorDetElChooser);
    form.element.appendChild(form.sponsorDetected);

    form.element.appendChild(form.sponsorExEl);
    form.sponsorExEl.appendChild(form.sponsorExElChooser);
    form.element.appendChild(form.sponsorInput);
    return form;
  }

  this.build = function() {
    _form = {
      element : createForm(),
      authored : createCheckBox("This configuration is author specific"),
      authorExEl : createFieldSet("Author Extractor"),
      authorExElChooser : createChooser(ExtractorServices.services),
      authorInput : createtResultInput(),
      sponsorDetEl : createFieldSet("Detector"),
      sponsorDetElChooser : createChooser(DetectorServices.services),
      sponsorDetected : createtResultInput(),
      sponsorExEl : createFieldSet("Extractor"),
      sponsorExElChooser : createChooser(ExtractorServices.services),
      sponsorInput : createtResultInput()
    };
    _form = buildForm(_form);

    createInputs();
    _form.sponsorDetElChooser.onchange = function() {
        _form.sponsorDetInputs = self.updateInputs(_form.sponsorDetInputs, _form.sponsorDetElChooser, _form.sponsorDetEl);
    }

    _form.authorExElChooser.onchange = function() {
        _form.authorExInputs = self.updateInputs(_form.authorExInputsauthorExInputs, _form.authorExElChooser, _form.authorExEl);
    }

    _form.sponsorExElChooser.onchange = function() {
      _form.sponsorExInputs = self.updateInputs(_form.sponsorExInputs, _form.sponsorExElChooser, _form.sponsorExEl);
  }



    console.log("form done");
    return _form;
  }
}
