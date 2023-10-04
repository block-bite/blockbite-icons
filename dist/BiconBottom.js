function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconBottom = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  y1: -2,
  x2: 14,
  y2: -2,
  transform: "matrix(-4.37114e-08 -1 -1 4.37114e-08 12 18)",
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 24L21 16H7L14 24Z",
  fill: "black"
}));
export default BiconBottom;