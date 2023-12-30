import React from "react";
import RightCard from "./components/RightCard";
import LeftCard from "./components/LeftCard";

function AirDropScreen() {
  return (
    <div className=" web-container">
      <div className="flex gap-[90px]">
        <div className=" flex-2 basis-[1040px] z-10 ">
          <LeftCard />
        </div>
        <div className=" flex-1 basis-[450px] bg-secondary-200 p-5 rounded-md hidden lg:block z-10">
          <RightCard />
        </div>
      </div>
    </div>
  );
}

export default AirDropScreen;
