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
var DevicesPortrait = function DevicesPortrait(props) {
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
    d: "M1 3.26923V11.7308C1 12.4317 1.52233 13 2.16667 13H6.83333C7.47767 13 8 12.4317 8 11.7308V3.26923C8 2.56825 7.47766 2 6.83333 2H2.16667C1.52233 2 1 2.56825 1 3.26923ZM2.16667 2.84608H6.83333C7.04811 2.84608 7.22222 3.0355 7.22222 3.26916V11.7307C7.22222 11.9644 7.04811 12.1538 6.83333 12.1538H2.16667C1.95189 12.1538 1.77778 11.9644 1.77778 11.7307V3.26916C1.77778 3.0355 1.95189 2.84608 2.16667 2.84608Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 9.35,
    y: 5.35,
    width: 4.3,
    height: 7.3,
    rx: 0.65,
    stroke: "currentColor",
    strokeWidth: 0.7
  }));
};
var _default = exports["default"] = DevicesPortrait;