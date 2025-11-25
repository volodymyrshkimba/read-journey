import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import booksReducer from "./books/slice";
import authReducer from "./auth/slice";
import modalReducer from "./modal/slice";
import readingReducer from "./reading/slice";

const persistAuthConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    books: booksReducer,
    modal: modalReducer,
    reading: readingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
