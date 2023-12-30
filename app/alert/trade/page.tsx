import TradeScreen from "@/MainComponents/Pages/TradeScreen";
import React from "react";
import { TOKEN_SECRET, headers, host } from "@/lib/config";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import axios from "axios";

export const getUserFromServer = () => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, TOKEN_SECRET);
    return decodedToken;
  } catch (err) {
    return null;
  }
};

export const getOpenOrders = async (uuid: string) => {
  try {
    const url = `${host}/?uuid=${"7636995e2c6a4a2e8b7b78b8d4eadb2b"}`;
    const reponse: any = await axios.get(url, { headers });
    return reponse.data.bots.data;
  } catch (err) {
    return null;
  }
};
export const getHistoryOrders = async (uuid: string) => {
  try {
    const url = `${host}/alert-logs?service=trade&limit=10&start=0&uuid=${uuid}`;
    const reponse: any = await axios.get(url, { headers });
    return reponse.data.logs.data;
  } catch (err) {
    return null;
  }
};

const Trade = async () => {
  const user = getUserFromServer();
  if (!user) {
    redirect("/ai-assistant");
  }
  const openOrders = await getOpenOrders(user.user_id);
  const historyOrders = await getHistoryOrders(user.user_id);

  return (
    <div>
      <TradeScreen
        user={user}
        openOrders={openOrders}
        historyOrders={historyOrders}
      />
    </div>
  );
};

export default Trade;
