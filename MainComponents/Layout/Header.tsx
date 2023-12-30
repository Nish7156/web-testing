"use client";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { TickerAiLogo } from "@/components/icons/TickerAiLogo";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import React from "react";
import Image from "next/image";
import { PreConfigurePromptModal } from "../Pages/Modals/PreConfigurePromptModal";
import { DropdownCustom } from "@/components/DropdownCustom";

function Header() {
  let userIcon = false;
  return (
    <>
      {/* <div className="flex  bg-black border-b-[0.5px] border-b-gray-500 justify-between p-3 "> */}
      <TickerAiLogo />
      <div className="flex space-x-4 items-center">
        <TelegramIcon />
        <TwitterIcon />
        <PreConfigurePromptModal />
        {userIcon ? <UserProfile userImage={false} /> : <DropdownCustom />}
      </div>
      {/* </div> */}
    </>
  );
}

export default Header;

const UserProfile = ({ userImage, className }: any) => {
  return (
    <div
      className={`${userImage ? "w-12 h-12 rounded-full overflow-hidden" : ""}`}
    >
      <Image
        src={userImage ? userImage : "/images/dummyUser.svg"}
        alt="User Profile"
        // className={` object-cover ${className} mt-1`}
        width={36}
        height={36}
      />
    </div>
  );
};
