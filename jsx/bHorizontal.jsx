import * as React from "react";

const bHorizontal = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#clip0_283_152)">
      <line x1={20} y1={14} x2={6} y2={14} stroke="black" strokeWidth={4} />
      <path d="M28 14L20 21L20 7L28 14Z" fill="black" />
      <path d="M9.17941e-07 14L8 6.99999L8 21L9.17941e-07 14Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0_283_152">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default bHorizontal;
