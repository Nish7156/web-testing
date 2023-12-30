import {
  convertTimestampToAge,
  convertUnixTimestampToAge,
  getScientificValue,
} from "@/lib/utils";
import React from "react";

function ActionCard({ Card_Acitons, data, isOrderOpen, handleAction }: any) {
  return (
    <div className='bg-secondary-200 p-2 rounded-md'>
      <div className='flex items-center'>
        {isOrderOpen ? (
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <p className='text-2xl text-white font-medium'>
                {data?.token_name}
              </p>
              <p className='text-2xl text-white font-medium'>
                {getScientificValue(data.alert_market_cap) || " NA "}
              </p>
            </div>
            <div className='flex items-center gap-4 mt-[1px]'>
              <p className='text-lg text-primary font-normal'>
                {data.alert_name}
              </p>
              <p className='text-gray-600 text-lg font-normal'>
                {convertUnixTimestampToAge(data?.alert_timestamp) || "-"}
              </p>
            </div>
          </div>
        ) : (
          <div className='flex-1'>
            <div className='flex items-center gap-2.5 '>
              <p className='text-2xl text-white'>{data?.alert_name || "--"}</p>
            </div>
            <p className='text-lg mt-[1px] text-gray-600'>
              {convertUnixTimestampToAge(data?.created_at)}
            </p>
          </div>
        )}

        <div className='flex-1'>
          <div className='flex gap-4 flex-wrap  items-center justify-end'>
            {Card_Acitons &&
              Card_Acitons.map((cdata: any, index: number) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleAction(cdata.action, data)}
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

export default ActionCard;
