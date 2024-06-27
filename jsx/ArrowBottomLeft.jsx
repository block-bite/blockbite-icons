import * as React from "react";

const ArrowBottomLeft = (props) => (
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
      d="M11.3536 4.35355L4.70711 11H9C9.27614 11 9.5 11.2239 9.5 11.5C9.5 11.7762 9.27614 12 9 12L3.5 12C3.36739 12 3.24022 11.9473 3.14645 11.8536C3.05268 11.7598 3 11.6326 3 11.5L3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6V10.2929L10.6464 3.64645C10.8417 3.45118 11.1583 3.45118 11.3536 3.64645C11.5488 3.84171 11.5488 4.15829 11.3536 4.35355Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowBottomLeft;
