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
var HobbyKnife = function HobbyKnife(props) {
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
    d: "M12.1465 13.8536L6.39645 8.10364C6.36478 8.07197 6.33825 8.03711 6.31685 8.00009H5.00002C4.78719 8.00009 4.59769 7.86536 4.52777 7.66435L2.12777 0.764363C2.05268 0.548474 2.13355 0.309148 2.3242 0.183059C2.51486 0.0569689 2.76674 0.0762207 2.93602 0.229821L8.336 5.12981C8.44044 5.22458 8.50001 5.35905 8.50001 5.50009V5.81693C8.53702 5.83833 8.57189 5.86486 8.60356 5.89653L14.3536 11.6465C14.5488 11.8418 14.5488 12.1584 14.3536 12.3536L12.8536 13.8536C12.6583 14.0489 12.3417 14.0489 12.1465 13.8536ZM7.45711 7.75009L12.5 12.793L13.2929 12.0001L8.25 6.95719L7.45711 7.75009ZM5.35549 7.00009H6.2929L7.50001 5.79298V5.72155L3.71669 2.28854L5.35549 7.00009Z",
    fill: "black"
  }));
};
var _default = exports["default"] = HobbyKnife;