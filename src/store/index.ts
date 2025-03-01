import { configureStore } from "@reduxjs/toolkit";
import { getAllRoleReducer } from "./getAllRoleSlice";
import { createOutletReducer } from "./createOutletSlice";
import { getAllWorkerReducer } from "./getAllWorkerSlice";
import { createWorkerReducer } from "./createInputSlice";
import { getByIdWorkerReducer } from "./getByIdWorkerSlice";
import { getAllOutletReducer } from "./getAllOutletSlice";
import { getAllScheduleReducer } from "./getAllScheduleSlice";
import { getAllDateReducer } from "./getAllDateSlice";
import { persistedAuthWorkerReducer } from "./persistConfig";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer: {
    createWorker: createWorkerReducer,
    loginDashboard: persistedAuthWorkerReducer,
    getAllRole: getAllRoleReducer,
    createOutlet: createOutletReducer,
    getAllWorker: getAllWorkerReducer,
    getByIdWorker: getByIdWorkerReducer,
    getAllOutlet: getAllOutletReducer,
    getAllSchedule: getAllScheduleReducer,
    getAllDate: getAllDateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
      immutableCheck: false,
    }),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
