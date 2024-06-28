import * as React from "react";

const Rows = (props) => (
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
      d="M1 12.85L1 14.15H14V12.85H1ZM1 8.84997L1 10.15H14V8.84997H1ZM14 4.84998V6.14998H1L1 4.84998H14ZM1 0.849976L1 2.14997L14 2.14997V0.849976L1 0.849976Z"
      fill="black"
    />
  </svg>
);

export default Rows;
