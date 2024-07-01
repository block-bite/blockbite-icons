import * as React from "react";

const DevicesPortrait = (props) => (
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
      d="M1 3.26923V11.7308C1 12.4317 1.52233 13 2.16667 13H6.83333C7.47767 13 8 12.4317 8 11.7308V3.26923C8 2.56825 7.47766 2 6.83333 2H2.16667C1.52233 2 1 2.56825 1 3.26923ZM2.16667 2.84608H6.83333C7.04811 2.84608 7.22222 3.0355 7.22222 3.26916V11.7307C7.22222 11.9644 7.04811 12.1538 6.83333 12.1538H2.16667C1.95189 12.1538 1.77778 11.9644 1.77778 11.7307V3.26916C1.77778 3.0355 1.95189 2.84608 2.16667 2.84608Z"
      fill="currentColor"
    />
    <rect
      x={9.35}
      y={5.35}
      width={4.3}
      height={7.3}
      rx={0.65}
      stroke="currentColor"
      strokeWidth={0.7}
    />
  </svg>
);

export default DevicesPortrait;
