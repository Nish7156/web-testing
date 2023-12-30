"use client";
import ActionCard from "@/components/ActionCard";
import { CLOSE_ORDER_ACTIONS } from "@/lib/constant";

import { useLazyGetHistoryOrdersQuery } from "@/lib/rtk/tokenAlert";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function HistoryScreen({ userDetails }: any) {
  const [fetchHistoryOrders, historyOrderResponse] =
    useLazyGetHistoryOrdersQuery();
  const user = userDetails;
  const router = useRouter();
  const logsData = historyOrderResponse.data?.logs?.data;

  useEffect(() => {
    if (user?.user_id) {
      fetchHistoryOrders({ uuid: user?.user_id });
    }
  }, [user?.user_id, fetchHistoryOrders]);

  const handleAction = async (
    type: string,
    data: { id: any; token_id: any }
  ) => {
    if (type === "unicorn") {
      router.push(
        `https://flooz.xyz/trade/${data.token_id}?network=eth&refId=JEiChC`
      );
    }
    if (type === "star") {
      router.push(
        `https://t.me/unibotsniper_bot?start=tickr-${data.token_id})`
      );
    }
  };
  console.log("logsData", logsData);
  return (
    <>
      <div className='container'>
        <div className='overflow-y-scroll overflow-x-hidden h-[80vh]'>
          {logsData?.length > 0 ? (
            <>
              {logsData?.map((data: any, index: number) => (
                <div className='mb-3' key={index}>
                  <ActionCard
                    isOrderOpen={true}
                    Card_Acitons={CLOSE_ORDER_ACTIONS}
                    handleAction={handleAction}
                    data={data}
                  />
                </div>
              ))}
            </>
          ) : (
            <div
              className='flex justify-center items-center content-center'
              style={{ height: "calc(100vh - 30vh)" }}
            >
              <p className='text-secondary opacity-25'>No Alert History</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HistoryScreen;
