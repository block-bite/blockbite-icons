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
var ShadowNone = function ShadowNone(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.05,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.78308 13.3762C8.73916 9.95302 8.73916 5.04737 6.78308 1.62423L7.2172 1.37616C9.26112 4.95301 9.26112 10.0474 7.2172 13.6242L6.78308 13.3762Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.1,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.28217 13.4776C9.23942 9.99538 9.23942 5.0049 7.28217 1.52263L7.71804 1.27765C9.7608 4.91205 9.7608 10.0882 7.71804 13.7226L7.28217 13.4776Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.15,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.82111 13.5066C9.72515 9.99538 9.72649 5.01426 7.82505 1.50099L8.26478 1.263C10.2466 4.92481 10.2452 10.0851 8.26065 13.745L7.82111 13.5066Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.2,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.41296 13.4291C10.1953 9.92854 10.1958 5.07549 8.41447 1.57414L8.86011 1.34741C10.714 4.99125 10.7134 10.0129 8.85853 13.656L8.41296 13.4291Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.02454 13.2957C10.6568 9.83802 10.6587 5.17727 9.03018 1.71668L9.48258 1.50378C11.1746 5.09931 11.1727 9.91641 9.4767 13.5092L9.02454 13.2957Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.3,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.66821 13.0657C11.1098 9.6959 11.1108 5.31228 9.671 1.94113L10.1308 1.74475C11.6242 5.24139 11.6232 9.76701 10.1279 13.2624L9.66821 13.0657Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.35,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.3311 12.7457C11.5552 9.52085 11.5565 5.49115 10.3348 2.26456L10.8025 2.08752C12.0673 5.42827 12.066 9.58406 10.7986 12.9232L10.3311 12.7457Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.4,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.0156 12.2987C11.9939 9.29756 11.9949 5.71308 11.0185 2.71079L11.494 2.55615C12.5031 5.65902 12.5021 9.3519 11.491 12.4536L11.0156 12.2987Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.45,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.7215 11.6681C12.4255 9.01318 12.4263 5.99706 11.7238 3.34131L12.2072 3.21344C12.9319 5.95307 12.9311 9.05743 12.2048 11.7963L11.7215 11.6681Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.4433 10.7521C12.8525 8.63774 12.8524 6.36101 12.443 4.24672L12.9339 4.15167C13.3554 6.32873 13.3555 8.66997 12.9342 10.8471L12.4433 10.7521Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.50003 0.877197C3.84234 0.877197 0.877197 3.84234 0.877197 7.50003C0.877197 9.14895 1.47981 10.6572 2.47682 11.8164L1.64659 12.6466C1.45133 12.8419 1.45133 13.1585 1.64659 13.3537C1.84185 13.549 2.15844 13.549 2.3537 13.3537L3.18395 12.5235C4.34314 13.5204 5.85122 14.1229 7.50003 14.1229C11.1577 14.1229 14.1228 11.1577 14.1228 7.50003C14.1228 5.85122 13.5203 4.34313 12.5234 3.18395L13.3537 2.3537C13.5489 2.15844 13.5489 1.84185 13.3537 1.64659C13.1584 1.45133 12.8418 1.45133 12.6466 1.64659L11.8163 2.47682C10.6571 1.47981 9.14895 0.877197 7.50003 0.877197ZM11.1424 3.1508C10.1569 2.32464 8.88656 1.82719 7.50003 1.82719C4.36701 1.82719 1.8272 4.36701 1.8272 7.50003C1.8272 8.88656 2.32464 10.157 3.15081 11.1424L11.1424 3.1508ZM3.85793 11.8495C4.84334 12.6755 6.1136 13.1729 7.50003 13.1729C10.633 13.1729 13.1728 10.6331 13.1728 7.50003C13.1728 6.1136 12.6755 4.84334 11.8494 3.85793L3.85793 11.8495Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = ShadowNone;