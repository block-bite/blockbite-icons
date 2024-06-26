import * as React from "react";

const BiconPresetflexStack = (props) => (
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
    <rect x={7} y={8} width={46} height={11} fill="currentColor" />
    <rect x={7} y={22} width={46} height={11} fill="currentColor" />
  </svg>
);

export default BiconPresetflexStack;
