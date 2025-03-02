import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createRoleThunk } from "../actions/roleAction";

interface CreateRoleState {
  nameRole: string | null;
  successCreate: string | null;
  loading: boolean;
  errorCrate: string | null;
}

const initialState: CreateRoleState = {
  nameRole: null,
  successCreate: null,
  loading: false,
  errorCrate: null,
};

const createRoleSlice = createSlice({
  name: "createRoleSlice",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.nameRole = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRoleThunk.pending, (state) => {
        state.loading = true;
        state.errorCrate = null;
        state.successCreate = null;
      })
      .addCase(createRoleThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.errorCrate = null;
        state.successCreate = action.payload;
      })
      .addCase(createRoleThunk.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.error?.message) {
          state.errorCrate = action.payload.error.message;
        } else {
          state.errorCrate = "An unexpected error occurred.";
        }
      });
  },
});

export const createRoleActions = {
  ...createRoleSlice.actions,
  createRoleThunk,
};

export type createRoleState = ReturnType<typeof createRoleSlice.reducer>;
export const createRoleReducer = createRoleSlice.reducer;
