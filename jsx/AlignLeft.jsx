import * as React from "react";

const AlignLeft = (props) => (
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
      d="M-0.00012207 1.5L-0.000121546 13.5C-0.000121534 13.7761 0.223736 14 0.499878 14C0.77602 14 0.999878 13.7761 0.999878 13.5V9H12C12.5523 9 13 8.55228 13 8V7C13 6.44771 12.5523 6 12 6H0.999878V1.5C0.999878 1.22386 0.77602 1 0.499878 1C0.223736 1 -0.000122082 1.22386 -0.00012207 1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default AlignLeft;
