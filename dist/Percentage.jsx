import * as React from "react";

const Percentage = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <circle cx={4.85355} cy={4.5} r={1.5} fill="currentColor" />
    <circle cx={9.85355} cy={10.5} r={1.5} fill="currentColor" />
    <path
      d="M3 11.6464L11 3.64642"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default Percentage;
