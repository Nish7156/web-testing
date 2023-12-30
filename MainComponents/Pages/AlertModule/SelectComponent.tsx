//@ts-nocheck
import React from "react";
import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";

interface IreactSelect {
  options?: Array<{ value: string | number; label: string | number }> | any[];
  name: string;
  placeholder?: string;
  isFormikField?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  reactSelectProps?: React.ComponentProps<typeof ReactSelect>;
  isAsync?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  loadOptions?: (inputValue: string, callback: (options: any) => void) => void;
}

function SelectComponent({
  isClearable,
  isLoading,
  isDisabled,
  placeholder,
  isMulti,
  formatOptionLabel,
  type,
  name,
  loadOptions,
  isSearchable,
  isAsync,
  ...props
}: IreactSelect) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "14px",
      backgroundColor: "#0f0f13",
      border: "none",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: type === "buySell" ? "red" : "white",
    }),
  };

  console.log(loadOptions,"loadOptions");
  
  return (
    <>
      {!isAsync ? (
        <ReactSelect
          className=' placeholder:text-2xl'
          id='customReactSelect'
          classNamePrefix='customReactSelectStyles'
          options={props?.options}
          name={name}
          isClearable={isClearable}
          formatOptionLabel={formatOptionLabel}
          isLoading={isLoading}
          isDisabled={isDisabled}
          placeholder={placeholder}
          {...props?.reactSelectProps}
          menuPortalTarget={
            typeof document !== "undefined" ? document.body : null
          }
          styles={{
            ...customStyles,
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          isMulti={isMulti}
          isSearchable={isSearchable}
          loadOptions={loadOptions}
        />
      ) : (
        <AsyncSelect
          className=' placeholder:text-2xl'
          id='customReactSelect'
          classNamePrefix='customReactSelectStyles'
          name={name}
          options={props?.options}
          placeholder={placeholder}
          isLoading={isLoading}
          isDisabled={isDisabled}
          loadOptions={loadOptions}
          {...props?.reactSelectProps}
          menuPortalTarget={
            typeof document !== "undefined" ? document.body : null
          }
          styles={{
            ...customStyles,
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          isMulti={isMulti}
          isSearchable={isSearchable}
        />
      )}
    </>
  );
}

export default SelectComponent;
