import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetByIdWorkerRespone } from "../types/workerType";
import { getByIdWorkerThunk } from "../actions/workerAction";

export interface IGetByIdWorkerState {
  worker: IGetByIdWorkerRespone | null;
  errorGetByIdWorker: string | null;
}

const initialState: IGetByIdWorkerState = {
  worker: null,
  errorGetByIdWorker: null,
};

const getByIdWorkerSlice = createSlice({
  name: "getByIdWorker",
  initialState,
  reducers: {
    setWorker: (state, { payload }: PayloadAction<IGetByIdWorkerRespone>) => {
      state.worker = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getByIdWorkerThunk.pending, (state) => {
        state.errorGetByIdWorker = null;
      })
      .addCase(
        getByIdWorkerThunk.fulfilled,
        (state, action: PayloadAction<IGetByIdWorkerRespone>) => {
          state.worker = action.payload;
          state.errorGetByIdWorker = null;
        }
      )
      .addCase(getByIdWorkerThunk.rejected, (state, action) => {
        state.errorGetByIdWorker =
          action.payload?.error?.message || "Unknown error occurred";
      });
  },
});
export const getAllRoleActions = {
  ...getByIdWorkerSlice.actions,
  getByIdWorkerThunk,
};

export type getByIdWorkerState = ReturnType<typeof getByIdWorkerSlice.reducer>;
export const getByIdWorkerReducer = getByIdWorkerSlice.reducer;
