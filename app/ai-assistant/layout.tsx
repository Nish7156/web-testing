import Footer from "@/MainComponents/Layout/Footer";
import Header from "@/MainComponents/Layout/Header";
import { AiFooterLinks } from "@/lib/constant";
import React from "react";

function AiAssistantLayout({ children }: any) {
  return (
    <>
      <div className="relative z-0 flex h-full w-full overflow-hidden">
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
          <div className=" sticky top-0 z-10 flex  items-center bg-black border-b-[0.5px] border-b-gray-500 justify-between p-3">
            <Header />
          </div>
          <main className="relative h-full w-full flex-1 overflow-auto transition-width">
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-hidden text-white">
                <div className="relative h-full">{children}</div>
              </div>
              <div id="aiFooter" className="w-full pt-2 md:pt-0 dark:border-white/20 md:border-transparent text-white md:dark:border-transparent md:w-[calc(100%-.5rem)]">
                <Footer links={AiFooterLinks} />
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 z-[2]"></div>
    </>
  );
}

export default AiAssistantLayout;
