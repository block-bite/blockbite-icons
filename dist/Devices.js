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
var Devices = function Devices(props) {
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
    d: "M2.5 5.11801V2.97441C2.5 2.43626 2.96637 2 3.54167 2H13.9583C14.5336 2 15 2.43626 15 2.97441V8.8209C15 9.35906 14.5336 9.79532 13.9583 9.79532H10.7722L10.9751 10.8077C11.028 11.0715 10.8116 11.3154 10.5246 11.3154H6.97541C6.68843 11.3154 6.47204 11.0715 6.52493 10.8077L6.72784 9.79532H5.83333V12.0905C5.83333 12.5928 5.39806 12.9999 4.86111 12.9999H0.972222C0.435279 12.9999 0 12.5928 0 12.0905V6.02746C0 5.52519 0.435279 5.11801 0.972222 5.11801H2.5ZM5.83333 9.01579V6.02746C5.83333 5.52519 5.39806 5.11801 4.86111 5.11801H3.33333V2.97441C3.33333 2.86678 3.42661 2.77953 3.54167 2.77953H13.9583C14.0734 2.77953 14.1667 2.86678 14.1667 2.97441V8.8209C14.1667 8.92853 14.0734 9.01579 13.9583 9.01579H5.83333ZM7.32685 10.6138L7.49091 9.79532H10.0091L10.1732 10.6138H7.32685ZM1.16452 5.61842C0.888374 5.61842 0.664516 5.84227 0.664516 6.11842V11.8877C0.664516 12.1638 0.888373 12.3877 1.16452 12.3877H4.68731C4.96345 12.3877 5.18731 12.1638 5.18731 11.8877V6.11842C5.18731 5.84227 4.96345 5.61842 4.68731 5.61842H1.16452Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Devices;