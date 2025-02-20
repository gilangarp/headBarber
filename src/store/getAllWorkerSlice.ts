import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSuperUser, IWorkerRespone } from "../types/workerType";
import { getAllWorkerThunk } from "../actions/workerAction";

interface WorkerState {
  worker: IWorkerRespone[];
  filter: IFilterSuperUser | null;
  error: string | null;
  loading: string | null;
}

const initialState: WorkerState = {
  worker: [],
  filter: {
    outletCode: "",
    roleName: "",
  },
  error: null,
  loading: null,
};

const getAllWorkerSlice = createSlice({
  name: "getAllWorkerSlice",
  initialState,
  reducers: {
    setWorker: (state, { payload }: PayloadAction<IWorkerRespone[]>) => {
      state.worker = payload;
    },
    setFilter: (state, { payload }: PayloadAction<IFilterSuperUser>) => {
      state.filter = payload;
    },
    resetFilter: (state) => {
      state.filter = initialState.filter;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWorkerThunk.pending, (state) => {
        state.error = null;
        state.loading = null;
      })
      .addCase(
        getAllWorkerThunk.fulfilled,
        (state, action: PayloadAction<IWorkerRespone[]>) => {
          state.worker = action.payload;
          state.error = null;
          state.loading = null;
        }
      )
      .addCase(getAllWorkerThunk.rejected, (state, action) => {
        state.error =
          action.payload?.error?.message || "Unknown error occurred";
      });
  },
});

export const getAllWorkerActions = {
  ...getAllWorkerSlice.actions,
  getAllWorkerThunk,
};

export type getAllWorkerState = ReturnType<typeof getAllWorkerSlice.reducer>;
export const getAllWorkerReducer = getAllWorkerSlice.reducer;
