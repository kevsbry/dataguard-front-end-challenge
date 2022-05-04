import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { TabVariants } from "../typings/tab-variants";
import { PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: { name: TabVariants | string } = { name: "" };

const currentTab = createSlice({
  name: "current-tab",
  initialState,
  reducers: {
    setCurrentTab: (
      state,
      action: PayloadAction<{ name: TabVariants | string }>
    ) => {
      state.name = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      if (!action.payload.currentTab.name) {
        return state;
      }
      state.name = action.payload.currentTab.name;
    });
  },
});

export const { setCurrentTab } = currentTab.actions;

export default currentTab.reducer;
