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
var Globe = function Globe(props) {
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
    d: "M5.71111 2.08636C4.3215 2.54526 3.16848 3.52427 2.48255 4.79287C3.1118 4.54331 3.81828 4.35091 4.56556 4.21404C4.84371 3.44831 5.22506 2.72734 5.71111 2.08636ZM1.81372 7.09999C1.84617 6.63198 1.93511 6.17953 2.07378 5.7494C2.70145 5.41606 3.47364 5.15686 4.32668 4.97486C4.14234 5.66568 4.03633 6.38187 4.00765 7.09999H1.81372ZM4.70822 7.09999C4.74138 6.32556 4.87085 5.55987 5.09512 4.83494C5.73908 4.73671 6.41525 4.67891 7.09993 4.6627V7.09999H4.70822ZM7.89993 7.09999V4.6627C8.6076 4.67945 9.30619 4.74063 9.96952 4.84496C10.1993 5.56709 10.332 6.32933 10.3661 7.09999H7.89993ZM7.89993 3.96252C8.50276 3.97624 9.10489 4.02104 9.6903 4.09764C9.32213 3.24574 8.80653 2.47205 8.14611 1.83625C8.06456 1.82705 7.98249 1.81957 7.89993 1.81384V3.96252ZM11.0667 7.09999C11.0373 6.38685 10.9294 5.6758 10.7419 4.98972C11.5677 5.17084 12.3152 5.42498 12.926 5.74931C13.0647 6.17946 13.1536 6.63195 13.1861 7.09999H11.0667ZM10.4959 4.22545C11.2204 4.36151 11.9053 4.55013 12.5172 4.7928C11.8363 3.53347 10.6951 2.55954 9.31904 2.09647C9.81849 2.738 10.2103 3.45937 10.4959 4.22545ZM5.36524 4.09047C5.93312 4.01824 6.51619 3.97581 7.09993 3.96252V1.81384C7.01833 1.8195 6.9372 1.82687 6.85658 1.83593C6.21951 2.46985 5.72146 3.24106 5.36524 4.09047ZM4.00765 7.89999H1.81372C1.84045 8.28567 1.90555 8.66078 2.00523 9.02154C2.63236 9.36589 3.4112 9.63377 4.27491 9.82193C4.12237 9.19434 4.03353 8.54795 4.00765 7.89999ZM4.49381 10.5806C3.7239 10.4354 2.99887 10.2308 2.35896 9.96492C3.02467 11.3509 4.23433 12.426 5.71121 12.9137C5.18189 12.2157 4.77673 11.4228 4.49381 10.5806ZM5.28353 10.7069C5.87711 10.7856 6.48815 10.8315 7.09993 10.8454V13.1862C7.01836 13.1806 6.93727 13.1732 6.85668 13.1641C6.16927 12.4801 5.64371 11.6363 5.28353 10.7069ZM7.09993 10.1453C6.39413 10.1285 5.69736 10.0676 5.03561 9.96381C4.84784 9.29905 4.73833 8.60312 4.70822 7.89999H7.09993V10.1453ZM7.89993 10.8454V13.1862C7.98245 13.1805 8.0645 13.173 8.14602 13.1638C8.85864 12.4778 9.40266 11.6312 9.77479 10.699C9.1629 10.7825 8.5318 10.8311 7.89993 10.8454ZM10.0309 9.9532C9.34937 10.0635 8.62947 10.128 7.89993 10.1453V7.89999H10.3661C10.3352 8.59921 10.2231 9.29151 10.0309 9.9532ZM10.5698 10.5684C10.2794 11.4113 9.86302 12.2048 9.31896 12.9036C10.782 12.4113 11.9797 11.3414 12.6408 9.965C12.0186 10.2235 11.316 10.4241 10.5698 10.5684ZM12.9945 9.02164C12.3844 9.35661 11.6308 9.61921 10.7951 9.80646C10.9499 9.18383 11.0402 8.54276 11.0667 7.89999H13.1861C13.1594 8.2857 13.0942 8.66085 12.9945 9.02164ZM0.899902 7.50002C0.899902 3.85495 3.85482 0.900024 7.4999 0.900024C11.145 0.900024 14.0999 3.85495 14.0999 7.50002C14.0999 11.1451 11.145 14.1 7.4999 14.1C3.85482 14.1 0.899902 11.1451 0.899902 7.50002Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Globe;