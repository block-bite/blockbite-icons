import * as React from "react";

const TriangleRight = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M6 4L10.5 7.5L6 11L6 4Z" fill="black" />
  </svg>
);

export default TriangleRight;
