import React from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div class="bg-gray-100 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div class="w-1/2 h-screen hidden lg:block">
          <img
            src="https://i.ibb.co/GQ6WMb6/Rectangle-1.png"
            alt="Placeholder Image"
            class="object-cover w-full h-full"
          />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="flex justify-center text-[44px] font-semibold">Welcome</h1>
          <h1 class="text-2xl font-semibold mb-4">Sign In</h1>
          <form>
            {/* <!-- Username Input --> */}
            <div class="mb-4">
              <label for="username" class="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            {/* <!-- Password Input --> */}
            <div class="mb-4">
              <label for="password" class="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>

            {/* <!-- Forgot Password Link --> */}
            <div class="mb-6 font-medium font-['Montserrat'] text-primary">
              <a href="#" class="hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* <!-- Login Button --> */}
            <button
              type="submit"
              onClick={(e) => navigate("/")}
              class="bg-primary  text-white font-semibold rounded-md flex justify-center mx-auto px-[100px] py-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
