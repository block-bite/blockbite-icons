import * as React from "react";

const HeartFilled = (props) => (
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
      d="M4.89346 1.35254C6.25769 1.35254 6.86058 1.92342 7.50002 2.93551C8.13946 1.92342 8.74235 1.35254 10.1066 1.35254C12.064 1.35254 13.6476 2.94504 13.6476 4.90538C13.6476 6.74047 12.6013 8.50514 11.4008 9.96933C10.2636 11.3562 8.92194 12.5509 8.00601 13.3665C7.94645 13.4195 7.88869 13.4709 7.83291 13.5207C7.64324 13.6899 7.3568 13.6899 7.16713 13.5207C7.11135 13.4709 7.05359 13.4195 6.99403 13.3665C6.0781 12.5509 4.73641 11.3562 3.59926 9.96933C2.39872 8.50514 1.35248 6.74047 1.35248 4.90538C1.35248 2.94504 2.936 1.35254 4.89346 1.35254Z"
      fill="black"
    />
  </svg>
);

export default HeartFilled;
