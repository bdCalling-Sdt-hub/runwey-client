import React from "react";
import { Table } from "antd";


const TransactionTable = () => {
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionID",
      width: 150,
    },
    {
      title: "Time & Date",
      dataIndex: "timeAndDate",
      width: 160,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      width: 190,
    },
    {
      title: "Package",
      dataIndex: "package",
      width: 150,
      responsive: ["lg"],
      render: (_, record) => (
        <div>
          {/* <div className="w-[71px] h-[22px] px-3 py-1 bg-orange-100 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-yellow-400 text-[13px] font-normal font-['Poppins'] leading-[14px]">
              Regular
            </div>
          </div> */}
          {/* <div className="w-[71px] h-[22px] px-3 py-1 bg-violet-100 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-violet-700 text-[13px] font-normal font-['Poppins'] leading-[14px]">
              Premium
            </div>
          </div> */}
          <div className="w-[71px] h-[22px] px-3 py-1 bg-emerald-50 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-green-600 text-[13px] font-normal font-['Poppins'] leading-[14px]">
              Standard
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      width: 150,
      responsive: ["lg"],
      render: (_, record) => (
        <div className="flex">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66663 14.6673L3.66663 15.584C3.66663 17.1028 4.89784 18.334 6.41663 18.334L15.5833 18.334C17.1021 18.334 18.3333 17.1028 18.3333 15.584L18.3333 14.6673M14.6666 11.0007L11 14.6673M11 14.6673L7.33329 11.0007M11 14.6673L11 3.66732"
              stroke="#858585"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className="ml-[16px]"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.75 11.0007C13.75 12.5194 12.5188 13.7507 11 13.7507C9.48124 13.7507 8.25002 12.5194 8.25002 11.0007C8.25002 9.48187 9.48124 8.25065 11 8.25065C12.5188 8.25065 13.75 9.48187 13.75 11.0007Z"
              stroke="#858585"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.25342 11.0006C3.4215 7.28162 6.89593 4.58398 11.0004 4.58398C15.1049 4.58398 18.5794 7.28166 19.7474 11.0007C18.5794 14.7197 15.1049 17.4173 11.0004 17.4173C6.89593 17.4173 3.42148 14.7196 2.25342 11.0006Z"
              stroke="#858585"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      transactionID: `${i + 123456789}`,
      name: `Edward King ${i}`,
      timeAndDate: "11:21 AM, 30/09/23",
      paymentMethod: "Credit Card",
      package: "Basic",
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
          y: 320,
        }}
      />
    </div>
  );
};

export default TransactionTable;
