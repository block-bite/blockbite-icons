function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconBottomRight = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  y1: -2,
  x2: 22.6274,
  y2: -2,
  transform: "matrix(-0.707107 -0.707107 -0.707107 0.707107 18 21)",
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 13L13 25H25V13Z",
  fill: "black"
}));
export default BiconBottomRight;