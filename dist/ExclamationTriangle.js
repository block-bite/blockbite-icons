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
var ExclamationTriangle = function ExclamationTriangle(props) {
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
    d: "M7.5 3.7866C7.88217 3.7866 8.18778 4.1042 8.1731 4.48608L8.01921 8.48698C8.00848 8.76597 7.7792 8.98661 7.5 8.98661C7.2208 8.98661 6.99151 8.76597 6.98078 8.48698L6.8269 4.48608C6.81221 4.1042 7.11783 3.7866 7.5 3.7866ZM7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72596 7.49989 9.72596C7.9141 9.72596 8.24989 10.0618 8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226ZM6.55509 0.608736L0.161178 11.3368C-0.275824 12.07 0.252503 12.9999 1.10608 12.9999H13.8939C14.7475 12.9999 15.2758 12.07 14.8388 11.3368L8.4449 0.608735C8.0183 -0.107046 6.9817 -0.107046 6.55509 0.608736ZM7.5859 1.1207L13.9798 11.8488C14.0196 11.9154 13.9715 11.9999 13.8939 11.9999H1.10608C1.02849 11.9999 0.980454 11.9154 1.02018 11.8488L7.4141 1.1207C7.45288 1.05563 7.54712 1.05563 7.5859 1.1207Z",
    fill: "black"
  }));
};
var _default = exports["default"] = ExclamationTriangle;