import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WorkerState {
  file: File | null;
  password: string;
  error: string;
  email: string;
  firstName: string;
  lastName: string;
  selectedRoleUuid: number | null;
  selectedOutletUuid: string | null;
}

const initialState: WorkerState = {
  file: null,
  password: "",
  error: "",
  email: "",
  firstName: "",
  lastName: "",
  selectedRoleUuid: null,
  selectedOutletUuid: null,
};

const workerInputSlice = createSlice({
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
      state.error = action.payload;
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
    setRole: (state, action: PayloadAction<number | null>) => {
      state.selectedRoleUuid = action.payload;
    },
    setOutlet: (state, action: PayloadAction<string | null>) => {
      state.selectedOutletUuid = action.payload;
    },
  },
});

export const workerInputAction = {
  ...workerInputSlice.actions,
};

export type workerInputState = ReturnType<typeof workerInputSlice.reducer>;
export const workerInputReducer = workerInputSlice.reducer;
