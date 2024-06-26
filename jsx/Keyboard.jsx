import * as React from "react";

const Keyboard = (props) => (
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
      d="M3 5V6H2V5H3ZM4 5V6H5V5H4ZM7 5V6H6V5H7ZM8 5V6H9V5H8ZM11 5V6H10V5H11ZM12 5V6H13V5H12ZM12 7V8H11V7H12ZM12 9V10H13V9H12ZM10 7V8H9V7H10ZM7 7V8H8V7H7ZM6 7V8H5V7H6ZM3 7V8H4V7H3ZM3 9V10H2V9H3ZM4 9V10H11V9H4ZM0 4.5V10.5C0 11.3284 0.671573 12 1.5 12H13.5C14.3284 12 15 11.3284 15 10.5V4.5C15 3.67157 14.3284 3 13.5 3H1.5C0.671573 3 0 3.67157 0 4.5ZM1.5 4C1.22386 4 1 4.22386 1 4.5V10.5C1 10.7761 1.22386 11 1.5 11H13.5C13.7761 11 14 10.7761 14 10.5V4.5C14 4.22386 13.7761 4 13.5 4H1.5Z"
      fill="currentColor"
    />
  </svg>
);

export default Keyboard;
