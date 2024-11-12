import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSclices";
export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
