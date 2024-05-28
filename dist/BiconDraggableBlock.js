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
var BiconDraggableBlock = function BiconDraggableBlock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "50",
    height: "50",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M9 19H12V21.75H11.75V22H9V19ZM9 38V41H12V38.25H11.75V38H9ZM28 41H31V38H28.25V38.25H28V41ZM31 22V19H28V21.75H28.25V22H31ZM17.25 19V22H22.75V19H17.25ZM31 27.25H28V32.75H31V27.25ZM22.75 41V38H17.25V41H22.75ZM9 32.75H12V27.25H9V32.75Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "10",
    width: "22",
    height: "22",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "32.1232",
    y1: "17.9357",
    x2: "25.2482",
    y2: "24.8107",
    stroke: "black",
    "stroke-width": "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36.2188 13.7813L35.875 21.6875L28.3125 14.125L36.2188 13.7813Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.7812 28.2187L22.125 20.3125L29.6875 27.875L21.7812 28.2187Z",
    fill: "black"
  }));
};
var _default = exports["default"] = BiconDraggableBlock;