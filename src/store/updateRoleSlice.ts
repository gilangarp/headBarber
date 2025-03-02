import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateRoleThunk } from "../actions/roleAction";

interface UpdateRoleState {
  nameRole: string | null;
  successUpdate: string | null;
  loading: boolean;
  errorUpdate: string | null;
}

const initialState: UpdateRoleState = {
  nameRole: null,
  successUpdate: null,
  loading: false,
  errorUpdate: null,
};

const updateRoleSlice = createSlice({
  name: "updateRoleSlice",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.nameRole = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateRoleThunk.pending, (state) => {
        state.loading = true;
        state.errorUpdate = null;
        state.successUpdate = null;
      })
      .addCase(updateRoleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.errorUpdate = null;
        state.successUpdate = action.payload;
      })
      .addCase(updateRoleThunk.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.error?.message) {
          state.errorUpdate = action.payload.error.message;
        } else {
          state.errorUpdate = "An unexpected error occurred.";
        }
      });
  },
});

export const updateRoleActions = {
  ...updateRoleSlice.actions,
  updateRoleThunk,
};

export type updateRoleState = ReturnType<typeof updateRoleSlice.reducer>;
export const updateRoleReducer = updateRoleSlice.reducer;
