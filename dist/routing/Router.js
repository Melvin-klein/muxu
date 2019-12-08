"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Route = _interopRequireDefault(require("./Route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Router =
/*#__PURE__*/
function () {
  function Router() {
    _classCallCheck(this, Router);

    this.routes = [];
  }

  _createClass(Router, [{
    key: "register",
    value: function register(uri, component) {
      this.routes.push(new _Route["default"](uri, component));
    }
  }]);

  return Router;
}();

var _default = Router;
exports["default"] = _default;