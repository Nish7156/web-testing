"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { GreenDotIcon } from "@/components/icons/GreenDot";
import Link from "next/link";
import DarkButton from "@/components/ui/DarkButton";
interface Imodal {
  showModal: boolean;
  setShowModal: any;
  Heading?: string;
  desc: any;
  onSubmit?: any;
  buttonText: any;
  updateTask?: any;
}

export function WelcomeModal({
  showModal,
  setShowModal,
  Heading,
  desc,
  buttonText,
  updateTask,
}: Imodal) {
  console.log("submitButtonText", buttonText);
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogContent className='lg:max-w-[520px] h-auto lg:px-[76px] lg:py-[32px]'>
        <DialogHeader>
          <DialogTitle className=' text-center text-secondary text-md font-normal mb-[15px]'>
            {Heading}
          </DialogTitle>
          <div className='flex gap-2 '>
            <div className=''>
              <GreenDotIcon />
            </div>
            <DialogDescription className=' text-tertiary text-3xl text-left'>
              {desc}
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className='flex mt-[30px] justify-center  items-center gap-20'>
          <div className=''>
            <DarkButton onclick={() => updateTask()}>{buttonText}</DarkButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
