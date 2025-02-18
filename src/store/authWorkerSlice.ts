import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginWorkerThunk } from "../actions/workerAction";
import { IWorkerLoginResponse } from "../types/workerType";

interface AuthState {
  token: string | null;
  uuid: string | null;
  role: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  uuid: null,
  role: null,
  loading: false,
  error: null,
};

const authWorkerSlice = createSlice({
  name: "authWorker",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
    setRole: (state, action: PayloadAction<{ role: string }>) => {
      state.role = action.payload.role;
    },
    setUuid: (state, action: PayloadAction<{ uuid: string }>) => {
      state.uuid = action.payload.uuid;
    },
    logout: (state) => {
      state.token = null;
      state.uuid = null;
      state.role = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginWorkerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginWorkerThunk.fulfilled,
        (state, action: PayloadAction<IWorkerLoginResponse>) => {
          state.loading = false;
          state.token = action.payload.token;
          state.role = action.payload.role;
          state.uuid = action.payload.uuid;
          state.error = null;
        }
      )
      .addCase(loginWorkerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.error?.message || "Unknown error occurred";
      });
  },
});

export const authWorkerActions = {
  ...authWorkerSlice.actions,
  loginWorkerThunk,
};

export type authWorkerState = ReturnType<typeof authWorkerSlice.reducer>;
export const authWorkerReducer = authWorkerSlice.reducer;
