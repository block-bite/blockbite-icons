import * as React from "react";

const Slider = (props) => (
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
      d="M8.49988 10.2504C7.1516 10.2504 6.0299 9.28026 5.79473 7.99997H0.5C0.223858 7.99997 0 7.77611 0 7.49997C0 7.22383 0.223858 6.99997 0.5 6.99997H5.7947C6.0298 5.71959 7.15154 4.74939 8.49988 4.74939C9.84822 4.74939 10.97 5.71959 11.2051 6.99997H14.5C14.7761 6.99997 15 7.22383 15 7.49997C15 7.77611 14.7761 7.99997 14.5 7.99997H11.205C10.9699 9.28026 9.84816 10.2504 8.49988 10.2504ZM8.49988 9.30038C7.50549 9.30038 6.69938 8.49427 6.69938 7.49988C6.69938 6.5055 7.50549 5.69939 8.49988 5.69939C9.49426 5.69939 10.3004 6.5055 10.3004 7.49988C10.3004 8.49427 9.49426 9.30038 8.49988 9.30038Z"
      fill="currentColor"
    />
  </svg>
);

export default Slider;