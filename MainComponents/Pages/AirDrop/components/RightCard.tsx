"use client";
import { formatId, truncateName } from "@/app/helpers/helperFunctions";
import AuthButton from "@/components/AuthButton";
import CopyText from "@/components/CopyText";
import { authoriseUser } from "@/lib/apifuctions/authorizeUser";
import {
  fetchUserData,
  getAirDropUserDetails,
  getTasks,
  setAirDropUserDetails,
  setTasks,
} from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";

const initialUserData = (
  userData: {
    telegram_username: any;
    twitter_author_handle: any;
    wallet_addr: any;
    email: any;
    reward_points: any;
    referral_count: number;
  } | null,
  completedTask: string | any[],
  ongoingTask: string | any[]
) => {
  return [
    { key: "Telegram", value: userData?.telegram_username || "---" },
    { key: "Twitter", value: userData?.twitter_author_handle || "---" },
    { key: "Wallet Add.", value: userData?.wallet_addr || "---" },
    { key: "Email", value: userData?.email || "---" },
    { key: "Points Earned", value: `${userData?.reward_points || "---"} XPs` },
    { key: "Completed tasks", value: completedTask.length || "---" },
    { key: "Ongoing", value: ongoingTask.length || "---" },
    { key: "Refered Users", value: userData?.referral_count || "---" },
  ];
};

const ListItem = ({ data }: any) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-tertiary font-normal text-2xl lg:text-3xl">
        {data?.key}
      </p>
      <p className="text-secondary font-normal text-2xl lg:text-3xl">
        {truncateName(data?.value, 21)}
      </p>
    </div>
  );
};

const CopyListItem = ({ data }: any) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-tertiary font-normal text-2xl lg:text-3xl">
        {data?.key}
      </p>
      <div className="flex items-center gap-2">
        <p className="text-secondary font-normal text-2xl lg:text-3xl">
          {formatId(data?.value)}
        </p>
        <div className="cursor-pointer">
          <CopyText text={data?.value} />
        </div>
      </div>
    </div>
  );
};

function RightCard() {
  const { data: session }: any = useSession();
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(getTasks);
  const searchParams = useSearchParams();

  const referalCode = searchParams.get("referalCode");
  const userDetails = useAppSelector(getAirDropUserDetails);

  const completedTask = tasks.filter(
    (task: { status: string }) => task.status === "Complete"
  );

  const ongoingTask = tasks.filter(
    (task: { status: string }) => task.status === "Start"
  );
  const userData = initialUserData(userDetails, completedTask, ongoingTask);

  const fetchUserDetails = async () => {
    try {
      const updatedPayload: any = {
        twitter_author_handle: session.name,
        twitter_author_id: session.sub,
        signup_from: "twitter",
        email: session?.email,
        phone_no: session?.phone,
      };
      if (referalCode) {
        updatedPayload.referrer_code = referalCode;
      }
      const data = await authoriseUser(updatedPayload);
      dispatch(setAirDropUserDetails(data));
      dispatch(setTasks({ userAction: "loginTwitter", status: "Complete" }));
    } catch (err) {
      dispatch(setAirDropUserDetails(null));
    }
  };

  useEffect(() => {
    if (session?.user) {
      fetchUserDetails();
    }
  }, [session]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <div className="flex items-center gap-5">
          {userDetails?.profile_image_url ? (
            <Image
              src={userDetails?.profile_image_url}
              alt="userImage"
              height={36}
              width={36}
              className="rounded-full"
            />
          ) : (
            <div className="lg:w-[60px] lg:h-[60px] w-[36px] h-[36px] rounded-full bg-secondary-300"></div>
          )}
          <div>
            <h2 className="text-primary font-bold text-2xl lg:text-4xl">
              {truncateName(userDetails?.email, 16) || ""}
            </h2>
          </div>
        </div>
        <div className="pt-3 border-t-secondary border-t-[1px] border-opacity-25 my-3 lg:mt-[15px]">
          <ul>
            {userData &&
              userData.map(({ key, value }, index) => (
                <li key={index} className="mb-[20px]">
                  {key === "wallet_addr" ? (
                    <CopyListItem data={{ key, value: value || "---" }} />
                  ) : (
                    <ListItem data={{ key, value: value || "---" }} />
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col h-full">
          {/* <div className='flex-1'></div> */}
          <div className="flex-1">
            <div className="lg:mb-6 my-3 z-10">
              <div className="border-secondary border-[1px] border-opacity-25 rounded-md py-4 lg:py-[23px] px-5 flex items-center justify-between">
                <div>
                  <h3 className="text-primary font-normal text-2xl lg:text-md">
                    Referral code
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg lg:text-4xl font-medium text-secondary">
                    {userDetails?.referral_code}
                  </h3>
                  <div className="cursor-pointer">
                    <CopyText text={userDetails?.referral_code} />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex">
              <AuthButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightCard;
