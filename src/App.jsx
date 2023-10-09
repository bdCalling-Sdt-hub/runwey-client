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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                {" "}
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<DashboardHome />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/index" element={<Inbox />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/forget-password" element={<ForgetPassword />} /> */}
          {/* <Route path="/otp/:email" element={<Otp />} /> */}
          {/* <Route path="/update-password/:email" element={<UpdatePass />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
