import React from "react";

interface IDarkButton {
  children: any;
  outline?: boolean;
  disable?: boolean;
  onclick?: any;
  error?: boolean;
  isActive?: boolean;
  size?: any;
}

function DarkButton({
  children,
  outline,
  disable,
  error,
  onclick,
  isActive,
  size,
}: IDarkButton) {
  return (
    <>
      <button
        onClick={onclick}
        // disabled={disable}
        role="button"
        className={`w-full  bg-black font-normal relative cursor-pointer py-2 transition-all px-5 flex justify-center  items-center rounded-md ${
          outline
            ? "border-[1px]  border-primary text-primary  hover:text-primary active:text-primary hover:shadow-[0_0_8px_#21FA51] "
            : error
            ? ` border-error hover:text-error border-[1px] shadow-[0_0_5px_#FA6B3F] active:text-error hover:shadow-[0_0_8px_#FA6B3F]`
            : disable
            ? " bg-secondary-300 text-white  border-[1px] border-black"
            : "border-l-[5px] button-shadow text-white   shadow-[0_0_2px_#21FA51] hover:text-primary  hover:shadow-[0_0_8px_#21FA51]"
        }  ${size ? size : "text-2xl"}  ${
          isActive && outline ? "text-primary" : error ? "text-error" : ""
        } `}
      >
        {!outline && !disable && !error && (
          <div className=" absolute left-[-5px] top-0 bg-primary rounded-l-md border-none py-2 h-[100%] w-2"></div>
        )}
        {children}
      </button>
    </>
  );
}

export default DarkButton;
