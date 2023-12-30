//@ts-nocheck
import React from "react";
import SwipeableViews from "react-swipeable-views";

const Tabs = ({ tabs, onSelect, activeTabIndex, setActiveTabIndex }: any) => {
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
    onSelect && onSelect(tabs[index].label, index);
  };

  return (
    <div>
      <div className='flex items-center gap-4'>
        {tabs.map((tab: any, tabIndex: any) => (
          <div
            key={tabIndex}
            className={`pb-1.5 ${
              tabIndex === activeTabIndex
                ? "border-b-2 border-b-primary"
                : "border-b-2 border-b-black"
            }`}
            onClick={() => handleTabClick(tabIndex)}
          >
            <p
              className={`${
                tabIndex === activeTabIndex ? "text-white" : "text-tertiary"
              } text-lg font-normal`}
            >
              {" "}
              {tab.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
