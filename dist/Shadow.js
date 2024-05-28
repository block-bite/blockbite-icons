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
var Shadow = function Shadow(props) {
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
    d: "M6.78296 1.62405L7.21708 1.37598C9.261 4.95283 9.261 10.0472 7.21708 13.624L6.78296 13.376C8.73904 9.95284 8.73904 5.04719 6.78296 1.62405Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.1,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.28204 1.52251L7.71791 1.27753C9.76067 4.91193 9.76067 10.0881 7.71791 13.7225L7.28204 13.4775C9.23929 9.99526 9.23929 5.00478 7.28204 1.52251Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.15,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.82492 1.50087L8.26465 1.26288C10.2465 4.9247 10.2451 10.085 8.26052 13.7448L7.82098 13.5064C9.72502 9.99526 9.72636 5.01414 7.82492 1.50087Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.2,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.41435 1.57402L8.85999 1.34729C10.7139 4.99113 10.7133 10.0128 8.85841 13.6559L8.41284 13.429C10.1952 9.92842 10.1957 5.07537 8.41435 1.57402Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.03005 1.71656L9.48245 1.50366C11.1745 5.09919 11.1726 9.91629 9.47657 13.5091L9.02441 13.2956C10.6567 9.8379 10.6586 5.17715 9.03005 1.71656Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.3,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.67088 1.94101L10.1307 1.74463C11.6241 5.24128 11.6231 9.76689 10.1278 13.2622L9.66809 13.0656C11.1097 9.69578 11.1107 5.31216 9.67088 1.94101Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.35,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.3347 2.26444L10.8024 2.0874C12.0672 5.42815 12.0659 9.58394 10.7985 12.9231L10.331 12.7456C11.5551 9.52073 11.5564 5.49103 10.3347 2.26444Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.4,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.0184 2.71067L11.4939 2.55603C12.503 5.6589 12.502 9.35178 11.4909 12.4535L11.0155 12.2986C11.9938 9.29744 11.9948 5.71296 11.0184 2.71067Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.45,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.7237 3.34119L12.2071 3.21332C12.9318 5.95296 12.931 9.05731 12.2047 11.7962L11.7214 11.668C12.4254 9.01306 12.4262 5.99694 11.7237 3.34119Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.4429 4.24667L12.9338 4.15161C13.3553 6.32867 13.3554 8.66992 12.9341 10.8471L12.4432 10.7521C12.8524 8.63768 12.8523 6.36095 12.4429 4.24667Z",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075ZM1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82708 7.49991 1.82708C4.36689 1.82708 1.82708 4.36689 1.82708 7.49991Z",
    fill: "black"
  }));
};
var _default = exports["default"] = Shadow;