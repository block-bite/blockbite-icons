import * as React from "react";

const BiconAlignYend = (props) => (
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
      y1={3}
      x2={14}
      y2={25}
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="square"
    />
    <rect
      x={5}
      y={27}
      width={8}
      height={18}
      transform="rotate(-90 5 27)"
      fill="currentColor"
    />
  </svg>
);

export default BiconAlignYend;
