import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate, useParams } from "react-router-dom";

const VerifyOTP = () => {
  let { email } = useParams();
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  return (
    <div className=" p-5">
      <form className="w-[750px]">
        <p className="my-5 font-medium font-['Montserrat']">
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          // containerStyle={style.otpFormContainer}
          inputStyle={{
            width: "120px",
            height: "120px",
            fontSize: "50px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          renderSeparator={<span style={{ width: "20px" }}></span>}
          renderInput={(props) => <input {...props} />}
        />

        <div className="flex justify-between mt-5">
          <p className=" text-lg font-medium font-['Montserrat'] text-[#858585)]">
            Didn't receive the code?{" "}
          </p>
          <p
            className="text-primary text-lg font-semibold font-['Montserrat'] cursor-pointer 
          "
          >
            Resend Code
          </p>
        </div>
        {/* <!-- Login Button --> */}
        <button
          type="submit"
          onClick={(e) => navigate("/settings/update-password")}
          className="bg-primary w-full text-white font-semibold rounded-md flex justify-center mx-auto px-[100px] mt-10 py-3"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
