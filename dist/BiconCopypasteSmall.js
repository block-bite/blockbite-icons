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
var BiconCopypasteSmall = function BiconCopypasteSmall(props) {
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
    d: "M5 20.2V12.2C5 11.9878 5.08194 11.7843 5.22781 11.6343C5.37367 11.4843 5.5715 11.4 5.77778 11.4H12C12.2063 11.4 12.4041 11.4843 12.55 11.6343C12.6958 11.7843 12.7778 11.9878 12.7778 12.2V20.2C12.7778 20.4122 12.6958 20.6157 12.55 20.7657C12.4041 20.9157 12.2063 21 12 21H5.77778C5.5715 21 5.37367 20.9157 5.22781 20.7657C5.08194 20.6157 5 20.4122 5 20.2ZM18.2222 5H10.4444C10.2382 5 10.0403 5.08429 9.89447 5.23431C9.74861 5.38434 9.66667 5.58783 9.66667 5.8V6.6H17.0556C17.1587 6.6 17.2576 6.64214 17.3305 6.71716C17.4035 6.79217 17.4444 6.89391 17.4444 7V15.4H18.2222C18.4285 15.4 18.6263 15.3157 18.7722 15.1657C18.9181 15.0157 19 14.8122 19 14.6V5.8C19 5.58783 18.9181 5.38434 18.7722 5.23431C18.6263 5.08429 18.4285 5 18.2222 5ZM15.1111 18.6C15.3174 18.6 15.5152 18.5157 15.6611 18.3657C15.8069 18.2157 15.8889 18.0122 15.8889 17.8V9C15.8889 8.78783 15.8069 8.58434 15.6611 8.43431C15.5152 8.28429 15.3174 8.2 15.1111 8.2H7.33333C7.12705 8.2 6.92922 8.28429 6.78336 8.43431C6.6375 8.58434 6.55556 8.78783 6.55556 9V9.8H13.9444C14.0476 9.8 14.1465 9.84214 14.2194 9.91716C14.2924 9.99217 14.3333 10.0939 14.3333 10.2V18.6H15.1111Z",
    fill: "white"
  }));
};
var _default = exports["default"] = BiconCopypasteSmall;