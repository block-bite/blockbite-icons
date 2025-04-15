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
var DragHandleVertical = function DragHandleVertical(props) {
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
    d: "M4.49998 12.9C4.72089 12.9 4.89998 12.7209 4.89998 12.5L4.89998 2.49998C4.89998 2.27906 4.72089 2.09998 4.49998 2.09998C4.27906 2.09998 4.09998 2.27906 4.09998 2.49998L4.09998 12.5C4.09998 12.7209 4.27906 12.9 4.49998 12.9ZM6.49998 12.9C6.72089 12.9 6.89998 12.7209 6.89998 12.5L6.89998 2.49998C6.89998 2.27906 6.72089 2.09998 6.49998 2.09998C6.27906 2.09998 6.09998 2.27906 6.09998 2.49998L6.09998 12.5C6.09998 12.7209 6.27906 12.9 6.49998 12.9ZM8.09998 12.5L8.09998 2.49998C8.09998 2.27906 8.27906 2.09998 8.49998 2.09998C8.72089 2.09998 8.89998 2.27906 8.89998 2.49998L8.89998 12.5C8.89998 12.7209 8.72089 12.9 8.49998 12.9C8.27906 12.9 8.09998 12.7209 8.09998 12.5ZM10.5 12.9C10.7209 12.9 10.9 12.7209 10.9 12.5L10.9 2.49998C10.9 2.27906 10.7209 2.09998 10.5 2.09998C10.2791 2.09998 10.1 2.27906 10.1 2.49998L10.1 12.5C10.1 12.7209 10.2791 12.9 10.5 12.9Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = DragHandleVertical;