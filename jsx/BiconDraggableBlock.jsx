import * as React from "react";

const BiconDraggableBlock = (props) => (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 19H12V21.75H11.75V22H9V19ZM9 38V41H12V38.25H11.75V38H9ZM28 41H31V38H28.25V38.25H28V41ZM31 22V19H28V21.75H28.25V22H31ZM17.25 19V22H22.75V19H17.25ZM31 27.25H28V32.75H31V27.25ZM22.75 41V38H17.25V41H22.75ZM9 32.75H12V27.25H9V32.75Z"
      fill="#F5F5F5"
    />
    <rect x={18} y={10} width={22} height={22} fill="#F5F5F5" />
    <line
      x1={32.1232}
      y1={17.9357}
      x2={25.2482}
      y2={24.8107}
      stroke="black"
      strokeWidth={3}
    />
    <path
      d="M36.2188 13.7813L35.875 21.6875L28.3125 14.125L36.2188 13.7813Z"
      fill="black"
    />
    <path
      d="M21.7812 28.2187L22.125 20.3125L29.6875 27.875L21.7812 28.2187Z"
      fill="black"
    />
  </svg>
);

export default BiconDraggableBlock;
