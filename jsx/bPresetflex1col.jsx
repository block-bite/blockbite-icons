import * as React from "react";

const bPresetflex1col = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 60 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={60} height={40} fill="white" />
    <rect x={7} y={7} width={44} height={27} fill="black" />
  </svg>
);

export default bPresetflex1col;
