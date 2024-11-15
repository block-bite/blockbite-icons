import * as React from "react";

const RowsReverse = (props) => (
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
      d="M9.09274 13.9893L3.09279 13.9893L3.09279 14.7282C3.09279 14.9362 2.85352 15.0532 2.68931 14.9255L1.09651 13.6867C0.967829 13.5866 0.967828 13.3921 1.09651 13.292L2.68931 12.0532C2.85352 11.9254 3.09279 12.0425 3.09279 12.2505L3.09279 12.9893L9.09274 12.9893C9.09275 10.4657 9.09274 16.513 9.09274 13.9893ZM1 8.84997L1 10.15H14V8.84997H1ZM14 4.84998V6.14998H1L1 4.84998H14ZM1 0.849976L1 2.14997L14 2.14997V0.849976L1 0.849976Z"
      fill="currentColor"
    />
  </svg>
);

export default RowsReverse;
