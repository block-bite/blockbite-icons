function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconClose = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  x1: 22.4142,
  y1: 5.41421,
  x2: 5.41421,
  y2: 22.4142,
  stroke: "currentColor",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("line", {
  y1: -2,
  x2: 24.0416,
  y2: -2,
  transform: "matrix(0.707107 0.707107 0.707107 -0.707107 7 4)",
  stroke: "currentColor",
  strokeWidth: 4
}));
export default BiconClose;