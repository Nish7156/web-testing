import { useState, useCallback } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { headers, tickrhost } from "../config";
import { AiAssistantHook, AiAssistantResponseData } from "@/types/aiAssitant";

const useAiAssistant = (): AiAssistantHook => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<AiAssistantResponseData | null>(null);

  const aiAssistant = useCallback(async (body: any) => {
    setIsLoading(true);

    try {
      const response: AxiosResponse<AiAssistantResponseData> = await axios.post(
        "/assist",
        body,
        {
          baseURL: tickrhost,
          headers: headers,
        }
      );

      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  const aiResponse = {
    isLoading,
    error,
    data,
  };
  return { aiAssistant, aiResponse };
};

export default useAiAssistant;
