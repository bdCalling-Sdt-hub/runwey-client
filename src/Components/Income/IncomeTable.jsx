import React, { useState } from "react";
import { Modal, Table } from "antd";

const IncomeTable = ({incomeData}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
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


  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "transactionID",
      width: 160,
      render: (_, record) => (
        <p>{record?.paymentData?.balance_transaction}</p>
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
      width: 120,
      
      render: (_, record) => (
        <div>{record?.paymentData?.payment_method_details?.type}</div>
      ),
    },
    {
      title: "Package",
      dataIndex: "package",
      width: 110,
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
            {record?.paymentData?.description.replace(/^Purchase product\s*/, "")}
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
    <div className="w-[1450px]">
      <Table
        headerBg="red"
        className="= p-5 bg-white rounded-2xl border-[1px] border-secondary"
        columns={columns}
        dataSource={incomeData}
        scroll={{
          y: 445,
        }}
      />
      <Modal
        open={isModalOpen}
        title={
          <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
            <span>Transaction ID #123456789</span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={1000}
      >
        <div className=" flex justify-between">
          <div>
            <h1 className="text-xl my-[32px] font-semibold font-['Montserrat']">
              User Information
            </h1>
            <div className="flex gap-4 ">
              <div>
                <img
                  className="w-[100px] h-[100px]"
                  src="https://i.ibb.co/pQpXBmt/b2f2b8d89771068978e21e99c0397bef.png"
                  alt=""
                />
              </div>
              <div className="mt-4">
                <p className="text-lg font-normal font-['Montserrat']">
                  Name: <span className="font-semibold">Edward King</span>
                </p>
                <p className="text-lg font-normal font-['Montserrat']">
                  Email: <span className="font-semibold">info@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div>
              <p className="text-sm cursor-pointer font-semibold p-2 px-5 font-['Montserrat'] rounded-lg border-[2px] border-primary">
                Download
              </p>
            </div>
            <div>
              <p className="text-sm cursor-pointer font-semibold p-2 px-10 text-white bg-primary font-['Montserrat'] rounded-lg border-[2px] border-primary">
                Print
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl mb-[30px] font-semibold font-['Montserrat'] mt-[64px]">
            Payment Information
          </h1>
          <div className="flex gap-10">
            <div>
              <p className="text-zinc-500 text-lg font-normal font-['Montserrat']">
                Payment Method
              </p>
              <p className="text-zinc-500 text-lg font-normal font-['Montserrat']">
                Payment Amount
              </p>
              <p className="text-zinc-500 text-lg font-normal font-['Montserrat']">
                Package
              </p>
              <p className="text-zinc-500 text-lg font-normal font-['Montserrat']">
                Date
              </p>
            </div>
            <div>
              <p className=" text-lg font-semibold font-['Montserrat']">
                Credit Card
              </p>
              <p className=" text-lg font-semibold font-['Montserrat']">
                $100.00
              </p>
              <p className=" text-lg font-semibold font-['Montserrat']">
                Standard
              </p>
              <p className=" text-lg font-semibold font-['Montserrat']">
                01 October 2023
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default IncomeTable;
