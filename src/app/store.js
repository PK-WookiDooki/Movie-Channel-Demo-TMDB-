import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/services/movieSlice";
import { authApi } from "../features/api/authApi";
import authSlice from "../features/services/authSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    authSlice: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
