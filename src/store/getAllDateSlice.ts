import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDateResponse, IWorkScheduleQuery } from "../types/scheduleType";
import { getAllDateThunk } from "../actions/scheduleAction";

export interface IProductState {
  date: IDateResponse[];
  filterDate: IWorkScheduleQuery | null;
  errorGetAllDate: string | null;
  loading: boolean;
}

const initialState: IProductState = {
  date: [],
  filterDate: null,
  errorGetAllDate: null,
  loading: false,
};

const getAllDateSlice = createSlice({
  name: "getAllDateSlice",
  initialState,
  reducers: {
    setSchedule: (state, { payload }: PayloadAction<IDateResponse[]>) => {
      state.date = payload;
    },
    setFilter: (state, { payload }: PayloadAction<IWorkScheduleQuery>) => {
      state.filterDate = payload;
    },
    resetFilter: (state) => {
      state.filterDate = initialState.filterDate;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDateThunk.pending, (state) => {
        state.loading = true;
        state.errorGetAllDate = null;
      })
      .addCase(
        getAllDateThunk.fulfilled,
        (state, action: PayloadAction<IDateResponse[]>) => {
          state.date = action.payload;
          state.errorGetAllDate = null;
          state.loading = false;
        }
      )
      .addCase(getAllDateThunk.rejected, (state, action) => {
        state.errorGetAllDate =
          action.payload?.error?.message || "An unknown error occurred.";
        state.loading = false;
      });
  },
});

export const getAllDateActions = {
  ...getAllDateSlice.actions,
  getAllDateThunk,
};

export type getAllDateState = ReturnType<typeof getAllDateSlice.reducer>;

export const getAllDateReducer = getAllDateSlice.reducer;
