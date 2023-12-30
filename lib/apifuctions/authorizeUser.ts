import axios from "axios";
import { AUTH_HOST, headers } from "../config";

export const authoriseUser = async (data: any) => {
  try {
    const response = await axios.post(`${AUTH_HOST}/user-data`, data, {
      headers,
    });
    return response.data.user_data;
  } catch (err) {
    return null;
  }
};
