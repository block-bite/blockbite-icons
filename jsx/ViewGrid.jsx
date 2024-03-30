import * as React from "react";

const ViewGrid = (props) => (
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
      d="M0 2.5V12.5C0 13.3284 0.671573 14 1.5 14H13.5C14.3284 14 15 13.3284 15 12.5V2.5C15 1.67157 14.3284 1 13.5 1H1.5C0.671573 1 0 1.67157 0 2.5ZM1.5 2C1.22386 2 1 2.22386 1 2.5V7H7V2H1.5ZM8 7H14V2.5C14 2.22386 13.7761 2 13.5 2H8V7ZM1 8V12.5C1 12.7761 1.22386 13 1.5 13H7V8H1ZM8 8H14V12.5C14 12.7761 13.7761 13 13.5 13H8V8Z"
      fill="black"
    />
  </svg>
);

export default ViewGrid;
