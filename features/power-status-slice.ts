import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const tabPluginsSlice = createSlice({
  name: "tab-plugins-slice",
  initialState,
  reducers: {
    togglePowerStatus: (state) => {
      state = !state;
    },
  },
});

export const { togglePowerStatus } = tabPluginsSlice.actions;

export default tabPluginsSlice.reducer;
