"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var BorderHorizontal = function BorderHorizontal(props) {
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
    d: "M1.625 13.875L0.124997 13.875L0.125 0.875L1.625 0.875L1.625 13.875Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.875 13.875L13.375 13.875L13.375 0.875L14.875 0.875L14.875 13.875Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.875 7.375C9.875 7.65114 9.65114 7.875 9.375 7.875C9.09886 7.875 8.875 7.65114 8.875 7.375C8.875 7.09886 9.09886 6.875 9.375 6.875C9.65114 6.875 9.875 7.09886 9.875 7.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.875 13.375C9.875 13.6511 9.65114 13.875 9.375 13.875C9.09886 13.875 8.875 13.6511 8.875 13.375C8.875 13.0989 9.09886 12.875 9.375 12.875C9.65114 12.875 9.875 13.0989 9.875 13.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.875 7.375C11.875 7.65114 11.6511 7.875 11.375 7.875C11.0989 7.875 10.875 7.65114 10.875 7.375C10.875 7.09886 11.0989 6.875 11.375 6.875C11.6511 6.875 11.875 7.09886 11.875 7.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.875 13.375C11.875 13.6511 11.6511 13.875 11.375 13.875C11.0989 13.875 10.875 13.6511 10.875 13.375C10.875 13.0989 11.0989 12.875 11.375 12.875C11.6511 12.875 11.875 13.0989 11.875 13.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.875 7.375C7.875 7.65114 7.65114 7.875 7.375 7.875C7.09886 7.875 6.875 7.65114 6.875 7.375C6.875 7.09886 7.09886 6.875 7.375 6.875C7.65114 6.875 7.875 7.09886 7.875 7.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.875 13.375C7.875 13.6511 7.65114 13.875 7.375 13.875C7.09886 13.875 6.875 13.6511 6.875 13.375C6.875 13.0989 7.09886 12.875 7.375 12.875C7.65114 12.875 7.875 13.0989 7.875 13.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.875 5.375C7.875 5.65114 7.65114 5.875 7.375 5.875C7.09886 5.875 6.875 5.65114 6.875 5.375C6.875 5.09886 7.09886 4.875 7.375 4.875C7.65114 4.875 7.875 5.09886 7.875 5.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.875 3.375C7.875 3.65114 7.65114 3.875 7.375 3.875C7.09886 3.875 6.875 3.65114 6.875 3.375C6.875 3.09886 7.09886 2.875 7.375 2.875C7.65114 2.875 7.875 3.09886 7.875 3.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.875 9.375C7.875 9.65114 7.65114 9.875 7.375 9.875C7.09886 9.875 6.875 9.65114 6.875 9.375C6.875 9.09886 7.09886 8.875 7.375 8.875C7.65114 8.875 7.875 9.09886 7.875 9.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.875 11.375C7.875 11.6511 7.65114 11.875 7.375 11.875C7.09886 11.875 6.875 11.6511 6.875 11.375C6.875 11.0989 7.09886 10.875 7.375 10.875C7.65114 10.875 7.875 11.0989 7.875 11.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.875 7.375C5.875 7.65114 5.65114 7.875 5.375 7.875C5.09886 7.875 4.875 7.65114 4.875 7.375C4.875 7.09886 5.09886 6.875 5.375 6.875C5.65114 6.875 5.875 7.09886 5.875 7.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.875 13.375C5.875 13.6511 5.65114 13.875 5.375 13.875C5.09886 13.875 4.875 13.6511 4.875 13.375C4.875 13.0989 5.09886 12.875 5.375 12.875C5.65114 12.875 5.875 13.0989 5.875 13.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.875 7.375C3.875 7.65114 3.65114 7.875 3.375 7.875C3.09886 7.875 2.875 7.65114 2.875 7.375C2.875 7.09886 3.09886 6.875 3.375 6.875C3.65114 6.875 3.875 7.09886 3.875 7.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.875 13.375C3.875 13.6511 3.65114 13.875 3.375 13.875C3.09886 13.875 2.875 13.6511 2.875 13.375C2.875 13.0989 3.09886 12.875 3.375 12.875C3.65114 12.875 3.875 13.0989 3.875 13.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.875 1.375C9.875 1.65114 9.65114 1.875 9.375 1.875C9.09886 1.875 8.875 1.65114 8.875 1.375C8.875 1.09886 9.09886 0.875 9.375 0.875C9.65114 0.875 9.875 1.09886 9.875 1.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.875 1.375C11.875 1.65114 11.6511 1.875 11.375 1.875C11.0989 1.875 10.875 1.65114 10.875 1.375C10.875 1.09886 11.0989 0.875 11.375 0.875C11.6511 0.875 11.875 1.09886 11.875 1.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.875 1.375C7.875 1.65114 7.65114 1.875 7.375 1.875C7.09886 1.875 6.875 1.65114 6.875 1.375C6.875 1.09886 7.09886 0.875 7.375 0.875C7.65114 0.875 7.875 1.09886 7.875 1.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.875 1.375C5.875 1.65114 5.65114 1.875 5.375 1.875C5.09886 1.875 4.875 1.65114 4.875 1.375C4.875 1.09886 5.09886 0.875 5.375 0.875C5.65114 0.875 5.875 1.09886 5.875 1.375Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.875 1.375C3.875 1.65114 3.65114 1.875 3.375 1.875C3.09886 1.875 2.875 1.65114 2.875 1.375C2.875 1.09886 3.09886 0.875 3.375 0.875C3.65114 0.875 3.875 1.09886 3.875 1.375Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = BorderHorizontal;