import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { LinkOutlined } from "@ant-design/icons";
import { TiMessages } from "react-icons/ti";
import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { Divider, Menu, Switch } from "antd";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <p className="text-[22px] leading-normal">Dashboard</p>,
    "1",
    <RxDashboard style={{ fontSize: "18px" }} />
  ),
  getItem(
    <p className="text-[22px] leading-normal">Inbox</p>,
    "2",

    <TiMessages style={{ fontSize: "18px" }} />
  ),
  getItem(
    <p className="text-[22px] leading-normal">Users</p>,
    "sub1",
    <FaUsers style={{ fontSize: "18px" }} />,
    [
      getItem(<li className="text-[22px] leading-normal">All Users</li>, "3"),
      getItem(
        <li className="text-[22px] leading-normal">Creator Request</li>,
        "4"
      ),
      getItem(
        <li className="text-[22px] leading-normal">Upload Request</li>,
        "5"
      ),
    ]
  ),
  getItem(
    <p className="text-[22px] leading-normal">Income</p>,
    "sub2",
    <FaUsers style={{ fontSize: "18px" }} />,
    [
      getItem(<li className="text-[22px] leading-normal">Daily</li>, "6"),
      getItem(<li className="text-[22px] leading-normal">Weekly</li>, "7"),
      getItem(<li className="text-[22px] leading-normal">Monthly</li>, "8"),
      getItem(<li className="text-[22px] leading-normal">Wallet</li>, "9"),
    ]
  ),
  getItem(
    <p className="text-[22px] leading-normal">Essential</p>,
    "sub3",
    <FaUsers style={{ fontSize: "18px" }} />,
    [
      getItem(
        <li className="text-[22px] leading-normal">Subscription Plan</li>,
        "10"
      ),
      getItem(
        <li className="text-[22px] leading-normal">Questionnaire</li>,
        "11"
      ),
      getItem(<li className="text-[22px] leading-normal">Banner</li>, "12"),
    ]
  ),
  getItem(
    <p className="text-[22px] leading-normal">Occasions</p>,
    "13",

    <TiMessages style={{ fontSize: "18px" }} />
  ),
  getItem(
    <p className="text-[22px] leading-normal">Settings</p>,
    "14",

    <TiMessages style={{ fontSize: "18px" }} />
  ),
];
const Dashboard = () => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");

  return (
    <div className="flex" style={{height:"100vh"}}>



      <div className=" m-8 rounded-xl bg-primary relative" >
        <>
          <h1 className="text-[30px] text-center py-4 text-white">Logo</h1>
          <Menu
             style={{overflowY:"auto",height:"80vh"}}
            className="w-[332px] p-[30px]  bg-primary text-white  rounded-b-xl "
            defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            mode={mode}
            theme={theme}
            items={items}
          />
        </>

        <div className="bottom-0 left-0 w-full p-4">
          <div className="flex items-center bg-white text-center w-[240px] py-[6px] mx-auto rounded-md">
            <div className="flex mx-auto">
              <LinkOutlined className="text-[20px] text-primary" />
              <p className=" text-primary text-[20px] pl-2">Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>Header</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

