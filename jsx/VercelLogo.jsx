import * as React from "react";

const VercelLogo = (props) => (
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
      d="M0.599976 13H14.4L7.49998 1L0.599976 13ZM2.3285 12H12.6714L7.49998 3.00613L2.3285 12Z"
      fill="black"
    />
  </svg>
);

export default VercelLogo;
