"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var PinLeft = function PinLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.50005 13.9499C2.74858 13.9499 2.95005 13.7485 2.95005 13.4999L2.95005 1.49993C2.95005 1.2514 2.74858 1.04993 2.50005 1.04993C2.25152 1.04993 2.05005 1.2514 2.05005 1.49993L2.05005 13.4999C2.05005 13.7485 2.25152 13.9499 2.50005 13.9499ZM9.06809 11.0681C9.24383 10.8924 9.24383 10.6074 9.06809 10.4317L6.58629 7.9499L14.5 7.9499C14.7485 7.9499 14.95 7.74843 14.95 7.4999C14.95 7.25138 14.7485 7.0499 14.5 7.0499L6.58629 7.0499L9.06809 4.5681C9.24383 4.39237 9.24383 4.10744 9.06809 3.93171C8.89236 3.75597 8.60743 3.75597 8.4317 3.93171L5.1817 7.1817C5.00596 7.35744 5.00596 7.64236 5.1817 7.8181L8.4317 11.0681C8.60743 11.2438 8.89236 11.2438 9.06809 11.0681Z",
    fill: "black"
  }));
};
var _default = exports["default"] = PinLeft;