function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconRotateRight = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M23.5607 10.9393C24.1464 11.5251 24.1464 12.4749 23.5607 13.0607L14.0147 22.6066C13.4289 23.1924 12.4792 23.1924 11.8934 22.6066C11.3076 22.0208 11.3076 21.0711 11.8934 20.4853L20.3787 12L11.8934 3.51472C11.3076 2.92893 11.3076 1.97919 11.8934 1.3934C12.4792 0.807611 13.4289 0.807611 14.0147 1.3934L23.5607 10.9393ZM10.5 10.5H22.5V13.5L10.5 13.5V10.5ZM10.5 13.5C9.49004 13.5 7.9417 13.8153 6.68896 14.7173C5.5127 15.5642 4.5 16.9889 4.5 19.5H1.5C1.5 16.0111 2.9873 13.6858 4.93604 12.2827C6.8083 10.9347 9.00996 10.5 10.5 10.5V13.5Z",
  fill: "black"
}));
export default BiconRotateRight;