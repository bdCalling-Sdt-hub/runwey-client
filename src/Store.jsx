import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "./ReduxSlices/SigninSlice";
import SubscriptionReducer from "./ReduxSlices/SubscriptionSlice";
import BannerReducer from "./ReduxSlices/BannerSlice";
import QuestionnaireReducer from "./ReduxSlices/QuestionnaireSlice";

export const Store = configureStore({
  reducer: {
    UserData: SigninReducer,
    SubscriptionData: SubscriptionReducer,
    BannerData: BannerReducer,
    QuestionnaireData: QuestionnaireReducer,
  },
});


