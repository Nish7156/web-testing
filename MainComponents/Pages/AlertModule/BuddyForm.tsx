"use client";
import React, { useState } from "react";
import DarkButton from "@/components/ui/DarkButton";
import InputComponent from "@/MainComponents/InputComponent";
import { TOKEN_OPTIONS, dropdownMap, eventOptions } from "@/lib/constant";
import ReactSelectCustomOptionsList from "./ReactSelectCustomOptionsList";
import SelectComponent from "./SelectComponent";
import { FormInputSet } from "@/MainComponents/FormInputSet";
import { useLazySetTokenAlertQuery } from "@/lib/rtk/tokenAlert";
import { generateUUID } from "@/lib/utils";
import { formatOptionLabel } from "./LimitOrderForm";
import ReactSelectLableWithValue from "./ReactSelectLableWithValue";
import AsyncSelect from "react-select/async";
import { useLazyGetMasterSearchQuery } from "@/lib/rtk/masterSearch";
import dropdown from "@/lib/dropdown";

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

function BuddyForm({ userDetails }: any) {
  const [isBuyEvent, setIsBuyEvent] = useState(true);
  const [modeState, setModeState] = useState({
    label: "Specific",
    value: "spec",
  });
  const [placeOrder, orderResponse] = useLazySetTokenAlertQuery();
  const [fetchSearch, searchResponse] = useLazyGetMasterSearchQuery();
  const [dropdown, setDropdown] = useState();

  const [formData, setFormData] = useState<any>({
    alertType: "",
    walletAddress: "",
    token: null,
    option: null,
    buy: null,
    amount: "",
    currency: "",
  });
  const handleButtonClick = () => {
    setIsBuyEvent(!isBuyEvent);
    setFormData({
      ...formData,
      event: !isBuyEvent ? "buy" : "sell",
    });
  };
  const handleChange = (field: any, value: any) => {
    console.log("field", field);
    console.log("value", value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  let customFields = true;
  const handlePlaceOrder = () => {
    console.log(formData, "formdata");
    const payload: any = {
      bot_name: "limit_order",
      is_paused: 0,
      user_id: userDetails?.user_id,
      alert_name: formData?.alertName || "alert",
      token_id: formData.token?.value,
      event: formData?.event,
      chat_id: userDetails?.chat_id,
      order_id: generateUUID(),
      config_type: formData.config_type?.label,
    };

    // const configType = formData.config_type?.value;

    // if (configType === "custom") {
    //   delete payload.market_cap_lte;
    //   payload[formData.fdvtype.value] = formData.fdv;
    // } else {
    //   payload.market_cap_lte =
    //     Number(configType) * Number(formData.token.marketCap);
    // }

    placeOrder(formData);
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
  return (
    // <form>
    <div className='mt-5'>
      <p className='text-lg text-white font-normal'>Send me an alert to</p>
      <div className='my-2 grid grid-cols-2 gap-4'>
        <DarkButton
          outline={isBuyEvent ? true : false}
          disable={!isBuyEvent ? false : true}
          onclick={handleButtonClick}
        >
          Buy
        </DarkButton>
        <DarkButton
          error={!isBuyEvent ? true : false}
          disable={isBuyEvent ? false : true}
          onclick={handleButtonClick}
        >
          Sell
        </DarkButton>
      </div>
      <p className='text-lg mb-2 mt-3 font-normal text-white'>
        When this/these Wallets
      </p>
      <InputComponent
        placeholder='Enter wallet address'
        value={formData.walletAddress}
        onChange={(e: any) => handleChange("walletAddress", e.target.value)}
        name={""}
      />
      <div className='flex items-center gap-4 my-3'>
        <div className='flex-2'>
          <SelectComponent
            placeholder='Buy'
            //@ts-ignore
            name={"event"}
            isSearchable={false}
            options={eventOptions}
            reactSelectProps={{
              onChange: (e: any) => handleChange("event", e),
              value: formData?.event,
              defaultValue: eventOptions[0],
              components: {
                Option: (props: any) => (
                  <ReactSelectCustomOptionsList
                    {...props}
                    showChildren={false}
                  />
                ),
              },
            }}
          />
        </div>
        <div className='flex-1'>
          <SelectComponent
            name='token'
            placeholder='Specific token'
            options={[
              { label: "Specific", value: "spec" },
              { label: "Custom", value: "custom" },
            ]}
            reactSelectProps={{
              onChange: (e: any) => setModeState(e),
              value: modeState,
              defaultValue: modeState,
              components: {
                Option: (props: any) => (
                  <ReactSelectCustomOptionsList
                    {...props}
                    showChildren={false}
                  />
                ),
              },
            }}
          />
        </div>
      </div>

      {!(modeState.value == "custom") && (
        <div className='mt-2'>
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
      )}
      {modeState.value == "custom" && (
        <>
          {dropdownMap.map((dropdown, index) => (
            <FormInputSet key={index} {...dropdown} />
          ))}
        </>
      )}
      <div className='container fixed bottom-20 left-0 right-0'>
        <DarkButton onclick={handlePlaceOrder}>Place order</DarkButton>
      </div>
    </div>
    // </form>
  );
}

export default BuddyForm;
