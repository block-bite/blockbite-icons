import * as React from "react";

const BiconDesignerSmall = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <rect width={28} height={28} fill="black" />
    <path
      d="M11.4265 6V22H7V6H11.4265ZM10.7676 18H14.3088C14.3363 18 14.3637 18 14.3912 18C14.4186 18 14.4461 18 14.4735 18C14.9265 17.9852 15.2833 17.9556 15.5441 17.9111C15.8186 17.8667 16.0451 17.763 16.2235 17.6C16.4157 17.4222 16.5118 17.1481 16.5118 16.7778C16.5118 16.3926 16.4157 16.1111 16.2235 15.9333C16.0314 15.7556 15.7912 15.6519 15.5029 15.6222C15.2284 15.5778 14.851 15.5556 14.3706 15.5556H10.7676V11.7778H14.0824C14.1098 11.7778 14.1304 11.7778 14.1441 11.7778C14.1716 11.7778 14.1922 11.7778 14.2059 11.7778C14.6725 11.7778 15.0225 11.7259 15.2559 11.6222C15.4892 11.5185 15.6059 11.2667 15.6059 10.8667C15.6059 10.4815 15.4824 10.2444 15.2353 10.1556C14.9882 10.0519 14.6245 10 14.1441 10H10.7676V6H15.6265C17.0539 6 18.152 6.34815 18.9206 7.04444C19.7029 7.74074 20.0941 8.71111 20.0941 9.95555C20.0941 10.7852 19.8676 11.5185 19.4147 12.1556C18.9618 12.7778 18.3578 13.2 17.6029 13.4222V13.6444C18.6461 13.8074 19.4696 14.237 20.0735 14.9333C20.6912 15.6148 21 16.5037 21 17.6C21 18.4889 20.801 19.2667 20.4029 19.9333C20.0049 20.5852 19.4353 21.0963 18.6941 21.4667C17.9667 21.8222 17.1157 22 16.1412 22H10.7676V18Z"
      fill="#FF57EE"
    />
  </svg>
);

export default BiconDesignerSmall;
