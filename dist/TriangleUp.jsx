import * as React from "react";

const TriangleUp = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M11 9L7.5 4.5L4 9H11Z" fill="currentColor" />
  </svg>
);

export default TriangleUp;
