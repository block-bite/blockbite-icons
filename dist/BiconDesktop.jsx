import * as React from "react";

const BiconDesktop = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect x={10} y={22} width={8} height={3} fill="currentColor" />
    <rect
      x={26}
      y={4}
      width={17}
      height={24}
      rx={2}
      transform="rotate(90 26 4)"
      fill="currentColor"
    />
  </svg>
);

export default BiconDesktop;
