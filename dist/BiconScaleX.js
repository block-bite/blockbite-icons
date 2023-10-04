function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconScaleX = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M19.6316 12.3684L19.6316 25L11.8947 25L19.6316 12.3684Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14.1052 25L6.36838 25L6.36838 12.3684L14.1052 25Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.36838 13.6316L6.36838 0.999999L14.1052 1L6.36838 13.6316Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.8947 0.999999L19.6316 0.999999L19.6316 13.6316L11.8947 0.999999Z",
  fill: "black"
}));
export default BiconScaleX;