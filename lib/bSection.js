function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const bSection = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 50 50",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 50,
  height: 50,
  fill: "black"
}), /*#__PURE__*/React.createElement("path", {
  d: "M36 23.7778H14V15.2222C14 14.8981 14.1288 14.5872 14.358 14.358C14.5872 14.1288 14.8981 14 15.2222 14H34.7778C35.1019 14 35.4128 14.1288 35.642 14.358C35.8712 14.5872 36 14.8981 36 15.2222V23.7778ZM15.2222 36H23.7778V26.2222H14V34.7778C14 35.1019 14.1288 35.4128 14.358 35.642C14.5872 35.8712 14.8981 36 15.2222 36ZM34.7778 36C35.1019 36 35.4128 35.8712 35.642 35.642C35.8712 35.4128 36 35.1019 36 34.7778V26.2222H26.2222V36H34.7778Z",
  fill: "#F5F5F5"
}));
export default bSection;