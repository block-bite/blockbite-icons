import * as React from "react";

const BiconAlignYcenter = (props) => (
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
      x1={14}
      y1={25}
      x2={14}
      y2={3}
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="square"
    />
    <rect
      x={23}
      y={10}
      width={8}
      height={18}
      transform="rotate(90 23 10)"
      fill="currentColor"
    />
  </svg>
);

export default BiconAlignYcenter;
