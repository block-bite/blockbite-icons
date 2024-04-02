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
var TextAlignBottom = function TextAlignBottom(props) {
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
    d: "M3.49949 5.09998C3.27857 5.09998 3.09949 5.27906 3.09949 5.49998L3.09949 12.5343L1.78233 11.2171C1.62612 11.0609 1.37285 11.0609 1.21664 11.2171C1.06043 11.3733 1.06043 11.6266 1.21664 11.7828L3.21664 13.7828C3.29166 13.8578 3.3934 13.9 3.49949 13.9C3.60557 13.9 3.70732 13.8578 3.78233 13.7828L5.78233 11.7828C5.93854 11.6266 5.93854 11.3733 5.78233 11.2171C5.62612 11.0609 5.37285 11.0609 5.21664 11.2171L3.89949 12.5343L3.89949 5.49998C3.89949 5.27906 3.7204 5.09998 3.49949 5.09998ZM7.99998 12.5C7.99998 12.2238 8.22383 12 8.49998 12H14.5C14.7761 12 15 12.2238 15 12.5C15 12.7761 14.7761 13 14.5 13H8.49998C8.22383 13 7.99998 12.7761 7.99998 12.5ZM7.99998 9.49998C7.99998 9.22383 8.22383 8.99998 8.49998 8.99998H14.5C14.7761 8.99998 15 9.22383 15 9.49998C15 9.77612 14.7761 9.99998 14.5 9.99998H8.49998C8.22383 9.99998 7.99998 9.77612 7.99998 9.49998ZM8.49998 6.99998H14.5C14.7761 6.99998 15 6.77612 15 6.49998C15 6.22383 14.7761 5.99998 14.5 5.99998H8.49998C8.22383 5.99998 7.99998 6.22383 7.99998 6.49998C7.99998 6.77612 8.22383 6.99998 8.49998 6.99998Z",
    fill: "black"
  }));
};
var _default = exports["default"] = TextAlignBottom;