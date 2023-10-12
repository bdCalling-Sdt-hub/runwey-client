import React from "react";
import { Table } from "antd";
// const data = [
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
//   {
//     browser: "Kate Winslate",
//     device: "kate@gmail.com",
//     location: " 014845454545",
//     joiningDate: "22/05/2023",
//     ine: 20,
//   },
// ];

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
    },
  ];

  //   data generation here
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
