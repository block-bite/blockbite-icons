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
var Update = function Update(props) {
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
    d: "M6.58893 12.8439C6.87255 12.893 7.06266 13.1628 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29679C0.86084 5.76011 1.55996 4.55247 2.37639 3.63379C2.96124 2.9757 3.63034 2.44137 4.16846 2.03204L2.53205 2.03204C2.25591 2.03204 2.03205 1.80819 2.03205 1.53204C2.03205 1.2559 2.25591 1.03204 2.53205 1.03204L5.53205 1.03204C5.80819 1.03204 6.03205 1.2559 6.03205 1.53204L6.03205 4.53204C6.03205 4.80819 5.80819 5.03204 5.53205 5.03204C5.25591 5.03204 5.03205 4.80819 5.03205 4.53204V2.68648L5.03054 2.68762C4.45907 3.11862 3.76059 3.64541 3.15554 4.32623C2.44102 5.13024 1.90321 6.10156 1.90321 7.29679C1.90321 10.341 4.11041 12.4148 6.58893 12.8439ZM8.40384 2.17031C8.12093 2.1172 7.93465 1.84481 7.98776 1.56191C8.04087 1.27901 8.31326 1.09272 8.59616 1.14583C11.4704 1.68543 14.0532 4.12608 14.0532 7.70323C14.0532 9.23991 13.3541 10.4476 12.5377 11.3662C11.9528 12.0243 11.2837 12.5587 10.7456 12.968H12.3821C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968H9.38205C9.10591 13.968 8.88205 13.7441 8.88205 13.468V10.468C8.88205 10.1918 9.10591 9.96798 9.38205 9.96798C9.65819 9.96798 9.88205 10.1918 9.88205 10.468V12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86979 13.0109 8.89846 13.0109 7.70323C13.0109 4.69117 10.8505 2.62962 8.40384 2.17031Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Update;