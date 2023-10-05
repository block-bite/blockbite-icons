function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconScaleY = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M13.6316 18.5L1.00002 18.5L1.00002 11.5L13.6316 18.5Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.00001 13.5L1.00002 6.5L13.6316 6.5L1.00001 13.5Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.3684 6.5L25 6.5L25 13.5L12.3684 6.5Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M25 11.5L25 18.5L12.3684 18.5L25 11.5Z",
  fill: "currentColor"
}));
export default BiconScaleY;