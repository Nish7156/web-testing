"use client";
import React, { useState } from "react";
import copy from "clipboard-copy";
import { CopyIcon } from "./icons/CopyIcon";
import { Badge } from "./ui/badge";

function CopyText({ text }: any) {
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
    <div className=" relative cursor-pointer" onClick={() => onCopyText(text)}>
      {isCopied && (
        <p className="text-primary absolute top-[-25px] z-50 left-[-14px]">
          <Badge>Copied</Badge>
        </p>
      )}
      <CopyIcon />
    </div>
  );
}

export default CopyText;
