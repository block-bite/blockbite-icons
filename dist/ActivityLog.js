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
var ActivityLog = function ActivityLog(props) {
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
    d: "M0.5 1H2.5C2.77614 1 3 1.22386 3 1.5C3 1.77614 2.77614 2 2.5 2H0.5C0.223858 2 0 1.77614 0 1.5C0 1.22386 0.223858 1 0.5 1ZM4.5 1H14.5C14.7761 1 15 1.22386 15 1.5C15 1.77614 14.7761 2 14.5 2H4.5C4.22386 2 4 1.77614 4 1.5C4 1.22386 4.22386 1 4.5 1ZM4.5 4H11.5C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H4.5C4.22386 5 4 4.77614 4 4.5C4 4.22386 4.22386 4 4.5 4ZM0.5 7H2.5C2.77614 7 3 7.22386 3 7.5C3 7.77614 2.77614 8 2.5 8H0.5C0.223858 8 0 7.77614 0 7.5C0 7.22386 0.223858 7 0.5 7ZM4.5 7H14.5C14.7761 7 15 7.22386 15 7.5C15 7.77614 14.7761 8 14.5 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7ZM4.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H4.5C4.22386 11 4 10.7761 4 10.5C4 10.2239 4.22386 10 4.5 10ZM0.5 13H2.5C2.77614 13 3 13.2239 3 13.5C3 13.7761 2.77614 14 2.5 14H0.5C0.223858 14 0 13.7761 0 13.5C0 13.2239 0.223858 13 0.5 13ZM4.5 13H14.5C14.7761 13 15 13.2239 15 13.5C15 13.7761 14.7761 14 14.5 14H4.5C4.22386 14 4 13.7761 4 13.5C4 13.2239 4.22386 13 4.5 13Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = ActivityLog;