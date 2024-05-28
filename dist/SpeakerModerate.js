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
var SpeakerModerate = function SpeakerModerate(props) {
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
    d: "M7.72361 1.05279C7.55421 0.968093 7.35151 0.986371 7.2 1.1L3.33333 4H1.5C0.671573 4 0 4.67158 0 5.5V9.5C0 10.3284 0.671573 11 1.5 11H3.33333L7.2 13.9C7.35151 14.0136 7.55421 14.0319 7.72361 13.9472C7.893 13.8625 8 13.6894 8 13.5V1.5C8 1.31062 7.893 1.13749 7.72361 1.05279ZM7 2.5V12.5L3.8 10.1C3.71345 10.0351 3.60819 10 3.5 10H1.5C1.22386 10 1 9.77614 1 9.5V5.5C1 5.22386 1.22386 5 1.5 5H3.5C3.60819 5 3.71345 4.96491 3.8 4.9L7 2.5ZM10.2784 3.84804C10.0944 3.97041 10.0445 4.21871 10.1669 4.40264C11.4111 6.27268 11.4111 8.72728 10.1669 10.5973C10.0445 10.7813 10.0944 11.0296 10.2784 11.1519C10.4623 11.2743 10.7106 11.2244 10.833 11.0405C12.2558 8.90199 12.2558 6.09798 10.833 3.95949C10.7106 3.77557 10.4623 3.72567 10.2784 3.84804Z",
    fill: "black"
  }));
};
var _default = exports["default"] = SpeakerModerate;