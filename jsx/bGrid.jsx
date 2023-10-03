import * as React from "react";

const bGrid = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={50} height={50} fill="black" />
    <rect x={9} y={10} width={13} height={13} fill="#F5F5F5" />
    <rect x={27} y={10} width={13} height={13} fill="#F5F5F5" />
    <rect x={9} y={28} width={13} height={13} fill="#F5F5F5" />
    <rect x={27} y={28} width={13} height={13} fill="#F5F5F5" />
  </svg>
);

export default bGrid;
