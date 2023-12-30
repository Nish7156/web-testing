import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const TelegramLoginButton = () => {
  const router = useRouter();
  const pathname = useSearchParams();

  const dispatch = useAppDispatch();
  const { toast } = useToast();

  //   console.log("usePathname", pathname.values());
  const handleTelegramLogin = async () => {
    // const { data } = router.query;
    // if (data && typeof data === "string") {
    //   const [chatid, grp_name, username, user_id]: string[] = data.split("&");
    //   const userPayload = {
    //     grp_name,
    //     username,
    //     user_id,
    //   };
    //   try {
    //     await dispatch(
    //       fetchUserData({
    //         configured_from: "telegram",
    //         Id: chatid,
    //         userPayload,
    //       })
    //     );
    //     // Handle success if needed
    //     toast({
    //       variant: "default",
    //       title: "Telegram login successful",
    //       description: "User data fetched successfully.",
    //     });
    //   } catch (error) {
    //     // Handle errors if needed
    //     console.error("Error fetching user data", error);
    //     toast({
    //       variant: "destructive",
    //       title: "Uh oh! Something went wrong.",
    //       description: "There was a problem with your request.",
    //       action: <ToastAction altText='Try again'>Try again</ToastAction>,
    //     });
    //   }
    // }
  };

  return <div onClick={handleTelegramLogin}>Connect Telegram</div>;
};

export default TelegramLoginButton;
