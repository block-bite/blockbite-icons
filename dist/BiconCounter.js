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
var BiconCounter = function BiconCounter(props) {
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
    d: "M17.2102 18.3636L15.2784 30H12.8182L14.3636 20.6989H14.2955L11.3523 22.3693L11.7159 20.1875L14.8977 18.3636H17.2102Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.044 30L18.3452 28.2273L23.1179 24.392C23.527 24.0511 23.8736 23.7443 24.1577 23.4716C24.4455 23.1989 24.6728 22.9318 24.8395 22.6705C25.0099 22.4053 25.1217 22.1193 25.1747 21.8125C25.2315 21.4716 25.2031 21.178 25.0895 20.9318C24.9796 20.6818 24.8016 20.4905 24.5554 20.358C24.313 20.2216 24.0213 20.1534 23.6804 20.1534C23.3243 20.1534 23.0005 20.2254 22.7088 20.3693C22.4171 20.5133 22.1747 20.7197 21.9815 20.9886C21.7884 21.2576 21.6596 21.5777 21.5952 21.9489H19.2599C19.3887 21.1875 19.6747 20.5265 20.1179 19.9659C20.5611 19.4053 21.1179 18.9716 21.7884 18.6648C22.4588 18.358 23.2012 18.2045 24.0156 18.2045C24.849 18.2045 25.5497 18.3523 26.1179 18.6477C26.6899 18.9394 27.1046 19.3447 27.3622 19.8636C27.6198 20.3826 27.6918 20.9773 27.5781 21.6477C27.5024 22.0909 27.3414 22.5265 27.0952 22.9545C26.849 23.3788 26.4626 23.8523 25.9361 24.375C25.4096 24.8939 24.688 25.517 23.7713 26.2443L21.7997 27.9091L21.7827 27.9886H26.6747L26.3395 30H18.044Z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32.5256 30.1591C31.6544 30.1591 30.9044 30.0133 30.2756 29.7216C29.6468 29.4299 29.1809 29.0246 28.8778 28.5057C28.5786 27.9867 28.482 27.3883 28.5881 26.7102H31.0312C30.9934 26.9905 31.0369 27.2386 31.1619 27.4545C31.2907 27.6705 31.482 27.8371 31.7358 27.9545C31.9934 28.072 32.2964 28.1307 32.6449 28.1307C33.035 28.1307 33.3949 28.0568 33.7244 27.9091C34.054 27.7614 34.3267 27.5606 34.5426 27.3068C34.7623 27.0492 34.8968 26.7595 34.946 26.4375C34.9953 26.1307 34.9536 25.8693 34.821 25.6534C34.6884 25.4337 34.4763 25.2652 34.1847 25.1477C33.893 25.0303 33.5312 24.9716 33.0994 24.9716H31.9688L32.2699 23.1648H33.2926C33.6714 23.1648 34.018 23.0947 34.3324 22.9545C34.6506 22.8144 34.9138 22.6193 35.1222 22.3693C35.3305 22.1193 35.4612 21.8295 35.5142 21.5C35.5597 21.2311 35.5388 20.9962 35.4517 20.7955C35.3684 20.5909 35.2206 20.4337 35.0085 20.3239C34.8002 20.2102 34.5294 20.1534 34.196 20.1534C33.8589 20.1534 33.5312 20.214 33.2131 20.3352C32.8949 20.4527 32.6259 20.6212 32.4062 20.8409C32.1866 21.0606 32.0521 21.3182 32.0028 21.6136H29.6562C29.7737 20.9432 30.054 20.3523 30.4972 19.8409C30.9441 19.3295 31.4991 18.9299 32.1619 18.642C32.8286 18.3504 33.5483 18.2045 34.321 18.2045C35.143 18.2045 35.8362 18.3636 36.4006 18.6818C36.965 18.9962 37.3741 19.4129 37.6278 19.9318C37.8854 20.447 37.965 21.0076 37.8665 21.6136C37.7566 22.2803 37.465 22.8087 36.9915 23.1989C36.5218 23.5852 35.9366 23.8352 35.2358 23.9489V24.0341C36.0199 24.1402 36.6108 24.4527 37.0085 24.9716C37.41 25.4905 37.5502 26.1212 37.429 26.8636C37.3267 27.5076 37.0483 28.0777 36.5938 28.5739C36.1392 29.0701 35.5616 29.4583 34.8608 29.7386C34.16 30.0189 33.3816 30.1591 32.5256 30.1591Z",
    fill: "#F5F5F5"
  }));
};
var _default = exports["default"] = BiconCounter;