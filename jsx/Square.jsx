import * as React from "react";

const Square = (props) => (
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
      d="M14 1V14H1V1H14ZM2 13H13V2H2V13Z"
      fill="black"
    />
  </svg>
);

export default Square;
