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
var LinkBreak2 = function LinkBreak2(props) {
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
    d: "M5.00031 0.5V2.5C5.00031 2.77614 4.77645 3 4.50031 3C4.22416 3 4.00031 2.77614 4.00031 2.5V0.5C4.00031 0.223858 4.22416 0 4.50031 0C4.77645 0 5.00031 0.223858 5.00031 0.5ZM1.35357 0.646483L2.85357 2.14648C3.04883 2.34175 3.04883 2.65833 2.85357 2.85359C2.65831 3.04885 2.34173 3.04885 2.14646 2.85359L0.646465 1.35359C0.451203 1.15833 0.451203 0.841745 0.646465 0.646483C0.841727 0.451221 1.15831 0.451221 1.35357 0.646483ZM0.500305 4H2.50031C2.77645 4 3.00031 4.22386 3.00031 4.5C3.00031 4.77614 2.77645 5 2.50031 5H0.500305C0.224163 5 0.000305176 4.77614 0.000305176 4.5C0.000305176 4.22386 0.224163 4 0.500305 4ZM12.5003 10H14.5003C14.7764 10 15.0003 10.2239 15.0003 10.5C15.0003 10.7761 14.7764 11 14.5003 11H12.5003C12.2242 11 12.0003 10.7761 12.0003 10.5C12.0003 10.2239 12.2242 10 12.5003 10ZM11.0003 12.5V14.5C11.0003 14.7761 10.7764 15 10.5003 15C10.2242 15 10.0003 14.7761 10.0003 14.5V12.5C10.0003 12.2239 10.2242 12 10.5003 12C10.7764 12 11.0003 12.2239 11.0003 12.5ZM12.8536 12.1465L14.3536 13.6465C14.5488 13.8417 14.5488 14.1583 14.3536 14.3536C14.1583 14.5488 13.8417 14.5488 13.6465 14.3536L12.1465 12.8536C11.9512 12.6583 11.9512 12.3417 12.1465 12.1465C12.3417 11.9512 12.6583 11.9512 12.8536 12.1465ZM8.51177 3.00528C9.18813 2.54582 10.0433 2.53682 10.6786 2.95407C10.8229 3.04881 10.977 3.19918 11.3889 3.61106C11.8007 4.02295 11.9511 4.17702 12.0459 4.32129C12.4631 4.95663 12.4541 5.81179 11.9946 6.48815C11.8898 6.64252 11.7275 6.80798 11.3005 7.23499L10.6818 7.8537C10.4865 8.04897 10.4865 8.36555 10.6818 8.56081C10.877 8.75607 11.1936 8.75607 11.3889 8.56081L12.0505 7.89919C12.4201 7.52965 12.6567 7.29318 12.8218 7.05008C13.4971 6.0561 13.5319 4.7624 12.8817 3.77235C12.7232 3.5309 12.492 3.29989 12.1406 2.94859L12.0513 2.85931C11.7 2.50788 11.469 2.27677 11.2276 2.1182C10.2375 1.46801 8.94382 1.50287 7.94985 2.1781C7.70675 2.34324 7.47028 2.57978 7.10074 2.94942L6.43911 3.61106C6.24385 3.80633 6.24385 4.12291 6.43911 4.31817C6.63437 4.51343 6.95096 4.51343 7.14622 4.31817L7.76494 3.69945C8.19194 3.27245 8.35741 3.11015 8.51177 3.00528ZM2.17772 7.95022C1.50249 8.9442 1.46763 10.2379 2.11782 11.2279C2.27639 11.4694 2.50749 11.7004 2.85892 12.0517L2.94821 12.141C3.29949 12.4924 3.53052 12.7235 3.77198 12.8821C4.76202 13.5323 6.05573 13.4974 7.0497 12.8222C7.2928 12.6571 7.52927 12.4205 7.89881 12.0509L8.56043 11.3892C8.75569 11.194 8.75569 10.8774 8.56043 10.6821C8.36517 10.4869 8.04859 10.4869 7.85333 10.6821L7.23461 11.3008C6.80761 11.7279 6.64214 11.8902 6.48777 11.995C5.81142 12.4545 4.95625 12.4635 4.32091 12.0462C4.17664 11.9515 4.02257 11.8011 3.61068 11.3892C3.1988 10.9774 3.04843 10.8233 2.95369 10.679C2.53644 10.0437 2.54544 9.18851 3.00491 8.51215C3.10977 8.35778 3.27207 8.19232 3.69907 7.76532L4.31779 7.1466C4.51305 6.95134 4.51305 6.63475 4.31779 6.43949C4.12253 6.24423 3.80595 6.24423 3.61068 6.43949L2.94905 7.10112C2.5794 7.47065 2.34286 7.70712 2.17772 7.95022Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = LinkBreak2;