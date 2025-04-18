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
var BorderSplit = function BorderSplit(props) {
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
    d: "M7.5 5.02499C7.77614 5.02499 8 5.24885 8 5.52499C8 5.80114 7.77614 6.02499 7.5 6.02499C7.22386 6.02499 7 5.80114 7 5.52499C7 5.24885 7.22386 5.02499 7.5 5.02499ZM7.5 3.02499C7.77614 3.02499 8 3.24885 8 3.52499C8 3.80114 7.77614 4.02499 7.5 4.02499C7.22386 4.02499 7 3.80114 7 3.52499C7 3.24885 7.22386 3.02499 7.5 3.02499ZM7.5 7.02499C7.77614 7.02499 8 7.24885 8 7.52499C8 7.80114 7.77614 8.02499 7.5 8.02499C7.22386 8.02499 7 7.80114 7 7.52499C7 7.24885 7.22386 7.02499 7.5 7.02499ZM7.5 13.0254C7.77614 13.0254 8 13.2492 8 13.5254C8 13.8015 7.77614 14.0254 7.5 14.0254C7.22386 14.0254 7 13.8015 7 13.5254C7 13.2492 7.22386 13.0254 7.5 13.0254ZM7.5 1.02499C7.77614 1.02499 8 1.24885 8 1.52499C8 1.80114 7.77614 2.02499 7.5 2.02499C7.22386 2.02499 7 1.80114 7 1.52499C7 1.24885 7.22386 1.02499 7.5 1.02499ZM13.5 7.02499C13.7761 7.02499 14 7.24885 14 7.52499C14 7.80114 13.7761 8.02499 13.5 8.02499C13.2239 8.02499 13 7.80114 13 7.52499C13 7.24885 13.2239 7.02499 13.5 7.02499ZM5.5 7.02499C5.77614 7.02499 6 7.24885 6 7.52499C6 7.80114 5.77614 8.02499 5.5 8.02499C5.22386 8.02499 5 7.80114 5 7.52499C5 7.24885 5.22386 7.02499 5.5 7.02499ZM3.5 7.02499C3.77614 7.02499 4 7.24885 4 7.52499C4 7.80114 3.77614 8.02499 3.5 8.02499C3.22386 8.02499 3 7.80114 3 7.52499C3 7.24885 3.22386 7.02499 3.5 7.02499ZM9.5 7.02499C9.77614 7.02499 10 7.24885 10 7.52499C10 7.80114 9.77614 8.02499 9.5 8.02499C9.22386 8.02499 9 7.80114 9 7.52499C9 7.24885 9.22386 7.02499 9.5 7.02499ZM11.5 7.02499C11.7761 7.02499 12 7.24885 12 7.52499C12 7.80114 11.7761 8.02499 11.5 8.02499C11.2239 8.02499 11 7.80114 11 7.52499C11 7.24885 11.2239 7.02499 11.5 7.02499ZM7.5 9.02499C7.77614 9.02499 8 9.24885 8 9.52499C8 9.80114 7.77614 10.025 7.5 10.025C7.22386 10.025 7 9.80114 7 9.52499C7 9.24885 7.22386 9.02499 7.5 9.02499ZM7.5 11.025C7.77614 11.025 8 11.2489 8 11.525C8 11.8011 7.77614 12.025 7.5 12.025C7.22386 12.025 7 11.8011 7 11.525C7 11.2489 7.22386 11.025 7.5 11.025ZM1.5 7.02499C1.77614 7.02499 2 7.24885 2 7.52499C2 7.80114 1.77614 8.02499 1.5 8.02499C1.22386 8.02499 1 7.80114 1 7.52499C1 7.24885 1.22386 7.02499 1.5 7.02499ZM1.5 0.999939H6V1.99994H2V5.99994H1V1.49994C1 1.2238 1.22386 0.999939 1.5 0.999939ZM9 1.99994V0.999939H13.5C13.7761 0.999939 14 1.2238 14 1.49994V5.99994H13V1.99994H9ZM1 8.99994H2V12.9999H6V13.9999H1.5C1.22386 13.9999 1 13.7761 1 13.4999V8.99994ZM13 8.99994H14V13.4999C14 13.7761 13.7761 13.9999 13.5 13.9999H9.5V12.9999H13V8.99994Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = BorderSplit;