import * as React from "react";

const DrawingPinFilled = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.62136 1.13607C7.42609 1.33133 7.42609 1.64792 7.62136 1.84318L8.27437 2.49619L3.42563 6.13274L2.31805 5.02516C2.12279 4.8299 1.80621 4.8299 1.61095 5.02516C1.41569 5.22042 1.41569 5.537 1.61095 5.73226L4.08582 8.20714L0.815453 11.4775C0.620191 11.6728 0.620191 11.9894 0.815453 12.1846C1.01072 12.3799 1.3273 12.3799 1.52256 12.1846L4.79293 8.91425L7.2678 11.3891C7.46306 11.5844 7.77965 11.5844 7.97491 11.3891C8.17017 11.1939 8.17017 10.8773 7.97491 10.682L6.86733 9.57443L10.5039 4.7257L11.1569 5.37871C11.3522 5.57397 11.6687 5.57397 11.864 5.37871C12.0593 5.18345 12.0593 4.86687 11.864 4.6716L8.32846 1.13607C8.1332 0.940809 7.81662 0.940808 7.62136 1.13607Z"
      fill="currentColor"
    />
  </svg>
);

export default DrawingPinFilled;