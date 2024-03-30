import * as React from "react";

const BorderAll = (props) => (
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
      d="M1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1C0.25 0.585786 0.585786 0.25 1 0.25ZM1.75 13.25H13.25V1.75H1.75V13.25ZM7.5 5C7.77614 5 8 5.22386 8 5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5ZM7.5 3C7.77614 3 8 3.22386 8 3.5C8 3.77614 7.77614 4 7.5 4C7.22386 4 7 3.77614 7 3.5C7 3.22386 7.22386 3 7.5 3ZM7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7ZM5.5 7C5.77614 7 6 7.22386 6 7.5C6 7.77614 5.77614 8 5.5 8C5.22386 8 5 7.77614 5 7.5C5 7.22386 5.22386 7 5.5 7ZM3.5 7C3.77614 7 4 7.22386 4 7.5C4 7.77614 3.77614 8 3.5 8C3.22386 8 3 7.77614 3 7.5C3 7.22386 3.22386 7 3.5 7ZM9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5C9 7.22386 9.22386 7 9.5 7ZM11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5C11 7.22386 11.2239 7 11.5 7ZM7.5 9C7.77614 9 8 9.22386 8 9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5C7 9.22386 7.22386 9 7.5 9ZM7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11Z"
      fill="black"
    />
  </svg>
);

export default BorderAll;