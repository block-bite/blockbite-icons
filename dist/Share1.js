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
var Share1 = function Share1(props) {
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
    d: "M3.5 10C2.11929 10 1 8.88071 1 7.5C1 6.11928 2.11929 5 3.5 5C4.46048 5 5.29445 5.54164 5.71313 6.33613L9.10424 4.21668C9.03643 3.98965 9 3.74908 9 3.5C9 2.11929 10.1193 1 11.5 1C12.8807 1 14 2.11929 14 3.5C14 4.88071 12.8807 6 11.5 6C10.6915 6 9.97264 5.61621 9.51566 5.02087L5.9853 7.22735C5.99502 7.3169 6 7.40786 6 7.5C6 7.59213 5.99502 7.68309 5.9853 7.77264L9.51567 9.97912C9.97265 9.38379 10.6915 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0103 9.10425 10.7833L5.71313 8.66386C5.29445 9.45835 4.46048 10 3.5 10ZM3.5 9C2.67157 9 2 8.32842 2 7.5C2 6.67157 2.67157 6 3.5 6C4.32843 6 5 6.67157 5 7.5C5 8.32842 4.32843 9 3.5 9ZM13 3.5C13 2.67157 12.3284 2 11.5 2C10.6716 2 10 2.67157 10 3.5C10 4.32843 10.6716 5 11.5 5C12.3284 5 13 4.32843 13 3.5ZM11.5 13C10.6716 13 10 12.3284 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5C13 12.3284 12.3284 13 11.5 13Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Share1;