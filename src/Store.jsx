import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "./ReduxSlices/SigninSlice";
import SubscriptionReducer from "./ReduxSlices/SubscriptionSlice";

export const Store = configureStore({
  reducer: {
    UserData: SigninReducer,
    SubscriptionData: SubscriptionReducer,
  },
});


