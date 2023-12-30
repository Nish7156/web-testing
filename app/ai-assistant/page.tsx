import AiHomeScreen from "@/MainComponents/Pages/AiHomeScreen";
import { getUserFromServer } from "@/app/alert/trade/page";
import { redirect } from "next/navigation";

function History() {
  const userDetails = getUserFromServer();
  // if (!userDetails) {
  //   redirect("/ai-assistant");
  // }
  return (
    <>
      <AiHomeScreen userData={userDetails} />
    </>
  );
}

export default History;
