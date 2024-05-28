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
var PinBottom = function PinBottom(props) {
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
    d: "M13.9499 13.5C13.9499 13.2514 13.7485 13.05 13.4999 13.05L1.49993 13.05C1.2514 13.05 1.04993 13.2514 1.04993 13.5C1.04993 13.7485 1.2514 13.95 1.49993 13.95L13.4999 13.95C13.7485 13.95 13.9499 13.7485 13.9499 13.5ZM11.0681 6.93191C10.8924 6.75618 10.6074 6.75618 10.4317 6.93191L7.9499 9.41371L7.9499 1.49999C7.9499 1.25146 7.74843 1.04999 7.4999 1.04999C7.25137 1.04999 7.0499 1.25146 7.0499 1.49999V9.41371L4.5681 6.93191C4.39236 6.75618 4.10744 6.75618 3.9317 6.93191C3.75597 7.10765 3.75597 7.39257 3.9317 7.56831L7.1817 10.8183C7.35744 10.994 7.64236 10.994 7.8181 10.8183L11.0681 7.56831C11.2438 7.39257 11.2438 7.10765 11.0681 6.93191Z",
    fill: "black"
  }));
};
var _default = exports["default"] = PinBottom;