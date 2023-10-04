function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconHeight = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  x1: 14,
  y1: 3,
  x2: 14,
  y2: 24,
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("line", {
  x1: 20,
  y1: 2,
  x2: 8,
  y2: 2,
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("line", {
  x1: 20,
  y1: 26,
  x2: 8,
  y2: 26,
  stroke: "black",
  strokeWidth: 4
}));
export default BiconHeight;