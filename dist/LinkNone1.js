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
var LinkNone1 = function LinkNone1(props) {
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
    d: "M4.62496 3.99989H5.49996C5.7761 3.99989 5.99996 4.22375 5.99996 4.49989C5.99996 4.77603 5.7761 4.99989 5.49996 4.99989H4.62496C4.02108 4.99989 3.78932 5.00213 3.60601 5.03713C2.80287 5.1905 2.19181 5.78883 2.03759 6.53312C2.00257 6.70212 1.99996 6.91739 1.99996 7.49989C1.99996 8.08239 2.00257 8.29766 2.03759 8.46666C2.19181 9.21095 2.80287 9.80928 3.60601 9.96265C3.78932 9.99765 4.02108 9.99989 4.62496 9.99989H5.49996C5.7761 9.99989 5.99996 10.2237 5.99996 10.4999C5.99996 10.776 5.7761 10.9999 5.49996 10.9999H4.62496C4.60445 10.9999 4.58422 10.9999 4.56427 10.9999C4.04159 11 3.70712 11 3.41845 10.9449C2.23814 10.7195 1.29871 9.82937 1.05839 8.66955C0.999782 8.38669 0.999848 8.05992 0.999947 7.56301C0.999951 7.54227 0.999955 7.52123 0.999955 7.49989C0.999955 7.47855 0.999951 7.45751 0.999947 7.43677C0.999848 6.93986 0.999782 6.61309 1.05839 6.33023C1.29871 5.17041 2.23814 4.28027 3.41845 4.05488C3.70712 3.99976 4.04159 3.99981 4.56427 3.99988C4.58422 3.99989 4.60445 3.99989 4.62496 3.99989ZM10.375 4.99989H9.49996C9.22381 4.99989 8.99996 4.77603 8.99996 4.49989C8.99996 4.22375 9.22381 3.99989 9.49996 3.99989H10.375C10.3955 3.99989 10.4157 3.99989 10.4356 3.99988C10.9583 3.99981 11.2928 3.99976 11.5815 4.05488C12.7618 4.28027 13.7012 5.17041 13.9415 6.33023C14.0001 6.61309 14.0001 6.93985 14 7.43676C14 7.4575 14 7.47854 14 7.49989C14 7.52124 14 7.54228 14 7.56302C14.0001 8.05992 14.0001 8.38669 13.9415 8.66955C13.7012 9.82937 12.7618 10.7195 11.5815 10.9449C11.2928 11 10.9583 11 10.4356 10.9999C10.4157 10.9999 10.3955 10.9999 10.375 10.9999H9.49996C9.22381 10.9999 8.99996 10.776 8.99996 10.4999C8.99996 10.2237 9.22381 9.99989 9.49996 9.99989H10.375C10.9788 9.99989 11.2106 9.99765 11.3939 9.96265C12.197 9.80928 12.8081 9.21095 12.9623 8.46666C12.9973 8.29766 13 8.08239 13 7.49989C13 6.91739 12.9973 6.70212 12.9623 6.53312C12.8081 5.78883 12.197 5.1905 11.3939 5.03713C11.2106 5.00213 10.9788 4.99989 10.375 4.99989Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = LinkNone1;