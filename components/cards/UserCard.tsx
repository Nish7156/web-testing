"use client";
import HeadingTag from "@/MainComponents/elements/Heading";
import React, { useState } from "react";
import { CancelIcon } from "../icons/CancelIcon";
import { Textarea } from "../ui/textarea";
import DarkButton from "../ui/DarkButton";
import { UserIcon } from "../icons/UserIcon";
import { EditIcon } from "../icons/EditIcon";
import { sanitizeInput } from "@/lib/utils";
import { ToastAction } from "@radix-ui/react-toast";
import { useToast } from "../ui/use-toast";

const UserCard = ({ askAi, data, aiReponse, isDisable }: any) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userResponse, setUserResponse] = useState(data?.user_message);
  const { toast } = useToast();

  const onEditSave = (userPrompt: any, data: any) => {
    if (!userPrompt || userPrompt.length < 10) {
      toast({
        variant: "destructive",
        title: "Uh oh! Character limit should be more than 10 ",
        description: "There was a problem with your request.",
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
        duration: 2000,
      });
      return null;
    }
    const sanitizedPrompt = sanitizeInput(userPrompt);
    askAi(
      {
        message_id: data.message_id,
        user_id: data.user_id,
        user_message: sanitizedPrompt,
        message_createdAt: new Date().toISOString(),
      },
      true
    );
    setIsEditMode(false);
  };

  const handleEdit = () => {
    if (aiReponse.isLoading) {
      return;
    }
    setIsEditMode(true);
  };

  return (
    <div>
      {" "}
      {!isEditMode ? (
        <div className=' grid grid-cols-12 gap-4 '>
          <div className=' col-span-1'>
            <div className=''>
              <UserIcon />
            </div>
          </div>
          <div className=' col-span-11'>
            <UserChatCard
              handleEdit={handleEdit}
              value={userResponse}
              isDisable={isDisable}
            />
          </div>
        </div>
      ) : (
        <div className=' grid grid-cols-12 gap-4 '>
          <div className=' col-span-1'>
            <div className=''>
              <UserIcon />
            </div>
          </div>
          <div className=' col-span-11'>
            <EditTextArea
              userResponse={userResponse}
              setUserResponse={setUserResponse}
              setIsEditMode={setIsEditMode}
              onEditSave={onEditSave}
              data={data}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;

const UserChatCard = ({ value, handleEdit, isDisable }: any) => {
  return (
    <>
      <div className='text-secondary'>
        <HeadingTag>You</HeadingTag>
        <p className='text-2xl font-normal text-secondary text-left'>{value}</p>
        <div className='' onClick={isDisable ? null : handleEdit}>
          <EditIcon />
        </div>
      </div>
    </>
  );
};

const EditTextArea = ({
  setIsEditMode,
  onEditSave,
  userResponse,
  setUserResponse,
  data,
}: any) => {
  function submitOnEnter(event: any) {
    if (event.key === "Enter" && !event.shiftKey) {
      if (!event.repeat) {
        console.log("::::::");

        onEditSave(userResponse);
      }
      event.preventDefault();
    }
  }
  return (
    <>
      <div className='text-white'>
        <div className='flex items-center justify-between mb-1.5'>
          <HeadingTag>You</HeadingTag>
          <div className='' onClick={() => setIsEditMode(false)}>
            <CancelIcon />
          </div>
        </div>
        <Textarea
          id='form'
          placeholder='Type your message here.'
          value={userResponse}
          onChange={(e: any) => setUserResponse(e.target.value)}
          onKeyDown={submitOnEnter}
        />
        <div className=' flex items-center justify-center mt-3 '>
          <div className='w-1/2'>
            <DarkButton onclick={() => onEditSave(userResponse, data)}>
              Save & Submit
            </DarkButton>
          </div>
        </div>
      </div>
    </>
  );
};
