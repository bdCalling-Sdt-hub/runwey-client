import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { UserData } from "../../ReduxSlices/SigninSlice";
import { Button, Checkbox, Form, Input } from 'antd';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isError, isSuccess, userData, accessToken, message } =
    useSelector((state) => state.UserData);

    console.log(userData);

  useEffect(() => {
    if (isError == true) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    }
    if (isSuccess == true) {
      localStorage.setItem("yourInfo", JSON.stringify(userData));
      localStorage.setItem("token", accessToken);
      window.location.href = "/";
      
    }

    //dispatch(reset());
  }, [isLoading, isError, isSuccess, dispatch, navigate]);

  console.log(email, password);

  const handleLogin = () => {
    dispatch(UserData({ email: email, password: password }));
    if (email == "" || password == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      });
    }
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
          <h1 className="flex justify-center text-[44px] font-semibold">
            Welcome
          </h1>
          <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
          <form>
            {/* <!-- Email Input --> */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <!-- Password Input --> */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              < Input.Password  onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
              {/* <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              /> */}
            </div>

            {/* <!-- Forgot Password Link --> */}
            <div className="mb-6 font-medium font-['Montserrat'] text-primary">
              <p
                onClick={(e) => navigate("/forget-password")}
                className=" cursor-pointer"
              >
                Forgot Password?
              </p>
            </div>
            {/* <!-- Login Button --> */}
            <div
              onClick={handleLogin}
              className="bg-primary cursor-pointer text-white font-semibold rounded-md flex justify-center mx-auto px-[100px] py-3"
            >
              Login
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
