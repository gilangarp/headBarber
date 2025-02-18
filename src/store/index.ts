import { configureStore } from "@reduxjs/toolkit";
import { workerInputReducer } from "./workerSlice";
import { authWorkerReducer, authWorkerState } from "./authWorkerSlice";
import { PersistConfig, persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { getAllRoleReducer } from "./getAllRoleSlice";

const authPersistConfig: PersistConfig<authWorkerState> = {
  key: "authWorker-token",
  storage,
  whitelist: ["token", "uuid", "role"],
};
const persistedAuthWorkerReducer = persistReducer(
  authPersistConfig,
  authWorkerReducer
);

export const store = configureStore({
  reducer: {
    createWorker: workerInputReducer,
    loginDashboard: persistedAuthWorkerReducer,
    getAllRole: getAllRoleReducer,
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
