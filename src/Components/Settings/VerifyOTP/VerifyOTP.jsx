import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate, useParams } from "react-router-dom";
import baseAxios from "../../../../Config";
import Swal from "sweetalert2";

const VerifyOTP = () => {
  let { email } = useParams();
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  const handleOtp = (e) => {
    e.preventDefault();
    console.log(otp);
    baseAxios
      .post("/api/users/verify", { email: UserData.email, oneTimeCode: otp })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        Swal.fire({
          icon: "success",
          title: response.data.message,
        });
        navigate("/settings/update-password");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      });
  };

  const handleResendOtp = (e) => {
    e.preventDefault();
    console.log("Resend Otp");
    baseAxios
      .post("/api/users/forget-password", { email: UserData.email })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        Swal.fire({
          icon: "success",
          title: "Resend OTP Sent Successfully",
          text: "Please Check Your Email!",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      });
  };

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
            onClick={handleResendOtp}
          >
            Resend Code
          </p>
        </div>
        {/* <!-- Login Button --> */}
        <button
          type="submit"
          onClick={handleOtp}
          className="bg-primary w-full text-white font-semibold rounded-md flex justify-center mx-auto px-[100px] mt-10 py-3"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
