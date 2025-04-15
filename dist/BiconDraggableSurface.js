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
var BiconDraggableSurface = function BiconDraggableSurface(props) {
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
    d: "M12 10V13H9V10H12Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20V23H9V20H12Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 20H22V23H19V20Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 10V13H22V10H19Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.875 10V13H17.125V10H13.875Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 14.875H19V18.125H22V14.875Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.125 23V20H13.875V23H17.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 18.125H12V14.875H9V18.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 13V10H30V13H27Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 20V23H30V20H27Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37 20H40V23H37V20Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37 13V10H40V13H37Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M31.875 10V13H35.125V10H31.875Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 14.875H37V18.125H40V14.875Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M35.125 23V20H31.875V23H35.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 18.125H30V14.875H27V18.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 28H9V31H12V28Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 38H9V41H12V38Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 38V41H22V38H19Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 28H22V31H19V28Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.875 31V28H17.125V31H13.875Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 32.875H22V36.125H19V32.875Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.125 38V41H13.875V38H17.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 36.125H9V32.875H12V36.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 28V31H27V28H30Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 38V41H27V38H30Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37 38H40V41H37V38Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37 28V31H40V28H37Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M31.875 28V31H35.125V28H31.875Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 32.875H37V36.125H40V32.875Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M35.125 41V38H31.875V41H35.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 36.125H30V32.875H27V36.125Z",
    fill: "#F5F5F5"
  }));
};
var _default = exports["default"] = BiconDraggableSurface;