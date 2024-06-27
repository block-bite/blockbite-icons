import * as React from "react";

const TransparencyGrid = (props) => (
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
      opacity={0.25}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 0V3H0V0H3ZM3 3V6H0V9H3V12H0V15H3V12H6V15H9V12H12V15H15V12H12V9H15V6H12V3H15V0H12V3H9V0H6V3H3ZM6 3H9V6H6V3ZM3 9V6H6V9H3ZM9 6H12V9H9V6ZM6 9V12H9V9H6Z"
      fill="currentColor"
    />
  </svg>
);

export default TransparencyGrid;
