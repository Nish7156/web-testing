'use client'
import { ArrowLeft } from "@/components/icons/ArrowLeft";
import { useRouter } from "next/navigation";

interface IHeadingWithButton {
  heading: string;
  icon?: any;
}
export const HeadingWithBackButton = ({
  heading,
  icon,
}: IHeadingWithButton) => {
  const router=useRouter()
  return (
    <div className="flex items-center py-2 justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-primary text-2xl font-medium">{heading}</h2>
      </div>
      <div
        className=""
        onClick={() => router.back()}
      >
        <ArrowLeft />
      </div>
    </div>
  );
};
