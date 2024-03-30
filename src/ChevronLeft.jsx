import * as React from "react";

const ChevronLeft = (props) => (
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
      d="M8.86462 3.84185L5.43521 7.49988L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8646C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84185C4.20477 7.64952 4.20477 7.35024 4.38508 7.15791L8.13508 3.15791C8.32394 2.95645 8.64036 2.94625 8.84182 3.13511C9.04327 3.32398 9.05348 3.64039 8.86462 3.84185Z"
      fill="black"
    />
  </svg>
);

export default ChevronLeft;
