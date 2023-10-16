import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { LinkOutlined } from "@ant-design/icons";
import { TiMessages } from "react-icons/ti";
import { RiDashboardLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { BiWallet } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { Menu } from "antd";
import Header from "../../Components/Header/Header";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");

  const items = [
    getItem(
      <p onClick={(e) => navigate("/")} className="text-[22px] leading-normal">
        Dashboard
      </p>,
      "1",
      <RxDashboard style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/index")}
        className="text-[22px] leading-normal"
      >
        Inbox
      </p>,
      "2",

      <TiMessages style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p className="text-[22px] leading-normal">Users</p>,
      "sub1",
      <FaUsers style={{ fontSize: "18px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/allUsers")}
            className="text-[22px] leading-normal"
          >
            All Users
          </li>,
          "3"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/creatorRequest")}
            className="text-[22px] leading-normal"
          >
            Creator Request
          </li>,
          "4"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/uploadRequest")}
            className="text-[22px] leading-normal"
          >
            Upload Request
          </li>,
          "5"
        ),
      ]
    ),
    getItem(
      <p className="text-[22px] leading-normal">Income</p>,
      "sub2",
      <BiWallet style={{ fontSize: "18px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/daily-income")}
            className="text-[22px] leading-normal"
          >
            Daily
          </li>,
          "6"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/weekly-income")}
            className="text-[22px] leading-normal"
          >
            Weekly
          </li>,
          "7"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/monthly-income")}
            className="text-[22px] leading-normal"
          >
            Monthly
          </li>,
          "8"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/wallet")}
            className="text-[22px] leading-normal"
          >
            Wallet
          </li>,
          "9"
        ),
      ]
    ),
    getItem(
      <p className="text-[22px] leading-normal">Essential</p>,
      "sub3",
      <FaUsers style={{ fontSize: "18px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/subscriptionPlan")}
            className="text-[22px] leading-normal"
          >
            Subscription Plan
          </li>,
          "10"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/questionnaire")}
            className="text-[22px] leading-normal"
          >
            Questionnaire
          </li>,
          "11"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/banner")}
            className="text-[22px] leading-normal"
          >
            Banner
          </li>,
          "12"
        ),
      ]
    ),
    getItem(
      <p
        onClick={(e) => navigate("/occasions")}
        className="text-[22px] leading-normal"
      >
        Occasions
      </p>,
      "13",

      <RiDashboardLine style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/settings")}
        className="text-[22px] leading-normal"
      >
        Settings
      </p>,
      "14",

      <IoSettingsOutline style={{ fontSize: "18px" }} />
    ),
  ];

  return (
    <div className="flex" style={{ height: "100vh" }}>
      <div className=" m-8 rounded-xl bg-primary relative">
        <>
          <h1 className="text-[30px] text-center py-4 text-white">Logo</h1>
          <Menu
            style={{ overflowY: "auto", height: "80vh" }}
            className="w-[352px] p-[30px]  bg-primary text-white  rounded-b-xl "
            defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            mode={mode}
            theme={theme}
            items={items}
          />
        </>

        <div className="">
          <div className="absolute bottom-0 left-0 w-full p-4 rounded-b-xl bg-primary border-t-[1px] border-secondary ">
            <div
              onClick={(e) => navigate("/signin")}
              className="flex items-center bg-white text-center w-[240px] py-[6px] mx-auto rounded-md cursor-pointer"
            >
              <div className="flex mx-auto">
                <LinkOutlined className="text-[20px] text-primary" />
                <p className=" text-primary text-[20px] pl-2">Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
