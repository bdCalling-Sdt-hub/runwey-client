import React, { useState } from "react";
import { Button, Modal, Table } from "antd";
import testVideo from "./../../../public/tikvideo.mp4";
const UsersTable = ({ allUser }) => {
  let users = allUser?.users;
  let pagination = allUser?.pagination;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    console.log(isModalOpen2);
  };

  const showVideo = () => {
    setIsModalOpen2(true);
  };

  const cancelVideo = () => {
    setIsModalOpen2(false);
    console.log(isModalOpen2);
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "fullName",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 160,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      width: 150,
    },
    {
      title: "Package",
      dataIndex: "subcriptionType",
      width: 190,
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
          <svg
            onClick={showModal}
            className="ml-[16px] cursor-pointer"
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
        </div>
      ),
    },
  ];

  return (
    <div className="w-16 md:w-[500px] lg:w-[1080px]">
      <Table
        headerBg="red"
        className="= p-5 bg-white rounded-2xl border-[1px] border-secondary"
        columns={columns}
        dataSource={users}
        scroll={{
          y: 480,
        }}
      />

      <Modal
        open={isModalOpen}
        title={
          <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
            <span>User information</span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={1000}
      >
        <div
          className=" flex justify-between"
          style={{
            borderBottom: "2px solid #6611e0",
            paddingBottom: 10,
            marginBottom: "10px",
          }}
        >
          <div>
            <div className="flex gap-4">
              <div>
                <img
                  style={{ borderRadius: "10px" }}
                  className="w-[180px] h-[150px]"
                  src="https://i.ibb.co/pQpXBmt/b2f2b8d89771068978e21e99c0397bef.png"
                  alt=""
                />
              </div>
              <div className="mt-2">
                <p className="text-md font-normal font-['Montserrat']">
                  Name: <span className="font-semibold">Edward King</span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Email: <span className="font-semibold">info@gmail.com</span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Phone: <span className="font-semibold">01506987620</span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Gender: <span className="font-semibold">Male</span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Date of birth:{" "}
                  <span className="font-semibold">03-07-1995</span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Address:{" "}
                  <span className="font-semibold">Dhaka-Bangladesh</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid #e0cff9",
            borderRadius: "10px",
            padding: "20px",
            height: "50vh",
            overflowY: "scroll",
          }}
        >
          <h1 className="text-md mb-[30px] font-semibold font-['Montserrat'] mt-[6px]">
            Uploaded videos
          </h1>
          <div className="">
            {[...Array(20).keys()].map(() => {
              return (
                <div
                  className="flex justify-between"
                  style={{ alignItems: "center", marginBottom: "10px" }}
                >
                  <video
                    width={50}
                    className=" h-[50px]   bg-zinc-800 rounded-lg "
                    src={testVideo}
                    onClick={() => showVideo()}
                  ></video>
                  <h4>Sheath Weeding gown</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      width="15"
                      height="10"
                      src="https://img.icons8.com/ios/50/clock--v1.png"
                      alt="clock--v1"
                    />
                    <h1>0:10s</h1>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      width="15"
                      height="10"
                      src="https://img.icons8.com/ios-filled/50/like--v1.png"
                      alt="like--v1"
                    />

                    <h1>6k</h1>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      width="15"
                      height="24"
                      src="https://img.icons8.com/material-outlined/24/visible--v1.png"
                      alt="visible--v1"
                    />
                    <h1>6k</h1>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/fluency/48/star--v1.png"
                      alt="star--v1"
                    />
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/fluency/48/star--v1.png"
                      alt="star--v1"
                    />
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/fluency/48/star--v1.png"
                      alt="star--v1"
                    />
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/fluency/48/star--v1.png"
                      alt="star--v1"
                    />
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/fluency/48/star--v1.png"
                      alt="star--v1"
                    />
                  </div>
                  <Button danger>Delete</Button>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>

      <Modal
        open={isModalOpen2}
        title={
          <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
            <span>User information</span>
          </div>
        }
        onCancel={cancelVideo}
        centered
        footer={[]}
        width={1000}
      >
        <div
          className=" flex justify-between"
          style={{
            borderBottom: "2px solid #6611e0",
            paddingBottom: 10,
            marginBottom: "10px",
          }}
        >
          <video
            width={950}
            autoPlay={true}
            className=" h-[400px]   bg-zinc-800 rounded-lg "
            src={testVideo}
          ></video>
        </div>
      </Modal>
    </div>
  );
};

export default UsersTable;
