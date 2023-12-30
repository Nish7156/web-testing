import { convertUnixTimestampToAge, getScientificValue } from "@/lib/utils";
import React from "react";

function AlerActionCard({
  Card_Acitons,
  data,
  isOrderOpen,
  handleAction,
  isInfluencer,
}: any) {
  return (
    <div className='bg-secondary-200 p-2 rounded-md'>
      <div className='flex items-center'>
        {isOrderOpen ? (
          <div className='flex-1'>
            <p className='text-2xl text-white'>{data?.alert_name || "--"}</p>
            <div className='flex items-center gap-2.5 mt-[1px]'>
              <p className='text-lg text-primary'>{data?.bot_name}</p>
              <p className='text-secondary opacity-20 text-lg'>
                {" "}
                {convertUnixTimestampToAge(data?.created_at)}
              </p>
            </div>
          </div>
        ) : (
          <div className='flex-1'>
            <div className='flex items-center gap-2.5 '>
              <p
                className={`text-2xl font-medium ${
                  isInfluencer ? "text-secondary " : "text-primary"
                } `}
              >
                {data?.alert_name}
              </p>
              <p className='text-secondary text-2xl font-medium'>
                {getScientificValue(data?.alert_market_cap)}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              {isInfluencer && (
                <div className='text-primary text-lg font-normal'>
                  {data?.token_name}
                </div>
              )}
              <p className='text-lg mt-[1px] text-secondary opacity-20'>
                {convertUnixTimestampToAge(data?.alert_timestamp)}
              </p>
            </div>
          </div>
        )}

        <div className='flex-1'>
          <div className='flex gap-4 flex-wrap  items-center justify-end'>
            {Card_Acitons &&
              Card_Acitons.map((cdata: any, index: number) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleAction(cdata?.action, data)}
                  >
                    <div className='actionIcon'>{cdata?.icon}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlerActionCard;
