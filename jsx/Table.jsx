import * as React from "react";

const Table = (props) => (
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
      d="M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM12.5 2C12.7761 2 13 2.22386 13 2.5V5H8V2H12.5ZM7 2H2.5C2.22386 2 2 2.22386 2 2.5V5H7V2ZM2 9H7V6H2V9ZM13 6V9H8V6H13ZM13 10V12.5C13 12.7761 12.7761 13 12.5 13H8V10H13ZM2 10H7V13H2.5C2.22386 13 2 12.7761 2 12.5V10Z"
      fill="black"
    />
  </svg>
);

export default Table;
