import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "./ReduxSlices/SigninSlice";

export const Store = configureStore({
  reducer: {
    UserData: SigninReducer,
  },
});
