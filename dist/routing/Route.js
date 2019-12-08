"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function Route(uri, component) {
  _classCallCheck(this, Route);

  this.uri = uri;
  this.component = component;
};