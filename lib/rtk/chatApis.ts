import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers, tickrhost } from "../config";

export const chatApis = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: tickrhost,
    headers: headers,
    // responseHandler: globalResponseHandler,
  }),
  // keepUnusedDataFor: 3600 * 12,
  reducerPath: "chatApis",

  endpoints: (build) => ({
    aiAssistant: build.query<any, any>({
      query: (body) => ({
        url: `/assist`,
        method: "POST",
        body,
      }),
      keepUnusedDataFor: 0.0001,
    }),
    // getJsonConfig: build.query<any, any>({
    //   query: (body) => ({
    //     url: `/get-json-config`,
    //     method: "POST",
    //     body,
    //   }),
    // }),
  }),
});

export const { useLazyAiAssistantQuery } = chatApis;
