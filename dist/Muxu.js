"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Router = _interopRequireDefault(require("./routing/Router"));

var _MuxuRouterComponent = _interopRequireDefault(require("./routing/MuxuRouterComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Router: _Router["default"],
  MuxuRouterComponent: _MuxuRouterComponent["default"]
};
exports["default"] = _default;