import * as React from "react";

const wrap = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2.5L1 3.95489H7.5V2.5L1 2.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6.54511L1 8H11.4V6.54511H1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 10.5L1 11.9549H14V10.5H1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2.5L9 4H14V2.5H9Z"
      fill="currentColor"
    />
  </svg>
);

export default wrap;
