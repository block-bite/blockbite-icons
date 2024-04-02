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
var BiconIcon = function BiconIcon(props) {
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
    d: "M34.816 23.194C35.1018 24.6551 35.0474 26.1624 34.657 27.5991C34.2667 29.0358 33.5508 30.3634 32.565 31.479C30.5 33.789 27.828 34 25 34C22.172 34 19.491 33.789 17.432 31.479C16.4471 30.3629 15.7321 29.0352 15.3422 27.5985C14.9524 26.1619 14.8983 24.6549 15.184 23.194C16.5278 22.891 17.9293 22.9663 19.2329 23.4115C20.5365 23.8567 21.6912 24.6544 22.569 25.716C23.8094 27.1086 24.6495 28.8113 25 30.643C25.3463 28.8113 26.1842 27.1082 27.424 25.716C28.3034 24.6544 29.4594 23.8569 30.7641 23.4118C32.0687 22.9667 33.4711 22.8913 34.816 23.194ZM25 16C23.0385 17.3839 21.6928 19.477 21.248 21.836C22.3072 22.4079 23.2593 23.159 24.062 24.056C24.3984 24.4319 24.7117 24.828 25 25.242C25.2874 24.8275 25.6 24.4311 25.936 24.055C26.7405 23.1567 27.6947 22.4046 28.756 21.832C28.31 19.4735 26.9628 17.3816 25 16Z",
    fill: "#F5F5F5"
  }));
};
var _default = exports["default"] = BiconIcon;