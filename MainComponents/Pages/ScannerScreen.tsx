"use client";
import AlerActionCard from "@/MainComponents/Pages/AlertModule/AlerActionCard";
import TradingBots from "@/MainComponents/Pages/AlertModule/TradeComponents/TrandingBots";
import Tabs from "@/components/Tabs";
import { GreenIcon } from "@/components/icons/GreenIcon";
import { SpickerIcon } from "@/components/icons/SpickerIcon";
import { TokenActivityIcon } from "@/components/icons/TokenActivityIcon";
import { TokenIcon } from "@/components/icons/TokenIcon";
import {
  CLOSE_ORDER_ACTIONS,
  HISTORY_ACTIONS,
  OPEN_ORDER_ACTIONS,
  OPEN_ORDER_ACTIONS_OLD,
} from "@/lib/constant";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";

function Scanner({ maxHeight }: any) {
  const [selectedTab, setSelectedTab] = useState("Active Scanners");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [
    { label: "Active Scanners", content: <ActiveScanner /> },
    { label: "Scanned Tokens", content: <ScanedToken /> },
  ];
  const handleTabChange = (tabLabel: any) => {
    if (!tabLabel) {
      return null;
    }
    setSelectedTab(tabLabel);
    setActiveTabIndex(tabLabel === "Active Scanners" ? 0 : 1);
  };
  const cardData = [
    {
      id: 1,
      title: "Influencer Scanner",
      link: "/alert/scanner/influencer-scanner",
      icon: <SpickerIcon />,
    },
    {
      id: 2,
      title: "Token Scanner",
      link: "/alert/scanner/token-scanner",
      icon: <TokenIcon />,
    },
  ];
  return (
    <div className='container'>
      <TradingBots cardData={cardData} heading='Screeners' />
      <div className='my-3'>
        <Tabs
          tabs={tabs}
          onSelect={handleTabChange}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
        <div
          className={` ${
            maxHeight ? `${maxHeight}` : "h-[368px]"
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

export default Scanner;

const ActiveScanner = () => {
  const arr = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    1,
    1,
    1,
    ,
    1,
    1,
    1,
    1,
  ];
  return (
    <div>
      {arr.map((data) => {
        return (
          <div className='mb-2' key={data}>
            <AlerActionCard
              isOrderOpen
              Card_Acitons={OPEN_ORDER_ACTIONS}
              handleAction={() => {}}
            />
          </div>
        );
      })}
    </div>
  );
};

const ScanedToken = () => {
  const arr = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    1,
    1,
    1,
    ,
    1,
    1,
    1,
    1,
  ];
  return (
    <div>
      {arr.map((data) => {
        return (
          <div className='mb-2' key={data}>
            <AlerActionCard
              isInfluencer={true}
              isOrderOpen={false}
              Card_Acitons={CLOSE_ORDER_ACTIONS}
            />
          </div>
        );
      })}
    </div>
  );
};
