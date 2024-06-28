import * as React from "react";

const Columns = (props) => (
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
      d="M2.14998 1H0.849976V14H2.14998V1ZM6.14998 1H4.84998V14H6.14998V1ZM10.15 14H8.84998V1H10.15V14ZM14.15 1H12.85V14H14.15V1Z"
      fill="black"
    />
  </svg>
);

export default Columns;
