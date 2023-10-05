function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconMobile = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M9 2C7.89543 2 7 2.89543 7 4V24C7 25.1046 7.89543 26 9 26H19C20.1046 26 21 25.1046 21 24V4C21 2.89543 20.1046 2 19 2H9ZM16 24H12V25H16V24Z",
  fill: "currentColor"
}));
export default BiconMobile;