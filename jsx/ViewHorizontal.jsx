import * as React from "react";

const ViewHorizontal = (props) => (
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
      d="M1.5 1H13.5C14.3284 1 15 1.67157 15 2.5V12.5C15 13.3284 14.3284 14 13.5 14H1.5C0.671573 14 0 13.3284 0 12.5V2.5C0 1.67157 0.671573 1 1.5 1ZM13.5 2C13.7761 2 14 2.22386 14 2.5V7H1V2.5C1 2.22386 1.22386 2 1.5 2H13.5ZM1 12.5C1 12.7761 1.22386 13 1.5 13H13.5C13.7761 13 14 12.7761 14 12.5V8H1V12.5Z"
      fill="black"
    />
  </svg>
);

export default ViewHorizontal;
