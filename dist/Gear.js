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
var Gear = function Gear(props) {
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
    d: "M7.50005 9.92502C6.1608 9.92502 5.07513 8.83935 5.07513 7.50011C5.07513 6.16087 6.1608 5.0752 7.50005 5.0752C8.83929 5.0752 9.92496 6.16087 9.92496 7.50011C9.92496 8.83935 8.83929 9.92502 7.50005 9.92502ZM7.50005 9.02502C6.65786 9.02502 5.97513 8.34229 5.97513 7.50011C5.97513 6.65792 6.65786 5.9752 7.50005 5.9752C8.34223 5.9752 9.02496 6.65792 9.02496 7.50011C9.02496 8.34229 8.34223 9.02502 7.50005 9.02502ZM6.24198 1.31234L6.0039 2.3625C5.6249 2.47272 5.26335 2.62366 4.92436 2.81016L4.01335 2.23588C3.67748 2.02416 3.23978 2.07315 2.95903 2.3539L2.35294 2.95999C2.0722 3.24073 2.0232 3.67843 2.23493 4.01431L2.80942 4.92564C2.62307 5.26453 2.47227 5.62597 2.36216 6.00484L1.31209 6.2429C0.924883 6.33068 0.650024 6.67483 0.650024 7.07186V7.929C0.650024 8.32604 0.924883 8.67019 1.31209 8.75797L2.36228 8.99606C2.47246 9.37503 2.62335 9.73655 2.80979 10.0755L2.2354 10.9867C2.02367 11.3226 2.07267 11.7603 2.35341 12.041L2.95951 12.6471C3.24025 12.9279 3.67795 12.9769 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.638L6.24198 13.6882C6.32977 14.0754 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0754 8.75705 13.6882L8.99505 12.6384C9.37411 12.5282 9.73573 12.3774 10.0748 12.1909L10.986 12.7653C11.3218 12.9771 11.7595 12.9281 12.0403 12.6473L12.6464 12.0412C12.9271 11.7605 12.9761 11.3228 12.7644 10.9869L12.1902 10.0761C12.3768 9.73691 12.5278 9.37518 12.638 8.99599L13.6879 8.75797C14.0751 8.67019 14.35 8.32604 14.35 7.929V7.07186C14.35 6.67483 14.0751 6.33068 13.6879 6.2429L12.6381 6.00491C12.528 5.62581 12.3771 5.26417 12.1906 4.9251L12.7648 4.0141C12.9766 3.67823 12.9276 3.24053 12.6468 2.95978L12.0407 2.35369C11.76 2.07295 11.3223 2.02395 10.9864 2.23568L10.0755 2.80992C9.73622 2.62331 9.37437 2.47232 8.99505 2.36212L8.75705 1.31234C8.66927 0.925127 8.32512 0.650269 7.92809 0.650269H7.07095C6.67391 0.650269 6.32977 0.925127 6.24198 1.31234ZM6.71543 3.06842L7.07095 1.50027H7.92809L8.28355 3.06819C8.94267 3.1839 9.5524 3.44305 10.0794 3.81227L11.4397 2.95473L12.0458 3.56082L11.1882 4.9212C11.5573 5.44801 11.8164 6.05753 11.9321 6.71641L13.5 7.07186V7.929L11.932 8.28447C11.8162 8.94345 11.557 9.55304 11.1878 10.0799L12.0453 11.4402L11.4392 12.0463L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.9321C6.0569 11.8163 5.44772 11.5573 4.92116 11.1884L3.56055 12.0461L2.95445 11.44L3.81213 10.0794C3.4431 9.55269 3.18403 8.94329 3.06825 8.28453L1.50002 7.929V7.07186L3.06818 6.71635C3.18388 6.05769 3.44283 5.44836 3.81171 4.92168L2.95398 3.56103L3.56008 2.95494L4.92053 3.81254C5.44724 3.44342 6.05665 3.18427 6.71543 3.06842Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Gear;