function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconLeft = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  x1: 9,
  y1: 14,
  x2: 23,
  y2: 14,
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 14L11 7L11 21L3 14Z",
  fill: "black"
}));
export default BiconLeft;