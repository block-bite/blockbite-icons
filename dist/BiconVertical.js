function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconVertical = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("line", {
  x1: 14,
  y1: 8,
  x2: 14,
  y2: 22,
  stroke: "black",
  strokeWidth: 4
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 0L21 8H7L14 0Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 28L7 20L21 20L14 28Z",
  fill: "black"
}));
export default BiconVertical;