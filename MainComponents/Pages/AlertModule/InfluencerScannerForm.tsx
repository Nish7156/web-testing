"use client";
import React from "react";
import Select from "react-select";
import SelectComponent from "./SelectComponent";
import InputComponent from "@/MainComponents/InputComponent";
import { customStyles } from "@/lib/constant";
import ReactSelectCustomOptionsList from "./ReactSelectCustomOptionsList";
import { FormInputSet } from "@/MainComponents/FormInputSet";

function InfluencerScannerForm() {
  const options = [
    { value: "test1", label: "test1" },
    { value: "test2", label: "test2" },
    { value: "Custom", label: "custom" },
  ];
  const inputSets: any = [];
  let customFields = true;
  return (
    <div>
      <p className='text-lg text-secondary font-normal'>
        Alert me when tokens meeting the criteria
      </p>
      <div className='my-2' id='customReactSelect'>
        <Select
          styles={customStyles}
          defaultValue={options[1]}
          options={options}
          components={{
            Option: ReactSelectCustomOptionsList,
          }}
        />
      </div>
      {customFields && (
        <>
          {inputSets?.map((inputSet: any, index: any) => (
            <FormInputSet key={index} {...inputSet} />
          ))}
        </>
      )}
      <div className=''>
        <p className='text-lg text-secondary font-normal mb-2'>
          Are being discussed by
        </p>
        <div className=''>
          <div className='mb-2' id='customReactSelect'>
            <Select
              styles={customStyles}
              defaultValue={options[1]}
              options={options}
              components={{
                Option: ReactSelectCustomOptionsList,
              }}
            />
          </div>
        </div>
        {customFields && (
          <>
            {inputSets?.map((inputSet: any, index: any) => (
              <FormInputSet key={index} {...inputSet} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default InfluencerScannerForm;
