import * as React from "react";

const BiconDesignerSmall = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={28} height={28} fill="black" />
    <g clipPath="url(#clip0_283_129)">
      <path d="M9 4V14C14.5231 14 19 9.52307 19 4H9Z" fill="white" />
    </g>
    <g clipPath="url(#clip1_283_129)">
      <path d="M9 14L9 24C14.5231 24 19 19.5231 19 14L9 14Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_283_129">
        <rect width={10} height={10} fill="white" transform="translate(9 4)" />
      </clipPath>
      <clipPath id="clip1_283_129">
        <rect width={10} height={10} fill="white" transform="translate(9 14)" />
      </clipPath>
    </defs>
  </svg>
);

export default BiconDesignerSmall;
