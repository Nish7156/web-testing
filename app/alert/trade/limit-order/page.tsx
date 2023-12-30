"use client";
import LimitOrderForm from "@/MainComponents/Pages/AlertModule/LimitOrderForm";
import { HeadingWithBackButton } from "@/MainComponents/elements/HeadingWithBackButton";
import { GreenIcon } from "@/components/icons/GreenIcon";
import DarkButton from "@/components/ui/DarkButton";
import { getUserDetails } from "@/lib/apifuctions/getUserDetails";
import { useLazySetTokenAlertQuery } from "@/lib/rtk/tokenAlert";
import { generateUUID } from "@/lib/utils";
import { useEffect, useState } from "react";

function LimitOrder() {
  const [placeOrder, orderResponse] = useLazySetTokenAlertQuery();
  const [userDetails, setUserDetails] = useState<any>(null);
  const [limitFormData, setLimitformData] = useState<any>({
    token: null,
    fdv: null,
    event: "buy",
    config_type: null,
    market_cap_lte: null,
  });

  //@todo sohan define typescript
  const handlePlaceOrder = () => {
    const payload: any = {
      bot_name: "limit_order",
      is_paused: 0,
      user_id: userDetails?.user_id,
      alert_name: limitFormData.alertName || "alert",
      token_id: limitFormData.token.value,
      event: limitFormData.event,
      chat_id: userDetails?.chat_id,
      order_id: generateUUID(),
      config_type: limitFormData.config_type.label,
    };

    const configType = limitFormData.config_type?.value;

    if (configType === "custom") {
      delete payload.market_cap_lte;
      payload[limitFormData.fdvtype.value] = limitFormData.fdv;
    } else {
      payload.market_cap_lte =
        Number(configType) * Number(limitFormData.token.marketCap);
    }

    placeOrder(payload);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const details = await getUserDetails();
        setUserDetails(details);
      } catch (error) {
        setUserDetails(null);
      }
    };

    fetchUserDetails();
  }, []);
  return (
    <div>
      <div className='container relative'>
        <HeadingWithBackButton
          heading='Limit Order(buy/Sell on FDV)'
          icon={<GreenIcon />}
        />
        <LimitOrderForm
          formData={limitFormData}
          setFormData={setLimitformData}
        />
        <div className=' container fixed bottom-20 left-0 right-0'>
          <DarkButton onclick={handlePlaceOrder}>Place order</DarkButton>
        </div>
      </div>
    </div>
  );
}

export default LimitOrder;
