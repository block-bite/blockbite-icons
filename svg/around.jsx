import * as React from "react";

const around = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect x={6} y={6} width={14} height={14} stroke="black" strokeWidth={2} />
    <path d="M5 1V5H1L5 1Z" fill="black" />
    <path d="M25 5L21 5L21 1L25 5Z" fill="black" />
    <path d="M21 25L21 21L25 21L21 25Z" fill="black" />
    <path d="M1 21L5 21L5 25L1 21Z" fill="black" />
  </svg>
);

export default around;
