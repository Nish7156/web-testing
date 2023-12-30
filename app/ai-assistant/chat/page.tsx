import ChatScreen from "@/MainComponents/Pages/ChatScreen";
import { getUserFromServer } from "@/app/alert/trade/page";
import { user } from "@/lib/firebase";
import { redirect } from "next/navigation";

async function Chat(req: any) {
  const userDetails = getUserFromServer();
  if (!userDetails) {
    redirect("/ai-assistant");
  }
  const chatData: any = await user.getChat(userDetails.user_id);
  return (
    <>
      <div className='relative h-full w-full flex-1 overflow-auto transition-width'>
        <div className='flex h-full flex-col'>
          <ChatScreen chatDetails={chatData.chats} userDetails={userDetails} />
        </div>
      </div>
    </>
  );
}

export default Chat;
