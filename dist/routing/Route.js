"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function Route(uri, component) {
  _classCallCheck(this, Route);

  this.uri = uri;
  this.component = component;
};

var _default = Route;
exports["default"] = _default;