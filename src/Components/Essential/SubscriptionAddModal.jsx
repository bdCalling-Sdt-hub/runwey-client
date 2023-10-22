import { Modal } from "antd";
import React, { useState } from "react";

const SubscriptionAddModal = ({ isModalOpen, handleCancel }) => {
  const [packageName, setPackageName] = useState("Package");
  const [packagePrice, setPackagePrice] = useState("Amount");
  const [packageValidity, setPackageValidity] = useState("Video amount");
  const [videoLimit, setVideoLimit] = useState("4");
  const [packageMainColor, setPackageMainColor] = useState("#5C5C5C");
  const [packageMainColorOpacity, setPackageMainColorOpacity] =
    useState("#ADADAD");
  const [packageMainColorOpacity2, setPackageMainColorOpacity2] =
    useState("#D6D6D6");
  const [packageMainColorOpacity3, setPackageMainColorOpacity3] =
    useState("#D6D6D6");

  return (
    <Modal
      open={isModalOpen}
      title={
        <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
          <span>Package Information</span>
        </div>
      }
      onCancel={handleCancel}
      centered
      footer={[]}
      width={1200}
    >
      <div className="flex justify-between">
        <div>
          <div class="mb-4 w-[750px]">
            <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Package Name
            </p>
            <input
              class=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter package name"
            />
          </div>
          <div class="mb-4 w-[750px]">
            <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Package Price
            </p>
            <input
              class=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter package price"
            />
          </div>
          <div class="mb-4 w-[750px]">
            <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Package Validity
            </p>
            <input
              class=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter package validity"
            />
          </div>
          <div class="mb-4 w-[750px]">
            <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
              Video Upload Limitations
            </p>
            <input
              class=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter video limitations"
            />
          </div>

          {/* here  color div */}
          <div class="mb-4 flex gap-3 w-[750px]">
            <div>
              <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Package Main Color
              </p>
              <input
                class=" border rounded-[10px] py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Color code"
              />
            </div>
            <div>
              <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Main Color Opacity 40%
              </p>
              <input
                class=" border rounded-[10px] py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Color code"
              />
            </div>
            <div>
              <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Main Color Opacity 40%
              </p>
              <input
                class=" border rounded-[10px] py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Color code"
              />
            </div>
            <div>
              <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Main Color Opacity 40%
              </p>
              <input
                class=" border rounded-[10px] py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Color code"
              />
            </div>
  
          </div>
        </div>

        {/* here */}
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
    </Modal>
  );
};

export default SubscriptionAddModal;
