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
var ShadowOuter = function ShadowOuter(props) {
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
    d: "M15 9.00001C15 12.3137 12.3137 15 9.00002 15C6.84351 15 4.95296 13.8621 3.89569 12.1552L4.32076 11.8919C5.29069 13.4578 7.02376 14.5 9.00002 14.5C12.0376 14.5 14.5 12.0375 14.5 9.00001C14.5 7.01781 13.4516 5.28027 11.8778 4.31203L12.1398 3.88617C13.8553 4.94159 15 6.83701 15 9.00001Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.2,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.5 9.00003C14.5 12.0376 12.0376 14.5 9.00004 14.5C7.46215 14.5 6.07132 13.8685 5.07349 12.8513L5.43043 12.5011C6.3381 13.4265 7.60186 14 9.00004 14C11.7614 14 14 11.7614 14 9.00003C14 7.60174 13.4264 6.33789 12.5009 5.4302L12.851 5.07324C13.8684 6.07109 14.5 7.46203 14.5 9.00003Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.35,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 8.99998C14 11.7614 11.7614 14 9.00002 14C8.04868 14 7.15868 13.734 6.40118 13.2723L6.66142 12.8454C7.34275 13.2607 8.14306 13.5 9.00002 13.5C11.4853 13.5 13.5 11.4852 13.5 8.99998C13.5 8.16162 13.271 7.37751 12.8722 6.70596L13.3022 6.45068C13.7455 7.19734 14 8.06932 14 8.99998Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5 8.99998C13.5 11.4852 11.4853 13.5 9.00003 13.5C8.61104 13.5 8.23323 13.4506 7.87268 13.3575L7.99759 12.8734C8.31768 12.956 8.65353 13 9.00003 13C11.2091 13 13 11.2091 13 8.99998C13 8.67505 12.9613 8.3595 12.8884 8.05754L13.3745 7.94019C13.4566 8.28028 13.5 8.63522 13.5 8.99998Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.65,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.79205 12.9215L9.69354 12.4313C11.0613 12.1564 12.1413 11.0833 12.4261 9.71912L12.9155 9.8213C12.5898 11.3813 11.3562 12.6072 9.79205 12.9215Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5021 1.27753C10.94 1.27753 13.7271 4.06456 13.7271 7.50253C13.7271 10.9405 10.94 13.7275 7.5021 13.7275C4.06413 13.7275 1.2771 10.9405 1.2771 7.50253C1.2771 4.06456 4.06413 1.27753 7.5021 1.27753ZM2.2271 7.50253C2.2271 10.4158 4.5888 12.7775 7.5021 12.7775C10.4154 12.7775 12.7771 10.4158 12.7771 7.50253C12.7771 4.58923 10.4154 2.22753 7.5021 2.22753C4.5888 2.22753 2.2271 4.58923 2.2271 7.50253Z",
    fill: "black"
  }));
};
var _default = exports["default"] = ShadowOuter;