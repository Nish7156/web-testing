"use client";
import AlerActionCard from "@/MainComponents/Pages/AlertModule/AlerActionCard";
import TradingBots from "@/MainComponents/Pages/AlertModule/TradeComponents/TrandingBots";
import Tabs from "@/components/Tabs";
import { GreenIcon } from "@/components/icons/GreenIcon";
import { HandsIcon } from "@/components/icons/HandsIcon";
import {
  HISTORY_ACTIONS,
  OPEN_ORDER_ACTIONS,
  OPEN_ORDER_ACTIONS_OLD,
} from "@/lib/constant";
import { useLazyDeleteOpenOrdersQuery } from "@/lib/rtk/tokenAlert";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

const tradeCardData = [
  {
    id: 1,
    title: "Limit  Order",
    link: "/alert/trade/limit-order",
    icon: <GreenIcon />,
  },
  {
    id: 2,
    title: "Buddy Trading",
    link: "/alert/trade/buddy-trading",
    icon: <HandsIcon />,
  },
];

const getTabs = (openOrders: any, historyOrders: any, handleAction: any) => {
  return [
    {
      label: "Open Orders",
      content: (
        <OpenOrderData openOrders={openOrders} handleAction={handleAction} />
      ),
    },
    {
      label: "History",
      content: (
        <HistoryData
          historyOrders={historyOrders}
          handleAction={handleAction}
        />
      ),
    },
  ];
};

function TradeScreen({ maxHeight, user, openOrders, historyOrders }: any) {
  const [selectedTab, setSelectedTab] = useState("Open Orders");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [cardData, setCardData] = useState([]);
  const [deleteOrders, deleteOrderResponse] = useLazyDeleteOpenOrdersQuery();
  const router = useRouter();
  const handleTabChange = (tabLabel: any) => {
    if (!tabLabel) {
      return null;
    }
    setSelectedTab(tabLabel);
    setActiveTabIndex(tabLabel === "Open Orders" ? 0 : 1);
  };
  const handleAction = (type: string, data: { id: any; token_id: any }) => {
    if (type === "delete") {
      deleteOrders({ id: data.id });
      setCardData((prev) => prev.filter((cdata: any) => cdata.id !== data.id));
    }
    if (type === "edit") {
      if (activeTabIndex)
        router.push(`/alert/trade/limit-order?uuid=${user?.user_id}`);
      router.push(`/alert/trade/buddy-trading?uuid=${user?.user_id}`);
    }
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
  const tabs = getTabs(openOrders, historyOrders, handleAction);

  return (
    <div className='container'>
      <TradingBots cardData={tradeCardData} heading='Trading Bots' />
      <div className='my-3'>
        <Tabs
          tabs={tabs}
          onSelect={handleTabChange}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
        <div
          className={` ${
            maxHeight ? `${maxHeight}` : "min-h-[50vh]"
          }  overflow-y-auto`}
        >
          <SwipeableViews
            index={activeTabIndex}
            onChangeIndex={(index: any) => handleTabChange(tabs[index].label)}
          >
            {tabs?.map((tab: any, index: any) => (
              <div className='mt-3' key={index}>
                {selectedTab === tab.label && tab.content}
              </div>
            ))}
            <div className='pb-24'></div>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}

export default TradeScreen;

const OpenOrderData = ({ openOrders, handleAction }: any) => {
  return (
    <div>
      {openOrders.map((data: any) => {
        return (
          <div className='mb-2' key={data}>
            <AlerActionCard
              isOrderOpen
              Card_Acitons={OPEN_ORDER_ACTIONS_OLD}
              data={data}
              handleAction={handleAction}
            />
          </div>
        );
      })}
    </div>
  );
};

const HistoryData = ({ historyOrders, handleAction }: any) => {
  return (
    <div>
      {historyOrders.map((data: any) => {
        return (
          <div className='mb-2' key={data}>
            <AlerActionCard
              isOrderOpen={false}
              Card_Acitons={HISTORY_ACTIONS}
              data={data}
              handleAction={handleAction}
            />
          </div>
        );
      })}
    </div>
  );
};
