function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconAll = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: props.width || "1em",
  height: props.height || "1em",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M26.9231 11.7115V9.08654C26.9231 8.39035 26.6313 7.72267 26.112 7.23039C25.5927 6.7381 24.8883 6.46154 24.1538 6.46154H3.84615C3.11171 6.46154 2.40734 6.7381 1.88801 7.23039C1.36868 7.72267 1.07692 8.39035 1.07692 9.08654V17.8365C1.07692 18.5327 1.36868 19.2004 1.88801 19.6927C2.40734 20.185 3.11171 20.4615 3.84615 20.4615L24.1538 20.4615C24.8883 20.4615 25.5927 20.185 26.112 19.6927C26.6313 19.2004 26.9231 18.5327 26.9231 17.8365V15.2115V11.7115ZM5.62926 16H4L6.48251 9H8.44184L10.9208 16H9.29158L8.75917 14.4038H6.16271L5.62926 16ZM7.49027 10.5996L8.37383 13.2485H6.54881L7.43409 10.5996H7.49027ZM11.7864 16V9H13.3068V14.7798H16.3898V16H11.7864ZM17.3966 9V16H22V14.7798H18.917V9H17.3966Z",
  fill: "black"
}));
export default BiconAll;