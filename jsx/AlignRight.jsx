import * as React from "react";

const AlignRight = (props) => (
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
      d="M13.9999 1.5V6H2.99988C2.44759 6 1.99988 6.44772 1.99988 7L1.99988 8C1.99988 8.55228 2.44759 9 2.99988 9L13.9999 9V13.5C13.9999 13.7761 14.2237 14 14.4999 14C14.776 14 14.9999 13.7761 14.9999 13.5V1.5C14.9999 1.22386 14.776 1 14.4999 1C14.2237 1 13.9999 1.22386 13.9999 1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default AlignRight;
