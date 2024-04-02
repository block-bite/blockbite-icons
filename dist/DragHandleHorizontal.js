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
var DragHandleHorizontal = function DragHandleHorizontal(props) {
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
    d: "M2.09998 4.49998C2.09998 4.72089 2.27906 4.89998 2.49998 4.89998H12.5C12.7209 4.89998 12.9 4.72089 12.9 4.49998C12.9 4.27906 12.7209 4.09998 12.5 4.09998H2.49998C2.27906 4.09998 2.09998 4.27906 2.09998 4.49998ZM2.09998 6.49998C2.09998 6.72089 2.27906 6.89998 2.49998 6.89998H12.5C12.7209 6.89998 12.9 6.72089 12.9 6.49998C12.9 6.27906 12.7209 6.09998 12.5 6.09998H2.49998C2.27906 6.09998 2.09998 6.27906 2.09998 6.49998ZM2.49998 8.09998H12.5C12.7209 8.09998 12.9 8.27906 12.9 8.49998C12.9 8.72089 12.7209 8.89998 12.5 8.89998H2.49998C2.27906 8.89998 2.09998 8.72089 2.09998 8.49998C2.09998 8.27906 2.27906 8.09998 2.49998 8.09998ZM2.09998 10.5C2.09998 10.7209 2.27906 10.9 2.49998 10.9H12.5C12.7209 10.9 12.9 10.7209 12.9 10.5C12.9 10.2791 12.7209 10.1 12.5 10.1H2.49998C2.27906 10.1 2.09998 10.2791 2.09998 10.5Z",
    fill: "black"
  }));
};
var _default = exports["default"] = DragHandleHorizontal;