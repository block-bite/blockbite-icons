"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var RulerHorizontal = function RulerHorizontal(props) {
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
    d: "M0 4.5V10.5C0 10.7761 0.223858 11 0.5 11H14.5C14.7761 11 15 10.7761 15 10.5V4.5C15 4.22386 14.7761 4 14.5 4H0.5C0.223858 4 0 4.22386 0 4.5ZM1 5H2.075V7.5C2.075 7.73472 2.26528 7.925 2.5 7.925C2.73472 7.925 2.925 7.73472 2.925 7.5V5H4.075V6.5C4.075 6.73472 4.26528 6.925 4.5 6.925C4.73472 6.925 4.925 6.73472 4.925 6.5V5H6.075V6.5C6.075 6.73472 6.26528 6.925 6.5 6.925C6.73472 6.925 6.925 6.73472 6.925 6.5V5H8.075V7.5C8.075 7.73472 8.26528 7.925 8.5 7.925C8.73472 7.925 8.925 7.73472 8.925 7.5V5H10.075V6.5C10.075 6.73472 10.2653 6.925 10.5 6.925C10.7347 6.925 10.925 6.73472 10.925 6.5V5H12.075V6.5C12.075 6.73472 12.2653 6.925 12.5 6.925C12.7347 6.925 12.925 6.73472 12.925 6.5V5H14V10H1V5Z",
    fill: "black"
  }));
};
var _default = exports["default"] = RulerHorizontal;