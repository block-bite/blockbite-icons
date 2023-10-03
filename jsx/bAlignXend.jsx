import * as React from "react";

const bAlignXend = (props) => (
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
      x1={3}
      y1={14}
      x2={25}
      y2={14}
      stroke="black"
      strokeWidth={4}
      strokeLinecap="square"
    />
    <rect
      x={27}
      y={23}
      width={8}
      height={18}
      transform="rotate(-180 27 23)"
      fill="black"
    />
  </svg>
);

export default bAlignXend;
