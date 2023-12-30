import { customStyles } from "@/lib/constant";
import ReactSelectCustomOptionsList from "./Pages/AlertModule/ReactSelectCustomOptionsList";
import Select from "react-select";
import InputComponent from "./InputComponent";

export const FormInputSet = ({
  label,
  value,
  options,
  optionValue,
  inputPlaceholder,
}: any) => {
  return (
    <div className=' grid grid-cols-3 gap-2 mb-3'>
      <p className=' text-lg font-normal text-white'>{label}</p>
      <div className='' id='customReactSelect'>
        <Select
          styles={customStyles}
          defaultValue={options[0]}
          options={options}
          components={{
            Option: ReactSelectCustomOptionsList,
          }}
        />
      </div>
      <div className=''>
        <InputComponent
          placeholder={inputPlaceholder}
          onChange={(e: any) => console.log("object")}
          name={label}
          value={value}
        />
      </div>
    </div>
  );
};
