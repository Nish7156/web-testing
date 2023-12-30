import React, { useState } from "react";
import { Input } from "./ui/input";
import { SendIcon } from "./icons/SendIcon";

function SendInput({ onClick, ...props }: any) {
  const handleClick = () => {
    if (props.disabled) {
      return;
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className=" relative">
      <Input {...props} />
      <div className="  absolute top-2 right-4" onClick={handleClick}>
        <SendIcon />
      </div>
    </div>
  );
}

export default SendInput;
