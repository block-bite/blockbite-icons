import * as React from "react";

const bBottomLeft = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <line
      x1={8.58579}
      y1={20.5858}
      x2={24.5858}
      y2={4.58579}
      stroke="black"
      strokeWidth={4}
    />
    <path d="M3 13L15 25H3V13Z" fill="black" />
  </svg>
);

export default bBottomLeft;