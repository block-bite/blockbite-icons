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
var BiconDraggableSurface = function BiconDraggableSurface(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: "50",
    height: "50",
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M27 10H30V11.625H28.625V13H27V10ZM27 20V23H30V21.375H28.625V20H27ZM37 23H40V20H38.375V21.375H37V23ZM40 13V10H37V11.625H38.375V13H40ZM31.875 10V13H35.125V10H31.875ZM40 14.875H37V18.125H40V14.875ZM35.125 23V20H31.875V23H35.125ZM27 18.125H30V14.875H27V18.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M9 10H12V11.625H10.625V13H9V10ZM9 20V23H12V21.375H10.625V20H9ZM19 23H22V20H20.375V21.375H19V23ZM22 13V10H19V11.625H20.375V13H22ZM13.875 10V13H17.125V10H13.875ZM22 14.875H19V18.125H22V14.875ZM17.125 23V20H13.875V23H17.125ZM9 18.125H12V14.875H9V18.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M9 28H12V29.625H10.625V31H9V28ZM9 38V41H12V39.375H10.625V38H9ZM19 41H22V38H20.375V39.375H19V41ZM22 31V28H19V29.625H20.375V31H22ZM13.875 28V31H17.125V28H13.875ZM22 32.875H19V36.125H22V32.875ZM17.125 41V38H13.875V41H17.125ZM9 36.125H12V32.875H9V36.125Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M27 28H30V29.625H28.625V31H27V28ZM27 38V41H30V39.375H28.625V38H27ZM37 41H40V38H38.375V39.375H37V41ZM40 31V28H37V29.625H38.375V31H40ZM31.875 28V31H35.125V28H31.875ZM40 32.875H37V36.125H40V32.875ZM35.125 41V38H31.875V41H35.125ZM27 36.125H30V32.875H27V36.125Z",
    fill: "#F5F5F5"
  }));
};
var _default = exports["default"] = BiconDraggableSurface;