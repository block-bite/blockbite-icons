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
var AlignBaseline = function AlignBaseline(props) {
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
    d: "M10.9703 2.08039L13.9703 10.4C14.064 10.6597 13.9293 10.9463 13.6696 11.0399C13.4098 11.1336 13.1233 10.999 13.0296 10.7392L12.0477 8.01603H8.95227L7.97031 10.7392C7.87664 10.999 7.59012 11.1336 7.33035 11.0399C7.07058 10.9463 6.93593 10.6597 7.0296 10.4L10.0296 2.08039C10.1011 1.88214 10.2892 1.75 10.5 1.75C10.7107 1.75 10.8988 1.88214 10.9703 2.08039ZM11.7411 7.16603H9.25877L10.5 3.72399L11.7411 7.16603ZM2.89949 2.49994L2.89949 9.53425L4.21664 8.2171C4.37285 8.06089 4.62612 8.06089 4.78233 8.2171C4.93854 8.37331 4.93854 8.62657 4.78233 8.78278L2.78233 10.7828C2.70732 10.8578 2.60557 10.8999 2.49949 10.8999C2.3934 10.8999 2.29166 10.8578 2.21664 10.7828L0.216645 8.78278C0.0604349 8.62657 0.0604349 8.37331 0.216645 8.2171C0.372854 8.06089 0.62612 8.06089 0.78233 8.2171L2.09949 9.53425L2.09949 2.49994C2.09949 2.27903 2.27857 2.09994 2.49949 2.09994C2.7204 2.09994 2.89949 2.27903 2.89949 2.49994ZM0.499969 13.1H14.5C14.7209 13.1 14.9 13.2791 14.9 13.5C14.9 13.7209 14.7209 13.9 14.5 13.9H0.499969C0.279056 13.9 0.0999695 13.7209 0.0999695 13.5C0.0999695 13.2791 0.279056 13.1 0.499969 13.1Z",
    fill: "black"
  }));
};
var _default = exports["default"] = AlignBaseline;