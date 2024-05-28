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
var Text = function Text(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M3.94993 4.50001C3.94993 4.74854 3.74845 4.95001 3.49993 4.95001C3.2514 4.95001 3.04993 4.74854 3.04993 4.50001V2.50007C3.04993 2.45249 3.05731 2.40665 3.07099 2.3636C3.12878 2.18178 3.29897 2.05005 3.49993 2.05005H11.4999C11.6553 2.05005 11.7922 2.12875 11.8731 2.24845C11.9216 2.32027 11.9499 2.40685 11.9499 2.50005L11.9499 4.50001C11.9499 4.74854 11.7485 4.95001 11.4999 4.95001C11.2514 4.95001 11.0499 4.74854 11.0499 4.50001V2.95005H8.04993V12.0501H9.25428C9.50281 12.0501 9.70428 12.2515 9.70428 12.5001C9.70428 12.7486 9.50281 12.9501 9.25428 12.9501H5.75428C5.50575 12.9501 5.30428 12.7486 5.30428 12.5001C5.30428 12.2515 5.50575 12.0501 5.75428 12.0501H6.94993V2.95005H3.94993L3.94993 4.50001Z",
    fill: "black"
  }));
};
var _default = exports["default"] = Text;