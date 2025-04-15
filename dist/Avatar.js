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
var Avatar = function Avatar(props) {
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
    d: "M7.49999 4.1549C8.79786 4.1549 9.84999 5.20703 9.84999 6.5049C9.84999 7.80277 8.79786 8.8549 7.49999 8.8549C6.20212 8.8549 5.14999 7.80277 5.14999 6.5049C5.14999 5.20703 6.20212 4.1549 7.49999 4.1549ZM6.09999 6.5049C6.09999 7.2781 6.72679 7.9049 7.49999 7.9049C8.27319 7.9049 8.89999 7.2781 8.89999 6.5049C8.89999 5.7317 8.27319 5.1049 7.49999 5.1049C6.72679 5.1049 6.09999 5.7317 6.09999 6.5049ZM7.49985 0.877075C11.1575 0.877075 14.1227 3.84222 14.1227 7.49991C14.1227 11.1576 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1576 0.877014 7.49991C0.877014 3.84222 3.84216 0.877075 7.49985 0.877075ZM1.82701 7.49991C1.82701 8.972 2.38774 10.3131 3.30727 11.3214C4.19074 9.94122 5.73818 9.02502 7.50023 9.02502C9.26206 9.02502 10.8093 9.941 11.6929 11.3209C12.6121 10.3127 13.1727 8.97175 13.1727 7.49991C13.1727 4.36689 10.6328 1.82708 7.49985 1.82708C4.36683 1.82708 1.82701 4.36689 1.82701 7.49991ZM7.50023 9.97502C6.01458 9.97502 4.71624 10.7797 4.01845 11.9792C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9788C10.2839 10.7796 8.9857 9.97502 7.50023 9.97502Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Avatar;