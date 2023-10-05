function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconRotateLeft = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M1.93934 10.9393C1.35355 11.5251 1.35355 12.4749 1.93934 13.0607L11.4853 22.6066C12.0711 23.1924 13.0208 23.1924 13.6066 22.6066C14.1924 22.0208 14.1924 21.0711 13.6066 20.4853L5.12132 12L13.6066 3.51472C14.1924 2.92893 14.1924 1.97919 13.6066 1.3934C13.0208 0.807611 12.0711 0.807611 11.4853 1.3934L1.93934 10.9393ZM15 10.5H3V13.5L15 13.5V10.5ZM15 13.5C16.01 13.5 17.5583 13.8153 18.811 14.7173C19.9873 15.5642 21 16.9889 21 19.5H24C24 16.0111 22.5127 13.6858 20.564 12.2827C18.6917 10.9347 16.49 10.5 15 10.5V13.5Z",
  fill: "currentColor"
}));
export default BiconRotateLeft;