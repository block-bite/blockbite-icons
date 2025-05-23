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
var TwitterLogo = function TwitterLogo(props) {
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
    d: "M10.36 1.5686C11.3736 1.5686 12.183 2.04807 12.7254 2.74388C13.3079 2.6247 13.8557 2.40916 14.3513 2.11511C14.1559 2.72601 13.7424 3.23963 13.2033 3.56466L13.2047 3.56782C13.7334 3.50364 14.2364 3.36305 14.7048 3.15549L14.7037 3.15718C14.3667 3.66186 13.9431 4.10739 13.4561 4.47037C13.4823 4.64675 13.4956 4.8243 13.4956 5.00083C13.4956 8.68713 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.5111 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9667C1.20582 10.8202 1.37438 10.731 1.5554 10.7523C2.47066 10.8601 3.38568 10.7486 4.19219 10.3963C3.39226 10.0434 2.77129 9.35978 2.50204 8.51977C2.45359 8.36863 2.48835 8.20314 2.59351 8.08425C2.59716 8.08014 2.60087 8.07609 2.60464 8.07213C1.96391 7.50822 1.55973 6.68211 1.55973 5.76146V5.72762C1.55973 5.56817 1.64411 5.42062 1.78155 5.33977C1.82671 5.3132 1.87537 5.29514 1.92532 5.28561C1.70549 4.86158 1.58116 4.37988 1.58116 3.86961C1.58116 3.40168 1.58384 2.81195 1.91332 2.28084C1.98718 2.16178 2.10758 2.08918 2.2364 2.07198C2.42588 2.0124 2.64087 2.06972 2.77406 2.23305C3.86536 3.57129 5.44066 4.49586 7.23366 4.73964L7.23336 4.69633C7.23336 2.96887 8.63335 1.5686 10.36 1.5686ZM3.27248 11.6024C4.13012 11.4538 4.95307 11.116 5.66218 10.5602C5.81211 10.4427 5.87182 10.2436 5.81126 10.063C5.7507 9.88237 5.583 9.75946 5.39255 9.7561C4.68968 9.74369 4.06712 9.39719 3.67793 8.86848C3.86828 8.85309 4.05428 8.82042 4.23445 8.7717C4.43603 8.71719 4.57363 8.53117 4.56674 8.32246C4.55985 8.11375 4.41029 7.93721 4.20555 7.89611C3.42694 7.7398 2.79883 7.16767 2.56169 6.42178C2.76255 6.47028 2.97102 6.49914 3.18482 6.50613C3.38563 6.5127 3.56646 6.38536 3.62795 6.19408C3.68943 6.0028 3.61666 5.79394 3.44963 5.68227C2.86523 5.29158 2.48116 4.62467 2.48116 3.86961C2.48116 3.70216 2.48352 3.55272 2.49355 3.41722C3.85115 4.79916 5.70873 5.68934 7.77588 5.79342C7.93225 5.80129 8.08328 5.73546 8.18395 5.61556C8.28463 5.49565 8.32332 5.33551 8.28851 5.18287C8.25255 5.0252 8.23336 4.86287 8.23336 4.69633C8.23336 3.52088 9.18591 2.5686 10.36 2.5686C11.5943 2.5686 12.4956 3.71212 12.4956 5.00083C12.4956 8.25712 10.0202 11.9746 5.52122 11.9746C4.73387 11.9746 3.97781 11.8436 3.27248 11.6024Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = TwitterLogo;