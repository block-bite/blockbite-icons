import * as React from "react";

const columns = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect x={4} y={4} width={8} height={20} fill="black" />
    <rect x={17} y={4} width={8} height={20} fill="black" />
  </svg>
);

export default columns;
