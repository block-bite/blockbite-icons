import * as React from "react";

const scaley = (props) => (
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
      d="M13.6316 18.5L1.00002 18.5L1.00002 11.5L13.6316 18.5Z"
      fill="black"
    />
    <path
      d="M1.00001 13.5L1.00002 6.5L13.6316 6.5L1.00001 13.5Z"
      fill="black"
    />
    <path d="M12.3684 6.5L25 6.5L25 13.5L12.3684 6.5Z" fill="black" />
    <path d="M25 11.5L25 18.5L12.3684 18.5L25 11.5Z" fill="black" />
  </svg>
);

export default scaley;
