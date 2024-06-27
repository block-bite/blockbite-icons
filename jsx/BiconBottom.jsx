import * as React from "react";

const BiconBottom = (props) => (
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
      x2={14}
      y2={-2}
      transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 12 18)"
      stroke="currentColor"
      strokeWidth={4}
    />
    <path d="M14 24L21 16H7L14 24Z" fill="currentColor" />
  </svg>
);

export default BiconBottom;
