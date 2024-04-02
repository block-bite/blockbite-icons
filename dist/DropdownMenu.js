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
var DropdownMenu = function DropdownMenu(props) {
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
    d: "M7.09999 3.49998C7.09999 3.72089 7.27907 3.89998 7.49999 3.89998H14.5C14.7209 3.89998 14.9 3.72089 14.9 3.49998C14.9 3.27906 14.7209 3.09998 14.5 3.09998H7.49999C7.27907 3.09998 7.09999 3.27906 7.09999 3.49998ZM7.09998 5.5C7.09998 5.72091 7.27907 5.9 7.49998 5.9H14.5C14.7209 5.9 14.9 5.72091 14.9 5.5C14.9 5.27908 14.7209 5.1 14.5 5.1H7.49998C7.27907 5.1 7.09998 5.27908 7.09998 5.5ZM7.5 7.1H14.5C14.7209 7.1 14.9 7.27908 14.9 7.5C14.9 7.72091 14.7209 7.9 14.5 7.9H7.5C7.27909 7.9 7.1 7.72091 7.1 7.5C7.1 7.27908 7.27909 7.1 7.5 7.1ZM7.09998 9.5C7.09998 9.72091 7.27907 9.9 7.49998 9.9H14.5C14.7209 9.9 14.9 9.72091 14.9 9.5C14.9 9.27908 14.7209 9.1 14.5 9.1H7.49998C7.27907 9.1 7.09998 9.27908 7.09998 9.5ZM7.49998 11.1H14.5C14.7209 11.1 14.9 11.2791 14.9 11.5C14.9 11.7209 14.7209 11.9 14.5 11.9H7.49998C7.27907 11.9 7.09998 11.7209 7.09998 11.5C7.09998 11.2791 7.27907 11.1 7.49998 11.1ZM5 6.00003H0L2.5 9.25003L5 6.00003Z",
    fill: "black"
  }));
};
var _default = exports["default"] = DropdownMenu;