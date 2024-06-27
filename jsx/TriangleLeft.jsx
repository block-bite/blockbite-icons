import * as React from "react";

const TriangleLeft = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M9.00003 11L4.50003 7.5L9.00003 4V11Z" fill="currentColor" />
  </svg>
);

export default TriangleLeft;
