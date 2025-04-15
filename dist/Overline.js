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
var Overline = function Overline(props) {
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
    d: "M3.09985 1.49998C3.09985 1.72089 3.27894 1.89998 3.49985 1.89998H11.4999C11.7208 1.89998 11.8999 1.72089 11.8999 1.49998C11.8999 1.27906 11.7208 1.09998 11.4999 1.09998H3.49985C3.27894 1.09998 3.09985 1.27906 3.09985 1.49998ZM4.49995 3.74998C4.22381 3.74998 3.99995 3.97384 3.99995 4.24998V9.54998C3.99995 11.483 5.56695 13.05 7.49995 13.05C9.43295 13.05 11 11.483 11 9.54998V4.24998C11 3.97384 10.7761 3.74998 10.5 3.74998C10.2238 3.74998 9.99995 3.97384 9.99995 4.24998V9.54998C9.99995 10.9307 8.88066 12.05 7.49995 12.05C6.11924 12.05 4.99995 10.9307 4.99995 9.54998V4.24998C4.99995 3.97384 4.77609 3.74998 4.49995 3.74998Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Overline;