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
var ShadowInner = function ShadowInner(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.05,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.85199 12.1617L3.3696 12.0301C4.45356 8.05564 8.05581 4.45339 12.0303 3.36943L12.1619 3.85182C8.35817 4.88918 4.88936 8.358 3.85199 12.1617Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.1,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.42726 11.8805L2.94582 11.7456C4.07129 7.73121 7.7314 4.0711 11.7458 2.94563L11.8807 3.42707C8.03441 4.50542 4.50561 8.03422 3.42726 11.8805Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.15,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.02805 11.512L2.54883 11.3694C3.73676 7.37872 7.38659 3.73079 11.3778 2.54626L11.5201 3.02559C7.69092 4.16202 4.16779 7.68326 3.02805 11.512Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.2,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.66298 11.0433L2.18754 10.8885C3.45324 7.00106 7.00445 3.45059 10.8921 2.18618L11.0468 2.66166C7.31117 3.87661 3.87918 7.30787 2.66298 11.0433Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.32845 10.5073L1.858 10.338C3.20398 6.59912 6.61155 3.19427 10.3513 1.85304L10.5201 2.32368C6.92091 3.6145 3.62391 6.9088 2.32845 10.5073Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.3,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.03399 9.89554L1.56998 9.70927C2.98651 6.18079 6.18728 2.98136 9.71622 1.56713L9.90222 2.03125C6.50003 3.39469 3.39967 6.4937 2.03399 9.89554Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.35,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.79331 9.19735L1.33747 8.99189C2.80536 5.73525 5.74485 2.79757 9.0022 1.33269L9.20727 1.7887C6.06136 3.20346 3.21103 6.05199 1.79331 9.19735Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.4,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.62544 8.3985L1.17987 8.17163C2.66036 5.264 5.27232 2.65343 8.18057 1.17516L8.40713 1.62088C5.59323 3.0512 3.05794 5.58512 1.62544 8.3985Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.45,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.57249 7.45379L1.14028 7.20241C2.56503 4.75273 4.7607 2.55818 7.21096 1.1351L7.46207 1.56747C5.08689 2.94695 2.95362 5.07912 1.57249 7.45379Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.7043 6.3051L1.28998 6.02521C2.5313 4.1877 4.18673 2.53211 6.02413 1.29055L6.30407 1.70484C4.51964 2.9106 2.90983 4.52058 1.7043 6.3051Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075ZM1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991Z",
    fill: "black"
  }));
};
var _default = exports["default"] = ShadowInner;