function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const bDesigner = props => /*#__PURE__*/React.createElement("svg", _extends({
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
}), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip0_283_187)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M26 9V26C35.3892 26 43 18.3892 43 9H26Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("g", {
  clipPath: "url(#clip1_283_187)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 26L9 43C18.3892 43 26 35.3892 26 26L9 26Z",
  fill: "white"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "clip0_283_187"
}, /*#__PURE__*/React.createElement("rect", {
  width: 17,
  height: 17,
  fill: "white",
  transform: "translate(26 9)"
})), /*#__PURE__*/React.createElement("clipPath", {
  id: "clip1_283_187"
}, /*#__PURE__*/React.createElement("rect", {
  width: 17,
  height: 17,
  fill: "white",
  transform: "translate(9 26)"
}))));
export default bDesigner;