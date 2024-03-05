import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { TransactionData } from "../../ReduxSlices/TransactionSlice";

const TransactionTable = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(1);
  const datas = useSelector((state) => state.TransactionData.TransactionList);


  function convertTimestampToCustomFormat(timestamp) {
    const date = new Date(timestamp);

    // Extracting components of the date
    const year = date.getUTCFullYear().toString().slice(-2);
    let month = (date.getUTCMonth() + 1).toString();
    month = month.length === 1 ? `0${month}` : month;
    let day = date.getUTCDate().toString();
    day = day.length === 1 ? `0${day}` : day;

    let hours = date.getUTCHours().toString();
    hours = hours.length === 1 ? `0${hours}` : hours;
    let minutes = date.getUTCMinutes().toString();
    minutes = minutes.length === 1 ? `0${minutes}` : minutes;

    const formattedDate = `${hours}:${minutes} ${
      date.getUTCHours() < 12 ? "AM" : "PM"
    }, ${day}/${month}/${year}`;

    return formattedDate;
  }



  useEffect(() => {
    let data = {
      page: 1,
    };
    dispatch(TransactionData(data));
  }, [reload]);

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionID",
      width: 240,
      render: (_, record) => (
        <div>{record?.paymentData?.balance_transaction}</div>
      ),
    },
    {
      title: "Time & Date",
      dataIndex: "timeAndDate",
      width: 160,
      render: (_, record) => (
        <div>
          {convertTimestampToCustomFormat(record?.createdAt)}
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
      render: (_, record) => (
        <div>{record?.userId?.fullName}</div>
      ),
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      width: 150,
      render: (_, record) => (
        <div>
          <div>
          {/* {record?.paymentData?.payment_method_details?.type} */}
          </div>
        </div>
      ),
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
             None
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
          className="cursor-pointer"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.66663 14.6673L3.66663 15.584C3.66663 17.1028 4.89784 18.334 6.41663 18.334L15.5833 18.334C17.1021 18.334 18.3333 17.1028 18.3333 15.584L18.3333 14.6673M14.6666 11.0007L11 14.6673M11 14.6673L7.33329 11.0007M11 14.6673L11 3.66732"
              stroke="#858585"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a
            href={record?.paymentData?.receipt_url}
            target="_blank"
            rel="noopener noreferrer"
          >
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.25342 11.0006C3.4215 7.28162 6.89593 4.58398 11.0004 4.58398C15.1049 4.58398 18.5794 7.28166 19.7474 11.0007C18.5794 14.7197 15.1049 17.4173 11.0004 17.4173C6.89593 17.4173 3.42148 14.7196 2.25342 11.0006Z"
                stroke="#858585"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        headerBg="red"
        className="mt-[32px] bg-white rounded-2xl"
        columns={columns}
        dataSource={datas}
        pagination={false}
        scroll={{
          y: 320,
        }}
      />
    </div>
  );
};

export default TransactionTable;
