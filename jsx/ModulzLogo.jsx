import * as React from "react";

const ModulzLogo = (props) => (
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
      d="M4.37036 5.33333V1L7.25925 3.16667L4.37036 5.33333ZM3.88889 6.05555L1 3.88889V8.22222L3.88889 6.05555ZM3.88889 11.8333L1 9.66666V14L3.88889 11.8333ZM10.6296 6.05555L7.74072 3.88889V8.22222L10.6296 6.05555ZM11.1111 5.33333V1L14 3.16667L11.1111 5.33333ZM14 8.94444L11.1111 6.77777V11.1111L14 8.94444ZM1 8.94444L3.88889 6.77777V11.1111L1 8.94444ZM7.25925 8.22222V3.88889L4.37036 6.05555L7.25925 8.22222ZM1 3.16667L3.88889 1V5.33333L1 3.16667ZM10.6296 5.33333V1L7.74072 3.16667L10.6296 5.33333ZM11.1111 6.05555L14 3.88889V8.22222L11.1111 6.05555ZM14 14V9.66666L11.1111 11.8333L14 14Z"
      fill="black"
    />
  </svg>
);

export default ModulzLogo;