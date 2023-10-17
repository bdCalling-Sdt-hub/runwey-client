import { Badge } from "antd";
import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const date = new Date(); // Assuming the input date is in ISO 8601 format (YYYY-MM-DD)

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const navigate = useNavigate();
  return (
    <div className="flex  mt-9">
      <div>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0  items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-secondary2  "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-red border w-[1020px] border-secondary focus:ring-0 outline-none py-3 text-gray-900 text-sm rounded-2xl block pl-10 p-2.5 "
            placeholder="Search names/ products/ videos"
            required
          />
        </div>
      </div>
      <div className="w-[300px] h-[45px] p-4 bg-primary rounded-[10px] justify-center items-center gap-2.5 inline-flex ml-3">
        <div className="text-white text-[22px] font-normal font-['Montserrat']">
          {formattedDate}
        </div>
      </div>
      <div
        onClick={(e) => navigate("/notification")}
        className="bg-primary ml-3 rounded-lg px-2"
      >
        {" "}
        <Badge count={5} color="red">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            fontSize={30}
            color="white"
            className="mt-2"
          />
        </Badge>
      </div>
      <div onClick={(e) => navigate("/profile")} className="cursor-pointer">
        <img
          className="w-[50px] h-[45px] ml-3 rounded-lg"
          src="https://i.ibb.co/YbSN7hp/e2fa7e1c075f3e11ddf04c79df9349c4.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
