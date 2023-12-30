"use client";
import { ShareIcon } from "@/components/icons/ShareIcon";
import { useState } from "react";
import copy from "clipboard-copy";
import { Badge } from "@/components/ui/badge";

const CustomShareButton = ({ link }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const onCopyText = async (ctx: any) => {
    try {
      await copy(ctx);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };
  return (
    <div className=" relative">
      {isCopied && (
        <p className="text-primary absolute top-[-32px] z-50 left-[35px]">
          <Badge>Copied</Badge>
        </p>
      )}
      <button
        onClick={() => onCopyText(link)}
        className="w-full text-2xl lg:text-3xl bg-secondary-200 font-normal relative  py-2.5 transition-all px-5 flex justify-center items-center rounded-md border-[1px] border-secondary border-opacity-25 hover:bg-secondary-300 cursor-pointer "
      >
        <div className=" flex items-center gap-2">
          <ShareIcon />
          <p>Share</p>
        </div>
      </button>
    </div>
  );
};

export default CustomShareButton;
