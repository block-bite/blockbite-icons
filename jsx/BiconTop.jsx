import * as React from "react";

const BiconTop = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <line x1={14} y1={9} x2={14} y2={23} stroke="currentColor" strokeWidth={4} />
    <path d="M14 3L21 11H7L14 3Z" fill="currentColor" />
  </svg>
);

export default BiconTop;
