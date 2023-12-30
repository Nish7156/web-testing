"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, RootState, AppDispatch } from "../lib/store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(makeStore());

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // const storeRef = useRef<AppStore | null>(null);

  // if (!storeRef.current) {
  //   storeRef.current = makeStore();
  // }

  return (
    <Provider store={makeStore()}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}
