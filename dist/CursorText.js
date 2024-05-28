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
var CursorText = function CursorText(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 1.5C4 1.77614 4.22386 2 4.5 2C5.42215 2 6.0399 2.23054 6.42075 2.56379C6.79286 2.88939 7 3.36626 7 4V7H5.75C5.47386 7 5.25 7.22386 5.25 7.5C5.25 7.77614 5.47386 8 5.75 8H7V11C7 11.6337 6.79286 12.1106 6.42075 12.4362C6.0399 12.7695 5.42215 13 4.5 13C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14C5.57785 14 6.4601 13.7305 7.07925 13.1888C7.24168 13.0467 7.38169 12.8896 7.5 12.7198C7.61832 12.8896 7.75832 13.0467 7.92075 13.1888C8.5399 13.7305 9.42215 14 10.5 14C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13C9.57785 13 8.9601 12.7695 8.57925 12.4362C8.20714 12.1106 8 11.6337 8 11V8H9.25C9.52614 8 9.75 7.77614 9.75 7.5C9.75 7.22386 9.52614 7 9.25 7H8V4C8 3.36626 8.20714 2.88939 8.57925 2.56379C8.9601 2.23054 9.57785 2 10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1C9.42215 1 8.5399 1.26946 7.92075 1.81121C7.75832 1.95333 7.61832 2.11043 7.5 2.28023C7.38168 2.11043 7.24168 1.95333 7.07925 1.81121C6.4601 1.26946 5.57785 1 4.5 1C4.22386 1 4 1.22386 4 1.5Z",
    fill: "black"
  }));
};
var _default = exports["default"] = CursorText;