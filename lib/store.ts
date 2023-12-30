import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import { tokenAlert } from "./rtk/tokenAlert";
import { chatApis } from "./rtk/chatApis";
import { masterSearch } from "./rtk/masterSearch";

import authReducer from "./features/auth/authSlice";
import copyReducer from "./features/copy/copySlice";
import chatReducer from "./features/chatbot/chatSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const reducer = combineReducers({
  [tokenAlert.reducerPath]: tokenAlert.reducer,
  [chatApis.reducerPath]: chatApis.reducer,
  [masterSearch.reducerPath]: masterSearch.reducer,
  // persist: persistReducer(persistConfig, authReducer),
  auth: authReducer,
  copy: copyReducer,
  chat: chatReducer,
});

export const makeStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(tokenAlert.middleware)
        .concat(chatApis.middleware)
        .concat(masterSearch.middleware),
  });

  return store;
};

export type AppStore = ReturnType<any>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
