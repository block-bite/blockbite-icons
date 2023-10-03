import * as React from "react";

const bClose = (props) => (
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
      x1={22.4142}
      y1={5.41421}
      x2={5.41421}
      y2={22.4142}
      stroke="black"
      strokeWidth={4}
    />
    <line
      y1={-2}
      x2={24.0416}
      y2={-2}
      transform="matrix(0.707107 0.707107 0.707107 -0.707107 7 4)"
      stroke="black"
      strokeWidth={4}
    />
  </svg>
);

export default bClose;
