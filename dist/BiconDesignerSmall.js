function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconDesignerSmall = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 28,
  height: 28,
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_283_129)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 4V14C14.5231 14 19 9.52307 19 4H9Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip1_283_129)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 14L9 24C14.5231 24 19 19.5231 19 14L9 14Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_283_129"
}, /*#__PURE__*/React.createElement("rect", {
  width: 10,
  height: 10,
  fill: "white",
  transform: "translate(9 4)"
})), /*#__PURE__*/React.createElement("clipPath", {
  id: "clip1_283_129"
}, /*#__PURE__*/React.createElement("rect", {
  width: 10,
  height: 10,
  fill: "white",
  transform: "translate(9 14)"
}))));
export default BiconDesignerSmall;