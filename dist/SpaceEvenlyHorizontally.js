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
var SpaceEvenlyHorizontally = function SpaceEvenlyHorizontally(props) {
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
    d: "M13.9999 1.5V13.5C13.9999 13.7761 14.2237 14 14.4999 14C14.776 14 14.9999 13.7761 14.9999 13.5L14.9999 1.5C14.9999 1.22386 14.776 1 14.4999 1C14.2237 1 13.9999 1.22386 13.9999 1.5ZM-0.00012207 1.5L-0.000121641 13.5C-0.000121653 13.7761 0.223735 14 0.499878 14C0.77602 14 0.999878 13.7761 0.999878 13.5L0.999878 1.5C0.999878 1.22386 0.77602 1 0.499878 1C0.223736 1 -0.000122058 1.22386 -0.00012207 1.5ZM2.99988 6L5.99988 6C6.55216 6 6.99988 6.44771 6.99988 7V8C6.99988 8.55228 6.55216 9 5.99988 9L2.99988 9C2.44759 9 1.99988 8.55228 1.99988 8V7C1.99988 6.44771 2.44759 6 2.99988 6ZM7.99988 7V8C7.99988 8.55228 8.44759 9 8.99988 9H11.9999C12.5522 9 12.9999 8.55228 12.9999 8V7C12.9999 6.44771 12.5522 6 11.9999 6H8.99988C8.44759 6 7.99988 6.44771 7.99988 7Z",
    fill: "black"
  }));
};
var _default = exports["default"] = SpaceEvenlyHorizontally;