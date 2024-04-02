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
var BiconImageSmall = function BiconImageSmall(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 28,
    height: 28,
    fill: "black"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.2 7H5.8C5.58783 7 5.38434 7.0856 5.23431 7.23798C5.08429 7.39035 5 7.59701 5 7.8125V19.1875C5 19.403 5.08429 19.6097 5.23431 19.762C5.38434 19.9144 5.58783 20 5.8 20H20.2C20.4122 20 20.6157 19.9144 20.7657 19.762C20.9157 19.6097 21 19.403 21 19.1875V7.8125C21 7.59701 20.9157 7.39035 20.7657 7.23798C20.6157 7.0856 20.4122 7 20.2 7ZM9 9.4375C9.31645 9.4375 9.62579 9.5328 9.88891 9.71136C10.152 9.88992 10.3571 10.1437 10.4782 10.4406C10.5993 10.7376 10.631 11.0643 10.5693 11.3795C10.5075 11.6947 10.3551 11.9843 10.1314 12.2115C9.90761 12.4388 9.62251 12.5936 9.31214 12.6563C9.00177 12.719 8.68007 12.6868 8.38771 12.5638C8.09534 12.4408 7.84546 12.2325 7.66965 11.9653C7.49384 11.6981 7.4 11.3839 7.4 11.0625C7.4 10.6315 7.56857 10.2182 7.86863 9.91345C8.16869 9.6087 8.57565 9.4375 9 9.4375ZM19.4 18.375H6.6V17.0206L9.8 14.3125L12.0856 16.0537L16.2 11.875L19.4 16.2081V18.375Z",
    fill: "white"
  }));
};
var _default = exports["default"] = BiconImageSmall;