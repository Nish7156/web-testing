import InfluencerScannerForm from "@/MainComponents/Pages/AlertModule/InfluencerScannerForm";
import { HeadingWithBackButton } from "@/MainComponents/elements/HeadingWithBackButton";
import { SpickerIcon } from "@/components/icons/SpickerIcon";
import DarkButton from "@/components/ui/DarkButton";
import React from "react";

function InfluencerScanner() {
  return (
    <div>
      <div className="container relative ">
        <HeadingWithBackButton
          heading="Influencer Scanner"
          icon={<SpickerIcon />}
        />
        <InfluencerScannerForm />
        <div className=" container fixed bottom-20 left-0 right-0">
          <DarkButton>Scve</DarkButton>
        </div>
      </div>
    </div>
  );
}

export default InfluencerScanner;
