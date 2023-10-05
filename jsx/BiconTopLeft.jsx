import * as React from "react";

const BiconTopLeft = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <line
      x1={8.41421}
      y1={7.58579}
      x2={24.4142}
      y2={23.5858}
      stroke="black"
      strokeWidth={4}
    />
    <path d="M16 3L4 15L4 3L16 3Z" fill="black" />
  </svg>
);

export default BiconTopLeft;
