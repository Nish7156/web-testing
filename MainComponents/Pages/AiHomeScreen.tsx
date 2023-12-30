"use client";
import DemoScreen from "@/MainComponents/Pages/DemoScreen";
import SendInput from "@/components/SendInput";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { LoginButton } from "@telegram-auth/react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

function AiHomeScreen({ userData }: any) {
  const [userDetails, setUserDetails] = useState<any>(userData);

  const handleLogin = async (userData: any) => {
    // const body = {
    //   chat_id: 5857832735,
    //   user_id: "286d0da92fa44322a57372b916dbafb6",
    //   wallet_addr: null,
    //   username: "papapralay",
    //   profile_image_url: "Sdsd",
    //   email: null,
    // };
    const body = {
      username: [userData.first_name, userData.last_name || ""].join(" "),
      profile_image_url: userData.photo_url,
      chat_id: userData.id,
      signup_from: "web",
    };
    // const body = {
    //   username: "srktheman",
    //   profile_image_url: "",
    //   chat_id: 728064379,
    //   signup_from: "web",
    // };
    try {
      const response = await axios.post("/api/tele-login", body);
      setUserDetails(response.data.userData);
    } catch (error) {
      setUserDetails(null);
    }
  };

  // useEffect(() => {
  //   if (!userDetails?.user_id) redirect("/ai-assistant");
  // }, [userDetails]);

  return (
    <div>
      {/* <div className='text-white' onClick={handleLogin}>
        hiia{" "}
      </div> */}
      {userDetails?.user_id ? (
        <>
          <DemoScreen />
          <div className=' fixed bottom-14 left-0 right-0 bg-black pb-12 pt-4 px-3'>
            <Link
              href={{
                pathname: "/ai-assistant/chat",
                query: { userId: userDetails?.user_id },
              }}
            >
              <SendInput placeholder={"Type your command here"} />
            </Link>
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center min-h-screen'>
          <LoginButton
            // botUsername={"my_nextauth_bot"}
            botUsername={"TICKRIntelligenceBot"}
            onAuthCallback={handleLogin}
          />
        </div>
      )}
      {/* my_nextauth_bot */}
    </div>
  );
}
export default AiHomeScreen;
