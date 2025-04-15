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
var ModulzLogo = function ModulzLogo(props) {
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
    d: "M4.37036 5.33333V1L7.25925 3.16667L4.37036 5.33333ZM3.88889 6.05555L1 3.88889V8.22222L3.88889 6.05555ZM3.88889 11.8333L1 9.66666V14L3.88889 11.8333ZM10.6296 6.05555L7.74072 3.88889V8.22222L10.6296 6.05555ZM11.1111 5.33333V1L14 3.16667L11.1111 5.33333ZM14 8.94444L11.1111 6.77777V11.1111L14 8.94444ZM1 8.94444L3.88889 6.77777V11.1111L1 8.94444ZM7.25925 8.22222V3.88889L4.37036 6.05555L7.25925 8.22222ZM1 3.16667L3.88889 1V5.33333L1 3.16667ZM10.6296 5.33333V1L7.74072 3.16667L10.6296 5.33333ZM11.1111 6.05555L14 3.88889V8.22222L11.1111 6.05555ZM14 14V9.66666L11.1111 11.8333L14 14Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = ModulzLogo;