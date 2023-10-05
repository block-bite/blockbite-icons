function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconColumns = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("rect", {
  x: 4,
  y: 4,
  width: 8,
  height: 20,
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("rect", {
  x: 17,
  y: 4,
  width: 8,
  height: 20,
  fill: "currentColor"
}));
export default BiconColumns;