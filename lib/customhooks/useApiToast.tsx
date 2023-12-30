import React from "react";
import { ToastAction } from "@/components/ui/toast";
import { AxiosResponse } from "axios";
import { useToast } from "@/components/ui/use-toast";

interface ApiToastProps<T> {
  callback: () => Promise<AxiosResponse<T>>;
  message?: string;
  isSuccessToast?: boolean;
}

const useApiToast = () => {
  const { toast } = useToast();

  const performApiCall = async (
    callback: any,
    message?: any,
    isSuccessToast = true
  ) => {
    try {
      const response = await callback();

      if (isSuccessToast) {
        toast({
          variant: "default" as any,
          title: "Success",
          description: message || "Operation completed successfully.",
        });
      }

      return response.data;
    } catch (error: any) {
      console.error("API call error:", error);

      toast({
        variant: "destructive" as any,
        title: "Uh oh! Something went wrong.",
        description: error.message || "There was a problem with the request.",
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });

      //   throw error;
    }
  };

  return performApiCall;
};

export default useApiToast;
