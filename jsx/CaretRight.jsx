import * as React from "react";

const CaretRight = (props) => (
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
      d="M6.81831 4.18185L9.81831 7.18185C9.9027 7.26624 9.95011 7.3807 9.95011 7.50005C9.95011 7.6194 9.9027 7.73386 9.81831 7.81825L6.81831 10.8182C6.64257 10.994 6.35765 10.994 6.18191 10.8182C6.00618 10.6425 6.00618 10.3576 6.18191 10.1819L8.86371 7.50005L6.18191 4.81825C6.00618 4.64251 6.00618 4.35759 6.18191 4.18185C6.35765 4.00611 6.64257 4.00611 6.81831 4.18185Z"
      fill="black"
    />
  </svg>
);

export default CaretRight;
