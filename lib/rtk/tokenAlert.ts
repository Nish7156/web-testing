import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers, host } from "../config";

export const tokenAlert = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: host,
    headers: headers,
    // responseHandler: globalResponseHandler,
  }),
  // keepUnusedDataFor: 3600 * 12,
  reducerPath: "tokenAlertAPi",

  endpoints: (build) => ({
    setTokenAlert: build.query<any, any>({
      query: ({ chat_id, ...body }) => ({
        url: `/config-bot?chat_id=${chat_id}`,
        method: "POST",
        body: {
          ...body,
          chat_id: chat_id,
        },
      }),
    }),
    getHistoryOrders: build.query<any, any>({
      query: ({ uuid }) => ({
        url: `/alert-logs?service=all&limit=10&start=0&uuid=${uuid}`,
        method: "GET",
      }),
    }),
    getOpenOrders: build.query<any, any>({
      query: ({ uuid }) => ({
        url: `/?uuid=${uuid}`,
        method: "GET",
      }),
    }),
    deleteOpenOrders: build.query<any, any>({
      query: ({ id }) => ({
        url: `/delete-bot?id=${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLazySetTokenAlertQuery,
  useLazyGetOpenOrdersQuery,
  useLazyGetHistoryOrdersQuery,
  useLazyDeleteOpenOrdersQuery,
} = tokenAlert;
