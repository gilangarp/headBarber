import { configureStore } from "@reduxjs/toolkit";
import { authWorkerReducer, authWorkerState } from "./authWorkerSlice";
import { PersistConfig, persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { getAllRoleReducer } from "./getAllRoleSlice";
import { createOutletReducer } from "./createOutletSlice";
import { getAllWorkerReducer } from "./getAllWorkerSlice";
import { createWorkerReducer } from "./createInputSlice";
import { getByIdWorkerReducer, getByIdWorkerState } from "./getByIdWorkerSlice";

const authPersistConfig: PersistConfig<authWorkerState> = {
  key: "authWorker-token",
  storage,
  whitelist: ["token", "uuid", "role"],
};
const persistedAuthWorkerReducer = persistReducer(
  authPersistConfig,
  authWorkerReducer
);

const getByIdWorkerPersistConfig: PersistConfig<getByIdWorkerState> = {
  key: "getByIdWorker",
  storage,
  whitelist: ["uuid", "role", "email", "image", "fullName"],
};
const persistedGetByIdWorkerReducer = persistReducer(
  getByIdWorkerPersistConfig,
  getByIdWorkerReducer
);

export const store = configureStore({
  reducer: {
    createWorker: createWorkerReducer,
    loginDashboard: persistedAuthWorkerReducer,
    getAllRole: getAllRoleReducer,
    createOutlet: createOutletReducer,
    getAllWorker: getAllWorkerReducer,
    getByIdWorker: persistedGetByIdWorkerReducer,
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
