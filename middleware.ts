import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getDataFromToken } from "./app/helpers/getDataFromToken";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/ai-assistant";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/ai-assistant", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/ai-assistant", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/ai-assistant/chat",
    "/ai-assistant/configurations",
    "/ai-assistant/history",
  ],
};
