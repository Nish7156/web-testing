"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import { Menus } from "./components/constant";
import Link from "next/link";
import Hamburger from "./components/icons/Hamburger";
import useScreenResize from "@/Hooks/useScreenResize";
import CrossIcon from "./components/icons/CrossIcon";
import XAlphaLogoNew from "./components/icons/XAlphaLogoNew";

function XAlphaHeader() {
  const is2xlLaptop = useScreenResize(1536, 2400);
  const isLaptop = useScreenResize(1024, 1535);
  const isTab = useScreenResize(768, 1023);
  const isMobile = useScreenResize(315, 767);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && menu) setMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menu]);

  const onToggle = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="flex justify-between items-center alpha-container">
        <div
          className={` ${
            isLaptop
              ? "laptop-main-logo"
              : isMobile
              ? "mobile-main-logo"
              : is2xlLaptop
              ? "main-logo"
              : "default"
          }`}
        >
          {/* <Image
            src={"/images/XAlpha/logo.svg"}
            alt="logo"
            width={isTab ? 139 :islaptop ? 140 : 181}
            height={isTab ? 36  : islaptop ? 44: 47}
          /> */}
          <XAlphaLogoNew />
        </div>
        <div className="  items-center hidden lg:flex">
          {Menus.map((data: any, index: number) => {
            return (
              <Link href={`${data.link}`}>
                <div className="lg:text-[16px] 2xl:text-4xl  text-white font-normal leading-[normal] py-3 px-9 transition-colors duration-300 ease-in-out hover:text-[#99c2fe]">
                  {data.title}
                </div>
              </Link>
            );
          })}
          <div className=" hidden lg:flex items-center pl-5">
            <Button>Download Extension</Button>
          </div>
        </div>

        <div className=" flex items-center lg:hidden">
          <div className="" onClick={onToggle}>
            <Hamburger />
          </div>
        </div>
        {menu && (
          <>
            <div
              className={`fixed top-0 ${
                menu ? "right-0" : "-right-full"
              } h-screen w-2/3 
            backdrop-blur-3xl backdrop-brightness-125 z-20 transition-all duration-1000 
            sm:right-0 sm:h-auto lg:top-6 lg:w-3/5 bg-[#0B1016]`}
            >
              <div className="p-4">
                <div className=" flex items-center justify-between text-[14px] leading-[20px] border-b-[0.5px] border-b-[#3C4655] mb-2">
                  <div className="">
                    <p>Menu</p>
                  </div>
                  <div className="" onClick={onToggle}>
                    <CrossIcon />
                  </div>
                </div>
                <div className="flex flex-col justify-between h-[88vh]">
                  <div className="mt-3 ">
                    {Menus.map((data: any, index: number) => {
                      return (
                        <Link href={`${data.link}`}>
                          <div className=" mb-3">
                            <div className="text-[14px] leading-[20px] font-medium text-white ">
                              {data.title}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className=" mt-auto">
                    <div className=" text-[14px] leading-[20px] font-medium text-[#5A606A] mb-3">
                      <Link href={""}>
                        <p>Terms & Conditions </p>
                      </Link>
                    </div>
                    <div className=" text-[14px] leading-[20px] font-medium text-[#5A606A]">
                      <Link href={""}>
                        <p>Privacy policy </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default XAlphaHeader;

{
  /* <div className="  items-center hidden lg:flex">
{Menus.map((data: any, index: number) => {
  return (
    <Link href={`${data.link}`}>
      <div className="text-4xl text-white font-normal leading-[normal] py-3 px-9 group  transition-all duration-300 ease-in-out">
        <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          {data.title}
        </span>
      </div>
    </Link>
  );
})}
</div> */
}
