import * as React from "react";

const CaretDown = (props) => (
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
      d="M4.81819 6.18179L7.49999 8.86359L10.1818 6.18179C10.3575 6.00605 10.6424 6.00605 10.8182 6.18179C10.9939 6.35753 10.9939 6.64245 10.8182 6.81819L7.81819 9.81819C7.73379 9.90258 7.61934 9.94999 7.49999 9.94999C7.38064 9.94999 7.26618 9.90258 7.18179 9.81819L4.18179 6.81819C4.00605 6.64245 4.00605 6.35753 4.18179 6.18179C4.35753 6.00605 4.64245 6.00605 4.81819 6.18179Z"
      fill="black"
    />
  </svg>
);

export default CaretDown;
