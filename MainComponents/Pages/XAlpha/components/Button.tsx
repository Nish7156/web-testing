import React from "react";

function Button({ children }: any) {
  return (
    <>
      <div className="flex hover:bg-blue-700 cursor-pointer font-semibold justify-center items-center gap-2.5
       py-[7.5px] md:py-2 px-5 md:px-6 2xl:py-3 2xl:px-9 rounded-full bg-[#0065ff] text-white text-center font-['Poppins'] text-[14px] md:text-[16px] 2xl:text-[24px] leading-[normal]">
        {children}
      </div>
    </>
  );
}

export default Button;
