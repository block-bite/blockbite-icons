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
var LinkBreak1 = function LinkBreak1(props) {
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
    d: "M13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645ZM3.33886 9.89338L2.57833 10.6539C1.80843 10.2534 1.23784 9.53693 1.05815 8.66967C0.999538 8.38681 0.999604 8.06004 0.999703 7.56313V7.43689C0.999604 6.93998 0.999538 6.61321 1.05815 6.33035C1.29846 5.17053 2.2379 4.28039 3.4182 4.055C3.70687 3.99988 4.04134 3.99993 4.56402 4.00001L5.49971 4.00001C5.77585 4.00001 5.99971 4.22387 5.99971 4.50001C5.99971 4.77615 5.77585 5.00001 5.49971 5.00001H4.62471C4.02084 5.00001 3.78907 5.00225 3.60577 5.03725C2.80262 5.19062 2.19157 5.78895 2.03735 6.53324C2.00233 6.70225 1.99971 6.91752 1.99971 7.50001C1.99971 8.08251 2.00233 8.29778 2.03735 8.46678C2.17398 9.12619 2.66918 9.67103 3.33886 9.89338ZM11.661 5.10679L12.4215 4.34631C13.1912 4.74686 13.7616 5.46323 13.9413 6.33035C13.9999 6.61321 13.9998 6.93998 13.9997 7.43688V7.56314C13.9998 8.06005 13.9999 8.38681 13.9413 8.66967C13.701 9.8295 12.7615 10.7196 11.5812 10.945C11.2925 11.0001 10.9581 11.0001 10.4354 11L9.49971 11C9.22357 11 8.99971 10.7762 8.99971 10.5C8.99971 10.2239 9.22357 10 9.49971 10H10.3747C10.9786 10 11.2104 9.99777 11.3937 9.96277C12.1968 9.8094 12.8079 9.21108 12.9621 8.46678C12.9971 8.29778 12.9997 8.08251 12.9997 7.50001C12.9997 6.91752 12.9971 6.70225 12.9621 6.53324C12.8255 5.87397 12.3304 5.32922 11.661 5.10679Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = LinkBreak1;