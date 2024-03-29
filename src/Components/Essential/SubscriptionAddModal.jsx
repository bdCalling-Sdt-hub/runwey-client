import { Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { PiCrownSimpleFill } from "react-icons/pi";
import baseAxios from "../../../Config";

const SubscriptionAddModal = ({
  isAddModalOpen,
  handleAddCancel,
  setReload,
}) => {
  const [packageName, setPackageName] = useState("Package");
  const [packagePrice, setPackagePrice] = useState(100);
  const [packageValidity, setPackageValidity] = useState(1);
  const [videoLimit, setVideoLimit] = useState(4);
  const [packageMainColor, setPackageMainColor] = useState("#5C5C5C");
  const [packageMainColorOpacity, setPackageMainColorOpacity] =
    useState("#ADADAD");
  const [packageMainColorOpacity2, setPackageMainColorOpacity2] =
    useState("#D6D6D6");
  const [packageMainColorOpacity3, setPackageMainColorOpacity3] =
    useState("#D6D6D6");

  const token = localStorage.getItem("token");

  const handleAdd = () => {
    let data = {
      name: packageName,
      price: packagePrice,
      validity: packageValidity,
      limitation: videoLimit,
      mainColor: packageMainColor,
      opacity1: packageMainColorOpacity,
      opacity2: packageMainColorOpacity2,
      opacity3: packageMainColorOpacity3,
      type:packageName,
    };
    console.log(data);
    baseAxios
      .post("api/subscribe", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if(err.response.data.message === "Invalid token"){
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
        console.log(err);
      });

    setReload((prev) => prev + 1);
    handleAddCancel();
  };

  const onChange = (value) => {
    setPackageName(value);
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <Modal
      open={isAddModalOpen}
      title={
        <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
          <span>Package Information</span>
        </div>
      }
      onCancel={handleAddCancel}
      centered
      footer={[]}
      width={1200}
    >
      <div className="flex justify-between">
        <div>
          <div className="mb-4 w-[750px]">
            <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Package Name
            </p>
            <Select
              showSearch
              className="border rounded-[10px] w-full h-[45px]  text-gray-700  focus:outline-none focus:shadow-outline"
              placeholder="Select a package name"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={[
                {
                  value: "Regular",
                  label: "Regular",
                },
                {
                  value: "Premium",
                  label: "Premium",
                },
                {
                  value: "Standard",
                  label: "Standard",
                },
              ]}
            />
          </div>
          <div className="mb-4 w-[750px]">
            <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Package Price
            </p>
            <input
              className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="number"
              onChange={(e) => setPackagePrice(e.target.value)}
              placeholder="Enter package price"
            />
          </div>
          <div className="mb-4 w-[750px]">
            <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Package Validity
            </p>
            <input
              onChange={(e) => setPackageValidity(e.target.value)}
              className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Enter package validity"
            />
          </div>
          <div className="mb-4 w-[750px]">
            <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Video Upload Limitations
            </p>
            <input
              onChange={(e) => setVideoLimit(e.target.value)}
              className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter video limitations"
            />
          </div>

          {/* here  color div */}
          <div className="mb-4 flex gap-3 w-[750px]">
            <div>
              <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Package Main Color
              </p>
              <input
                onChange={(e) => setPackageMainColor(e.target.value)}
                className=" border rounded-[10px] py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Color code"
              />
            </div>
            <div>
              <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Main Color Opacity 40%
              </p>
              <input
                onChange={(e) => setPackageMainColorOpacity(e.target.value)}
                className=" border rounded-[10px] py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Color code"
              />
            </div>
            <div>
              <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Main Color Opacity 60%
              </p>
              <input
                onChange={(e) => setPackageMainColorOpacity2(e.target.value)}
                className=" border rounded-[10px] py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Color code"
              />
            </div>
            <div>
              <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Main Color Opacity 80%
              </p>
              <input
                onChange={(e) => setPackageMainColorOpacity3(e.target.value)}
                className=" border rounded-[10px] py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Color code"
              />
            </div>
          </div>
        </div>

        {/* here */}
        <div className="flex gap-3 mt-5">
          <div
            style={{
              backgroundColor: packageMainColor,
              borderColor: packageMainColor,
            }}
            className={`w-[230px] h-[259px] rounded-3xl overflow-hidden  border-[1px]`}
          >
            <div className="flex flex-col">
              <div className="flex rounded-t-3xl justify-center flex-col text-center items-center">
                <div className="bg-white p-5 rounded-full mt-[16px]">
                  <PiCrownSimpleFill
                    style={{ color: packageMainColor }}
                    className="h-6 text-primary text-[24px]"
                  />
                </div>

                <div>
                  <h1 className=" text-lg text-white font-medium font-['Montserrat']">
                    {packageName}
                  </h1>
                  <p className="text-white text-xs mb-5 font-normal font-['Montserrat']">
                    {packagePrice}
                  </p>
                </div>
              </div>
              <div
                style={{ color: packageMainColor }}
                className="flex  gap-2 bg-white py-[20px] justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <p className="text-xs font-medium font-['Montserrat']">
                  Can Upload {videoLimit} Video
                </p>
              </div>
              <div
                style={{ backgroundColor: packageMainColorOpacity3 }}
                className="h-[100px] "
              >
                <div
                  style={{ backgroundColor: packageMainColorOpacity }}
                  className=" py-[10px]"
                ></div>
                <div
                  style={{ backgroundColor: packageMainColorOpacity2 }}
                  className=" py-[10px]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {/* <button className="bg-white  text-lg font-semibold font-['Montserrat'] border-primary border-[1px] w-full text-pr rounded-[10px] px-10 py-2 mt-5">
          Delete Package
        </button> */}
        <button
          onClick={handleAdd}
          className="bg-primary text-lg font-semibold font-['Montserrat'] w-full text-white rounded-[10px] px-10 py-2 mt-5"
        >
          Save Changes
        </button>
      </div>
    </Modal>
  );
};

export default SubscriptionAddModal;
