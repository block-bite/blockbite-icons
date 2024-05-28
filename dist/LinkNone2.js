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
var LinkNone2 = function LinkNone2(props) {
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
    d: "M8.51194 3.00544C8.35757 3.1103 8.1921 3.2726 7.7651 3.6996L7.14638 4.31832C6.95112 4.51359 6.63454 4.51359 6.43928 4.31832C6.24401 4.12306 6.24401 3.80648 6.43928 3.61122L7.058 2.9925C7.0725 2.978 7.08679 2.96369 7.1009 2.94958C7.47044 2.57994 7.70691 2.34339 7.95001 2.17825C8.94398 1.50302 10.2377 1.46816 11.2277 2.11835C11.4692 2.27692 11.7002 2.50803 12.0515 2.85946C12.0662 2.87413 12.081 2.88901 12.0961 2.90411C12.1112 2.9192 12.1261 2.93408 12.1408 2.94874C12.4922 3.30004 12.7233 3.53105 12.8819 3.77251C13.5321 4.76255 13.4972 6.05626 12.822 7.05023C12.6568 7.29333 12.4203 7.52979 12.0507 7.89932C12.0366 7.91343 12.0222 7.92774 12.0077 7.94225L11.389 8.56096C11.1938 8.75623 10.8772 8.75623 10.6819 8.56096C10.4867 8.3657 10.4867 8.04912 10.6819 7.85386L11.3006 7.23514C11.7276 6.80814 11.8899 6.64267 11.9948 6.4883C12.4543 5.81195 12.4633 4.95678 12.046 4.32144C11.9513 4.17717 11.8009 4.0231 11.389 3.61122C10.9771 3.19933 10.8231 3.04896 10.6788 2.95422C10.0435 2.53697 9.18829 2.54597 8.51194 3.00544ZM4.31796 7.14675L3.69924 7.76547C3.27224 8.19247 3.10993 8.35794 3.00507 8.5123C2.54561 9.18866 2.53661 10.0438 2.95385 10.6792C3.0486 10.8234 3.19896 10.9775 3.61085 11.3894C4.02274 11.8013 4.17681 11.9516 4.32107 12.0464C4.95642 12.4636 5.81158 12.4546 6.48794 11.9952C6.6423 11.8903 6.80777 11.728 7.23477 11.301L7.85349 10.6823C8.04875 10.487 8.36533 10.487 8.5606 10.6823C8.75586 10.8775 8.75586 11.1941 8.5606 11.3894L7.94188 12.0081C7.92738 12.0226 7.91307 12.0369 7.89897 12.051C7.52943 12.4207 7.29296 12.6572 7.04986 12.8224C6.05589 13.4976 4.76219 13.5324 3.77214 12.8823C3.53068 12.7237 3.29967 12.4926 2.94837 12.1411C2.93371 12.1265 2.91883 12.1116 2.90374 12.0965C2.88865 12.0814 2.87377 12.0665 2.8591 12.0519C2.50766 11.7006 2.27656 11.4696 2.11799 11.2281C1.4678 10.2381 1.50265 8.94435 2.17788 7.95038C2.34303 7.70727 2.57957 7.4708 2.94922 7.10127C2.96333 7.08716 2.97763 7.07286 2.99213 7.05836L3.61085 6.43964C3.80611 6.24438 4.12269 6.24438 4.31796 6.43964C4.51322 6.63491 4.51322 6.95149 4.31796 7.14675Z",
    fill: "black"
  }));
};
var _default = exports["default"] = LinkNone2;