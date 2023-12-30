//@ts-nocheck

// useMediaQuery.js
'use client'
import { useMediaQuery } from "@react-hook/media-query";

export const useDeviceType = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isMobile) {
    return "mobile";
  } else if (isTablet) {
    return "tablet";
  } else {
    return "desktop";
  }
};
