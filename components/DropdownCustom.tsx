//@ts-nocheck
"use client";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { useRouter } from "next/navigation";
import { CopyIcon } from "lucide-react";
import copy from "clipboard-copy";
import { getUserDetails } from "@/lib/apifuctions/getUserDetails";
import { getLogOutUser } from "@/lib/apifuctions/getLogOutUser";

export function DropdownCustom() {
  const router = useRouter();
  const [userDetails, setUserDetails] = React.useState();

  const fetchUserDetails = async () => {
    try {
      const details = await getUserDetails();
      setUserDetails(details);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleCopyChantId = (ctx: any) => {
    copy(ctx);
  };

  const UserLogout = async () => {
    try {
      const logput = await getLogOutUser();
      router.push("/ai-assistant");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <HamburgerIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black mr-3 border-[0.5px] border-gray-700 ">
        <DropdownMenuItem>
          <p className=" capitalize text-2xl text-primary">
            {userDetails?.username || "user name"}
          </p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-secondary hover:text-primary"
          onClick={() => handleCopyChantId(userDetails?.chat_id)}
        >
          <div className="flex text-center justify-between w-full">
            <TextWrapper>Chat ID</TextWrapper>
            <div
              className=" h-6 w-6"
              //@ts-ignore
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.11538 17C8.65512 17 8.27083 16.8458 7.9625 16.5375C7.65417 16.2292 7.5 15.8449 7.5 15.3846V4.61537C7.5 4.15512 7.65417 3.77083 7.9625 3.4625C8.27083 3.15417 8.65512 3 9.11538 3H16.8846C17.3449 3 17.7292 3.15417 18.0375 3.4625C18.3458 3.77083 18.5 4.15512 18.5 4.61537V15.3846C18.5 15.8449 18.3458 16.2292 18.0375 16.5375C17.7292 16.8458 17.3449 17 16.8846 17H9.11538ZM9.11538 16H16.8846C17.0385 16 17.1795 15.9359 17.3077 15.8077C17.4359 15.6795 17.5 15.5385 17.5 15.3846V4.61537C17.5 4.46154 17.4359 4.32052 17.3077 4.1923C17.1795 4.0641 17.0385 4 16.8846 4H9.11538C8.96154 4 8.82052 4.0641 8.6923 4.1923C8.5641 4.32052 8.5 4.46154 8.5 4.61537V15.3846C8.5 15.5385 8.5641 15.6795 8.6923 15.8077C8.82052 15.9359 8.96154 16 9.11538 16ZM6.11538 20C5.65513 20 5.27083 19.8458 4.9625 19.5375C4.65417 19.2292 4.5 18.8449 4.5 18.3846V7.11538C4.5 6.97307 4.54775 6.85417 4.64325 6.75865C4.73877 6.66313 4.85768 6.61537 5 6.61537C5.1423 6.61537 5.26121 6.66313 5.35672 6.75865C5.45224 6.85417 5.5 6.97307 5.5 7.11538V18.3846C5.5 18.5385 5.5641 18.6795 5.6923 18.8077C5.8205 18.9359 5.96153 19 6.11538 19H14.3846C14.5269 19 14.6458 19.0478 14.7414 19.1433C14.8369 19.2388 14.8846 19.3577 14.8846 19.5C14.8846 19.6423 14.8369 19.7612 14.7414 19.8568C14.6458 19.9523 14.5269 20 14.3846 20H6.11538Z"
                  fill="#E2E2E2"
                />
              </svg>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-secondary hover:text-primary"
          onClick={() => router.push("/alert/trade")}
        >
          <TextWrapper>Switch to Manual</TextWrapper>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-secondary hover:text-primary"
          onClick={UserLogout}
        >
          <TextWrapper>Log out</TextWrapper>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const TextWrapper = ({ children, onClick }: any) => {
  return (
    <p className="text-2xl text-secondary" onClick={onClick}>
      {children}
    </p>
  );
};
