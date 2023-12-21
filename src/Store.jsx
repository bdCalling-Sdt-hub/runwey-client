import { configureStore } from "@reduxjs/toolkit";
import SigninReducer from "./ReduxSlices/SigninSlice";
import SubscriptionReducer from "./ReduxSlices/SubscriptionSlice";
import BannerReducer from "./ReduxSlices/BannerSlice";
import QuestionnaireReducer from "./ReduxSlices/QuestionnaireSlice";
import OccasionsReducer from "./ReduxSlices/OccasionsSlice";
import TransactionReducer from "./ReduxSlices/TransactionSlice";
import CreatorRequestReducer from "./ReduxSlices/CreatorRequestSlice"

export const Store = configureStore({
  reducer: {
    UserData: SigninReducer,
    SubscriptionData: SubscriptionReducer,
    BannerData: BannerReducer,
    QuestionnaireData: QuestionnaireReducer,
    OccasionsData: OccasionsReducer,
    TransactionData: TransactionReducer,
    CreatorRequestData: CreatorRequestReducer
  },
});


