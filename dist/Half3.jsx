import * as React from "react";

const Half3 = (props) => (
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
      d="M14 1V14H1V1H14ZM2 13H7.5V2H2V13Z"
      fill="currentColor"
    />
  </svg>
);

export default Half3;
