import * as React from "react";

const Crop = (props) => (
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
      d="M4 0.5V3.00006L11.5 3.00006C11.7761 3.00006 12 3.22392 12 3.50006V11L14.5 11C14.7761 11 15 11.2238 15 11.5C15 11.7761 14.7762 12 14.5 12L12 12L12 14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5L11 12.0001H3.5C3.22386 12.0001 3 11.7762 3 11.5001V4.00005L0.49999 4C0.223847 3.99999 -5.60273e-06 3.77613 1.05173e-10 3.49999C5.63274e-06 3.22385 0.223868 2.99999 0.50001 3L3 3.00005V0.5C3 0.223858 3.22386 1.20706e-08 3.5 0C3.77614 -1.20706e-08 4 0.223858 4 0.5ZM4 11.0001H11V4.00006L4 4.00006V11.0001Z"
      fill="black"
    />
  </svg>
);

export default Crop;
