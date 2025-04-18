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
var BiconRowsreversed = function BiconRowsreversed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M21 14C22.1046 14 23 14.8954 23 16V22C23 23.1046 22.1046 24 21 24L5 24C3.89543 24 3 23.1046 3 22L3 16C3 14.8954 3.89543 14 5 14L21 14Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 16V21H12.5788V17.0034H12.5394L11 17.7212V16.7837L12.6641 16H14Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 2C22.1046 2 23 2.89543 23 4V10C23 11.1046 22.1046 12 21 12L5 12C3.89543 12 3 11.1046 3 10L3 4C3 2.89543 3.89543 2 5 2L21 2Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.0541 10V9.09827L13.0243 7.1474C13.1919 6.97399 13.3324 6.81792 13.4459 6.67919C13.5613 6.54046 13.6486 6.40462 13.7081 6.27168C13.7676 6.1368 13.7973 5.99133 13.7973 5.83526C13.7973 5.66185 13.7604 5.51252 13.6865 5.38728C13.6126 5.26012 13.5117 5.16281 13.3838 5.09538C13.2559 5.02601 13.1108 4.99133 12.9486 4.99133C12.7793 4.99133 12.6315 5.02794 12.5054 5.10116C12.3793 5.17437 12.282 5.27938 12.2135 5.41619C12.145 5.55299 12.1108 5.7158 12.1108 5.90462H11C11 5.51734 11.082 5.18112 11.2459 4.89595C11.4099 4.61079 11.6396 4.39017 11.9351 4.2341C12.2306 4.07803 12.5712 4 12.9568 4C13.3532 4 13.6982 4.07514 13.9919 4.22543C14.2874 4.3738 14.5171 4.57996 14.6811 4.84393C14.845 5.1079 14.927 5.4104 14.927 5.75145C14.927 5.97495 14.8856 6.19557 14.8027 6.4133C14.7216 6.63102 14.5766 6.87283 14.3676 7.13873C14.1586 7.4027 13.864 7.71965 13.4838 8.0896L12.6757 8.93642V8.97688H15V10H11.0541Z",
    fill: "white"
  }));
};
var _default = exports["default"] = BiconRowsreversed;