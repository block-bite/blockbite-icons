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
var LightningBolt = function LightningBolt(props) {
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
    d: "M8.9932 0.582238L8.09023 6.00004H12.5C12.6894 6.00004 12.8625 6.10704 12.9472 6.27643C13.0319 6.44582 13.0136 6.64853 12.9 6.80004L6.9 14.8C6.76169 14.9845 6.51523 15.0504 6.3033 14.9597C6.09137 14.869 5.96891 14.6452 6.00681 14.4178L6.90977 9.00004H2.5C2.31062 9.00004 2.13749 8.89304 2.05279 8.72365C1.96809 8.55425 1.98637 8.35155 2.1 8.20004L8.1 0.200038C8.23831 0.0156256 8.48477 -0.0503303 8.6967 0.0403542C8.90863 0.131039 9.0311 0.354858 8.9932 0.582238ZM7.5 8.00004C7.64698 8.00004 7.78651 8.0647 7.88151 8.17685C7.97651 8.289 8.01736 8.43726 7.9932 8.58224L7.3303 12.5596L11.5 7.00004H7.5C7.35303 7.00004 7.21349 6.93537 7.11849 6.82323C7.02349 6.71108 6.98264 6.56282 7.00681 6.41784L7.66971 2.44043L3.5 8.00004H7.5Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = LightningBolt;