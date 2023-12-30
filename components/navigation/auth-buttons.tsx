"use client";

import { LoginButton } from "@telegram-auth/react";

import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInButton({ botUsername }: { botUsername: string }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Reloading...</div>;
  }

  if (status === "authenticated") {
    return <div>authenticated user </div>;
  }

  return (
    <LoginButton
      botUsername={botUsername}
      onAuthCallback={(data) => {
        signIn("telegram-login", { callbackUrl: "/" }, data as any);
      }}
    />
  );
}
