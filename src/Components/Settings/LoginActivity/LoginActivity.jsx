import React from "react";
import { Table } from "antd";

const LoginActivity = () => {
  const columns = [
    {
      title: "Browser",
      dataIndex: "browser",
      width: 150,
    },
    {
      title: "Device",
      dataIndex: "device",
      width: 160,
    },
    {
      title: "Time & Date",
      dataIndex: "timeAndDate",
      width: 150,
    },

    {
      title: "Action",
      dataIndex: "action",
      width: 150,
      responsive: ["lg"],
      render: (_, record) => (
        <div className="cursor-pointer">
          <div className="w-[71px] h-[22px] px-3 py-1 bg-pink-100 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-rose-600 text-[10px] font-normal font-['Poppins'] leading-[14px]">
              Sign Out
            </div>
          </div>
        </div>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      browser: `Safari`,
      device: `Mac OS X 10.14.5`,
      timeAndDate: "11:21 AM, 30/09/23",
      action: "View",
    });
  }

  return (
    <div>
      <Table
        headerBg="red"
        className="mt-[32px] bg-white rounded-2xl"
        columns={columns}
        dataSource={data}
        scroll={{
          y: 500,
        }}
      />
    </div>
  );
};

export default LoginActivity;
