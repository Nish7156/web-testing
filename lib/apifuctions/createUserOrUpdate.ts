import { TelegramUserData } from "@telegram-auth/server";
import axios from "axios";
import { generateUUID } from "../utils";
import { headers, host } from "../config";

export async function fetchUserData(configured_from: any, id: any) {
  const apiUrl = `${host}/fetch-user-data`;

  const params = {
    configured_from,
    id,
  };

  const response = await axios.get(apiUrl, { headers, params });

  if (response.data.status.body.user_exist) {
    return response;
  }
}
// {
//   "wallet_addr":"0x549Da64aDfc81144Cf38Ec005A6DF645b9c8b3",
//   "user_name":"chaman"
//   }

// VALID_UUID_VALUES=['wallet_addr','username','profile_image_url','email','chat_id','name','user_id']

export async function createUserOrUpdate(user: any) {
  const url = `${host}/user-data?id=${user.id}`;
  const updatedData = {
    chat_id: user.id,
    user_id: user.email,
    user_name: user.name,
    profile_image_url: user.image,
  };
  const newUserResponse = await axios.post(url, updatedData, {
    headers,
  });

  if (newUserResponse.data.status.statusCode === 200) {
    return newUserResponse.data;
  }
}
