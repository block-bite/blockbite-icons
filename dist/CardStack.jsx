import * as React from "react";

const CardStack = (props) => (
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
      d="M1 9.5V3.5C1 2.67157 1.67157 2 2.5 2H12.5C13.3284 2 14 2.67157 14 3.5V9.5C14 10.1531 13.5826 10.7087 13 10.9146V11.5C13 12.3284 12.3284 13 11.5 13H3.5C2.67157 13 2 12.3284 2 11.5V10.9146C1.4174 10.7087 1 10.1531 1 9.5ZM2.5 3H12.5C12.7761 3 13 3.22386 13 3.5V9.5C13 9.77614 12.7761 10 12.5 10H2.5C2.22386 10 2 9.77614 2 9.5V3.5C2 3.22386 2.22386 3 2.5 3ZM12 11.5C12 11.7761 11.7761 12 11.5 12H3.5C3.22386 12 3 11.7761 3 11.5V11H12V11.5Z"
      fill="black"
    />
  </svg>
);

export default CardStack;
