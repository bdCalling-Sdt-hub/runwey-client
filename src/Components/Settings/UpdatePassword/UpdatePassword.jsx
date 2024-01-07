import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import baseAxios from "../../../../Config";
import { Input } from "antd";
const UpdatePassword = () => {
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));
  const navigate = useNavigate();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log("Change Password");

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm Password does not match",
      });
      return;
    }
    baseAxios
      .post("/api/users/update-password", {
        email: UserData.email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        navigate("/settings");
        Swal.fire({
          icon: "success",
          title: response.data.message,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
      });
  };

  return (
    <div className="p-5">
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          New Password
        </p>
        {/* <input
             onChange={(e) => setPassword(e.target.value)}
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Enter your new password"
        /> */}

        <Input.Password
          onChange={(e) => setPassword(e.target.value)}
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          placeholder="Enter your new password"
        />
      </div>
      <div className="mb-4 w-[750px]">
        <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
          Confirm New Password
        </p>
        {/* <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Confirm your new password"
        /> */}

        <Input.Password
          onChange={(e) => setConfirmPassword(e.target.value)}
          className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
          placeholder="Confirm your new password"
        />
      </div>

      <button
        onClick={handleChangePassword}
        className="mt-5 bg-primary hover:bg-primary w-[750px] text-white font-bold py-3 px-4 rounded-md"
      >
        Confirm
      </button>
    </div>
  );
};

export default UpdatePassword;
