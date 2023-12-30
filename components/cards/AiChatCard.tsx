"use client";
import HeadingTag from "@/MainComponents/elements/Heading";
import TextLg from "@/MainComponents/elements/TextLg";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import { AiSmallLogo } from "../icons/AiSmallLogo";

const ChatAlert = ({ icon }: any) => {
  return (
    <>
      <div className='flex items-center gap-1'>
        {icon && <Check />}
        <TextLg primary>✓ Alert Set Successfully!</TextLg>
      </div>
    </>
  );
};
const AiCard = ({ data, isLoading, isLastCard, handleCount, count }: any) => {
  // const [displayedText, setDisplayedText] = useState("");
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   if (data.result && isLastCard) {
  //     const textToDisplay = data.result;

  //     const intervalId = setInterval(() => {
  //       setDisplayedText(textToDisplay.substring(0, currentIndex + 1));
  //       setCurrentIndex((prevIndex) =>
  //         prevIndex < textToDisplay.length ? prevIndex + 1 : prevIndex
  //       );

  //       if (currentIndex >= textToDisplay.length - 1) {
  //         // Text display is complete, so don't run handleCount
  //         clearInterval(intervalId);
  //       } else {
  //         handleCount();
  //       }
  //     }, 10);

  //     return () => clearInterval(intervalId);
  //   }
  // }, [isLoading, data, currentIndex]);
  return (
    <>
      <div className='text-white'>
        <HeadingTag>Tickr AI</HeadingTag>
        {/* {true ? <ChatAlert /> : null} */}
        {isLoading ? <LoadingChantAnimation /> : null}
        {!isLoading && (
          <p className='text-2xl font-normal text-secondary text-left'>
            {/* {isLastCard ? displayedText : data?.response} */}
            {data?.response}
          </p>
        )}
      </div>
    </>
  );
};

const AiChatCard = ({
  data,
  isLoading,
  isLastCard,
  handleCount,
  count,
}: any) => {
  return (
    <>
      <div className='my-[14px]'>
        <div className=' grid grid-cols-12 gap-4 '>
          <div className=' col-span-1'>
            <div className=''>
              <AiSmallLogo />
            </div>
          </div>
          <div className=' col-span-11'>
            <AiCard
              data={data}
              isLoading={isLoading}
              isLastCard={isLastCard}
              handleCount={handleCount}
              count={count}
            />
          </div>
        </div>
        <div className='my-[8px]' />
      </div>
    </>
  );
};

export default AiChatCard;

const LoadingChantAnimation = () => {
  return (
    <div className='chat-bubble mt-3'>
      <div className='flex'>
        <div className='typing '>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
    </div>
  );
};
