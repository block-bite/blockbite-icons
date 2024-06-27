import * as React from "react";

const BorderWidth = (props) => (
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
      d="M14 3V4H1V3H14ZM14 6V8H1V6H14ZM1 10.25V12.75H14V10.25H1Z"
      fill="currentColor"
    />
  </svg>
);

export default BorderWidth;
