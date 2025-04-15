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
var Container = function Container(props) {
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
    d: "M1.5 2C1.22386 2 1 1.77614 1 1.5C1 1.22386 1.22386 1 1.5 1C1.77614 1 2 1.22386 2 1.5C2 1.77614 1.77614 2 1.5 2ZM5 14H10C10.5523 14 11 13.5523 11 13V2C11 1.44772 10.5523 1 10 1H5C4.44772 1 4 1.44771 4 2V13C4 13.5523 4.44772 14 5 14ZM10 13V2L5 2L5 13H10ZM14 1.5C14 1.22386 13.7761 1 13.5 1C13.2239 1 13 1.22386 13 1.5C13 1.77614 13.2239 2 13.5 2C13.7761 2 14 1.77614 14 1.5ZM1.5 4C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3C1.77614 3 2 3.22386 2 3.5C2 3.77614 1.77614 4 1.5 4ZM14 3.5C14 3.22386 13.7761 3 13.5 3C13.2239 3 13 3.22386 13 3.5C13 3.77614 13.2239 4 13.5 4C13.7761 4 14 3.77614 14 3.5ZM1.5 6C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5C1.77614 5 2 5.22386 2 5.5C2 5.77614 1.77614 6 1.5 6ZM14 5.5C14 5.22386 13.7761 5 13.5 5C13.2239 5 13 5.22386 13 5.5C13 5.77614 13.2239 6 13.5 6C13.7761 6 14 5.77614 14 5.5ZM1.5 8C1.22386 8 1 7.77614 1 7.5C1 7.22386 1.22386 7 1.5 7C1.77614 7 2 7.22386 2 7.5C2 7.77614 1.77614 8 1.5 8ZM14 7.5C14 7.22386 13.7761 7 13.5 7C13.2239 7 13 7.22386 13 7.5C13 7.77614 13.2239 8 13.5 8C13.7761 8 14 7.77614 14 7.5ZM1.5 10C1.22386 10 1 9.77614 1 9.5C1 9.22386 1.22386 9 1.5 9C1.77614 9 2 9.22386 2 9.5C2 9.77614 1.77614 10 1.5 10ZM14 9.5C14 9.22386 13.7761 9 13.5 9C13.2239 9 13 9.22386 13 9.5C13 9.77614 13.2239 10 13.5 10C13.7761 10 14 9.77614 14 9.5ZM1.5 12C1.22386 12 1 11.7761 1 11.5C1 11.2239 1.22386 11 1.5 11C1.77614 11 2 11.2239 2 11.5C2 11.7761 1.77614 12 1.5 12ZM14 11.5C14 11.2239 13.7761 11 13.5 11C13.2239 11 13 11.2239 13 11.5C13 11.7761 13.2239 12 13.5 12C13.7761 12 14 11.7761 14 11.5ZM1.5 14C1.22386 14 1 13.7761 1 13.5C1 13.2239 1.22386 13 1.5 13C1.77614 13 2 13.2239 2 13.5C2 13.7761 1.77614 14 1.5 14ZM14 13.5C14 13.2239 13.7761 13 13.5 13C13.2239 13 13 13.2239 13 13.5C13 13.7761 13.2239 14 13.5 14C13.7761 14 14 13.7761 14 13.5Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Container;