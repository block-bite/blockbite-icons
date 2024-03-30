import * as React from "react";

const ChevronRight = (props) => (
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
      d="M6.86514 3.15791L10.6151 7.15791C10.7954 7.35024 10.7954 7.64952 10.6151 7.84185L6.86514 11.8419C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6758 5.94673 11.3594 6.1356 11.1579L9.565 7.49988L6.1356 3.84185C5.94673 3.64039 5.95694 3.32398 6.1584 3.13511C6.35985 2.94625 6.67627 2.95645 6.86514 3.15791Z"
      fill="black"
    />
  </svg>
);

export default ChevronRight;
