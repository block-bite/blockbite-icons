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
var MaxSize = function MaxSize(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M1 5H2.07858L3.21775 8.35938H3.26623L4.4054 5H5.48398V10H4.63566V6.74561H4.60132L3.53082 9.97559H2.95316L1.88266 6.7334H1.84832V10H1V5Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.91754 10H5.98035L7.40835 5H8.5354L9.96139 10H9.0242L7.98804 6.14258H7.95572L6.91754 10ZM6.85896 8.03467H9.07267V8.85986H6.85896V8.03467Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.2793 5L12.1135 6.7041H12.1458L12.984 5H13.9717L12.7093 7.5L14 10H12.9941L12.1458 8.29346H12.1135L11.2652 10H10.2634L11.5581 7.5L10.2876 5H11.2793Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = MaxSize;