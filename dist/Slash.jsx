import * as React from "react";

const Slash = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path d="M9.46582 1H10.8178L5.46074 14H4.10876L9.46582 1Z" fill="currentColor" />
  </svg>
);

export default Slash;
