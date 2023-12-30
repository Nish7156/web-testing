"use client";
import { useSession, signOut, signIn } from "next-auth/react";
import DarkButton from "./ui/DarkButton";

function AuthButton() {
  const { data: session } = useSession();
  const handleSignOutClick = async () => {
    await signOut({ callbackUrl: "/airdrop", redirect: true });
  };
  const handleSignInClick = async () => {
    await signIn("twitter", { callbackUrl: "/airdrop" });
  };
  if (session?.user) {
    return <DarkButton onclick={handleSignOutClick}>Sign Out</DarkButton>;
  }
  return <DarkButton onclick={handleSignInClick}>Sign in</DarkButton>;
}

export default AuthButton;

// redirect("/api/auth/signin")
// await signIn("twitter", {
//   callbackUrl: "http://localhost:3000/api/auth/callback/twitter",
// })
