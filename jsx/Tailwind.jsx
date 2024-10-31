import * as React from "react";

const Tailwind = (props) => (
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
      d="M4 5.33333C4.4 3.77778 5.4 3 7 3C9.4 3 9.7 4.75 10.9 5.04167C11.7 5.23611 12.4 4.94444 13 4.16667C12.6 5.72222 11.6 6.5 10 6.5C7.6 6.5 7.3 4.75 6.1 4.45833C5.3 4.26389 4.6 4.55556 4 5.33333ZM1 8.83333C1.4 7.27778 2.4 6.5 4 6.5C6.4 6.5 6.7 8.25 7.9 8.54167C8.7 8.73611 9.4 8.44444 10 7.66667C9.6 9.22222 8.6 10 7 10C4.6 10 4.3 8.25 3.1 7.95833C2.3 7.76389 1.6 8.05556 1 8.83333Z"
      fill="currentColor"
    />
  </svg>
);

export default Tailwind;
