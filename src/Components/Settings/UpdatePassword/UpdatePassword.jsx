import React from "react";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div class="mb-4 w-[750px]">
        <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          New Password
        </p>
        <input
          class=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your new password"
        />
      </div>
      <div class="mb-4 w-[750px]">
        <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          Confirm New Password
        </p>
        <input
          class=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Confirm your new password"
        />
      </div>

      <button
        onClick={() => navigate("/settings")}
        className="mt-5 bg-primary hover:bg-primary w-[750px] text-white font-bold py-3 px-4 rounded-full"
      >
        Confirm
      </button>
    </div>
  );
};

export default UpdatePassword;
