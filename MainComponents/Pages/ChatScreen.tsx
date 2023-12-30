"use client";
import React, { useEffect, useState, useRef } from "react";
import SendInput from "@/components/SendInput";
import AiChatCard from "@/components/cards/AiChatCard";
import UserCard from "@/components/cards/UserCard";
import { getCopiedText } from "@/lib/features/copy/copySlice";
import { user } from "@/lib/firebase";
import { useAppSelector } from "@/lib/hooks";
import { generateUUID } from "@/lib/utils";
import useAiAssistant from "@/lib/customhooks/useAiAssistant ";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { TickerCircle } from "@/components/icons/TickerCircle";
import { getMessageId, setMessageId } from "@/lib/features/chatbot/chatSlice";
import { useDispatch } from "react-redux";

function Chat({ userDetails, chatDetails }: any) {
  const { toast } = useToast();
  const [chatData, setChatData] = useState<any[]>(chatDetails || []);
  const copiedText = useAppSelector(getCopiedText);
  const [inputValue, setInputValue] = useState(copiedText);
  const { aiAssistant: askAiPrompt, aiResponse } = useAiAssistant();
  const messageEl = useRef<HTMLDivElement>(null);
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  const [isUserEnterMsg, setIsUserEnterMsg] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(true);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleAiResponse = async (data: any, isEdited?: boolean) => {
    try {
      askAiPrompt(data);
      let slicedArray = [...chatData];
      if (isEdited) {
        const index = chatData?.findIndex(
          (chat) => chat.message_id === data.message_id
        );
        slicedArray = chatData.slice(0, index + 1);
        slicedArray[index] = data;
        setChatData(slicedArray);
        await user.updateChat(userDetails?.user_id, slicedArray);
      } else {
        slicedArray.push(data);
        setChatData(slicedArray);
        await user.createChat(userDetails?.user_id, data);
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong ",
        description: "There was a problem with your request.",
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
        duration: 2000,
      });
    }
  };

  const handleSend = () => {
    scrollToBottom();
    const uploadedPayload = {
      user_message: inputValue,
      user_id: userDetails?.user_id,
      message_id: generateUUID(),
      message_createdAt: new Date().toISOString(),
    };
    handleAiResponse(uploadedPayload);
    setInputValue("");
    setIsUserEnterMsg(!isUserEnterMsg);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSend();
      setIsUserEnterMsg(!isUserEnterMsg);
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        let uploadedPayload;
        console.log("aiResponse?.data,", aiResponse?.data);
        if (aiResponse?.data) {
          uploadedPayload = {
            isAiCard: true,
            response: aiResponse?.data?.result,
            response_createdAt: new Date().toISOString(),
            message_id: aiResponse?.data.message_id,
          };
          console.log("uploadedPayload", uploadedPayload);
          setChatData([...chatData, uploadedPayload]);
          await user.createChat(userDetails?.user_id, uploadedPayload);
        } else if (aiResponse.error) {
          uploadedPayload = {
            isAiCard: true,
            response: "Uh oh! Something went wrong  I am working on it!",
            response_createdAt: new Date().toISOString(),
            message_id: null,
          };
          setChatData([...chatData, uploadedPayload]);
          await user.createChat(userDetails?.user_id, uploadedPayload);
        }
      };

      fetchData();
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong ",
        description: "There was a problem with your request.",
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
        duration: 2000,
      });
    }
  }, [aiResponse?.data]);

  useEffect(() => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatData, isUserEnterMsg]);

  useEffect(() => {
    const handleResize = () => {
      // Check if the visual viewport height is less than the window height
      //@ts-ignore
      const isKeyboardOpen = window.innerHeight > window.visualViewport.height;
      setIsKeyboardOpen(isKeyboardOpen);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const footerElement = document.getElementById("aiFooter");

    if (footerElement) {
      if (isKeyboardOpen) {
        footerElement.style.display = "none";
      } else {
        footerElement.style.display = "block";
      }
    }
  }, [isKeyboardOpen]);

  const scrollToBottom = () => {
    //@ts-ignore
    scrollToRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
      inline: "end",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [count]);

  return (
    <>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
      <div className='flex-1 overflow-hidden'>
        <div className='relative h-full overflow-y-scroll overflow-x-hidden'>
          {chatData && chatData?.length === 0 ? (
            <div className='flex h-full flex-col items-center justify-center'>
              <TickerCircle />
              <h2 className=' mt-2 text-secondary text-[22px] font-semibold'>
                Welcome to Tickr AI Asistant
              </h2>
            </div>
          ) : (
            <div className='flex-1 overflow-hidden'>
              <div className='react-scroll-to-bottom--css-txseu-79elbk h-full'>
                <div className='react-scroll-to-bottom--css-txseu-1n7m0yu'>
                  <div
                    className='flex flex-col pb-9 pt-3 text-sm px-3 message-container '
                    ref={messageEl}
                  >
                    {chatData?.map((data: any, index: any) => {
                      const isAiCard = data?.isAiCard;
                      const isLastCard = chatData?.length - 1 === index;

                      if (isAiCard) {
                        return (
                          <div
                            className=''
                            key={data.order_id}
                            id={`${index}`}
                            ref={(ref) => {
                              if (index === chatData.length - 1) {
                                scrollToRef.current = ref;
                              }
                            }}
                          >
                            <AiChatCard
                              key={data.message_id}
                              index={index}
                              data={data}
                              aiReponse={aiResponse}
                              isLastCard={isLastCard}
                              handleCount={handleCount}
                              count={count}
                              scrollToRef={scrollToRef}
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className=''
                            key={data?.message_id}
                            id={`${index}`}
                            ref={(ref) => {
                              if (index === chatData.length - 1) {
                                scrollToRef.current = ref;
                              }
                            }}
                          >
                            <UserCard
                              data={data}
                              askAi={handleAiResponse}
                              aiReponse={aiResponse}
                              isDisable={aiResponse.isLoading}
                            />
                          </div>
                        );
                      }
                    })}
                    {aiResponse.isLoading && (
                      <AiChatCard isLoading={aiResponse.isLoading} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`w-full ${
          isKeyboardOpen ? "mb-4" : "mb-[1.8rem]"
        }   md:pt-0 container  md:w-[calc(100%-.5rem)]`}
      >
        <SendInput
          placeholder={"Type your command here"}
          value={inputValue}
          disabled={aiResponse.isLoading}
          onChange={(e: any) => setInputValue(e.target.value)}
          onClick={handleSend}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
}

export default Chat;
