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
var TextAlignMiddle = function TextAlignMiddle(props) {
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
    d: "M3.89949 14.5L3.89949 10.4657L5.21664 11.7828C5.37285 11.939 5.62612 11.939 5.78233 11.7828C5.93854 11.6266 5.93854 11.3733 5.78233 11.2171L3.78233 9.21713C3.70732 9.14212 3.60557 9.09997 3.49949 9.09997C3.3934 9.09997 3.29166 9.14212 3.21664 9.21713L1.21664 11.2171C1.06043 11.3733 1.06043 11.6266 1.21664 11.7828C1.37285 11.939 1.62612 11.939 1.78233 11.7828L3.09949 10.4657L3.09949 14.5C3.09949 14.7209 3.27857 14.9 3.49949 14.9C3.7204 14.9 3.89949 14.7209 3.89949 14.5ZM8.49998 11H14.5C14.7761 11 15 10.7761 15 10.5C15 10.2238 14.7761 9.99998 14.5 9.99998H8.49998C8.22383 9.99998 7.99998 10.2238 7.99998 10.5C7.99998 10.7761 8.22383 11 8.49998 11ZM8.49998 7.99997H14.5C14.7761 7.99997 15 7.77612 15 7.49997C15 7.22383 14.7761 6.99997 14.5 6.99997H8.49998C8.22383 6.99997 7.99998 7.22383 7.99998 7.49997C7.99998 7.77612 8.22383 7.99997 8.49998 7.99997ZM7.99998 4.49998C7.99998 4.22383 8.22383 3.99998 8.49998 3.99998H14.5C14.7761 3.99998 15 4.22383 15 4.49998C15 4.77612 14.7761 4.99998 14.5 4.99998H8.49998C8.22383 4.99998 7.99998 4.77612 7.99998 4.49998ZM3.49949 0.0999756C3.27857 0.0999756 3.09949 0.279061 3.09949 0.499975L3.09949 4.53429L1.78233 3.21713C1.62612 3.06092 1.37285 3.06092 1.21664 3.21713C1.06043 3.37334 1.06043 3.62661 1.21664 3.78282L3.21664 5.78282C3.29166 5.85783 3.3934 5.89997 3.49949 5.89997C3.60557 5.89997 3.70732 5.85783 3.78233 5.78282L5.78233 3.78282C5.93854 3.62661 5.93854 3.37334 5.78233 3.21713C5.62612 3.06092 5.37285 3.06092 5.21664 3.21713L3.89949 4.53429L3.89949 0.499975C3.89949 0.279061 3.7204 0.0999756 3.49949 0.0999756Z",
    fill: "black"
  }));
};
var _default = exports["default"] = TextAlignMiddle;