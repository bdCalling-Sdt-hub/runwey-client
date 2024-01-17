import { Button, Col, DatePicker, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import baseAxios from "../../../../Config";

const Profile = () => {
  const userFromLocalStorage = JSON.parse(localStorage.getItem("yourInfo"));
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: userFromLocalStorage?.image?.publicFileUrl,
    },
  ]);
  const [profileEdit, setProfileEdit] = useState(false);
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState(userFromLocalStorage?.fullName);
  const [email, setEmail] = useState(userFromLocalStorage?.email);
  const [image, setImage] = useState();
  const [phoneNumber, setPhoneNumber] = useState(
    userFromLocalStorage?.phoneNumber
  );
  const [dateOfBirth, setDateOfBirth] = useState(
    userFromLocalStorage?.dateOfBirth
  );
  const [address, setAddress] = useState(userFromLocalStorage?.address);

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

  const handleSubmit = () => {
    const formData = new FormData();

    // Append individual fields to the FormData object
    formData.append("fullName", fullName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("address", address);
    formData.append("gender", "Male");
    formData.append("countryCode", "+880");

    // Append the image file if you have it (assuming 'image' is a File object)
    if (image) {
      formData.append("image", image);
    }

    console.log("form data", formData);

    baseAxios
      .put(`/api/users/update`, formData, {
        headers: {
          // Do not set Content-Type here; Axios will set it automatically for FormData
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        // here localsotrage is updated
        localStorage.setItem(
          "yourInfo",
          JSON.stringify(res.data.data.attributes)
        );
        setProfileEdit(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-[24px] border-secondary border-[1px] rounded-2xl h-[780px] ">
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
                  src={userFromLocalStorage.image?.publicFileUrl}
                />
                <div style={{ width: "400px" }}>
                  <h2>{userFromLocalStorage?.fullName}</h2>
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
                  defaultValue={userFromLocalStorage?.fullName}
                  readOnly
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Email</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue={userFromLocalStorage?.email}
                  readOnly
                />
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <label htmlFor="">Phone Number</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue={userFromLocalStorage?.phoneNumber}
                />
              </Col>
              <Col span={12}>
                <label htmlFor="">Date of Birth</label>
                <DatePicker
                  style={{ height: "45px", width: "100%" }}
                  defaultValue={dayjs(
                    userFromLocalStorage?.dateOfBirth,
                    "DD-MM-YY"
                  )}
                  disabled
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Address</label>
                <Input.TextArea
                  style={{ height: "170px" }}
                  defaultValue={userFromLocalStorage?.address}
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
                <h2>{userFromLocalStorage?.fullName}</h2>
              </div>
            </div>

            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Name</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue={userFromLocalStorage?.fullName}
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
                  defaultValue={userFromLocalStorage?.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Col>
            </Row>

            <Row gutter={15} style={{ marginBottom: "15px" }}>
              <Col span={12}>
                <label htmlFor="">Phone Number</label>
                <Input
                  style={{ height: "45px" }}
                  defaultValue={userFromLocalStorage?.phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Col>
              <Col span={12}>
                <label htmlFor="">Date of Birth</label>
                <DatePicker
                  onChange={handleDatePickerChange}
                  style={{ height: "45px", width: "100%" }}
                  defaultValue={dayjs(
                    userFromLocalStorage?.dateOfBirth,
                    "DD-MM-YY"
                  )}
                />
              </Col>
            </Row>
            <Row style={{ marginBottom: "15px" }}>
              <Col span={24}>
                <label htmlFor="">Address</label>
                <Input.TextArea
                  style={{ height: "170px" }}
                  defaultValue={userFromLocalStorage.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Col>
            </Row>
            <button
              type="submit"
              onClick={handleSubmit}
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
