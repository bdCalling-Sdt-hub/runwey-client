import { Button, Switch } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "1",
      title: "Change Password",
      link: "change-password",
    },
    {
      key: "2",
      title: "Subscription Package",
      link: "subscription-package",
    },
    {
      key: "3",
      title: "Login Activity",
      link: "login-activity",
    },
    {
      key: "4",
      title: "Trash",
      link: "trash",
    },
    {
      key: "5",
      title: "Privacy Policy",
      link: "privacy-policy",
    },
    {
      key: "6",
      title: "Terms and Condition",
      link: "terms-condition",
    },
    {
      key: "7",
      title: "About Us",
      link: "about-us",
    },
  ];

  const handleNavigate = (value) => {
    navigate(`/settings/${value}`);
  };

  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl ">
      <div className="p-[30px]">
        <h1 className="text-3xl font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[30px]">
          Settings
        </h1>
        <div>
          <div className="flex px-5 justify-between cursor-pointer border-b-secondary border-x-0 border-t-0 py-3 my-3 border-[1px]">
            <p className="text-lg font-medium font-['Montserrat']">
              Notification
            </p>
            <Switch onChange={(e) => handleNotification(e)} defaultChecked />
          </div>
          {menuItems.map((item) => (
            <div
              key={item.key}
              onClick={() => handleNavigate(item.link)}
              className="flex px-5  justify-between cursor-pointer border-b-secondary border-x-0 border-t-0 py-3 my-3 border-[1px]"
            >
              <p className="text-lg font-medium font-['Montserrat']">
                {item.title}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
