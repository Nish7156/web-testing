"use client";
import TextLg from "@/MainComponents/elements/TextLg";
import Card from "./Card";
import { CopyIcon } from "./icons/CopyIcon";
import { useState } from "react";
import copy from "clipboard-copy";
import { Badge } from "./ui/badge";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setCopiedText } from "@/lib/features/copy/copySlice";
import { useRouter } from "next/navigation";

export const DemoCardDetails = ({ data }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onCopyText = async (ctx: any) => {
    try {
      await copy(ctx);
      setIsCopied(true);
      dispatch(setCopiedText(ctx));
      router.push("/ai-assistant/chat");
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };
  return (
    <>
      <Card>
        <div className='flex justify-between gap-2 items-center'>
          <div className='flex items-center gap-2'>
            {data?.icon}
            <TextLg>{data?.title}</TextLg>
          </div>
          <div
            className=' relative cursor-pointer'
            onClick={() => onCopyText(data?.desc)}
          >
            {isCopied && (
              <p className='text-primary absolute top-[-25px] z-50 left-[-14px]'>
                <Badge>Copied</Badge>
              </p>
            )}
            <CopyIcon />
          </div>
        </div>
        <p className='text-secondary-100 text-lg py-1 pr-1'>{data?.desc}</p>
      </Card>
    </>
  );
};
