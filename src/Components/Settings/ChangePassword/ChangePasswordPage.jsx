import React from "react";
import { useNavigate } from "react-router-dom";
import baseAxios from "../../../../Config";
import Swal from "sweetalert2";
import { Input } from "antd";

const ChangePasswordPage = () => {
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));
  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleForgetPassword = () => {
    baseAxios
      .post("/api/users/forget-password", { email: UserData.email })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        Swal.fire({
          icon: "success",
          title: "OTP Sent Successfully",
          text: "Please Check Your Email!",
        });
        navigate("/settings/verify-otp");
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

  const handleChangePassword = () => {
    if (newPassword === confirmPassword) {
      baseAxios
        .post("/api/users/change-password", { oldPassword, newPassword })
        .then((response) => {
          console.log(response);
          console.log(response.data.message);
          Swal.fire({
            icon: "success",
            title: response.data.message,
          });
          navigate("/settings");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm Password does not match",
      });
    }
  };

  return (
    <div className="p-5">
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          Current Password
        </p>
        {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your current password"
          onChange={(e) => setOldPassword(e.target.value)}
        /> */}
        <Input.Password
          placeholder="Enter your current password"
          onChange={(e) => setOldPassword(e.target.value)}
          className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          New Password
        </p>
        {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your new password"
          onChange={(e) => setNewPassword(e.target.value)}
        /> */}
        <Input.Password
          placeholder="Enter your new password"
          onChange={(e) => setNewPassword(e.target.value)}
          className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          Confirm New Password
        </p>
        {/* <input
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Confirm your new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        /> */}

        <Input.Password
          placeholder="Confirm your new password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
        />
      </div>
      <p
        onClick={handleForgetPassword}
        className="text-lg cursor-pointer text-primary font-semibold font-['Montserrat']"
      >
        Forget Password?
      </p>
      <button
        onClick={handleChangePassword}
        className="mt-5 bg-primary hover:bg-primary w-[750px] text-white font-bold py-3 px-4 rounded-md"
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePasswordPage;
