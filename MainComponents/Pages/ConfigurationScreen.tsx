"use client";
import React, { useEffect, useState } from "react";

import ActionCard from "@/components/ActionCard";
import { OPEN_ORDER_ACTIONS } from "@/lib/constant";
import {
  useLazyDeleteOpenOrdersQuery,
  useLazyGetOpenOrdersQuery,
  useLazySetTokenAlertQuery,
} from "@/lib/rtk/tokenAlert";

import { useRouter } from "next/navigation";
import useApiToast from "@/lib/customhooks/useApiToast";
import { SkeletonCard } from "@/components/SkeletonCard";
import DarkButton from "@/components/ui/DarkButton";
import { ScrollArea } from "@/components/ui/scroll-area";

function ConfigurationScreen({ userDetails }: any) {
  const [cardData, setCardData] = useState([]);
  const router = useRouter();
  const performApiCall = useApiToast();

  const [deleteOrders, deleteOrderResponse] = useLazyDeleteOpenOrdersQuery();
  const [placeOrder, placeOrderResponse] = useLazySetTokenAlertQuery();
  const [fetchOpenOrders, openOrderResponse] = useLazyGetOpenOrdersQuery<any>();

  useEffect(() => {
    if (userDetails?.user_id) {
      fetchOpenOrders({
        uuid: userDetails.user_id,
      });
    }
  }, [userDetails?.user_id]);

  useEffect(() => {
    if (openOrderResponse?.data?.bots) {
      setCardData(openOrderResponse.data.bots.data);
    }
  }, [openOrderResponse]);

  const handleAction = async (type: string, data: any) => {
    if (type === "delete") {
      await performApiCall(() => deleteOrders({ id: data.order_id }));
      if (deleteOrderResponse.isSuccess) {
        setCardData((prev) =>
          prev.filter((chatdata: any) => chatdata?.order_id !== data.order_id)
        );
      }
    }
    if (type === "bell") {
      const bell = !!data.is_paused;
      const response = await performApiCall(() =>
        placeOrder({
          ...data,
          is_paused: bell ? 0 : 1,
          chat_id: data.chat_id || userDetails.chat_id,
        })
      );

      if (placeOrderResponse.isSuccess) {
        setCardData((prev: any) =>
          prev.map((chatdata: any) =>
            chatdata.order_id === data.order_id
              ? { ...chatdata, is_paused: !data.is_paused }
              : chatdata
          )
        );
      }
    }
    if (type === "edit") {
      router.push(`/ai-assistant/chat?uuid=${userDetails?.user_id}`);
    }
  };
  console.log("cardData", cardData);
  return (
    <div className='container'>
      <div className='h-[80vh] overflow-y-scroll overflow-x-hidden '>
        {cardData?.length > 0 ? (
          cardData.map((data, index) => (
            <div className='mb-3' key={index}>
              <ActionCard
                isOrderOpen={false}
                Card_Acitons={OPEN_ORDER_ACTIONS}
                data={data}
                handleAction={handleAction}
              />
            </div>
          ))
        ) : (
          <div
            className=' flex  justify-center items-center	'
            style={{ height: "calc(100vh - 30vh)" }}
          >
            <div className='text-center'>
              <p className='text-secondary opacity-25'>
                {cardData?.length == 0 ? "No Alerts Configured" : "Loading..."}
              </p>
              {/* {!cardData && ( */}
              <div>
                <p className='text-secondary opacity-25 mt-1'>
                  Setup using Tickr AI Assistant or use our Tickr Terminal Tickr
                </p>
                <div className='px-20 flex mt-3'>
                  <DarkButton onclick={() => router.push("/alert/trade")}>
                    Tickr Terminal
                  </DarkButton>
                </div>
              </div>
              {/* )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfigurationScreen;
