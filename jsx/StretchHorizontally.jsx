import * as React from "react";

const StretchHorizontally = (props) => (
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
      d="M13.9999 1.5V6H0.999878L0.999878 1.5C0.999878 1.22386 0.77602 1 0.499878 1C0.223736 1 -0.000122058 1.22386 -0.00012207 1.5L-0.000121641 13.5C-0.000121653 13.7761 0.223735 14 0.499878 14C0.77602 14 0.999878 13.7761 0.999878 13.5L0.999878 9L13.9999 9V13.5C13.9999 13.7761 14.2237 14 14.4999 14C14.776 14 14.9999 13.7761 14.9999 13.5L14.9999 1.5C14.9999 1.22386 14.776 1 14.4999 1C14.2237 1 13.9999 1.22386 13.9999 1.5Z"
      fill="black"
    />
  </svg>
);

export default StretchHorizontally;
