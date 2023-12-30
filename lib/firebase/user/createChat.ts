import { doc, getDoc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";
import { db } from "..";
import removeUndefinedKeys from "@/app/helpers/removeUndefinedKeys";

async function createChat(userId: string, chatData: any) {
  try {
    const userChatDocRef = doc(db, "userchat", userId);
    const userChatDoc = await getDoc(userChatDocRef);
    const sanitizeData = removeUndefinedKeys(chatData);
    if (userChatDoc.exists()) {
      const rep = await updateDoc(userChatDocRef, {
        chats: arrayUnion(sanitizeData),
      });
      return true;
    } else {
      await setDoc(userChatDocRef, { chats: arrayUnion(chatData) });
      console.log("object");
      return true;
    }
  } catch (error) {
    console.error("Error updating document: ", error);
    return false;
  }
}

export default createChat;
