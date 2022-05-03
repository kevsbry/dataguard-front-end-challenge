import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface ITab {
  title: string;
  icon: string;
  active: string[];
  disabled: string[];
  inactive: string[];
}

interface IPlugins {
  [key: string]: {
    title: string;
    description: string;
  };
}

interface IData {
  tabs: string[];
  tabdata: {
    [key: string]: ITab;
  };
  plugins: IPlugins;
}

interface InitialState {
  data: IData | null;
  error: boolean;
}

const initialState: InitialState = {
  data: null,
  error: false,
};

export const fetchDataguardData = createAsyncThunk(
  "fetch-dataguard-data",
  async (_, { dispatch }) => {
    try {
      const res = await fetch(
        "https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json"
      );
      const data: { data: IData } = await res.json();

      dispatch(dataFulfilled(data.data));
    } catch (error) {
      dispatch(rejected());
    }
  }
);

const dataguardSlice = createSlice({
  name: "dataguard-slice",
  initialState,
  reducers: {
    dataFulfilled: (state, action: PayloadAction<IData>) => {
      state.data = action.payload;
      state.error = false;
    },
    rejected: (state) => {
      state.data = null;
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      if (!action.payload.dataguard.data) {
        return state;
      }

      state.data = action.payload.dataguard.data;
      state.error = action.payload.dataguard.error;
    });
  },
});

export const { dataFulfilled, rejected } = dataguardSlice.actions;
export default dataguardSlice.reducer;
