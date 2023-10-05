import * as React from "react";

const BiconDesigner = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={50} height={50} fill="currentColor" />
    <g clipPath="url(#clip0_283_187)">
      <path d="M26 9V26C35.3892 26 43 18.3892 43 9H26Z" fill="white" />
    </g>
    <g clipPath="url(#clip1_283_187)">
      <path d="M9 26L9 43C18.3892 43 26 35.3892 26 26L9 26Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_283_187">
        <rect width={17} height={17} fill="white" transform="translate(26 9)" />
      </clipPath>
      <clipPath id="clip1_283_187">
        <rect width={17} height={17} fill="white" transform="translate(9 26)" />
      </clipPath>
    </defs>
  </svg>
);

export default BiconDesigner;
