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
var EyeClosed = function EyeClosed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M14.924 6.76507C14.4849 7.46755 13.9632 8.10658 13.3702 8.66318L14.5712 9.8642C14.7665 10.0595 14.7665 10.376 14.5712 10.5713C14.376 10.7666 14.0594 10.7666 13.8641 10.5713L12.6011 9.30831C11.805 9.90297 10.9089 10.3622 9.93377 10.6512L10.383 12.3278C10.4545 12.5946 10.2962 12.8687 10.0294 12.9402C9.76269 13.0116 9.48852 12.8534 9.41706 12.5866L8.95918 10.8777C8.48744 10.9581 8.00036 11.0001 7.50001 11.0001C6.99964 11.0001 6.51256 10.9581 6.04081 10.8777L5.58297 12.5866C5.51151 12.8533 5.23735 13.0116 4.97061 12.9402C4.70388 12.8687 4.54558 12.5946 4.61704 12.3278L5.06623 10.6512C4.09109 10.3622 3.19499 9.90296 2.39886 9.30829L1.13585 10.5713C0.940585 10.7666 0.624002 10.7666 0.42874 10.5713C0.233478 10.376 0.233478 10.0595 0.42874 9.86419L1.62978 8.66316C1.03677 8.10656 0.515056 7.46754 0.0760073 6.76507C-0.0703483 6.5309 0.00083752 6.22242 0.235005 6.07607C0.469173 5.92971 0.777649 6.0009 0.924004 6.23507C1.40349 7.00224 1.98895 7.68069 2.66229 8.24283C2.67311 8.25109 2.68366 8.25985 2.69393 8.26911C4.00894 9.35541 5.65535 10.0001 7.50001 10.0001C10.3079 10.0001 12.6564 8.50643 14.076 6.23507C14.2224 6.0009 14.5308 5.92971 14.765 6.07607C14.9992 6.22242 15.0704 6.5309 14.924 6.76507Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = EyeClosed;