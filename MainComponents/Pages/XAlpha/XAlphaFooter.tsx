"use client";
import Link from "next/link";
import React from "react";
import { SocialIcons } from "./components/constant";
import useScreenResize from "@/Hooks/useScreenResize";

function XAlphaFooter() {
  const is2xlLaptop = useScreenResize(1536, 2400);
  const isLaptop = useScreenResize(1024, 1535);
  const isTab = useScreenResize(768, 1023);
  const isMobile = useScreenResize(315, 767);
  return (
    <div className=" flex items-center justify-center lg:justify-between pt-[19px] md:py-[19px]">
      <div className="hidden lg:flex">
        <ul className="list-disc">
          <ListItem>Terms and Conditions</ListItem>
          <ListItem>Privacy policy</ListItem>
        </ul>
      </div>
      <div className=" flex items-center gap-4">
        {SocialIcons.map((data: any, index: number) => {
          let iconClass = "";
          if (isTab) {
            iconClass = "footerIconTab";
          } else if (isLaptop) {
            iconClass = "footerIconLaptop";
          } else if (is2xlLaptop) {
            iconClass = "footerIcon2xlLaptop";
          } else {
            iconClass = "footerIconMobile";
          }
          return (
            <Link
              href={`${data.link}`}
              className="transition-transform transform hover:scale-110"
            >
              <div className={iconClass}>{data.icon}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default XAlphaFooter;

const ListItem = ({ children, link }: any) => {
  return (
    <li className="text-secondary-400 font-normal text-[14px]  2xl:text-4xl 2xl:leading-[36px] md:leading-[21px] leading-[20px] ml-5 transition-colors duration-300 ease-in-out hover:text-[#99c2fe]">
      <Link href={`${link}`}>{children}</Link>
    </li>
  );
};
