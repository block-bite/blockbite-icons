import * as React from "react";

const AllSides = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.75 3H5.25L7.5 0.75L9.75 3ZM9.75 12H5.25L7.5 14.25L9.75 12ZM0.75 7.5L3 9.75V5.25L0.75 7.5ZM12 5.25V9.75L14.25 7.5L12 5.25Z"
      fill="currentColor"
    />
  </svg>
);

export default AllSides;
