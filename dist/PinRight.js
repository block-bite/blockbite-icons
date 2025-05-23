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
var PinRight = function PinRight(props) {
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
    d: "M12.4999 1.05005C12.2514 1.05005 12.0499 1.25152 12.0499 1.50005L12.0499 13.5C12.0499 13.7486 12.2514 13.95 12.4999 13.95C12.7484 13.95 12.9499 13.7486 12.9499 13.5V1.50005C12.9499 1.25152 12.7484 1.05005 12.4999 1.05005ZM5.93185 3.93188C5.75611 4.10761 5.75611 4.39254 5.93185 4.56827L8.41365 7.05007L0.499927 7.05007C0.251398 7.05007 0.0499268 7.25155 0.0499268 7.50007C0.0499267 7.7486 0.251399 7.95007 0.499927 7.95007H8.41365L5.93185 10.4319C5.75611 10.6076 5.75611 10.8925 5.93185 11.0683C6.10759 11.244 6.39251 11.244 6.56825 11.0683L9.81825 7.81827C9.99398 7.64254 9.99398 7.35761 9.81825 7.18188L6.56825 3.93188C6.39251 3.75614 6.10759 3.75614 5.93185 3.93188Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = PinRight;