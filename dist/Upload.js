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
var Upload = function Upload(props) {
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
    d: "M7.18185 1.18185L4.18185 4.18185C4.00611 4.35759 4.00611 4.64251 4.18185 4.81825C4.35759 4.99398 4.64251 4.99398 4.81825 4.81825L7.05005 2.58644V9.49993C7.05005 9.74846 7.25152 9.94993 7.50005 9.94993C7.74858 9.94993 7.95005 9.74846 7.95005 9.49993V2.58645L10.1819 4.81825C10.3576 4.99398 10.6425 4.99398 10.8182 4.81825C10.994 4.64251 10.994 4.35759 10.8182 4.18185L7.81825 1.18185C7.64251 1.00611 7.35759 1.00611 7.18185 1.18185ZM3 10.4999V11.9999C3 12.5538 3.44565 12.9999 3.99635 12.9999H11.0012C11.5529 12.9999 12 12.5527 12 11.9999V10.4999C12 10.2238 12.2239 9.99994 12.5 9.99994C12.7761 9.99994 13 10.2238 13 10.4999V11.9999C13 13.104 12.1062 13.9999 11.0012 13.9999H3.99635C2.89019 13.9999 2 13.1029 2 11.9999V10.4999C2 10.2238 2.22386 9.99994 2.5 9.99994C2.77614 9.99994 3 10.2238 3 10.4999Z",
    fill: "black"
  }));
};
var _default = exports["default"] = Upload;