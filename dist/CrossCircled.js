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
var CrossCircled = function CrossCircled(props) {
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
    d: "M9.85358 5.85358L8.20713 7.50002L9.85358 9.14647C10.0488 9.34173 10.0488 9.65832 9.85358 9.85358C9.65832 10.0488 9.34173 10.0488 9.14647 9.85358L7.50002 8.20713L5.85358 9.85358C5.65832 10.0488 5.34173 10.0488 5.14647 9.85358C4.95121 9.65832 4.95121 9.34173 5.14647 9.14647L6.79292 7.50002L5.14647 5.85358C4.95121 5.65832 4.95121 5.34173 5.14647 5.14647C5.34173 4.95121 5.65832 4.95121 5.85358 5.14647L7.50002 6.79292L9.14647 5.14647C9.34173 4.95121 9.65832 4.95121 9.85358 5.14647C10.0488 5.34173 10.0488 5.65832 9.85358 5.85358ZM7.49991 0.877075C11.1576 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1576 0.877075 7.49991C0.877075 3.84222 3.84222 0.877075 7.49991 0.877075ZM1.82708 7.49991C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 4.36689 10.6329 1.82707 7.49991 1.82707C4.36689 1.82707 1.82708 4.36689 1.82708 7.49991Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = CrossCircled;