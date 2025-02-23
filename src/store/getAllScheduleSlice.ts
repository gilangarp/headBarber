import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IWorkScheduleByDateResponse,
  IWorkScheduleQuery,
} from "../types/scheduleType";
import { getAllScheduleThunk } from "../actions/scheduleAction";

export interface IProductState {
  schedule: IWorkScheduleByDateResponse[];
  filterSchedule: IWorkScheduleQuery | null;
  errorGetAllSchedule: string | null;
  loading: boolean;
}

const initialState: IProductState = {
  schedule: [],
  filterSchedule: null,
  errorGetAllSchedule: null,
  loading: false,
};

const getAllScheduleSlice = createSlice({
  name: "getAllScheduleSlice",
  initialState,
  reducers: {
    setSchedule: (
      state,
      { payload }: PayloadAction<IWorkScheduleByDateResponse[]>
    ) => {
      state.schedule = payload;
    },
    setFilter: (state, { payload }: PayloadAction<IWorkScheduleQuery>) => {
      state.filterSchedule = payload;
    },
    resetFilter: (state) => {
      state.filterSchedule = {
        roleId: "",
        outletId: "",
        month: "",
        userId: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllScheduleThunk.pending, (state) => {
        state.loading = true;
        state.errorGetAllSchedule = null;
      })
      .addCase(
        getAllScheduleThunk.fulfilled,
        (state, action: PayloadAction<IWorkScheduleByDateResponse[]>) => {
          state.schedule = action.payload;
          state.errorGetAllSchedule = null;
          state.loading = false;
        }
      )
      .addCase(getAllScheduleThunk.rejected, (state, action) => {
        state.errorGetAllSchedule =
          action.payload?.error?.message || "An unknown error occurred.";
        state.loading = false;
      });
  },
});

export const getAllScheduleActions = {
  ...getAllScheduleSlice.actions,
  getAllScheduleThunk,
};

export type GetAllScheduleState = ReturnType<
  typeof getAllScheduleSlice.reducer
>;

export const getAllScheduleReducer = getAllScheduleSlice.reducer;
