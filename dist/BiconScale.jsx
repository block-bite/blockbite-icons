import * as React from "react";

const BiconScale = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M3 11L3 3L11 3L3 11Z" fill="black" />
    <path d="M15 3L23 3L23 11L15 3Z" fill="black" />
    <path d="M23 15L23 23L15 23L23 15Z" fill="black" />
    <path d="M11 23L3 23L3 15L11 23Z" fill="black" />
  </svg>
);

export default BiconScale;
