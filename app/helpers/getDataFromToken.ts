import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
// import { polyfill } from "crypto-browserify"; // Import the polyfill
import { TOKEN_SECRET } from "@/lib/config";

// polyfill(); // Apply the polyfill

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, TOKEN_SECRET);
    return decodedToken;
  } catch (error: any) {
    return null;
  }
};
