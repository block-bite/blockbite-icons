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
var Heart = function Heart(props) {
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
    d: "M4.89346 1.35254C6.0084 1.35254 6.73504 1.76056 7.20884 2.29536C7.32062 2.42153 7.41686 2.55388 7.50002 2.68551C7.58318 2.55388 7.67941 2.42153 7.79119 2.29536C8.265 1.76056 8.99164 1.35254 10.1066 1.35254C12.064 1.35254 13.6476 2.94504 13.6476 4.90538C13.6476 6.74047 12.6013 8.50514 11.4008 9.96933C10.2636 11.3562 8.92194 12.5509 8.00601 13.3665C7.94645 13.4195 7.88869 13.4709 7.83291 13.5207C7.64324 13.6899 7.3568 13.6899 7.16713 13.5207C7.11135 13.4709 7.05359 13.4195 6.99403 13.3665C6.0781 12.5509 4.73641 11.3562 3.59926 9.96933C2.39872 8.50514 1.35248 6.74047 1.35248 4.90538C1.35248 2.94504 2.936 1.35254 4.89346 1.35254ZM2.35248 4.90538C2.35248 6.3817 3.20954 7.91686 4.37255 9.33529C5.39396 10.581 6.59464 11.6703 7.50002 12.4779C8.4054 11.6703 9.60608 10.581 10.6275 9.33529C11.7905 7.91686 12.6476 6.3817 12.6476 4.90538C12.6476 3.49365 11.5081 2.35254 10.1066 2.35254C9.27059 2.35254 8.81894 2.64329 8.5397 2.95849C8.27877 3.25301 8.14623 3.58572 8.02501 3.88999C8.00391 3.94296 7.98315 3.99507 7.96211 4.04597C7.88482 4.233 7.7024 4.355 7.50002 4.355C7.29765 4.355 7.11523 4.23301 7.03793 4.04598C7.01689 3.99507 6.99612 3.94295 6.97502 3.88996C6.8538 3.5857 6.72126 3.253 6.46034 2.95849C6.18109 2.64329 5.72945 2.35254 4.89346 2.35254C3.49195 2.35254 2.35248 3.49365 2.35248 4.90538Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Heart;