import axios from "axios";

export const getLogOutUser = async () => {
  try {
    const response = await axios.get("/api/tele-logout");
    return response.data.data;
  } catch (err) {
    return null;
  }
};
