import * as React from "react";

const ColumnsReverse = (props) => (
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
      d="M9.09274 13.9893L3.09279 13.9893L3.09279 14.7281C3.09279 14.9362 2.85352 15.0532 2.68931 14.9255L1.09651 13.6866C0.967829 13.5866 0.967828 13.3921 1.09651 13.292L2.68931 12.0531C2.85352 11.9254 3.09279 12.0424 3.09279 12.2505L3.09279 12.9893L9.09275 12.9893C9.09275 10.4657 9.09274 16.513 9.09274 13.9893ZM2.14998 1H0.849976V11H2.14998V1ZM6.14998 1H4.84998V11H6.14998V1ZM10.15 11H8.84998V1H10.15V11ZM14.15 1H12.85V11H14.15V1Z"
      fill="currentColor"
    />
  </svg>
);

export default ColumnsReverse;
