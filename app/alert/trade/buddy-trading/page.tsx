import BuddyForm from "@/MainComponents/Pages/AlertModule/BuddyForm";
import { HeadingWithBackButton } from "@/MainComponents/elements/HeadingWithBackButton";
import { HandsIcon } from "@/components/icons/HandsIcon";
import DarkButton from "@/components/ui/DarkButton";
import React from "react";
import { getUserFromServer } from "../page";
import { redirect } from "next/navigation";

function BuddyTrading() {
  const user = getUserFromServer();
  if (!user) {
    redirect("/ai-assistant");
  }
  return (
    <>
      <div className='container relative'>
        <HeadingWithBackButton heading='Buddy trading' icon={<HandsIcon />} />
        <BuddyForm userDetails={user} />
      </div>
    </>
  );
}

export default BuddyTrading;
