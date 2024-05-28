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
var BiconGroupSmall = function BiconGroupSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.4167 10.5C23.704 10.5 23.9795 10.3859 24.1827 10.1827C24.3859 9.97953 24.5 9.70398 24.5 9.41667V5.08333C24.5 4.79602 24.3859 4.52047 24.1827 4.3173C23.9795 4.11414 23.704 4 23.4167 4H19.0833C18.796 4 18.5205 4.11414 18.3173 4.3173C18.1141 4.52047 18 4.79602 18 5.08333V6.16667H11.5V5.08333C11.5 4.79602 11.3859 4.52047 11.1827 4.3173C10.9795 4.11414 10.704 4 10.4167 4H6.08333C5.79602 4 5.52047 4.11414 5.3173 4.3173C5.11414 4.52047 5 4.79602 5 5.08333V9.41667C5 9.70398 5.11414 9.97953 5.3173 10.1827C5.52047 10.3859 5.79602 10.5 6.08333 10.5H7.16667V17H6.08333C5.79602 17 5.52047 17.1141 5.3173 17.3173C5.11414 17.5205 5 17.796 5 18.0833V22.4167C5 22.704 5.11414 22.9795 5.3173 23.1827C5.52047 23.3859 5.79602 23.5 6.08333 23.5H10.4167C10.704 23.5 10.9795 23.3859 11.1827 23.1827C11.3859 22.9795 11.5 22.704 11.5 22.4167V21.3333H18V22.4167C18 22.704 18.1141 22.9795 18.3173 23.1827C18.5205 23.3859 18.796 23.5 19.0833 23.5H23.4167C23.704 23.5 23.9795 23.3859 24.1827 23.1827C24.3859 22.9795 24.5 22.704 24.5 22.4167V18.0833C24.5 17.796 24.3859 17.5205 24.1827 17.3173C23.9795 17.1141 23.704 17 23.4167 17H22.3333V10.5H23.4167ZM20.1667 17H19.0833C18.796 17 18.5205 17.1141 18.3173 17.3173C18.1141 17.5205 18 17.796 18 18.0833V19.1667H11.5V18.0833C11.5 17.796 11.3859 17.5205 11.1827 17.3173C10.9795 17.1141 10.704 17 10.4167 17H9.33333V10.5H10.4167C10.704 10.5 10.9795 10.3859 11.1827 10.1827C11.3859 9.97953 11.5 9.70398 11.5 9.41667V8.33333H18V9.41667C18 9.70398 18.1141 9.97953 18.3173 10.1827C18.5205 10.3859 18.796 10.5 19.0833 10.5H20.1667V17Z",
    fill: "white"
  }));
};
var _default = exports["default"] = BiconGroupSmall;