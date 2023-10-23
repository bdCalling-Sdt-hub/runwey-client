import { Button, Col, DatePicker, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";

const Profile = () => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://i.ibb.co/k3qBHjn/e2fa7e1c075f3e11ddf04c79df9349c4-1.png",
    },
  ]);
  const [profileEdit, setProfileEdit] = useState(false);
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState("Sahinur Islma");
  const [email, setEmail] = useState("e@gami.com");
  const [image, setImage] = useState();
  const [phoneNumber, setPhoneNumber] = useState("01878575454564");
  const [dateOfBirth, setDateOfBirth] = useState("09-09-2000");
  const [address, setAddress] = useState("kjslkjflsjkdk");

  const handleDatePickerChange = (date, dateString) => {
    console.log(date, dateString);
  };

  // console.log(fullName, +" , " + email, +" , " + phoneNumber, +" , " + address);
  // console.log(userFromLocalStorage);

  const handleChange = () => {
    setProfileEdit(true);
  };

  const handleFileChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setImage(newFileList[0].originFileObj);
    // console.log(newFileList[0].originFileObj);
  };

  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl">
      <div className="p-[30px]">
        {!profileEdit ? (
          <>
            <div className="border-b-[1.5px] border-primary py-3 mb-5">
              <h1 className="text-3xl font-semibold font-['Montserrat'] text-primary">
                Profile
              </h1>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-5">
                <Image
                  width={150}
                  height={150}
                  style={{ borderRadius: "6px" }}
                  src="https://i.ibb.co/k3qBHjn/e2fa7e1c075f3e11ddf04c79df9349c4-1.png"
                />
                <div style={{ width: "400px" }}>
                  <h2>Sahinur Islam</h2>
                </div>
              </div>
              <div>
                <button
                  onClick={handleChange}
                  className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg"
                >
                  <LiaEditSolid fontSize={16} />
                  Edit
                </button>
              </div>
            </div>

            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Name</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue="test user"
                  readOnly
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Email</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue="in@gami.com"
                  readOnly
                />
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <label htmlFor="">Phone Number</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue="+880 1234567890"
                />
              </Col>
              <Col span={12}>
                <label htmlFor="">Date of Birth</label>
                <DatePicker
                  style={{ height: "45px", width: "100%" }}
                  defaultValue={dayjs("09-09-2000", "DD-MM-YY")}
                  disabled
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Address</label>
                <Input.TextArea
                  style={{ height: "170px" }}
                  defaultValue="test ululu"
                  readOnly
                />
              </Col>
            </Row>
          </>
        ) : (
          <>
            <div
              onClick={() => setProfileEdit(false)}
              className="flex items-center mb-5 cursor-pointer"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="text-3xl text-primary font-semibold font-['Montserrat']">
                Edit Profile
              </div>
            </div>

            <div className="border-b-[1.5px] border-primary py-3 mb-5 ">
              <ImgCrop rotationSlider>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleFileChange}
                >
                  {fileList.length < 1 && "+ Upload"}
                </Upload>
              </ImgCrop>

              <div>
                <h2>Mr ULULu</h2>
              </div>
            </div>

            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Name</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue="test user"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Email</label>
                <Input
                  disabled
                  type="email"
                  style={{ height: "45px" }}
                  defaultValue="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <label htmlFor="">Phone Number</label>
                <Input
                  style={{ height: "45px" }}
                  // defaultValue={userFromLocalStorage.phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Col>
              <Col span={12}>
                <label htmlFor="">Date of Birth</label>
                <DatePicker
                  onChange={handleDatePickerChange}
                  style={{ height: "45px", width: "100%" }}
                  defaultValue={dayjs("09-09-2000", "DD-MM-YY")}
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Address</label>
                <Input.TextArea
                  style={{ height: "170px" }}
                  defaultValue="test ululu"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>
            </Row>
            <button
              type="submit"
              onClick={() => setProfileEdit(false)}
              // onClick={handleSubmit}
              className="bg-primary text-white px-5 py-2 rounded-lg w-full"
              block
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
