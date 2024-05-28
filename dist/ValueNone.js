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
var ValueNone = function ValueNone(props) {
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
    d: "M0.877014 7.49991C0.877014 9.14883 1.47963 10.657 2.47665 11.8162L1.64643 12.6465C1.45117 12.8417 1.45117 13.1583 1.64643 13.3536C1.8417 13.5488 2.15828 13.5488 2.35354 13.3536L3.18377 12.5233C4.34296 13.5202 5.85104 14.1227 7.49985 14.1227C11.1575 14.1227 14.1227 11.1576 14.1227 7.49991C14.1227 5.8511 13.5202 4.34302 12.5233 3.18383L13.3535 2.35357C13.5488 2.1583 13.5488 1.84172 13.3535 1.64646C13.1583 1.4512 12.8417 1.4512 12.6464 1.64646L11.8162 2.47671C10.657 1.47969 9.14877 0.877075 7.49985 0.877075C3.84216 0.877075 0.877014 3.84222 0.877014 7.49991ZM7.49985 1.82708C4.36683 1.82708 1.82701 4.36689 1.82701 7.49991C1.82701 8.88645 2.32446 10.1568 3.15063 11.1423L11.1422 3.15069C10.1567 2.32453 8.88639 1.82708 7.49985 1.82708ZM7.49985 13.1727C10.6328 13.1727 13.1727 10.6329 13.1727 7.49991C13.1727 6.11349 12.6753 4.84323 11.8493 3.85782L3.85776 11.8493C4.84317 12.6754 6.11343 13.1727 7.49985 13.1727Z",
    fill: "black"
  }));
};
var _default = exports["default"] = ValueNone;