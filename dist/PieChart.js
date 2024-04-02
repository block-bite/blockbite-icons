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
var PieChart = function PieChart(props) {
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
    d: "M7.00001 3.12807C7.16411 3.10951 7.33094 3.09998 7.50001 3.09998C9.93006 3.09998 11.9 5.07011 11.9 7.5004C11.9 7.66932 11.8905 7.83601 11.872 7.99998H7.00001V3.12807ZM0.850006 7.5004C0.850006 11.1733 3.82728 14.1508 7.50001 14.1508C11.1727 14.1508 14.15 11.1733 14.15 7.5004C14.15 3.8275 11.1727 0.849976 7.50001 0.849976C3.82728 0.849976 0.850006 3.8275 0.850006 7.5004ZM7.50001 1.84998C10.6204 1.84998 13.15 4.37972 13.15 7.5004C13.15 10.6211 10.6204 13.1508 7.50001 13.1508C4.37963 13.1508 1.85001 10.6211 1.85001 7.5004C1.85001 4.37972 4.37963 1.84998 7.50001 1.84998Z",
    fill: "black"
  }));
};
var _default = exports["default"] = PieChart;