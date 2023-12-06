import React from "react";
import { useNavigate } from "react-router-dom";

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          Current Password
        </p>
        <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your current password"
        />
      </div>
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          New Password
        </p>
        <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your new password"
        />
      </div>
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          Confirm New Password
        </p>
        <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Confirm your new password"
        />
      </div>
      <p
        onClick={() => navigate("/settings/verify-otp")}
        className="text-lg cursor-pointer text-primary font-semibold font-['Montserrat']"
      >
        Forget Password?
      </p>
      <button
        onClick={() => navigate("/settings")}
        className="mt-5 bg-primary hover:bg-primary w-[750px] text-white font-bold py-3 px-4 rounded-md"
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePasswordPage;
