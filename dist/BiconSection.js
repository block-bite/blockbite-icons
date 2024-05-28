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
var BiconSection = function BiconSection(props) {
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
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 23.7778H14V15.2222C14 14.8981 14.1288 14.5872 14.358 14.358C14.5872 14.1288 14.8981 14 15.2222 14H34.7778C35.1019 14 35.4128 14.1288 35.642 14.358C35.8712 14.5872 36 14.8981 36 15.2222V23.7778ZM15.2222 36H23.7778V26.2222H14V34.7778C14 35.1019 14.1288 35.4128 14.358 35.642C14.5872 35.8712 14.8981 36 15.2222 36ZM34.7778 36C35.1019 36 35.4128 35.8712 35.642 35.642C35.8712 35.4128 36 35.1019 36 34.7778V26.2222H26.2222V36H34.7778Z",
    fill: "#F5F5F5"
  }));
};
var _default = exports["default"] = BiconSection;