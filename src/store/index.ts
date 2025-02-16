import { configureStore } from "@reduxjs/toolkit";
import { workerInputReducer } from "./workerSlice";

export const store = configureStore({
  reducer: {
    createWorker: workerInputReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
      immutableCheck: false,
    }),
});

//export const persistedStore = persistStore(store);
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
