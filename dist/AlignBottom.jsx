import * as React from "react";

const AlignBottom = (props) => (
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
      d="M8 2H7C6.44772 2 6 2.44772 6 3L6 14H1.5C1.22386 14 1 14.2239 1 14.5C1 14.7761 1.22386 15 1.5 15L13.5 15C13.7761 15 14 14.7761 14 14.5C14 14.2239 13.7761 14 13.5 14H9V3C9 2.44772 8.55229 2 8 2Z"
      fill="currentColor"
    />
  </svg>
);

export default AlignBottom;
