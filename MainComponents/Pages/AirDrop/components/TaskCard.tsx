import { getAirDropUserDetails } from "@/lib/features/auth/authSlice";
import { useAppSelector } from "@/lib/hooks";
import { ActionTypes } from "@/types/airdrop";
import { useRouter } from "next/navigation";
import React from "react";
import CustomShareButton from "./CustomShareButton";
import Link from "next/link";

const CustomButton = ({
  children,
  isComplete,
  isStart,
  onClick,
  isDisabled,
}: any) => {
  const buttonClass = `w-full text-2xl lg:text-3xl bg-secondary-200 font-normal relative cursor-pointer py-2.5 transition-all px-5 flex justify-center items-center rounded-md border-[1px] border-secondary border-opacity-25 hover:bg-secondary-300 ${
    isComplete ? "text-primary" : isStart ? "text-tertiary" : "text-secondary "
  }`;

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      role="button"
      className={buttonClass}
    >
      {children}
    </button>
  );
};

function TaskCard({ data, handleActionModal }: any) {
  const userDetails = useAppSelector(getAirDropUserDetails);
  const showIcon = data?.icon && (
    <div className="hidden lg:flex lg:items-center">{data.icon}</div>
  );
  const isComplete = data.status === "Complete";

  const renderActionButton = () => {
    if (data.action === ActionTypes.REFER_FRIEND && userDetails) {
      return (
        <CustomShareButton
          link={`${window.location.origin}/airdrop?referalCode=${userDetails?.referral_code}`}
        />
      );
    } else if (data.action === ActionTypes.LOGIN_TELEGRAM && userDetails) {
      const telegramLink = `https://t.me/TICKRIntelligenceBot?start=config_${userDetails?.user_id}`;
      console.log("telegramLink", telegramLink);
      return (
        <CustomButton isComplete={isComplete} isStart={!isComplete}>
          <Link href={telegramLink} target="_blank" rel="noopener noreferrer">
            {data.status}
          </Link>
        </CustomButton>
      );
    } else if (data.link && userDetails) {
      const taskLink = data.link;
      return (
        <CustomButton isComplete={isComplete} isStart={!isComplete}>
          <Link href={taskLink} target="_blank" rel="noopener noreferrer">
            {data.status}
          </Link>
        </CustomButton>
      );
    } else {
      return (
        <CustomButton
          isComplete={isComplete}
          isStart={!isComplete}
          onClick={() => handleActionModal(data.action, isComplete)}
        >
          {data.status}
        </CustomButton>
      );
    }
  };

  return (
    <div className="p-4 bg-secondary-200 rounded-lg hover:bg-secondary-300">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-2 lg:gap-5">
        <div className="col-span-2">
          <div className="flex items-center gap-5">
            {showIcon}
            <div>
              <h4 className="text-secondary font-semibold text-2xl lg:text-3xl">
                {data.title}
              </h4>
              {data?.subText && (
                <p className="pt-[0.5px] text-tertiary font-normal text-2xl lg:text-3xl">
                  {data.subText}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-1 lg:mt-0">
          <div className="flex items-center gap-3 lg:gap-5">
            {data?.icon && <div className="lg:hidden flex">{data.icon}</div>}
            {renderActionButton()}
            <CustomButton isComplete={data.status === "Complete"}>
              150 TICKR
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
