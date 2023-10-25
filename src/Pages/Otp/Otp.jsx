import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OtpInput from "react-otp-input";

const Otp = () => {
  let { email } = useParams();
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="https://i.ibb.co/GQ6WMb6/Rectangle-1.png"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1
            onClick={(e) => navigate("/forget-password")}
            className="text-2xl font-semibold mb-4 cursor-pointer  flex gap-1"
          >
            <span>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 24.25L10 15.5L18.75 6.75"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{" "}
            <span>Verify OTP</span>
          </h1>
          <p className="text-[14px] mb-5 font-['Montserrat'] text-[#858585)]">
            We'll send a verification code to your email. Check your inbox and
            enter the code here.
          </p>
          <form>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              // containerStyle={style.otpFormContainer}
              inputStyle={{
                width: "90px",
                height: "90px",
                fontSize: "50px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              renderSeparator={<span style={{ width: "20px" }}></span>}
              renderInput={(props) => <input {...props} />}
            />

            <div className="flex justify-between mt-5">
              <p className="text-[14px] font-['Montserrat'] text-[#858585)]">
                Didn't receive the code?{" "}
              </p>
              <p className="text-primary cursor-pointer mr-9">Resend Code</p>
            </div>
            {/* <!-- Login Button --> */}
            <button
              type="submit"
              onClick={(e) => navigate("/new-password/jkj")}
              className="bg-primary  text-white font-semibold rounded-md flex justify-center mx-auto px-[100px] mt-10 py-3"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
