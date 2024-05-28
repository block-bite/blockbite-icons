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
var LockClosed = function LockClosed(props) {
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
    d: "M4 4.63598C4 3.58145 4.29339 2.65751 4.91049 1.99303C5.53252 1.32326 6.42675 0.978271 7.5014 0.978271C8.57583 0.978271 9.46952 1.3223 10.091 1.99159C10.7076 2.65554 11 3.57893 11 4.63322V5.99996H12C12.5523 5.99996 13 6.44768 13 6.99996V13C13 13.5522 12.5523 14 12 14H3C2.44772 14 2 13.5522 2 13V6.99996C2 6.44768 2.44772 5.99996 3 5.99996H4V4.63598ZM5.64323 2.67354C6.03934 2.24702 6.64582 1.97827 7.5014 1.97827C8.35745 1.97827 8.96306 2.24649 9.35823 2.67205C9.75838 3.10296 10 3.75705 10 4.63322V5.99996H5V4.63598C5 3.76028 5.24219 3.10537 5.64323 2.67354ZM12 6.99996V13H3V6.99996H12Z",
    fill: "black"
  }));
};
var _default = exports["default"] = LockClosed;