import { doc, getDoc } from "firebase/firestore";
import { db } from "..";

async function getChat(userId: string) {
  const dummyChat = {
    chats: [],
  };
  try {
    const userChatDocRef = doc(db, "userchat", userId);
    const docSnap = await getDoc(userChatDocRef);

    if (docSnap.exists()) {
      return docSnap.data() || dummyChat;
    } else {
      return dummyChat;
    }
  } catch (error) {
    console.log("err", error);
    return dummyChat;
  }
}

export default getChat;
