import React, { ChangeEvent } from "react";

interface InputComponentProps {
  onChange: any;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  prefix?: any;
}

const InputComponent: React.FC<InputComponentProps> = ({
  onChange,
  name,
  value,
  placeholder,
  type = "text",
  prefix,
}) => {
  return (
    <div className=" relative">
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        className={` bg-secondary-200 h-[36px] w-full rounded-md  text-secondary text-2xl outline-none placeholder:text-2xl placeholder:text-secondary placeholder:opacity-60 placeholder:pl-2 ${
          prefix ? "pl-4" : "pl-2"
        } `}
      />
      {prefix && <div className=" absolute top-1.5 left-1 text-white">{prefix}</div>}
    </div>
  );
};

export default InputComponent;
