import * as React from "react";

const bHeight = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <line x1={14} y1={3} x2={14} y2={24} stroke="black" strokeWidth={4} />
    <line x1={20} y1={2} x2={8} y2={2} stroke="black" strokeWidth={4} />
    <line x1={20} y1={26} x2={8} y2={26} stroke="black" strokeWidth={4} />
  </svg>
);

export default bHeight;
