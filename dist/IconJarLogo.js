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
var IconJarLogo = function IconJarLogo(props) {
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
    d: "M6.25 0.749995C6.25 0.997258 6.42446 1.12014 6.57687 1.22749C6.69507 1.31074 6.8 1.38465 6.8 1.5C6.8 1.7071 6.06224 1.74264 5.19789 1.78427C3.97553 1.84314 2.5 1.91421 2.5 2.5C2.5 2.77614 2.72386 3 3 3H12C12.2761 3 12.5 2.77614 12.5 2.5C12.5 1.91421 11.0245 1.84314 9.80211 1.78427C8.93776 1.74264 8.2 1.7071 8.2 1.5C8.2 1.38465 8.30493 1.31074 8.42313 1.22749C8.57554 1.12014 8.75 0.997258 8.75 0.749995C8.75047 0.281106 8.19527 0.0032959 7.5 0.0032959C6.80473 0.0032959 6.24953 0.281106 6.25 0.749995ZM2.02473 8.0556L2.83588 12.4772C3.00993 13.3562 3.7629 14 4.66061 14H10.3373C11.2354 14 11.9884 13.3562 12.1625 12.4772L12.9736 8.05607C13.089 7.32358 12.8284 6.53276 12.1331 6.09373C11.7283 5.83013 11.6412 5.33231 12.1331 5.12796C12.8284 4.86435 12.6948 4 12 4H2.99996C2.30469 4 2.19878 4.89328 2.89451 5.15689C3.38642 5.33231 3.29939 5.83013 2.89451 6.12266C2.25806 6.52471 1.90417 7.31118 2.02473 8.0556ZM7.90635 5L4.11093 5C4.20626 5.21312 4.2419 5.43889 4.22904 5.65521C4.19522 6.22412 3.84587 6.66899 3.48016 6.93322L3.45492 6.95146L3.42858 6.9681C3.13407 7.15414 2.95801 7.53989 3.01058 7.88749L3.81797 12.2886C3.90513 12.7154 4.26148 13 4.66061 13H10.3373C10.737 13 11.0932 12.7153 11.1804 12.2886L11.9874 7.8898C12.048 7.48247 11.8954 7.12631 11.5992 6.93927L11.5875 6.93184C11.1947 6.6761 10.8331 6.22785 10.7986 5.64798C10.7846 5.412 10.8264 5.19397 10.9112 5H9.05517C9.01987 5.14611 9.00006 5.31201 9.00006 5.5C9.00006 5.9745 9.21679 6.37127 9.44367 6.78662C9.69284 7.24278 9.95425 7.72136 9.95425 8.34993C9.95425 9.2698 9.49868 9.84205 8.62189 9.84205C8.13206 9.84205 7.57818 9.46097 7.57818 8.75781C7.57818 8.35279 7.71558 8.01646 7.86121 7.65998C8.0254 7.25806 8.20006 6.83051 8.20006 6.25C8.20006 5.81769 8.08572 5.37615 7.90635 5Z",
    fill: "black"
  }));
};
var _default = exports["default"] = IconJarLogo;