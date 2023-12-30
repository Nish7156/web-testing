import * as React from "react";
const CircleTwitter = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={props.width ? props.width : 60}
    height={props.height ? props.height : 60}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.833333}
      y={0.833333}
      width={58.3333}
      height={58.3333}
      rx={29.1667}
      stroke="#3C4655"
      strokeWidth={1.66667}
    />
    <path
      d="M15.0732 16.6641L26.6555 31.5864L15 43.7136H17.6232L27.828 33.0942L36.0755 43.7142H45L32.7654 27.9552L43.6145 16.6641H40.9913L31.5935 26.4427L23.9996 16.6641H15.0732ZM18.9311 18.5259H23.0321L41.1403 41.8518H37.0405L18.9311 18.5259Z"
      fill="white"
    />
  </svg>
);
export default CircleTwitter;
