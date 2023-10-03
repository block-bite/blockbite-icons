import * as React from "react";

const bTopRight = (props) => (
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
      x1={19.4142}
      y1={8.41421}
      x2={3.41421}
      y2={24.4142}
      stroke="black"
      strokeWidth={4}
    />
    <path d="M24 16L12 4H24V16Z" fill="black" />
  </svg>
);

export default bTopRight;
