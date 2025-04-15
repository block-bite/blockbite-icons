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
var ColorWheel = function ColorWheel(props) {
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
    d: "M7.49991 0.877014C11.1576 0.877014 14.1227 3.84216 14.1227 7.49985C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49985C0.877075 3.84216 3.84222 0.877014 7.49991 0.877014ZM7.09998 1.84089V6.53429L3.78135 3.21565C4.68298 2.43239 5.83429 1.92904 7.09998 1.84089ZM1.84095 7.09997H6.5343L3.21567 3.78134C2.43242 4.68298 1.92909 5.83428 1.84095 7.09997ZM1.84097 7.89997C1.92916 9.16562 2.43253 10.3169 3.21579 11.2185L6.5343 7.89997H1.84097ZM7.09998 13.1588V8.46566L3.78149 11.7842C4.6831 12.5673 5.83435 13.0707 7.09998 13.1588ZM7.89998 13.1588C9.16559 13.0706 10.3168 12.5673 11.2184 11.7841L7.89998 8.46566V13.1588ZM13.1588 7.89997H8.46567L11.7841 11.2184C12.5673 10.3168 13.0707 9.16558 13.1588 7.89997ZM13.1589 7.09997C13.0707 5.83432 12.5674 4.68305 11.7842 3.78143L8.46567 7.09997H13.1589ZM7.89998 1.8409V6.53429L11.2185 3.21573C10.3169 2.43246 9.16565 1.92909 7.89998 1.8409Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = ColorWheel;