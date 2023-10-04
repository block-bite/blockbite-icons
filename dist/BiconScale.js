function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconScale = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M3 11L3 3L11 3L3 11Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15 3L23 3L23 11L15 3Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M23 15L23 23L15 23L23 15Z",
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 23L3 23L3 15L11 23Z",
  fill: "black"
}));
export default BiconScale;