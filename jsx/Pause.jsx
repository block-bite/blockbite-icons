import * as React from "react";

const Pause = (props) => (
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
      d="M5.49995 2.19995C5.19619 2.19995 4.94995 2.44619 4.94995 2.74995V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74995C6.04995 2.44619 5.80371 2.19995 5.49995 2.19995ZM9.49995 2.19995C9.19619 2.19995 8.94995 2.44619 8.94995 2.74995V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74995C10.05 2.44619 9.80371 2.19995 9.49995 2.19995Z"
      fill="currentColor"
    />
  </svg>
);

export default Pause;
