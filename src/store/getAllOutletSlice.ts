import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetOutlet } from "../types/outletType";
import { getAllOutletThunk } from "../actions/outletAction";

export interface IProductState {
  outlets: IGetOutlet[];
  errorFetchingOutlets: string | null;
}

const initialState: IProductState = {
  outlets: [],
  errorFetchingOutlets: null,
};

const getAllOutletSlice = createSlice({
  name: "getAllOutletSlice",
  initialState,
  reducers: {
    setOutlets: (state, { payload }: PayloadAction<IGetOutlet[]>) => {
      state.outlets = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOutletThunk.pending, (state) => {
        state.errorFetchingOutlets = null;
      })
      .addCase(
        getAllOutletThunk.fulfilled,
        (state, action: PayloadAction<IGetOutlet[]>) => {
          state.outlets = action.payload;
          state.errorFetchingOutlets = null;
        }
      )
      .addCase(getAllOutletThunk.rejected, (state, action) => {
        state.errorFetchingOutlets =
          action.payload?.error?.message || "An unknown error occurred.";
      });
  },
});

export const getAllOutletActions = {
  ...getAllOutletSlice.actions,
  getAllOutletThunk,
};

export type getAllOutletState = ReturnType<typeof getAllOutletSlice.reducer>;
export const getAllOutletReducer = getAllOutletSlice.reducer;
