import * as React from "react";

const SpaceBetweenHorizontally = (props) => (
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
      d="M13.9999 1.5V6H9.99988C9.44759 6 8.99988 6.44771 8.99988 7V8C8.99988 8.55228 9.44759 9 9.99988 9H13.9999V13.5C13.9999 13.7761 14.2237 14 14.4999 14C14.776 14 14.9999 13.7761 14.9999 13.5L14.9999 1.5C14.9999 1.22386 14.776 1 14.4999 1C14.2237 1 13.9999 1.22386 13.9999 1.5ZM0.999878 6L0.999878 1.5C0.999878 1.22386 0.77602 1 0.499878 1C0.223736 1 -0.000122058 1.22386 -0.00012207 1.5L-0.000121641 13.5C-0.000121653 13.7761 0.223735 14 0.499878 14C0.77602 14 0.999878 13.7761 0.999878 13.5L0.999878 9H4.99988C5.55216 9 5.99988 8.55228 5.99988 8V7C5.99988 6.44771 5.55216 6 4.99988 6H0.999878Z"
      fill="black"
    />
  </svg>
);

export default SpaceBetweenHorizontally;
