"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var TrackPrevious = function TrackPrevious(props) {
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
    d: "M2.49983 2.19989C2.80359 2.19989 3.04983 2.44613 3.04983 2.74989V7.2825C3.09547 7.18802 3.17053 7.10851 3.26669 7.05776L12.2667 2.30776C12.4217 2.22596 12.6082 2.23127 12.7583 2.32176C12.9083 2.41225 13.0001 2.57471 13.0001 2.74995V12.25C13.0001 12.4252 12.9083 12.5877 12.7583 12.6781C12.6082 12.7686 12.4217 12.7739 12.2667 12.6921L3.26669 7.94214C3.17053 7.89139 3.09547 7.81188 3.04983 7.7174V12.2499C3.04983 12.5536 2.80359 12.7999 2.49983 12.7999C2.19607 12.7999 1.94983 12.5536 1.94983 12.2499V2.74989C1.94983 2.44613 2.19607 2.19989 2.49983 2.19989ZM12.0001 11.4207V3.5792L4.57129 7.49995L12.0001 11.4207Z",
    fill: "black"
  }));
};
var _default = exports["default"] = TrackPrevious;