import axios from "axios";
import { cookies } from "next/headers";
import { TOKEN_SECRET } from "../config";

export const getUserDetails = async () => {
  try {
    const response = await axios.get("/api/me");
    return response.data.data;
  } catch (err) {
    return null;
  }
};
