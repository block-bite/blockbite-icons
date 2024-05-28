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
var Face = function Face(props) {
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
    d: "M4.34133 9.08997C4.11484 9.24795 4.05931 9.55962 4.21729 9.78611C4.93926 10.8212 6.14033 11.5001 7.50004 11.5001C8.85974 11.5001 10.0608 10.8212 10.7828 9.78611C10.9408 9.55962 10.8852 9.24795 10.6587 9.08997C10.4323 8.93199 10.1206 8.98752 9.9626 9.21401C9.41963 9.99244 8.51907 10.5001 7.50004 10.5001C6.481 10.5001 5.58044 9.99244 5.03747 9.21401C4.87949 8.98752 4.56782 8.93199 4.34133 9.08997ZM6.25003 5.97504C6.25003 5.49186 5.85828 5.10004 5.37503 5.10004C4.89179 5.10004 4.50003 5.49186 4.50003 5.97504C4.50003 6.45821 4.89179 6.85004 5.37503 6.85004C5.85828 6.85004 6.25003 6.45821 6.25003 5.97504ZM9.62503 6.85004C9.14179 6.85004 8.75003 6.45821 8.75003 5.97504C8.75003 5.49186 9.14179 5.10004 9.62503 5.10004C10.1083 5.10004 10.5 5.49186 10.5 5.97504C10.5 6.45821 10.1083 6.85004 9.62503 6.85004ZM0.877075 7.49978C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49978C14.1227 3.8421 11.1576 0.876953 7.49991 0.876953C3.84222 0.876953 0.877075 3.8421 0.877075 7.49978ZM7.49991 1.82695C10.6329 1.82695 13.1727 4.36677 13.1727 7.49978C13.1727 10.6328 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82708 10.6328 1.82708 7.49978C1.82708 4.36677 4.36689 1.82695 7.49991 1.82695Z",
    fill: "black"
  }));
};
var _default = exports["default"] = Face;