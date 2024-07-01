import * as React from "react";

const MinSize = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M1 5H2.3668L3.8104 8.35938H3.87183L5.31542 5H6.68222V10H5.60721V6.74561H5.56369L4.20713 9.97559H3.47509L2.11853 6.7334H2.07501V10H1V5Z"
      fill="currentColor"
    />
    <path d="M8.70363 5V10H7.59534V5H8.70363Z" fill="currentColor" />
    <path
      d="M14 5V10H13.0427L10.7622 6.85303H10.7238V10H9.61548V5H10.5881L12.8508 8.14453H12.8968V5H14Z"
      fill="currentColor"
    />
  </svg>
);

export default MinSize;
