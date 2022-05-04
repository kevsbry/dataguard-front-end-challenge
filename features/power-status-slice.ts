import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enabled: true,
};

const tabPluginsSlice = createSlice({
  name: "tab-plugins-slice",
  initialState,
  reducers: {
    togglePowerStatus: (state) => {
      state.enabled = !state.enabled;
    },
  },
});

export const { togglePowerStatus } = tabPluginsSlice.actions;

export default tabPluginsSlice.reducer;
