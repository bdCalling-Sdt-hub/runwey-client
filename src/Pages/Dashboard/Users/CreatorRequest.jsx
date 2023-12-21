import React, { useEffect, useState } from "react";
import { Col, Row, Button, Badge, Modal } from "antd";
import { Pagination } from "antd";
import baseAxios from "../../../../Config";
import { useDispatch, useSelector } from "react-redux";
import { CreatorRequestData } from "../../../ReduxSlices/CreatorRequestSlice";
const style = {
  background: "#fff",
  padding: "20px 10px",
  border: "1px solid #e0cff9",
  borderRadius: "10px",
  display: "flex",
};

const CreatorRequest = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.CreatorRequestData.CreatorRequestList
  );
  const paginationData = useSelector(
    (state) => state.CreatorRequestData.pagination
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  console.log("answer", modalData);

  const showModal = (id) => {
    console.log(id);
    setIsModalOpen(true);
    baseAxios
      .get(`api/answer/${id}`)
      .then((res) => setModalData(res.data.data.attributes));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [reload, setReload] = React.useState(0);

  console.log(paginationData);

  useEffect(() => {
    let data = {
      page: 1,
    };
    dispatch(CreatorRequestData(data));
  }, [reload]);

  console.log(data);

  // React.useEffect(() => {
  //   baseAxios
  //     .get("api/users/pending-creator-list")
  //     .then((res) => setData(res.data.data));
  // }, []);

  const handleAccept = async (id) => {
    console.log(id);
    try {
      const response = await baseAxios.post(
        `api/users/accept-creator/${id}`,
        {}
      );

      setReload(reload + 1);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        padding: "10px 0px 20px 10px",
        border: "1px solid #6611e0",
        borderRadius: "20px",
        marginTop: "20px",
        marginRight: "10px",
        height: "780px",
      }}
    >
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          color: "#6611e0",
          borderBottom: "2px solid #6611e0",
          paddingBottom: "10px",
        }}
      >
        Pending Content Creator Requests
        <span className="ml-2">
          <Badge
            count={paginationData?.totalDocuments}
            style={{ backgroundColor: "#6611e0" }}
          ></Badge>
        </span>{" "}
      </h1>
      <Row
        gutter={16}
        className="overflow-y-scroll"
        style={{
          marginTop: "20px",
          height: "630px",
          marginRight: "10px",
        }}
      >
        {data?.map((user) => {
          return (
            <Col
              className="gutter-row"
              span={6}
              style={{ marginBottom: "20px" }}
            >
              <div style={style}>
                <div style={{ marginRight: "10px" }}>
                  <p>{}</p>
                  <img
                    // style={{
                    //   height: "0px",
                    //   width: "60px",
                    //   borderRadius: "100%",
                    // }}
                    src={user?.image?.publicFileUrl}
                  />
                </div>
                <div>
                  <h4
                    style={{
                      marginBottom: "20px",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    {user?.fullName} wants to be a content creator
                  </h4>
                  <div style={{ display: "flex" }}>
                    <Button
                      style={{
                        marginRight: "10px",
                        border: "1px solid #6611e0",
                        color: "#6611e0",
                        fontWeight: "bold",
                        padding: "0px 30px",
                      }}
                    >
                      Cancel
                    </Button>

                    <Button
                      // onClick={(e) => handleAccept(user?._id)}
                      onClick={(e) => showModal(user?._id)}
                      style={{
                        marginRight: "10px",
                        backgroundColor: "#6611e0",
                        border: "1px solid #6611e0",
                        color: "#fff",
                        fontWeight: "bold",
                        padding: "0px 30px",
                      }}
                    >
                      Accept
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
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
                  src={modalData?.userId?.image?.publicFileUrl}
                  alt=""
                />
              </div>
              <div className="mt-2">
                <p className="text-md font-normal font-['Montserrat']">
                  Name:{" "}
                  <span className="font-semibold">
                    {modalData?.userId?.fullName}
                  </span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Email:{" "}
                  <span className="font-semibold">
                    {modalData?.userId?.email}
                  </span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Phone:{" "}
                  <span className="font-semibold">
                    {modalData?.userId?.phoneNumber}
                  </span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Gender:{" "}
                  <span className="font-semibold">
                    {modalData?.userId?.gender}
                  </span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Date of birth:{" "}
                  <span className="font-semibold">
                    {modalData?.userId?.dateOfBirth}
                  </span>
                </p>
                <p className="text-md font-normal font-['Montserrat']">
                  Address:{" "}
                  <span className="font-semibold">
                    {modalData?.userId?.address}
                  </span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "15px",
                  marginLeft: "290px",
                }}
              >
                <Button
                  style={{
                    marginRight: "10px",
                    border: "1px solid #6611e0",
                    color: "#6611e0",
                    fontWeight: "bold",
                    padding: "0px 30px",
                  }}
                >
                  Cancel
                </Button>

                <Button
                
                   onClick={(e) => handleAccept(modalData?.userId?._id)}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#6611e0",
                    border: "1px solid #6611e0",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "0px 30px",
                  }}
                >
                  Accept
                </Button>
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
            {modalData?.answer?.map((item) => (
              <div className="flex justify-between flex-col gap-2">
                <div className="flex gap-3 items-center ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="#6611E0" />
                    <path
                      d="M11.192 14.906C11.192 14.542 11.2527 14.2247 11.374 13.954C11.4953 13.6833 11.6447 13.4407 11.822 13.226C12.0087 13.0113 12.2093 12.8153 12.424 12.638C12.6387 12.4513 12.8393 12.2693 13.026 12.092C13.2127 11.9053 13.362 11.7093 13.474 11.504C13.5953 11.2987 13.656 11.0607 13.656 10.79C13.656 10.342 13.4787 9.978 13.124 9.698C12.7693 9.418 12.2793 9.278 11.654 9.278C11.094 9.278 10.6087 9.37133 10.198 9.558C9.78733 9.74467 9.43733 10.02 9.148 10.384L8.126 9.656C8.518 9.16133 9.01733 8.77867 9.624 8.508C10.2307 8.228 10.94 8.088 11.752 8.088C12.424 8.088 13.0073 8.19067 13.502 8.396C13.9967 8.592 14.3793 8.87667 14.65 9.25C14.93 9.614 15.07 10.0573 15.07 10.58C15.07 10.972 15.0093 11.308 14.888 11.588C14.7667 11.868 14.6127 12.1153 14.426 12.33C14.2393 12.5447 14.0387 12.7453 13.824 12.932C13.6187 13.1187 13.4227 13.3053 13.236 13.492C13.0493 13.6787 12.8953 13.884 12.774 14.108C12.6527 14.332 12.592 14.598 12.592 14.906H11.192ZM11.906 18.084C11.6447 18.084 11.4253 17.9953 11.248 17.818C11.08 17.6407 10.996 17.4307 10.996 17.188C10.996 16.9267 11.08 16.712 11.248 16.544C11.4253 16.376 11.6447 16.292 11.906 16.292C12.1673 16.292 12.382 16.376 12.55 16.544C12.718 16.712 12.802 16.9267 12.802 17.188C12.802 17.4307 12.718 17.6407 12.55 17.818C12.382 17.9953 12.1673 18.084 11.906 18.084Z"
                      fill="white"
                    />
                  </svg>

                  <p className="text-[18px] text-[#858585] font-semibold">
                    {item?.question}
                  </p>
                </div>
                <p className="text-[18px]  font-medium">{item?.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <div className="flex border-t-[1px] pt-5 border-primary justify-between">
        <div>
          <p className="text-primary text-lg font-medium font-['Montserrat']">
            Showing 1-10 OF 250
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <Pagination
            className="text-primary font-['Montserrat']"
            defaultCurrent={1}
            total={200}
            showQuickJumper={false}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatorRequest;
