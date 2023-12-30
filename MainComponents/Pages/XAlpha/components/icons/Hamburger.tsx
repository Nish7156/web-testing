import * as React from "react";
const Hamburger = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={7} y={11} width={22} height={2} rx={1} fill="white" />
    <rect x={7} y={17} width={22} height={2} rx={1} fill="white" />
    <rect x={7} y={23} width={22} height={2} rx={1} fill="white" />
  </svg>
);
export default Hamburger;
