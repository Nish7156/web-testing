import React from "react";
import Image from "next/image";

function RightBgGreen() {
  return (
    <>
      <div className="absolute top-0 right-0 hidden md:block">
        <img
          className="w-[490px] h-[330px]"
          src={"/images/rightGreenBg.png"}
          alt="Right Background"
        />
      </div>
    </>
  );
}

export default RightBgGreen;
