import AirDropScreen from "@/MainComponents/Pages/AirDrop";
import RightBgGreen from "@/MainComponents/Pages/AirDrop/components/RightBgGreen";
import React from "react";

async function AirDrop() {
  return (
    <div className=' flex justify-center items-center h-auto 2xl:h-[90vh] relative'>
      <AirDropScreen />
    </div>
  );
}

export default AirDrop;
