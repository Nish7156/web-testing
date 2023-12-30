import { ShareSquareIcon } from "@/components/icons/ShareSquareIcon";
import React from "react";
import CustomShareButton from "./CustomShareButton";
import { getAirDropUserDetails } from "@/lib/features/auth/authSlice";
import { useAppSelector } from "@/lib/hooks";

function LeftCardHeading() {
  const userDetails = useAppSelector(getAirDropUserDetails);

  const shareLink =
    typeof window !== "undefined"
      ? `${window.location.origin}/airdrop?referalCode=${userDetails?.referral_code}`
      : "";

  return (
    <div className=''>
      <div className='flex justify-between py-1 items-center'>
        <h1 className=' text-2xl lg:text-6xl font-bold text-white'>
          Engage & Earn with Tickr. ai
        </h1>
        <div className=' cursor-pointer hidden lg:flex'>
          <CustomShareButton link={shareLink} />
        </div>
        <div className=' cursor-pointer flex lg:hidden'>
          <ShareSquareIcon />
        </div>
      </div>
      <div className='lg:mt-[15px] mt-0'>
        <p className=' text-tertiary font-normal text-lg lg:text-4xl'>
          Earn rewards, gain knowledge, and become a part of our thriving
          community.
        </p>
      </div>
    </div>
  );
}

export default LeftCardHeading;
