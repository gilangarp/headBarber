import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteRoleThunk } from "../actions/roleAction";

interface DeleteRoleState {
  idRole: number | null;
  successDelete: string | null;
  loading: boolean;
  errorDelete: string | null;
}

const initialState: DeleteRoleState = {
  idRole: null,
  successDelete: null,
  loading: false,
  errorDelete: null,
};

const deleteRoleSlice = createSlice({
  name: "deleteRoleSlice",
  initialState,
  reducers: {
    setRoleId: (state, action: PayloadAction<number>) => {
      state.idRole = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteRoleThunk.pending, (state) => {
        state.loading = true;
        state.errorDelete = null;
        state.successDelete = null;
      })
      .addCase(deleteRoleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.errorDelete = null;
        state.successDelete = action.payload;
      })
      .addCase(deleteRoleThunk.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.error?.message) {
          state.errorDelete = action.payload.error.message;
        } else {
          state.errorDelete = "An unexpected error occurred.";
        }
      });
  },
});

export const deleteRoleActions = {
  ...deleteRoleSlice.actions,
  deleteRoleThunk,
};

export type deleteRoleState = ReturnType<typeof deleteRoleSlice.reducer>;
export const deleteRoleReducer = deleteRoleSlice.reducer;
