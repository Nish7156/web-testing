"use client";
import SwipeableViews from "react-swipeable-views";
import Tabs from "./Tabs";
import { useState } from "react";
import { DemoCardDetails } from "./DemoCardDetails";
import {
  HOLDER_PROMPT,
  INFLUENCERS_PROMPT,
  TOKEN_PROMPT,
} from "@/lib/constant";
import { ScrollArea } from "./ui/scroll-area";

export const PreConfigureTabData = ({ maxHeight }: any) => {
  const [selectedTab, setSelectedTab] = useState("Token");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [
    { label: "Token", content: <TokenCardData /> },
    { label: "Holders", content: <HolderCardData /> },
    { label: "Influencers", content: <InfluencerCardData /> },
  ];

  const handleTabChange = (tabLabel: any) => {
    if (!tabLabel) {
      return null;
    }
    setSelectedTab(tabLabel);
    setActiveTabIndex(
      tabLabel === "Token" ? 0 : tabLabel === "Holders" ? 1 : 2
    );
  };
  return (
    <div className="my-3">
      <Tabs
        tabs={tabs}
        onSelect={handleTabChange}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />
      <div
        className={` ${
          maxHeight ? maxHeight : "h-[41vh]"
        } overflow-y-auto overflow-x-hidden mt-3`}
      >
        <SwipeableViews
          index={activeTabIndex}
          onChangeIndex={(index: any) => handleTabChange(tabs[index].label)}
        >
          {tabs?.map((tab: any, index: any) => (
            <div className="mt-1" key={index}>
              {selectedTab === tab.label && tab.content}
            </div>
          ))}
        </SwipeableViews>
      </div>
    </div>
  );
};

const TokenCardData = () => {
  return (
    <div className="">
      {TOKEN_PROMPT?.map((data: any, index: number) => {
        return (
          <div className="mb-3" key={index}>
            <DemoCardDetails data={data} />
          </div>
        );
      })}
      <div className="py-6"></div>
    </div>
  );
};

const HolderCardData = () => {
  return (
    <div className="">
      {HOLDER_PROMPT?.map((data: any, index: number) => {
        return (
          <div className="mb-3" key={index}>
            <DemoCardDetails data={data} />
          </div>
        );
      })}
      <div className="py-4"></div>
    </div>
  );
};

const InfluencerCardData = () => {
  return (
    <div className="">
      {INFLUENCERS_PROMPT?.map((data: any, index: number) => {
        return (
          <div className="mb-3" key={index}>
            <DemoCardDetails data={data} />
          </div>
        );
      })}
      <div className="py-4"></div>
    </div>
  );
};
