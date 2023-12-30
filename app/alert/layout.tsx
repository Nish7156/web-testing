import Footer from "@/MainComponents/Layout/Footer";
import Header from "@/MainComponents/Pages/AlertModule/Layout/Header";
import { AlertFooterLinks } from "@/lib/constant";
import React from "react";

function AlertLatout({ children }: any) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <main className="flex-1 container">{children}</main>
        <div className="sticky bottom-0 z-50">
          <Footer links={AlertFooterLinks} isDisableHomeButton={true} />
        </div>
      </div>
    </>
  );
}

export default AlertLatout;
