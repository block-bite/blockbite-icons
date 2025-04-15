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
var CodeSandboxLogo = function CodeSandboxLogo(props) {
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
    d: "M7.28856 0.796908L1.28856 3.59691C1.11252 3.67906 1 3.85574 1 4.05V10.95C1 11.1443 1.11252 11.3209 1.28856 11.4031L7.28856 14.2031C7.42258 14.2656 7.57742 14.2656 7.71144 14.2031L13.7114 11.4031C13.8875 11.3209 14 11.1443 14 10.95V4.05C14 3.85574 13.8875 3.67906 13.7114 3.59691L7.71144 0.796908C7.57742 0.734364 7.42258 0.734364 7.28856 0.796908ZM5.9804 2.51091L7.5 1.80176L9.0196 2.51091L7.5 3.15674L5.9804 2.51091ZM10.2382 3.07958L12.2719 4.02866L7.5 6.05672L2.72809 4.02866L4.76182 3.07958L7.30443 4.16019C7.4294 4.2133 7.5706 4.2133 7.69557 4.16019L10.2382 3.07958ZM13 4.80578V7.92967L11.0821 8.8119C10.7273 8.9751 10.5 9.32988 10.5 9.72039V11.7982L8 12.9649V6.93078L13 4.80578ZM13 10.6316V9.03039L11.5 9.72039V11.3316L13 10.6316ZM7 12.9649L4.50232 11.7993V9.72036C4.50232 9.32985 4.275 8.97507 3.92022 8.81187L2 7.92857V4.80578L7 6.93078V12.9649ZM3.50232 11.3327L3.50232 9.72036L2 9.0293V10.6316L3.50232 11.3327Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = CodeSandboxLogo;