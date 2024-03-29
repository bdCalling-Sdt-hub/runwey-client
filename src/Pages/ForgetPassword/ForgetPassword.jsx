import React from "react";
import { useNavigate } from "react-router-dom";
import baseAxios from "../../../Config";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    baseAxios
      .post("/api/users/forget-password", { email: email })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        Swal.fire({
          icon: "success",
          title: "OTP Sent Successfully",
          text: "Please Check Your Email!",
        });
        navigate(`/otp/${email}`);
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
            onClick={(e) => navigate("/signin")}
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
            <span>Forget Password</span>
          </h1>
          <p className="text-[14px] font-['Montserrat'] text-[#858585)]">
            Enter the email address associated with your account. We'll send you
            an OTP to your email.{" "}
          </p>
          <form>
            {/* <!-- Username Input --> */}
            <div className="mb-4 mt-[50px]">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* <!-- Login Button --> */}
            <button
              onClick={handleSubmit}
              className="bg-primary  text-white font-semibold rounded-md flex justify-center mx-auto px-[100px] py-3"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
