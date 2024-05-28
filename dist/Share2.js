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
var Share2 = function Share2(props) {
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
    d: "M3 5.50005V11.5C3 11.7762 3.22386 12 3.5 12H11.5C11.7761 12 12 11.7762 12 11.5V5.50005C12 5.22391 11.7761 5.00005 11.5 5.00005H10.25C9.97386 5.00005 9.75 4.77619 9.75 4.50005C9.75 4.22391 9.97386 4.00005 10.25 4.00005H11.5C12.3284 4.00005 13 4.67162 13 5.50005V11.5C13 12.3285 12.3284 13 11.5 13H3.5C2.67157 13 2 12.3285 2 11.5L2 5.50005C2 4.67162 2.67157 4.00005 3.5 4.00005H4.75C5.02614 4.00005 5.25 4.22391 5.25 4.50005C5.25 4.77619 5.02614 5.00005 4.75 5.00005H3.5C3.22386 5.00005 3 5.22391 3 5.50005ZM5.5682 3.06819C5.39246 3.24392 5.10754 3.24392 4.9318 3.06819C4.75607 2.89245 4.75607 2.60753 4.9318 2.43179L7.1818 0.18179C7.26619 0.0973988 7.38065 0.0499878 7.5 0.0499878C7.61935 0.0499878 7.73381 0.0973987 7.8182 0.18179L10.0682 2.43179C10.2439 2.60753 10.2439 2.89245 10.0682 3.06819C9.89246 3.24392 9.60754 3.24392 9.4318 3.06819L8 1.63638L8 8.49999C8 8.77613 7.77614 8.99999 7.5 8.99999C7.22386 8.99999 7 8.77613 7 8.49999L7 1.63638L5.5682 3.06819Z",
    fill: "black"
  }));
};
var _default = exports["default"] = Share2;