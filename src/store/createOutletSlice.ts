import { createSlice } from "@reduxjs/toolkit";
import { createOutletThunk } from "../actions/outletAction";

interface CreateOutletState {
  loading: boolean;
  error: string | null;
}

const initialState: CreateOutletState = {
  loading: false,
  error: null,
};

const createOutletSlice = createSlice({
  name: "authWorker",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOutletThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOutletThunk.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createOutletThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.error?.message || "Unknown error occurred";
      });
  },
});

export const authWorkerActions = {
  ...createOutletSlice.actions,
  createOutletThunk,
};

export type createOutletState = ReturnType<typeof createOutletSlice.reducer>;
export const createOutletReducer = createOutletSlice.reducer;
