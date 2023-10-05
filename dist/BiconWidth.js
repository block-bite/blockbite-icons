function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconWidth = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  x1: 3,
  y1: 14,
  x2: 24,
  y2: 14,
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("line", {
  x1: 2,
  y1: 8,
  x2: 2,
  y2: 20,
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("line", {
  x1: 26,
  y1: 8,
  x2: 26,
  y2: 20,
  stroke: "black",
  strokeWidth: 4
}));
export default BiconWidth;