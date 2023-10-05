import * as React from "react";

const BiconLeft = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <line x1={9} y1={14} x2={23} y2={14} stroke="currentColor" strokeWidth={4} />
    <path d="M3 14L11 7L11 21L3 14Z" fill="currentColor" />
  </svg>
);

export default BiconLeft;
