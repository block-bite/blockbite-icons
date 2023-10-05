import * as React from "react";

const BiconVertical = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <line x1={14} y1={8} x2={14} y2={22} stroke="black" strokeWidth={4} />
    <path d="M14 0L21 8H7L14 0Z" fill="black" />
    <path d="M14 28L7 20L21 20L14 28Z" fill="black" />
  </svg>
);

export default BiconVertical;
