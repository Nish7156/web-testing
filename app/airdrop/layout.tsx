import Footer from "@/MainComponents/Layout/Footer";
import AirDropHeader from "@/MainComponents/Pages/AirDrop/components/Header";
import LeftBgGreen from "@/MainComponents/Pages/AirDrop/components/LeftBgGreen";
import RightBgGreen from "@/MainComponents/Pages/AirDrop/components/RightBgGreen";
import { auth } from "@/auth";
import { AirDropFooterLinks } from "@/lib/constant";
import React from "react";

async function AirDropLayout({ children }: any) {
  return (
    <>
      {/* <div className=" border-b-[1px] border-b-secondary border-opacity-20 ">
        <div className="flex items-center  w-full justify-between web-container bg-black">
          <AirDropHeader />
        </div>
      </div>
      {children}
     <div className=" block md:hidden">
     <Footer links={AirDropFooterLinks}/>
     </div> */}
      <div className="relative z-0 flex h-full w-full overflow-hidden">
        <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
          <div className=" sticky top-0 z-10 flex  items-center bg-black border-b-[0.5px] border-b-gray-500 justify-between p-3">
            <AirDropHeader />
          </div>
          <main className="relative h-full w-full flex-1 overflow-auto transition-width">
            <RightBgGreen />

            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-hidden md:overflow-auto text-white">
                <div className="relative h-full">{children}</div>
              </div>
              <div
                id="aiFooter"
                className="w-full pt-2 md:pt-0 dark:border-white/20 md:border-transparent text-white md:dark:border-transparent md:w-[calc(100%-.5rem)] block md:hidden"
              >
                <Footer
                  links={AirDropFooterLinks}
                  isDisableHomeButton={true}
                  includeAllActive={false}
                />
              </div>
            </div>
            <LeftBgGreen />
          </main>
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 z-[2]"></div>
    </>
  );
}

export default AirDropLayout;
