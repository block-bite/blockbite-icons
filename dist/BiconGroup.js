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
var BiconGroup = function BiconGroup(props) {
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
    d: "M33.6667 21.75C33.954 21.75 34.2295 21.6359 34.4327 21.4327C34.6359 21.2295 34.75 20.954 34.75 20.6667V16.3333C34.75 16.046 34.6359 15.7705 34.4327 15.5673C34.2295 15.3641 33.954 15.25 33.6667 15.25H29.3333C29.046 15.25 28.7705 15.3641 28.5673 15.5673C28.3641 15.7705 28.25 16.046 28.25 16.3333V17.4167H21.75V16.3333C21.75 16.046 21.6359 15.7705 21.4327 15.5673C21.2295 15.3641 20.954 15.25 20.6667 15.25H16.3333C16.046 15.25 15.7705 15.3641 15.5673 15.5673C15.3641 15.7705 15.25 16.046 15.25 16.3333V20.6667C15.25 20.954 15.3641 21.2295 15.5673 21.4327C15.7705 21.6359 16.046 21.75 16.3333 21.75H17.4167V28.25H16.3333C16.046 28.25 15.7705 28.3641 15.5673 28.5673C15.3641 28.7705 15.25 29.046 15.25 29.3333V33.6667C15.25 33.954 15.3641 34.2295 15.5673 34.4327C15.7705 34.6359 16.046 34.75 16.3333 34.75H20.6667C20.954 34.75 21.2295 34.6359 21.4327 34.4327C21.6359 34.2295 21.75 33.954 21.75 33.6667V32.5833H28.25V33.6667C28.25 33.954 28.3641 34.2295 28.5673 34.4327C28.7705 34.6359 29.046 34.75 29.3333 34.75H33.6667C33.954 34.75 34.2295 34.6359 34.4327 34.4327C34.6359 34.2295 34.75 33.954 34.75 33.6667V29.3333C34.75 29.046 34.6359 28.7705 34.4327 28.5673C34.2295 28.3641 33.954 28.25 33.6667 28.25H32.5833V21.75H33.6667ZM30.4167 28.25H29.3333C29.046 28.25 28.7705 28.3641 28.5673 28.5673C28.3641 28.7705 28.25 29.046 28.25 29.3333V30.4167H21.75V29.3333C21.75 29.046 21.6359 28.7705 21.4327 28.5673C21.2295 28.3641 20.954 28.25 20.6667 28.25H19.5833V21.75H20.6667C20.954 21.75 21.2295 21.6359 21.4327 21.4327C21.6359 21.2295 21.75 20.954 21.75 20.6667V19.5833H28.25V20.6667C28.25 20.954 28.3641 21.2295 28.5673 21.4327C28.7705 21.6359 29.046 21.75 29.3333 21.75H30.4167V28.25Z",
    fill: "#F5F5F5"
  }));
};
var _default = exports["default"] = BiconGroup;