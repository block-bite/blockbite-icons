function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconGrid = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 50 50",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 50,
  height: 50,
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("rect", {
  x: 9,
  y: 10,
  width: 13,
  height: 13,
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("rect", {
  x: 27,
  y: 10,
  width: 13,
  height: 13,
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("rect", {
  x: 9,
  y: 28,
  width: 13,
  height: 13,
  fill: "#F5F5F5"
}), /*#__PURE__*/React.createElement("rect", {
  x: 27,
  y: 28,
  width: 13,
  height: 13,
  fill: "#F5F5F5"
}));
export default BiconGrid;