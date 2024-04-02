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
var BiconLink = function BiconLink(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: props.width || "1em",
    height: props.height || "1em",
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    role: "img"
  }, props), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.2096 5.67976C16.2852 4.60423 17.7439 4 19.2649 4C20.786 4 22.2447 4.60423 23.3202 5.67976C24.3958 6.75529 25 8.21403 25 9.73506C25 11.2561 24.3958 12.7148 23.3202 13.7904L21.5582 15.5524C21.0809 16.0297 20.3071 16.0297 19.8298 15.5524C19.3524 15.0751 19.3524 14.3012 19.8298 13.8239L21.5918 12.0619C22.2089 11.4448 22.5556 10.6078 22.5556 9.73506C22.5556 8.86233 22.2089 8.02535 21.5918 7.40824C20.9746 6.79113 20.1377 6.44444 19.2649 6.44444C18.3922 6.44444 17.5552 6.79113 16.9381 7.40824L12.4253 11.9211C12.0529 12.2933 11.7748 12.7497 11.6152 13.2515C11.4556 13.7533 11.4187 14.2861 11.5077 14.805C11.5967 15.324 11.8089 15.8141 12.1266 16.234C12.4442 16.654 12.858 16.9916 13.3332 17.2185C13.9424 17.5093 14.2004 18.2389 13.9096 18.848C13.6187 19.4572 12.8892 19.7152 12.28 19.4244C11.4518 19.029 10.7307 18.4406 10.177 17.7087C9.62341 16.9767 9.25352 16.1226 9.09843 15.2181C8.94335 14.3136 9.0076 13.3851 9.28579 12.5105C9.56394 11.6361 10.0478 10.8412 10.6968 10.1926C10.6967 10.1927 10.6969 10.1925 10.6968 10.1926L15.2096 5.67976ZM14.0904 11.152C14.3813 10.5428 15.1108 10.2848 15.72 10.5756C16.5482 10.971 17.2694 11.5594 17.823 12.2913C18.3766 13.0233 18.7465 13.8774 18.9016 14.7819C19.0567 15.6864 18.9924 16.6149 18.7142 17.4895C18.4361 18.3639 17.9522 19.1588 17.3032 19.8074C17.3031 19.8075 17.3033 19.8073 17.3032 19.8074L12.7904 24.3202C11.7148 25.3958 10.2561 26 8.73506 26C7.21403 26 5.75529 25.3958 4.67976 24.3202C3.60423 23.2447 3 21.786 3 20.2649C3 18.7439 3.60423 17.2852 4.67976 16.2096L6.44176 14.4476C6.91907 13.9703 7.69294 13.9703 8.17024 14.4476C8.64755 14.925 8.64755 15.6988 8.17024 16.1761L6.40824 17.9381C5.79113 18.5552 5.44444 19.3922 5.44444 20.2649C5.44444 21.1377 5.79113 21.9746 6.40824 22.5918C7.02535 23.2089 7.86233 23.5556 8.73506 23.5556C9.60778 23.5556 10.4448 23.2089 11.0619 22.5918L15.5747 18.079C15.9471 17.7067 16.2252 17.2503 16.3848 16.7485C16.5444 16.2467 16.5813 15.714 16.4923 15.195C16.4033 14.676 16.1911 14.1859 15.8734 13.766C15.5558 13.346 15.142 13.0084 14.6668 12.7815C14.0576 12.4907 13.7996 11.7611 14.0904 11.152Z",
    fill: "black"
  }));
};
var _default = exports["default"] = BiconLink;