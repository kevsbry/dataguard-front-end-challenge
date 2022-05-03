import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import currentTabReducer from "../features/current-tab-slice";

const makeStore = () =>
  configureStore({
    reducer: {
      currentTab: currentTabReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);
