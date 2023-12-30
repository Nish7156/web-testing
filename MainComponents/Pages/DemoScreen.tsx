import React from "react";
import HeadingTag from "../elements/Heading";
import Card from "@/components/Card";
import Text from "../elements/Text";

import { PreConfigureTabData } from "@/components/PreConfigureTabData";
import SendInput from "@/components/SendInput";

function DemoScreen() {
  return (
    <div className=" container">
      <HeadingTag>Welcome to Tickr AI Asistant</HeadingTag>
      <div className="my-3">
        <Card>
          <Text>Type your trade or alert instructions below,</Text>
          <p className="text-secondary-100 text-lg">
            and we'll set it up for you. Use plain English or our pre configured
            prompts.
          </p>
        </Card>
      </div>
      <HeadingTag>Pre-configured Prompts</HeadingTag>
      <div className="">
        <PreConfigureTabData  />
      </div>

      {/* <div className=" absolute left-0 right-0 bottom-0 h-[6.3rem] bg-black w-full"></div> */}
    </div>
  );
}

export default DemoScreen;
