function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const bHorizontal = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_283_152)"
}, /*#__PURE__*/React.createElement("line", {
  x1: 20,
  y1: 14,
  x2: 6,
  y2: 14,
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("path", {
  d: "M28 14L20 21L20 7L28 14Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.17941e-07 14L8 6.99999L8 21L9.17941e-07 14Z",
  fill: "black"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_283_152"
}, /*#__PURE__*/React.createElement("rect", {
  width: 28,
  height: 28,
  fill: "white"
}))));
export default bHorizontal;