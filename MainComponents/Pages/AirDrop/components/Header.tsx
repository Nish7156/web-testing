"use client";
import { TelegramIcon } from "@/components/icons/TelegramIcon";
import { TickerAiLogo } from "@/components/icons/TickerAiLogo";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import React from "react";
import DarkButton from "@/components/ui/DarkButton";
import { PreConfigurePromptModal } from "../../Modals/PreConfigurePromptModal";
import { signOut } from "next-auth/react";
import { auth } from "@/auth";

interface Iheader {
  headerAction?: any;
  session?: any;
}

async function AirDropHeader({ session, headerAction }: Iheader) {
  return (
    <>
      <TickerAiLogo />
      <div className='flex space-x-4 items-center'>
        <div className=''>
          <TelegramIcon />
        </div>
        <div className=''>
          <TwitterIcon />
        </div>
        <div className=' hidden md:flex'>
          <PreConfigurePromptModal />
        </div>
        {/* <DarkButton>Connect</DarkButton> */}
      </div>
    </>
  );
}

export default AirDropHeader;
