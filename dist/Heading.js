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
var Heading = function Heading(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M8.30432 2.50017C8.30432 2.7487 8.50579 2.95017 8.75432 2.95017H9.94997V7.05001H5.04997V2.95017H6.25432C6.50285 2.95017 6.70432 2.7487 6.70432 2.50017C6.70432 2.25164 6.50285 2.05017 6.25432 2.05017H2.75432C2.50579 2.05017 2.30432 2.25164 2.30432 2.50017C2.30432 2.7487 2.50579 2.95017 2.75432 2.95017H3.94997V12.0502H2.75432C2.50579 12.0502 2.30432 12.2516 2.30432 12.5002C2.30432 12.7487 2.50579 12.9502 2.75432 12.9502H6.25432C6.50285 12.9502 6.70432 12.7487 6.70432 12.5002C6.70432 12.2516 6.50285 12.0502 6.25432 12.0502H5.04997V7.95001H9.94997V12.0502H8.75432C8.50579 12.0502 8.30432 12.2516 8.30432 12.5002C8.30432 12.7487 8.50579 12.9502 8.75432 12.9502H12.2543C12.5028 12.9502 12.7043 12.7487 12.7043 12.5002C12.7043 12.2516 12.5028 12.0502 12.2543 12.0502H11.05V2.95017H12.2543C12.5028 2.95017 12.7043 2.7487 12.7043 2.50017C12.7043 2.25164 12.5028 2.05017 12.2543 2.05017H8.75432C8.50579 2.05017 8.30432 2.25164 8.30432 2.50017Z",
    fill: "black"
  }));
};
var _default = exports["default"] = Heading;