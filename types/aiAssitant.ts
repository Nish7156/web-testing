import { AxiosError } from "axios";

export interface AiAssistantRequestBody {
  prompt: string;
  user_id: string;
  order_id: string;
  chat_id: string;
}

export enum singupForm {
  telegram = "telegram",
  web = "web",
}

export interface AiAssistantResponseData {
  result?: string;
  message_id?: string;
}

export interface apiReponse {
  isLoading: boolean;
  error: AxiosError | null;
  data: AiAssistantResponseData | null;
}
export interface AiAssistantHook {
  aiAssistant: (body: AiAssistantRequestBody) => Promise<void>;
  aiResponse: apiReponse;
}
