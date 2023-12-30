import ConfigurationScreen from "@/MainComponents/Pages/ConfigurationScreen";
import { getUserFromServer } from "@/app/alert/trade/page";
import { redirect } from "next/navigation";

function Configurations() {
  const userDetails = getUserFromServer();
  if (!userDetails?.user_id) {
    redirect("/ai-assistant");
  }
  return (
    <>
      <ConfigurationScreen userDetails={userDetails} />
    </>
  );
}

export default Configurations;
