"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { WelcomeModal } from "../Modals/WelcomeModal";
import TaskCard from "./TaskCard";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { BoardIcon, SmallBoardIcon } from "@/components/icons/BoardIcon";
import { signIn, useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  getAirDropUserDetails,
  getTasks,
  setTasks,
} from "@/lib/features/auth/authSlice";
import { redirect } from "next/navigation";
import { ActionTypes } from "@/types/airdrop";
import { useRouter } from "next/navigation";

const onTelegramConnect = () => {
  console.log("onTelegramConnect");
  redirect("/as");
};

const onTwitterLogin = async (updateTask: any) => {
  await signIn("twitter", { callbackUrl: "/airdrop" });
  updateTask("loginTwitter", "Complete");
};
const modals = [
  {
    type: ActionTypes.LOGIN_TWITTER,
    heading: "Login with Twitter",
    desc: (
      <>
        By continuing, you agree to the Tickr.ai’s{" "}
        <Link href='/terms' className='underline'>
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href='/privacy' className='underline'>
          Privacy Policy
        </Link>
        .
      </>
    ),
    submitButtonText: "Signup with Twitter",
    onSubmit: onTwitterLogin,
  },
  {
    type: ActionTypes.LOGIN_TELEGRAM,
    heading: "Connect your Telegram",
    desc: (
      <>
        By continuing, you agree to the Tickr.ai’s{" "}
        <Link href='/terms' className='underline'>
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href='/privacy' className='underline'>
          Privacy Policy
        </Link>
        .
      </>
    ),
    onSubmit: onTelegramConnect,
  },
  {
    type: ActionTypes.FOLLOW_TWITTER,
    heading: "Follow On Twitter",
    desc: (
      <>
        By continuing, you agree to the Tickr.ai’s{" "}
        <Link href='/terms' className='underline'>
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href='/privacy' className='underline'>
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
  {
    type: ActionTypes.JOIN_TELEGRAM,
    heading: "Join Telegram Channel",
    desc: (
      <>
        By continuing, you agree to the Tickr.ai’s{" "}
        <Link href='/terms' className='underline'>
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href='/privacy' className='underline'>
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
  {
    type: ActionTypes.LOGIN_DISCORD,
    heading: "Join our Discord",
    desc: (
      <>
        By continuing, you agree to the Tickr.ai’s{" "}
        <Link href='/terms' className='underline'>
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href='/privacy' className='underline'>
          Privacy Policy
        </Link>
        .
      </>
    ),
  },
];

function RenderWelcomeModals({
  action,
  updateTask,
  showModal,
  setShowModal,
}: any) {
  const { data: session } = useSession();
  const router = useRouter();
  const tasks = useAppSelector(getTasks);
  let currentModal;
  if (!session?.user) {
    currentModal = modals[0];
  } else {
    currentModal = modals.find((modal) => modal.type === action);
  }
  const currentTask = tasks.find(
    (task: { action: any }) => task.action === action
  );
  const handleNavigation = () => {
    if (!currentTask.link) {
      return;
    }
    router.push(currentTask.link);
  };
  return currentModal ? (
    <WelcomeModal
      updateTask={handleNavigation}
      key={currentModal.type}
      showModal={showModal}
      setShowModal={setShowModal}
      Heading={currentModal.heading}
      desc={currentModal.desc}
      buttonText={currentModal?.submitButtonText || "connect"}
    />
  ) : null;
}

function LeftCardContent() {
  const [action, setAction] = useState("");
  const tasks = useAppSelector(getTasks);
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleActionModal = (userAction: any, status: any) => {
    if (status) {
      return showToast("Task Already Completed");
    }
    if (Object.values(ActionTypes).includes(userAction)) {
      setAction(userAction);
      setShowModal(true);
    }
  };
  const showToast = (title: any) => {
    toast({
      variant: "default",
      title,
      action: (
        <ToastAction className=' border-primary' altText='Success'>
          Success
        </ToastAction>
      ),
      duration: 2000,
    });
  };

  const updateTask = (userAction: string, status: string) => {
    dispatch(setTasks({ userAction, status }));
  };

  return (
    <div className='lg:mt-5 mt-3'>
      <div className='flex items-center gap-1 lg:gap-[10px] pb-2'>
        <div className='hidden lg:flex'>
          <BoardIcon />
        </div>
        <div className='lg:hidden'>
          <SmallBoardIcon />
        </div>
        <h4 className='lg:text-4xl text-2xl text-secondary font-semibold'>
          6 Tasks
        </h4>
      </div>
      <div className='h-[422px] overflow-y-scroll overflow-x-hidden '>
        <div className='lg:mt-2 mt-0 mr-[1px] lg:mr-1'>
          {tasks.map((data: any, index: React.Key | null | undefined) => (
            <div className='mb-[25px]' key={index}>
              <TaskCard data={data} handleActionModal={handleActionModal} />
            </div>
          ))}
          {/* <div className='py-32 lg:py-0'></div> */}
        </div>
      </div>
      <RenderWelcomeModals
        action={action}
        updateTask={updateTask}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default LeftCardContent;
