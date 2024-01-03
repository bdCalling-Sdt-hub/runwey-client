import React from "react";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SubscriptionPackage from "../../../../Components/Settings/SubscriptionPackage/SubscriptionPackage";
import ChangePassword from "../../../../Components/Settings/ChangePassword/ChangePassword";
import LoginActivity from "../../../../Components/Settings/LoginActivity/LoginActivity";
import Trash from "../../../../Components/Settings/Trash/Trash";
import PrivacyPolicy from "../../../../Components/Settings/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "../../../../Components/Settings/TermsAndCondition/TermsAndCondition";
import AboutUs from "../../../../Components/Settings/AboutUs/AboutUs";
import VerifyOTP from "../../../../Components/Settings/VerifyOTP/VerifyOTP";
import UpdatePassword from "../../../../Components/Settings/UpdatePassword/UpdatePassword";

const SettingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  //don't delete this it's a important for navigation(those are mandatory)
  const textSplit = params.dynamic.split("-");
  const text = textSplit.join(" ");
  return (
    <>
      <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl ">
        <div className="p-[30px]">
          <h1
            onClick={() => navigate("/settings")}
            className="text-3xl flex items-center cursor-pointer font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[30px]"
          >
            <LiaAngleLeftSolid fontSize={30} />
            {location.pathname === "/settings" && "Settings"}
            {location.pathname === "/settings/change-password" &&
              "Change Password"}
            {location.pathname === "/settings/subscription-package" &&
              "Subscription Package"}
            {location.pathname === "/settings/login-activity" &&
              "Login Activity"}
            {/* {location.pathname === "/settings/trash" && "Trash"} */}
            {location.pathname === "/settings/privacy-policy" &&
              "Privacy Policy"}
            {location.pathname === "/settings/terms-condition" &&
              "Terms and Condition"}
            {location.pathname === "/settings/about-us" && "About Us"}
            {location.pathname === "/settings/verify-otp" && "Verify OTP"}
            {location.pathname === "/settings/update-password" &&
              "Update Password"}
          </h1>
          <div>
            {text === "change password" && <ChangePassword />}
            {text === "subscription package" && <SubscriptionPackage />}
            {text === "login activity" && <LoginActivity />}
            {/* {text === "trash" && <Trash />} */}
            {text === "privacy policy" && <PrivacyPolicy />}
            {text === "terms condition" && <TermsAndCondition />}
            {text === "about us" && <AboutUs />}
            {location.pathname === "/settings/verify-otp" && <VerifyOTP />}
            {location.pathname === "/settings/update-password" && (
              <UpdatePassword />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
