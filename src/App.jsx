import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";
import Signin from "./Pages/Signin/Signin";
import Notification from "./Pages/Dashboard/Notification/Notification";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Inbox from "./Pages/Dashboard/Inbox/Inbox";
import AllUsers from "./Pages/Dashboard/Users/AllUsers";
import CreatorRequest from "./Pages/Dashboard/Users/CreatorRequest";
import UploadRequest from "./Pages/Dashboard/Users/UploadRequest";
import Daily from "./Pages/Dashboard/Income/Daily";
import Weekly from "./Pages/Dashboard/Income/Weekly";
import Monthly from "./Pages/Dashboard/Income/Monthly";
import Wallet from "./Pages/Dashboard/Income/Wallet";
import SubscriptionPlan from "./Pages/Dashboard/Essential/SubscriptionPlan";
import Questionnaire from "./Pages/Dashboard/Essential/Questionnaire";
import Banner from "./Pages/Dashboard/Essential/Banner";
import Occasions from "./Pages/Dashboard/Occasions/Occasions";
import Settings from "./Pages/Dashboard/Settings/Settings";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import NewPassword from "./Pages/NewPassword/NewPassword";
import Otp from "./Pages/Otp/Otp";
import SettingPage from "./Pages/Dashboard/Settings/SettingPage/SettingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<DashboardHome />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/index" element={<Inbox />} />
            <Route path="/allUsers" element={<AllUsers />} />
            <Route path="/creatorRequest" element={<CreatorRequest />} />
            {/* <Route path="/uploadRequest" element={<UploadRequest />} /> */}
            <Route path="/daily-income" element={<Daily />} />
            <Route path="/weekly-income" element={<Weekly />} />
            <Route path="/monthly-income" element={<Monthly />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/subscriptionPlan" element={<SubscriptionPlan />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/occasions" element={<Occasions />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/:dynamic" element={<SettingPage />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otp/:email" element={<Otp />} />
          <Route path="/new-password/:email" element={<NewPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
