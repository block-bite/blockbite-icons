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
var LetterSpacing = function LetterSpacing(props) {
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
    d: "M5.0125 1.30304L8.01106 8.29985C8.11984 8.55366 8.00226 8.8476 7.74844 8.95638C7.49463 9.06515 7.20069 8.94757 7.09191 8.69376L6.11613 6.41688H2.98973L2.01395 8.69376C1.90517 8.94757 1.61123 9.06515 1.35742 8.95638C1.1036 8.8476 0.986023 8.55366 1.0948 8.29985L4.09336 1.30304C4.17214 1.1192 4.35291 1 4.55293 1C4.75295 1 4.93372 1.1192 5.0125 1.30304ZM5.75186 5.56688H3.354L4.55293 2.76932L5.75186 5.56688ZM11.5215 8.68505L14.2733 1.68302C14.3743 1.42601 14.2478 1.13578 13.9908 1.03478C13.7338 0.933777 13.4436 1.06024 13.3426 1.31725L11.0562 7.13517L8.76973 1.31725C8.66873 1.06024 8.3785 0.933777 8.1215 1.03478C7.86449 1.13578 7.73802 1.42601 7.83902 1.68302L10.5908 8.68505C10.666 8.87636 10.8506 9.00217 11.0562 9.00217C11.2617 9.00217 11.4463 8.87636 11.5215 8.68505ZM14.8365 12.7828L12.8365 14.7828C12.6803 14.939 12.4271 14.939 12.2708 14.7828C12.1146 14.6266 12.1146 14.3733 12.2708 14.2171L13.588 12.8999H1.51937L2.83653 14.2171C2.99274 14.3733 2.99274 14.6266 2.83653 14.7828C2.68032 14.939 2.42705 14.939 2.27084 14.7828L0.270843 12.7828C0.195828 12.7078 0.153687 12.606 0.153687 12.4999C0.153687 12.3939 0.195828 12.2921 0.270843 12.2171L2.27084 10.2171C2.42705 10.0609 2.68032 10.0609 2.83653 10.2171C2.99274 10.3733 2.99274 10.6266 2.83653 10.7828L1.51937 12.0999L13.588 12.0999L12.2708 10.7828C12.1146 10.6266 12.1146 10.3733 12.2708 10.2171C12.4271 10.0609 12.6803 10.0609 12.8365 10.2171L14.8365 12.2171C14.9115 12.2921 14.9537 12.3939 14.9537 12.4999C14.9537 12.606 14.9115 12.7078 14.8365 12.7828Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = LetterSpacing;