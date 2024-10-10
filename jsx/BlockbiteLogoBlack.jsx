import * as React from "react";

const BlockbiteLogoBlack = (props) => (
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
    <g clipPath="url(#clip0_1_88)">
      <path
        d="M19.7322 23.7327H11V43H30.1303V34.2052H19.7322V23.7327ZM19.7322 14.9333V23.7327H30.1303V34.2052H38.8625L39 23.7327V14.9333H19.7322ZM11 6V14.9333H19.7322V10.4678L11 6Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_88">
        <rect width={28} height={37} fill="white" transform="translate(11 6)" />
      </clipPath>
    </defs>
  </svg>
);

export default BlockbiteLogoBlack;
