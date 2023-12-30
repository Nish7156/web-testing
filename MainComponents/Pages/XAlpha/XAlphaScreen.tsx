import React from "react";
import Button from "./components/Button";

function XAlphaScreen() {
  return (
    <>
      <div className=" flex  h-full gap-[10px] items-center flex-nowrap relative mx-auto my-0 mt-[74px] lg:mt-0">
        <div className="flex  flex-col gap-[25px] items-start shrink-0 flex-nowrap relative">
          <div className="flex  flex-col items-start shrink-0 flex-nowrap relative z-[1]">
            <div className="flex  flex-col justify-center items-start shrink-0 flex-nowrap relative z-[2]">
              <span className=" shrink-0 basis-auto text-[32px] md:text-[64px]  2xl:text-[96px] font-bold leading-[48px] md:leading-[80px]   2xl:leading-[120px] text-[#99c2fe] relative text-left whitespace-nowrap z-[3]">
                X- Alpha
              </span>
            </div>
            <div className="flex  flex-col justify-center items-start shrink-0 flex-nowrap relative z-[4]">
              <span className=" shrink-0 basis-auto   text-[32px] md:text-[42px]  2xl:text-[64px] font-medium lg:font-normal leading-[48px] md:leading-[60px]  2xl:leading-[80px] text-white relative text-left whitespace-nowrap z-[5]">
                Fast & Intelligent
              </span>
            </div>
            <span className=" shrink-0 basis-auto text-[14px] md:text-[24px]  2xl:text-[36px] font-normal opacity-75 leading-[21px] md:leading-[36px]  2xl:leading-[54px] text-white relative text-left whitespace-nowrap z-[6]">
              AI right in your Twitter feed
            </span>
          </div>

          <div className=" cursor-pointer lg:flex  hidden py-3 px-5 md:py-[7px]  md:px-6 2xl:py-[11px] 2xl:px-9 gap-[10px] justify-center items-center flex-nowrap rounded-[35px] border-solid border border-[#fff] relative overflow-hidden hover:bg-[#0065ff]">
            <span className="flex  justify-center font-medium items-center shrink-0 basis-auto font-['Poppins'] text-[14px] md:text-[16px] 2xl:text-[24px] leading-[normal] text-[#fff] relative text-center whitespace-nowrap">
              Add to chrome
            </span>
          </div>
          <div className=" lg:hidden flex items-center">
            <Button>Download Extension</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default XAlphaScreen;
