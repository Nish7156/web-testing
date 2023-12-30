import { TOKEN_SECRET } from "@/lib/config";
import jwt from "jsonwebtoken";

const validateCookie = () => {
  const tokenCookie = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  console.log("tokenCookie", tokenCookie);

  if (tokenCookie) {
    try {
      const decodedToken: any = jwt.verify(tokenCookie, TOKEN_SECRET);

      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (decodedToken.exp && decodedToken.exp < currentTimestamp) {
        console.error("Token expired");
        return false;
      }

      console.log("Token is valid:", decodedToken);
      return true;
    } catch (error: any) {
      // Token is invalid or expired
      console.error("Invalid token:", error);
      return false;
    }
  } else {
    // Token cookie not found
    console.error("Token cookie not found");
    return false;
  }
};

export default validateCookie;
