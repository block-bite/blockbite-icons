import * as React from "react";

const BiconHeading = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={50} height={50} fill="black" />
    <path
      d="M34.8941 14.1037C35.2447 14.4541 35.5228 14.8702 35.7126 15.3282C35.9023 15.7862 36 16.277 36 16.7728C36 17.2685 35.9023 17.7594 35.7126 18.2173C35.5228 18.6753 35.2447 19.0914 34.8941 19.4418L33.0496 21.2819L27.7167 15.9484L29.5612 14.1037C30.2687 13.397 31.2277 13 32.2276 13C33.2276 13 34.1866 13.397 34.8941 14.1037ZM21.3444 32.9942L31.3999 22.9364L26.0624 17.5983L16.0057 27.6549L15 34L21.3444 32.9942Z"
      fill="#F5F5F5"
    />
  </svg>
);

export default BiconHeading;
