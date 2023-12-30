"use client";
import Tabs from "@/components/Tabs";
import {
  First20InputForm,
  First50InputForm,
  SocialMediaFields,
} from "@/lib/constant";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import SelectComponent from "./SelectComponent";
import InputComponent from "@/MainComponents/InputComponent";
import Select from "react-select";

function TokenScannerForm({ maxHeight }: any) {
  const [selectedTab, setSelectedTab] = useState("First 20");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [
    { label: "First 20", content: <First20Form /> },
    { label: "First 50", content: <First20Form /> },
    { label: "First 100", content: <First20Form /> },
  ];
  const handleTabChange = (tabLabel: any) => {
    if (!tabLabel) {
      return null;
    }
    setSelectedTab(tabLabel);
    setActiveTabIndex(
      tabLabel === "First 20" ? 0 : tabLabel === "First 50" ? 1 : 2
    );
  };
  return (
    <div>
      <p className="text-lg text-secondary font-normal">Alert me when the</p>
      <div className="my-3">
        <Tabs
          tabs={tabs}
          onSelect={handleTabChange}
          activeTabIndex={activeTabIndex}
          setActiveTabIndex={setActiveTabIndex}
        />
        <div
          className={` mt-2 ${
            maxHeight ? `${maxHeight}` : "h-[368px]"
          }  overflow-y-auto`}
        >
          <SwipeableViews
            index={activeTabIndex}
            onChangeIndex={(index: any) => handleTabChange(tabs[index].label)}
          >
            {tabs?.map((tab: any, index: any) => (
              <div className="mt-3" key={index}>
                {selectedTab === tab.label && tab.content}
              </div>
            ))}
            <div className="pb-24"></div>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}

export default TokenScannerForm;

const First20Form = () => {
  const options = [
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "Custom", label: "custom" },
  ];
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      fontSize: "14px",
      backgroundColor: "#0f0f13",
      border: "none",
      color: "white",
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      fontSize: "14px",
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      color: false ? "red" : "white",
    }),
    input: (provided: any) => ({
      ...provided,
      color: "white",
    }),
  };
  return (
    <>
      <p className="text-lg text-secondary font-normal">
        Holders of a token meet this criteria
      </p>
      <div className="mt-2 mb-5">
        {First20InputForm.map((data: any, index: number) => {
          return (
            <div className="" key={index}>
              <FormInputSet {...data} />
            </div>
          );
        })}
      </div>
      <p className="text-lg text-secondary font-normal mb-2">
        And the token has these properties
      </p>
      <div className="">
        <Select
          styles={customStyles}
          defaultValue={options[1]}
          options={options}
        />
      </div>
      <div className="mt-2 mb-5">
        {First50InputForm.map((data: any, index: number) => {
          return (
            <div className="" key={index}>
              <FormInputSet {...data} />
            </div>
          );
        })}
      </div>
      <p className="text-lg text-secondary font-normal mb-2">
        And is active on social media with
      </p>
      <div className="mt-2 mb-5">
        {SocialMediaFields.map((data: any, index: number) => {
          return (
            <div className="" key={index}>
              <FormInputSet {...data} />
            </div>
          );
        })}
      </div>
    </>
  );
};

const FormInputSet = ({ label, selectPlaceholder, inputPlaceholder }: any) => {
  return (
    <div className=" grid grid-cols-3 gap-2 mb-3">
      <p className=" text-lg font-normal text-white">{label}</p>
      <div className="">
        <SelectComponent placeholder={selectPlaceholder} name={""} />
      </div>
      <div className="">
        <InputComponent
          placeholder={inputPlaceholder}
          onChange={undefined}
          name={""}
          value={""}
        />
      </div>
    </div>
  );
};
