import * as React from "react";

const bBottomRight = (props) => (
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
      y1={-2}
      x2={22.6274}
      y2={-2}
      transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 18 21)"
      stroke="black"
      strokeWidth={4}
    />
    <path d="M25 13L13 25H25V13Z" fill="black" />
  </svg>
);

export default bBottomRight;
