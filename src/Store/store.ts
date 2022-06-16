import { configureStore } from "@reduxjs/toolkit";
import pagesSlice from "./pagesSlice";

const store = configureStore({
  reducer: {
    pages: pagesSlice.reducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
