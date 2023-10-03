import * as React from "react";

const desktop = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect x={10} y={22} width={8} height={3} fill="black" />
  </svg>
);

export default desktop;
