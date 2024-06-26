import * as React from "react";

const BiconAlignYbetween = (props) => (
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
      y={1}
      width={7}
      height={18}
      transform="rotate(90 23 1)"
      fill="currentColor"
    />
    <rect
      x={23}
      y={20}
      width={7}
      height={18}
      transform="rotate(90 23 20)"
      fill="currentColor"
    />
  </svg>
);

export default BiconAlignYbetween;
