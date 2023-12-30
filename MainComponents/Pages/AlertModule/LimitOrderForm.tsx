"use client";
import InputComponent from "@/MainComponents/InputComponent";
import DarkButton from "@/components/ui/DarkButton";
import AsyncSelect from "react-select/async";
import SelectComponent from "./SelectComponent";
import { DPI_OPTIONS, FilterByOPTIONS, TOKEN_OPTIONS } from "@/lib/constant";
import ReactSelectLableWithValue from "./ReactSelectLableWithValue";
import ReactSelectCustomOptionsList from "./ReactSelectCustomOptionsList";
import { useEffect, useState } from "react";
import BuySellCustomDropdowm from "./BuySellCustomDropdowm";
import { useLazyGetMasterSearchQuery } from "@/lib/rtk/masterSearch";
import dropdown from "@/lib/dropdown";

interface ILimitOrderForm {
  formData: any;
  setFormData: any;
}
export const formatOptionLabel = ({ label, marketCap }: any) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <div>{label}</div>
    <div style={{ marginLeft: "10px", color: "#919191" }}>34</div>
  </div>
);
function LimitOrderForm({ formData, setFormData }: ILimitOrderForm) {
  const [isBuyEvent, setIsBuyEvent] = useState(true);
  const [fetchSearch, searchResponse] = useLazyGetMasterSearchQuery();
  const handleButtonClick = () => {
    setIsBuyEvent(!isBuyEvent);
    setFormData({
      ...formData,
      event: !isBuyEvent ? "buy" : "sell",
    });
  };
  console.log("formdata", formData);
  const handleChange = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const loadOptions = async (inputValue: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const response = await fetchSearch({ search_term: inputValue });

      const searchPairs = response.data.pairs.result;

      const filteredOptions = searchPairs.map(
        (option: {
          base_token_name: any;
          token_id: any;
          latest_market_cap: any;
        }) => {
          return {
            label: option.base_token_name,
            value: option.token_id,
            marketCap: option.latest_market_cap,
          };
        }
      );

      return Promise.resolve(filteredOptions);
    } catch (error) {
      console.error("Error fetching search results:", error);
      return Promise.resolve([]);
    }
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      fontSize: "14px",
      backgroundColor: "#0f0f13",
      border: "none",
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
      {/* <form className="mt-5"> */}
      <p className='text-lg text-white font-normal'>Send me an alert to</p>
      <div className=' my-2 grid grid-cols-2 gap-4 '>
        <DarkButton
          outline={isBuyEvent ? true : false}
          disable={isBuyEvent ? false : true}
          onclick={handleButtonClick}
        >
          Buy
        </DarkButton>
        <DarkButton
          error={!isBuyEvent ? true : false}
          disable={!isBuyEvent ? false : true}
          onclick={handleButtonClick}
        >
          Sell
        </DarkButton>
      </div>
      <div className='mb-2'>
        <InputComponent
          prefix='%'
          placeholder='Supply'
          value=''
          name=''
          onChange={undefined}
        />
      </div>
      <div className='mb-2'>
        <p className='text-lg text-secondary font-normal'>If the token</p>
      </div>
      <div className='mb-2'>
        <AsyncSelect
          className=' placeholder:text-2xl'
          id='customReactSelect'
          classNamePrefix='customReactSelectStyles'
          defaultOptions
          cacheOptions
          onChange={(e: any) => handleChange("token", e)}
          //@ts-ignore
          loadOptions={loadOptions}
          placeholder='Type to search...'
          //@ts-ignore
          showChildren={true}
          formatOptionLabel={formatOptionLabel}
          components={{
            Option: ReactSelectLableWithValue,
          }}
          styles={customStyles}
        />
      </div>
      <div className=''>
        <SelectComponent
          options={DPI_OPTIONS}
          name={"config_type"}
          isSearchable={false}
          placeholder='Select options'
          reactSelectProps={{
            onChange: (e: any) => handleChange("config_type", e),
            defaultValue: formData.config_type
              ? {
                  label: formData.config_type.label,
                  value: formData.config_type.value,
                }
              : null,
            value: formData.config_type
              ? {
                  label: formData.config_type.label,
                  value: formData.config_type.value,
                }
              : null,
            components: {
              Option: (props) => <BuySellCustomDropdowm {...props} />,
            },
          }}
        />
      </div>
      {formData.config_type?.value === "custom" && (
        <>
          <div className='mt-2'>
            <div className='flex justify-between items-center gap-4'>
              <p className='text-lg text-white font-normal'>FDV</p>
              <div className=''>
                <SelectComponent
                  options={dropdown.FDV}
                  name={"fdvtype"}
                  placeholder='Less than'
                  reactSelectProps={{
                    onChange: (e: any) => handleChange("fdvtype", e),
                    defaultValue: formData.fdvtype
                      ? {
                          label: formData.fdvtype.label,
                          value: formData.fdvtype.value,
                        }
                      : null,
                    value: formData.fdvtype
                      ? {
                          label: formData.fdvtype.label,
                          value: formData.fdvtype.value,
                        }
                      : null,
                    components: {
                      Option: (props) => (
                        <ReactSelectCustomOptionsList
                          {...props}
                          showChildren={false}
                        />
                      ),
                    },
                  }}
                />
              </div>
              <div className=''>
                <InputComponent
                  placeholder='Enter'
                  value={formData.fdv}
                  onChange={(e: { target: { value: any } }) =>
                    handleChange("fdv", e.target.value)
                  }
                  name={"fdv"}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* </form> */}
    </>
  );
}

export default LimitOrderForm;
