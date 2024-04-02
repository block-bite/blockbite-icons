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
var BiconPresetflex2col = function BiconPresetflex2col(props) {
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
    y: 7,
    width: 21,
    height: 27,
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 32,
    y: 7,
    width: 21,
    height: 27,
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50.875 18H48.4375C47.791 18 47.171 18.2371 46.7139 18.659C46.2568 19.081 46 19.6533 46 20.25V36.75C46 37.3467 46.2568 37.919 46.7139 38.341C47.171 38.7629 47.791 39 48.4375 39H56.5625C57.209 39 57.829 38.7629 58.2861 38.341C58.7432 37.919 59 37.3467 59 36.75V20.25C59 19.6533 58.7432 19.081 58.2861 18.659C57.829 18.2371 57.209 18 56.5625 18H54.125M50.875 18V19.5H54.125V18M50.875 18H54.125H50.875Z",
    fill: "white"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50.875 18H48.4375C47.791 18 47.171 18.2371 46.7139 18.659C46.2568 19.081 46 19.6533 46 20.25V36.75C46 37.3467 46.2568 37.919 46.7139 38.341C47.171 38.7629 47.791 39 48.4375 39H56.5625C57.209 39 57.829 38.7629 58.2861 38.341C58.7432 37.919 59 37.3467 59 36.75V20.25C59 19.6533 58.7432 19.081 58.2861 18.659C57.829 18.2371 57.209 18 56.5625 18H54.125M50.875 18V19.5H54.125V18M50.875 18H54.125",
    stroke: "black",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 47.5,
    y: 22.5,
    width: 10,
    height: 6,
    fill: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: 47.5,
    y: 30.5,
    width: 10,
    height: 6,
    fill: "black"
  }));
};
var _default = exports["default"] = BiconPresetflex2col;