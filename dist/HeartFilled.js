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
var HeartFilled = function HeartFilled(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4.89346 1.35254C6.25769 1.35254 6.86058 1.92342 7.50002 2.93551C8.13946 1.92342 8.74235 1.35254 10.1066 1.35254C12.064 1.35254 13.6476 2.94504 13.6476 4.90538C13.6476 6.74047 12.6013 8.50514 11.4008 9.96933C10.2636 11.3562 8.92194 12.5509 8.00601 13.3665C7.94645 13.4195 7.88869 13.4709 7.83291 13.5207C7.64324 13.6899 7.3568 13.6899 7.16713 13.5207C7.11135 13.4709 7.05359 13.4195 6.99403 13.3665C6.0781 12.5509 4.73641 11.3562 3.59926 9.96933C2.39872 8.50514 1.35248 6.74047 1.35248 4.90538C1.35248 2.94504 2.936 1.35254 4.89346 1.35254Z",
    fill: "black"
  }));
};
var _default = exports["default"] = HeartFilled;