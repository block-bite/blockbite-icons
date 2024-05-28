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
var BiconMain = function BiconMain(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 50,
    height: 50,
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 12.5L35 17.5H30V12.5ZM27.5 20H35V36.25C35 36.5815 34.8683 36.8995 34.6339 37.1339C34.3995 37.3683 34.0815 37.5 33.75 37.5H16.25C15.9185 37.5 15.6005 37.3683 15.3661 37.1339C15.1317 36.8995 15 36.5815 15 36.25V13.75C15 13.4185 15.1317 13.1005 15.3661 12.8661C15.6005 12.6317 15.9185 12.5 16.25 12.5H27.5V20ZM18.75 17.5C18.75 17.8315 18.8817 18.1495 19.1161 18.3839C19.3505 18.6183 19.6685 18.75 20 18.75H23.75C24.0815 18.75 24.3995 18.6183 24.6339 18.3839C24.8683 18.1495 25 17.8315 25 17.5C25 17.1685 24.8683 16.8505 24.6339 16.6161C24.3995 16.3817 24.0815 16.25 23.75 16.25H20C19.6685 16.25 19.3505 16.3817 19.1161 16.6161C18.8817 16.8505 18.75 17.1685 18.75 17.5ZM31.25 32.5C31.25 32.1685 31.1183 31.8505 30.8839 31.6161C30.6495 31.3817 30.3315 31.25 30 31.25H20C19.6685 31.25 19.3505 31.3817 19.1161 31.6161C18.8817 31.8505 18.75 32.1685 18.75 32.5C18.75 32.8315 18.8817 33.1495 19.1161 33.3839C19.3505 33.6183 19.6685 33.75 20 33.75H30C30.3315 33.75 30.6495 33.6183 30.8839 33.3839C31.1183 33.1495 31.25 32.8315 31.25 32.5ZM20 26.25C19.6685 26.25 19.3505 26.3817 19.1161 26.6161C18.8817 26.8505 18.75 27.1685 18.75 27.5C18.75 27.8315 18.8817 28.1495 19.1161 28.3839C19.3505 28.6183 19.6685 28.75 20 28.75H30C30.3315 28.75 30.6495 28.6183 30.8839 28.3839C31.1183 28.1495 31.25 27.8315 31.25 27.5C31.25 27.1685 31.1183 26.8505 30.8839 26.6161C30.6495 26.3817 30.3315 26.25 30 26.25H20Z",
    fill: "#F5F5F5"
  }));
};
var _default = exports["default"] = BiconMain;