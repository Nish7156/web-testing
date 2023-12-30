import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "..";
import removeUndefinedKeys from "@/app/helpers/removeUndefinedKeys";

async function updateChat(userId: string, updatedChatData: any[]) {
  try {
    // const sanitizeData = removeUndefinedKeys(updatedChatData);
    updatedChatData.forEach((obj) => removeUndefinedKeys(obj));
    // if (!sanitizeData.order_id) return false;
    // const orderId = String(Math.abs(Number(sanitizeData.order_id)));

    const userChatDocRef = doc(db, "userchat", userId);

    const userChatDoc = await getDoc(userChatDocRef);

    if (userChatDoc.exists()) {
      // const chats = userChatDoc.data().chats || [];

      // const chatIndex = chats.findIndex(
      //   (chat: { orderId: string }) => chat.orderId === orderId
      // );
      await updateDoc(userChatDocRef, {
        chats: updatedChatData,
      });

      // if (chatIndex !== -1) {
      //   const updatedChats = [...chats];
      //   updatedChats[chatIndex] = {
      //     orderId: orderId,
      //     ...sanitizeData,
      //   };

      //   await updateDoc(userChatDocRef, {
      //     chats: updatedChats,
      //   });

      //   return true;
      // } else {
      //   return false;
      // }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export default updateChat;
