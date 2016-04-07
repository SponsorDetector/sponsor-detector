'use strict';

var MenuFactory = new function() {


  var append = function(menu, menuItem) {
    menu.element.children[0].appendChild(menuItem);
  }

  var createMenu = function() {
    var menu = document.createElement('div');
    menu.className = 'pure-menu pure-menu-horizontal custom-can-transform';
    var ul = document.createElement('ul');
    ul.className = 'pure-menu-list';
    menu.appendChild(ul);
    return menu;
  };

  var createMenuItem = function(name) {
    var menuItem = document.createElement('li');
    menuItem.class = 'pure-menu-item';
    var link = document.createElement('a');
    link.setAttribute('href', "#");
    link.class = 'pure-menu-link';
    link.textContent = name;
    menuItem.appendChild(link);
    return menuItem;
  }

  var buildMenu = function(menu) {
    for (var attribute in menu) {
      if (menu.hasOwnProperty(attribute) && attribute != "element") {
        append(menu, menu[attribute])
      }
    }
    return banner;
  };



  this.build = function() {
    console.log("creating banner");
    var menu = {
      element : createMenu(),
      author : createMenuItem("Author");
      sponsor : createMenuItem("Sponsor");
    };
    menu = buildMenu(menu);
    console.log("menu created");
    return menu;
  };
}
