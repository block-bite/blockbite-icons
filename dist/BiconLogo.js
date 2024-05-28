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
var BiconLogo = function BiconLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 50,
    height: 50,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.8015 7V42H10V7H19.8015ZM18.3426 33.25H26.1838C26.2446 33.25 26.3054 33.25 26.3662 33.25C26.427 33.25 26.4877 33.25 26.5485 33.25C27.5515 33.2176 28.3417 33.1528 28.9191 33.0556C29.527 32.9583 30.0284 32.7315 30.4235 32.375C30.849 31.9861 31.0618 31.3866 31.0618 30.5764C31.0618 29.7338 30.849 29.1181 30.4235 28.7292C29.998 28.3403 29.4662 28.1134 28.8279 28.0486C28.2201 27.9514 27.3843 27.9028 26.3206 27.9028H18.3426V19.6389H25.6824C25.7431 19.6389 25.7887 19.6389 25.8191 19.6389C25.8799 19.6389 25.9255 19.6389 25.9559 19.6389C26.9892 19.6389 27.7642 19.5255 28.2809 19.2986C28.7975 19.0718 29.0559 18.5208 29.0559 17.6458C29.0559 16.8032 28.7824 16.2847 28.2353 16.0903C27.6882 15.8634 26.8828 15.75 25.8191 15.75H18.3426V7H29.1015C32.2623 7 34.6936 7.76157 36.3956 9.28472C38.1279 10.8079 38.9941 12.9306 38.9941 15.6528C38.9941 17.4676 38.4926 19.0718 37.4897 20.4653C36.4868 21.8264 35.1495 22.75 33.4779 23.2361V23.7222C35.7877 24.0787 37.6113 25.0185 38.9485 26.5417C40.3162 28.0324 41 29.9769 41 32.375C41 34.3194 40.5593 36.0208 39.6779 37.4792C38.7966 38.9051 37.5353 40.0232 35.8941 40.8333C34.2833 41.6111 32.399 42 30.2412 42H18.3426V33.25Z",
    fill: "#FF57EE"
  }));
};
var _default = exports["default"] = BiconLogo;