import * as React from "react";

const ThickArrowLeft = (props) => (
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
      d="M1.20938 7.90687L8.20938 12.9069C8.36179 13.0157 8.56226 13.0303 8.72879 12.9446C8.89533 12.8589 9 12.6873 9 12.5V10H11.5C11.7761 10 12 9.77614 12 9.5V5.5C12 5.22386 11.7761 5 11.5 5L9 5V2.5C9 2.31271 8.89533 2.14112 8.72879 2.05542C8.56226 1.96972 8.36179 1.98427 8.20938 2.09314L1.20938 7.09314C1.07798 7.18699 1 7.33853 1 7.5C1 7.66148 1.07798 7.81301 1.20938 7.90687ZM8 5.5C8 5.77614 8.22386 6 8.5 6H11V9H8.5C8.22386 9 8 9.22386 8 9.5V11.5284L2.36023 7.5L8 3.4716V5.5Z"
      fill="black"
    />
  </svg>
);

export default ThickArrowLeft;
