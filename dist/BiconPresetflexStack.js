function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconPresetflexStack = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 60 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 60,
  height: 40,
  fill: "white"
}), /*#__PURE__*/React.createElement("rect", {
  x: 7,
  y: 8,
  width: 46,
  height: 11,
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("rect", {
  x: 7,
  y: 22,
  width: 46,
  height: 11,
  fill: "currentColor"
}));
export default BiconPresetflexStack;