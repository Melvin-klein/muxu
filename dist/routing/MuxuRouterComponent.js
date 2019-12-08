"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MuxuRouterComponent = function MuxuRouterComponent(props) {
  return _react["default"].createElement(_react["default"].Fragment, null, props.router.routes.map(function (route) {
    var Page = route.component;
    return _react["default"].createElement(_reactRouterDom.Route, {
      exact: route.uri === '/',
      path: route.uri,
      component: Page
    });
  }));
};

var _default = MuxuRouterComponent;
exports["default"] = _default;