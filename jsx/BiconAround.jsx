import * as React from "react";

const BiconAround = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#clip0_283_139)">
      <path d="M5 14V23H23V5H14" stroke="currentColor" strokeWidth={3} />
      <path
        d="M8 4.33013L14 -2.62268e-07L14 8L8 4.33013Z"
        fill="currentColor"
      />
      <path d="M4.66987 8L9 14L1 14L4.66987 8Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_283_139">
        <rect width={28} height={28} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default BiconAround;
