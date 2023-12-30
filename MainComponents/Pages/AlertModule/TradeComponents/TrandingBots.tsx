import Heading from "@/MainComponents/elements/Heading";
import { GreenIcon } from "@/components/icons/GreenIcon";
import { HandsIcon } from "@/components/icons/HandsIcon";
import Link from "next/link";
import React from "react";

function TradingBots({ cardData, heading }: any) {
  return (
    <div className="">
      <div className="">
        <div className="flex items-center gap-3">
          <div className="">
            <Heading>{heading}</Heading>
          </div>
          <div className="flex-[40%] w-full h-[0.5px] bg-secondary opacity-25"></div>
        </div>
        <div className="grid grid-cols-2 mb-5 ">
          {cardData &&
            cardData.map((data: any, index: number) => {
              return (
                <div className="" key={index}>
                  <CardDetail data={data} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TradingBots;

const CardDetail = ({ data }: any) => {
  return (
    <div className="p-4 flex justify-center">
      <Link href={`${data?.link}`} legacyBehavior>
        <div className="">
          <div className="flex pb-2 justify-center items-center">
            {data?.icon}
          </div>
          <p className="text-lg text-center text-white">{data?.title}</p>
        </div>
      </Link>
    </div>
  );
};
