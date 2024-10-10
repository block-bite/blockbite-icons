import * as React from "react";

const BiconDraggableSurface = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={50} height={50} fill="currentColor" />
    <path d="M12 10V13H9V10H12Z" fill="#F5F5F5" />
    <path d="M12 20V23H9V20H12Z" fill="#F5F5F5" />
    <path d="M19 20H22V23H19V20Z" fill="#F5F5F5" />
    <path d="M19 10V13H22V10H19Z" fill="#F5F5F5" />
    <path d="M13.875 10V13H17.125V10H13.875Z" fill="#F5F5F5" />
    <path d="M22 14.875H19V18.125H22V14.875Z" fill="#F5F5F5" />
    <path d="M17.125 23V20H13.875V23H17.125Z" fill="#F5F5F5" />
    <path d="M9 18.125H12V14.875H9V18.125Z" fill="#F5F5F5" />
    <path d="M27 13V10H30V13H27Z" fill="#F5F5F5" />
    <path d="M27 20V23H30V20H27Z" fill="#F5F5F5" />
    <path d="M37 20H40V23H37V20Z" fill="#F5F5F5" />
    <path d="M37 13V10H40V13H37Z" fill="#F5F5F5" />
    <path d="M31.875 10V13H35.125V10H31.875Z" fill="#F5F5F5" />
    <path d="M40 14.875H37V18.125H40V14.875Z" fill="#F5F5F5" />
    <path d="M35.125 23V20H31.875V23H35.125Z" fill="#F5F5F5" />
    <path d="M27 18.125H30V14.875H27V18.125Z" fill="#F5F5F5" />
    <path d="M12 28H9V31H12V28Z" fill="#F5F5F5" />
    <path d="M12 38H9V41H12V38Z" fill="#F5F5F5" />
    <path d="M19 38V41H22V38H19Z" fill="#F5F5F5" />
    <path d="M19 28H22V31H19V28Z" fill="#F5F5F5" />
    <path d="M13.875 31V28H17.125V31H13.875Z" fill="#F5F5F5" />
    <path d="M19 32.875H22V36.125H19V32.875Z" fill="#F5F5F5" />
    <path d="M17.125 38V41H13.875V38H17.125Z" fill="#F5F5F5" />
    <path d="M12 36.125H9V32.875H12V36.125Z" fill="#F5F5F5" />
    <path d="M30 28V31H27V28H30Z" fill="#F5F5F5" />
    <path d="M30 38V41H27V38H30Z" fill="#F5F5F5" />
    <path d="M37 38H40V41H37V38Z" fill="#F5F5F5" />
    <path d="M37 28V31H40V28H37Z" fill="#F5F5F5" />
    <path d="M31.875 28V31H35.125V28H31.875Z" fill="#F5F5F5" />
    <path d="M40 32.875H37V36.125H40V32.875Z" fill="#F5F5F5" />
    <path d="M35.125 41V38H31.875V41H35.125Z" fill="#F5F5F5" />
    <path d="M27 36.125H30V32.875H27V36.125Z" fill="#F5F5F5" />
  </svg>
);

export default BiconDraggableSurface;
