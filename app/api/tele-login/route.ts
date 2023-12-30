import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET, headers, host } from "@/lib/config";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const url = `${host}/user-data?id=${reqBody.chat_id}`;

    const newUserResponse = await axios.post(url, reqBody, {
      headers,
    });
    const userData = newUserResponse?.data?.status?.user_data;
    if (!userData) {
      return NextResponse.json(
        { error: "User failed to create" },
        { status: 400 }
      );
    }
    const token = jwt.sign(userData, TOKEN_SECRET, {
      expiresIn: "7d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      userData: userData,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
