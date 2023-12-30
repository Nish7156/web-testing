"use client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthWrapper: React.FC = (props) => {
    const router = useRouter();
    const user = useSelector((state: any) => state.pro.user);
    const isAuthenticated = user?.chat_id;
    const isTelegramRoute = router.pathname.startsWith("/alert/trade");

    useEffect(() => {
      if (!isTelegramRoute && !isAuthenticated) {
        router.replace("/ai-assistant");
      }
    }, [isAuthenticated, isTelegramRoute, router]);

    return !isAuthenticated || isTelegramRoute ? (
      <WrappedComponent {...props} />
    ) : null;
  };

  return AuthWrapper;
};

export default withAuth;
