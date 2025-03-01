import persistReducer from "redux-persist/es/persistReducer";
import { authWorkerReducer, authWorkerState } from "./authWorkerSlice";
import { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig: PersistConfig<authWorkerState> = {
  key: "authWorker-token",
  storage,
  whitelist: ["token", "uuid", "role"],
};

export const persistedAuthWorkerReducer = persistReducer(
  authPersistConfig,
  authWorkerReducer
);
