import * as React from "react";

const BiconTablet = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 7C26 5.89543 25.1046 5 24 5L4 5C2.89543 5 2 5.89543 2 7L2 21C2 22.1046 2.89543 23 4 23L24 23C25.1046 23 26 22.1046 26 21L26 7ZM4 16.5714L4 11.4286L3 11.4286L3 16.5714L4 16.5714Z"
      fill="black"
    />
  </svg>
);

export default BiconTablet;
