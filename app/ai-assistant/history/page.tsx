import HistoryScreen from "@/MainComponents/Pages/HistoryScreen";
import { getUserFromServer } from "@/app/alert/trade/page";
import { redirect } from "next/navigation";

async function History() {
  const userDetails = getUserFromServer();
  if (!userDetails) {
    redirect("/ai-assistant");
  }
  return (
    <>
      <HistoryScreen userDetails={userDetails} />
    </>
  );
}

export default History;
