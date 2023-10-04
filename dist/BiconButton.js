function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from "react";
const BiconButton = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M15.887 31.3028C15.664 31.0799 15.4923 30.811 15.3839 30.5148C15.2756 30.2187 15.2332 29.9025 15.2597 29.5882C15.2862 29.274 15.381 28.9694 15.5374 28.6956C15.6939 28.4218 15.9082 28.1854 16.1654 28.003C16.607 27.7107 17.137 27.5825 17.6634 27.6407C18.1897 27.6989 18.679 27.9398 19.046 28.3215L20.6862 29.9563V16.3333C20.6869 16.0172 20.7567 15.7051 20.8905 15.4187C21.0243 15.1323 21.219 14.8786 21.461 14.6752C21.703 14.4718 21.9864 14.3236 22.2915 14.241C22.5967 14.1585 22.9161 14.1434 23.2277 14.197C23.7461 14.3009 24.2113 14.584 24.5419 14.9966C24.8725 15.4092 25.0473 15.925 25.0357 16.4536V21.75H30.395C31.1404 21.737 31.8766 21.9153 32.5335 22.2678C33.2939 22.6854 33.9091 23.3247 34.2973 24.1005C34.6855 24.8763 34.8283 25.752 34.7067 26.6109L34.2506 29.797C33.9906 31.6051 33.1508 33.2801 31.8575 34.5702C31.045 35.3794 29.9449 35.8337 28.7982 35.8333H22.2245C21.0781 35.8334 19.9784 35.3792 19.1662 34.5702L15.887 31.3028Z",
  fill: "#F5F5F5"
}));
export default BiconButton;