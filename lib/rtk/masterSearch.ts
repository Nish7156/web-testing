import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers, newHost } from "../config";

export const masterSearch = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: newHost,
    headers: headers,
    // responseHandler: globalResponseHandler,
  }),
  // keepUnusedDataFor: 3600 * 12,
  reducerPath: "masterSearchAPi",

  endpoints: (build) => ({
    getMasterSearch: build.query<any, any>({
      query: ({ search_term }) => ({
        url: `search?search_term=${search_term}&limit=10`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyGetMasterSearchQuery } = masterSearch;
