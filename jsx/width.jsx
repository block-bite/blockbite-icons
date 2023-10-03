import * as React from "react";

const width = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <line x1={3} y1={14} x2={24} y2={14} stroke="black" strokeWidth={4} />
    <line x1={2} y1={8} x2={2} y2={20} stroke="black" strokeWidth={4} />
    <line x1={26} y1={8} x2={26} y2={20} stroke="black" strokeWidth={4} />
  </svg>
);

export default width;
