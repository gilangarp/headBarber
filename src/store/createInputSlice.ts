import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createWorkerThunk } from "../actions/workerAction";

interface WorkerState {
  file: File | null;
  password: string;
  errorCreate: string;
  email: string;
  firstName: string;
  lastName: string;
  selectedRoleUuid: string | null;
  selectedOutletUuid: string | null;
  loading: boolean;
  successMessage: string;
}

const initialState: WorkerState = {
  file: null,
  password: "",
  errorCreate: "",
  email: "",
  firstName: "",
  lastName: "",
  selectedRoleUuid: null,
  selectedOutletUuid: null,
  loading: false,
  successMessage: "",
};

const createWorkerSlice = createSlice({
  name: "worker",
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<File | null>) => {
      state.file = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorCreate = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setRole: (state, action: PayloadAction<string | null>) => {
      state.selectedRoleUuid = action.payload;
    },
    setOutlet: (state, action: PayloadAction<string | null>) => {
      state.selectedOutletUuid = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createWorkerThunk.pending, (state) => {
        state.loading = true; // Start loading
        state.errorCreate = "";
        state.successMessage = "";
      })
      .addCase(createWorkerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      })
      .addCase(createWorkerThunk.rejected, (state, action) => {
        state.loading = false;
        if (action.payload?.error?.message) {
          state.errorCreate = action.payload.error.message;
        } else {
          state.errorCreate = "An unexpected error occurred.";
        }
      });
  },
});

export const createWorkerAction = {
  ...createWorkerSlice.actions,
};

export type createWorkerState = ReturnType<typeof createWorkerSlice.reducer>;
export const createWorkerReducer = createWorkerSlice.reducer;
