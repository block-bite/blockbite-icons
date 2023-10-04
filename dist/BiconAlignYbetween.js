function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconAlignYbetween = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  x1: 14,
  y1: 25,
  x2: 14,
  y2: 3,
  stroke: "black",
  strokeWidth: 4,
  strokeLinecap: "square"
}), /*#__PURE__*/React.createElement("rect", {
  x: 23,
  y: 1,
  width: 7,
  height: 18,
  transform: "rotate(90 23 1)",
  fill: "black"
}), /*#__PURE__*/React.createElement("rect", {
  x: 23,
  y: 20,
  width: 7,
  height: 18,
  transform: "rotate(90 23 20)",
  fill: "black"
}));
export default BiconAlignYbetween;