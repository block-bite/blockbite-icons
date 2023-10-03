import * as React from "react";

const min = (props) => (
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
      x1={26.0416}
      y1={13.8995}
      x2={2}
      y2={13.8995}
      stroke="black"
      strokeWidth={4}
    />
  </svg>
);

export default min;
