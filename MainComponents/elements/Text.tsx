import React from "react";

function Text({
  children,
  customClass,
}: {
  children: any;
  customClass?: string;
}) {
  return (
    <p className={`text-secondary text-lg font-normal ${customClass}`}>
      {children}
    </p>
  );
}

export default Text;
