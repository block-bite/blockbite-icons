import * as React from "react";

const Eraser = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.06763 0.72921L14.2708 5.93235C14.466 6.12761 14.466 6.4442 14.2708 6.63946L7.3466 13.5636C6.76081 14.1494 5.81106 14.1494 5.22528 13.5636L1.43635 9.7747C0.850563 9.18891 0.850563 8.23917 1.43635 7.65338L8.36052 0.72921C8.55578 0.533948 8.87236 0.533948 9.06763 0.72921ZM4.10554 6.3984L8.60157 10.8944L13.2101 6.28591L8.71407 1.78987L4.10554 6.3984ZM3.39843 7.10551L2.14346 8.36049C1.94819 8.55575 1.94819 8.87233 2.14346 9.06759L5.93238 12.8565C6.12765 13.0518 6.44423 13.0518 6.63949 12.8565L7.89447 11.6015L3.39843 7.10551Z"
      fill="black"
    />
  </svg>
);

export default Eraser;
