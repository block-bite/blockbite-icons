import * as React from "react";

const BoxModel = (props) => (
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
      d="M3.99999 4.49999V10.5C3.99999 10.7761 4.22385 11 4.49999 11H10.5C10.7761 11 11 10.7761 11 10.5V4.49999C11 4.22385 10.7761 3.99999 10.5 3.99999H4.49999C4.22385 3.99999 3.99999 4.22385 3.99999 4.49999ZM4.99999 4.99999H9.99999V9.99999H4.99999V4.99999ZM1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2C1.44772 1 1 1.44772 1 2ZM13 2V13H2V2L13 2Z"
      fill="black"
    />
  </svg>
);

export default BoxModel;
