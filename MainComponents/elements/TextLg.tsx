import React from "react";

function TextLg({
  children,
  primary,
  customClass,
}: {
  children: any;
  primary?: boolean;
  customClass?: string;
}) {
  return (
    <p
      className={`${
        primary ? "text-primary" : "text-secondary"
      } text-2xl font-normal ${customClass}`}
    >
      {children}
    </p>
  );
}

export default TextLg;
