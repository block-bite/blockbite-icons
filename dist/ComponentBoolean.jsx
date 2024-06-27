import * as React from "react";

const ComponentBoolean = (props) => (
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
      d="M7.14656 1.48959L1.48971 7.14644C1.29445 7.3417 1.29445 7.65828 1.48971 7.85355L7.14656 13.5104C7.34182 13.7057 7.65841 13.7057 7.85367 13.5104L13.5105 7.85355C13.7058 7.65828 13.7058 7.3417 13.5105 7.14644L7.85367 1.48959C7.65841 1.29432 7.34182 1.29432 7.14656 1.48959ZM2.55037 7.49999L7.5 12.4496V2.55036L2.55037 7.49999Z"
      fill="currentColor"
    />
  </svg>
);

export default ComponentBoolean;
