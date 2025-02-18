import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRoleResponse } from "../types/roleType";
import { getAllRoleThunk } from "../actions/roleAction";

export interface IProductState {
  roles: IRoleResponse[];
  error: string | null;
}

const initialState: IProductState = {
  roles: [],
  error: null,
};

const getAllRoleSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setRole: (state, { payload }: PayloadAction<IRoleResponse[]>) => {
      state.roles = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRoleThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(
        getAllRoleThunk.fulfilled,
        (state, action: PayloadAction<IRoleResponse[]>) => {
          state.roles = action.payload;
          state.error = null;
        }
      )
      .addCase(getAllRoleThunk.rejected, (state, action) => {
        state.error =
          action.payload?.error?.message || "Unknown error occurred";
      });
  },
});

export const getAllRoleActions = {
  ...getAllRoleSlice.actions,
  getAllRoleThunk,
};

export type getAllRoleState = ReturnType<typeof getAllRoleSlice.reducer>;
export const getAllRoleReducer = getAllRoleSlice.reducer;
