import * as React from "react";

const BiconRight = (props) => (
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
      x1={18}
      y1={14}
      x2={4}
      y2={14}
      stroke="currentColor"
      strokeWidth={4}
    />
    <path d="M24 14L16 21L16 7L24 14Z" fill="currentColor" />
  </svg>
);

export default BiconRight;
