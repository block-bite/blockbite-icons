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
var BiconPresetflex3col = function BiconPresetflex3col(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 60 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 60,
    height: 40,
    fill: "white"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 7,
    y: 6,
    width: 14,
    height: 27,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 23,
    y: 6,
    width: 14,
    height: 27,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 39,
    y: 6,
    width: 14,
    height: 27,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50.875 18H48.4375C47.791 18 47.171 18.2371 46.7139 18.659C46.2568 19.081 46 19.6533 46 20.25V36.75C46 37.3467 46.2568 37.919 46.7139 38.341C47.171 38.7629 47.791 39 48.4375 39H56.5625C57.209 39 57.829 38.7629 58.2861 38.341C58.7432 37.919 59 37.3467 59 36.75V20.25C59 19.6533 58.7432 19.081 58.2861 18.659C57.829 18.2371 57.209 18 56.5625 18H54.125M50.875 18V19.5H54.125V18M50.875 18H54.125H50.875Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50.875 18H48.4375C47.791 18 47.171 18.2371 46.7139 18.659C46.2568 19.081 46 19.6533 46 20.25V36.75C46 37.3467 46.2568 37.919 46.7139 38.341C47.171 38.7629 47.791 39 48.4375 39H56.5625C57.209 39 57.829 38.7629 58.2861 38.341C58.7432 37.919 59 37.3467 59 36.75V20.25C59 19.6533 58.7432 19.081 58.2861 18.659C57.829 18.2371 57.209 18 56.5625 18H54.125M50.875 18V19.5H54.125V18M50.875 18H54.125",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 47.5,
    y: 22.5,
    width: 10,
    height: 6,
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 47.5,
    y: 30.5,
    width: 10,
    height: 6,
    fill: "currentColor"
  }));
};
var _default = exports["default"] = BiconPresetflex3col;