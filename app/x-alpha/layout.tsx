"use client";
import XAlphaFooter from "@/MainComponents/Pages/XAlpha/XAlphaFooter";
import XAlphaHeader from "@/MainComponents/Pages/XAlpha/XAlphaHeader";
import React, { useState } from "react";
import Video from "next-video";

function XAlphaLayout({ children }: any) {
  const [deviceHeight, setDeviceHeight] = useState();
  React.useEffect(() => {
    let viewportHeight: any = window.innerHeight;
    setDeviceHeight(viewportHeight);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Video
        src={"/videos/Banner2LR.mp4"}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className={"videoClass hidden lg:block"}
      ></Video>

      <video
        src={"/videos/MobileBgLR.mp4"}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className={" mobileVideoClass lg:hidden block"}
      ></video>
      <header className="border-b-[0.5px] lg:border-b-0 border-b-[#3C4655] w-full absolute top-0 z-20">
        <XAlphaHeader />
      </header>
      <main
        className={`flex-grow absolute ${
          deviceHeight && deviceHeight <= 750 ? "top-[0px]" : "top-[60px]"
        } lg:top-[25%]   w-full `}
      >
        <div className="alpha-container">{children}</div>
      </main>

      <footer
        className={` absolute  ${
          deviceHeight && deviceHeight <= 700 ? "top-[85%]" : "top-[80%]"
        }  w-full `}
      >
        <div className="alpha-container">
          <XAlphaFooter />
        </div>
      </footer>
    </div>
  );
}

export default XAlphaLayout;
