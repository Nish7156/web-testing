// Import necessary modules and components
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./StoreProvider";
import SessionProvider from "@/components/SessionProvider";
import { auth } from "@/auth";
// import { getServerSession } from "next-auth";

// Define metadata for the page
export const metadata: Metadata = {
  title: "Tickr AI",
  description: "Tickr AI",
};

// Define the RootLayout component
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    // <AuthProvider>
    <StoreProvider>
      <html lang='en'>
        <body className={"bg-black"}>
          {/* <div className=' flex h-full w-full overflow-hidden '> */}
            <SessionProvider session={session}>{children}</SessionProvider>
            <Toaster />
          {/* </div> */}
        </body>
      </html>
    </StoreProvider>
    // </AuthProvider>
  );
}
