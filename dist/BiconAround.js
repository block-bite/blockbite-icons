function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconAround = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_283_139)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 14V23H23V5H14",
  stroke: "currentColor",
  strokeWidth: 3
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 4.33013L14 -2.62268e-07L14 8L8 4.33013Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.66987 8L8 14L-2.62268e-07 14L3.66987 8Z",
  fill: "currentColor"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_283_139"
}, /*#__PURE__*/React.createElement("rect", {
  width: 28,
  height: 28,
  fill: "white"
}))));
export default BiconAround;