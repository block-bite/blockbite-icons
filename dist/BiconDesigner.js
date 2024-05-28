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
var BiconDesigner = function BiconDesigner(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 50,
    height: 50,
    fill: "black"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_283_187)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M26 9V26C35.3892 26 43 18.3892 43 9H26Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip1_283_187)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 26L9 43C18.3892 43 26 35.3892 26 26L9 26Z",
    fill: "white"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_283_187"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 17,
    height: 17,
    fill: "white",
    transform: "translate(26 9)"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "clip1_283_187"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 17,
    height: 17,
    fill: "white",
    transform: "translate(9 26)"
  }))));
};
var _default = exports["default"] = BiconDesigner;