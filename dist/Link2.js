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
var Link2 = function Link2(props) {
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
    d: "M10.6788 2.95422C10.8231 3.04896 10.9771 3.19933 11.389 3.61122C11.8009 4.0231 11.9513 4.17717 12.046 4.32144C12.4633 4.95678 12.4543 5.81195 11.9948 6.4883C11.8899 6.64267 11.7276 6.80814 11.3006 7.23514L10.6819 7.85386C10.4867 8.04912 10.4867 8.3657 10.6819 8.56096C10.8772 8.75623 11.1938 8.75623 11.389 8.56096L12.0507 7.89932C12.4203 7.52979 12.6568 7.29333 12.822 7.05023C13.4972 6.05626 13.5321 4.76255 12.8819 3.77251C12.7233 3.53105 12.4922 3.30004 12.1408 2.94874L12.0515 2.85946C11.7002 2.50803 11.4692 2.27692 11.2277 2.11835C10.2377 1.46816 8.94398 1.50302 7.95001 2.17825C7.70691 2.34339 7.47044 2.57994 7.1009 2.94958L6.43928 3.61122C6.24401 3.80648 6.24401 4.12306 6.43928 4.31832C6.63454 4.51359 6.95112 4.51359 7.14638 4.31832L7.7651 3.6996C8.1921 3.2726 8.35757 3.1103 8.51194 3.00544C9.18829 2.54597 10.0435 2.53697 10.6788 2.95422ZM4.31796 6.43964C4.12269 6.24438 3.80611 6.24438 3.61085 6.43964L2.94922 7.10127C2.57957 7.4708 2.34303 7.70727 2.17788 7.95038C1.50265 8.94435 1.4678 10.2381 2.11799 11.2281C2.27656 11.4696 2.50766 11.7006 2.8591 12.0519L2.94837 12.1411C3.29967 12.4926 3.53068 12.7237 3.77214 12.8823C4.76219 13.5324 6.05589 13.4976 7.04986 12.8224C7.29296 12.6572 7.52943 12.4207 7.89896 12.051L8.5606 11.3894C8.75586 11.1941 8.75586 10.8775 8.5606 10.6823C8.36533 10.487 8.04875 10.487 7.85349 10.6823L7.23477 11.301C6.80777 11.728 6.6423 11.8903 6.48794 11.9952C5.81158 12.4546 4.95642 12.4636 4.32107 12.0464C4.17681 11.9516 4.02274 11.8013 3.61085 11.3894C3.19896 10.9775 3.0486 10.8234 2.95385 10.6792C2.53661 10.0438 2.54561 9.18866 3.00507 8.5123C3.10993 8.35794 3.27224 8.19247 3.69924 7.76547L4.31796 7.14675C4.51322 6.95149 4.51322 6.63491 4.31796 6.43964ZM9.62172 5.3785C9.42646 5.18324 9.10988 5.18324 8.91461 5.3785L5.37908 8.91404C5.18382 9.1093 5.18382 9.42588 5.37908 9.62114C5.57434 9.8164 5.89092 9.8164 6.08619 9.62114L9.62172 6.08561C9.81698 5.89035 9.81698 5.57376 9.62172 5.3785Z",
    fill: "currentColor"
  }));
};
var _default = exports["default"] = Link2;