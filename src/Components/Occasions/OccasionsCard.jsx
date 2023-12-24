import { Modal } from "antd";
import React, { useState } from "react";
import testVideo from "./../../../public/tikvideo.mp4";
import OccasionsSingleVideo from "./OccasionsSingleVideo";

const OccasionsCard = ({ occasion,handleDelete }) => {
  const [isVideoDelete, setIsVideoDelete] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div onClick={showModal} className="cursor-pointer mt-5 rounded-xl ">
        <div className="relative flex justify-center  items-center mx-auto  ">
          <img
            className="rounded-xl h-[150px] w-[200px]  opacity-70"
            src={occasion?.categoryImage}
            // src="https://picsum.photos/200/300"
            alt=""
          />
          <p className="text-white absolute text-lg font-medium font-['Montserrat'] z-10">
            {occasion?.name}
          </p>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        title={
          <div className="text-2xl py-2 border-b-[1px] border-primary font-semibold font-['Montserrat'] text-primary">
            <span>Occasion Details</span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={1000}
      >
        <div className="flex flex-col">
          <div className="mb-4 flex justify-between py-[22px] border-b-primary border-b-[1px]  w-full">
            <div>
              <img
                className="w-[212px] h-[212px]"
                src="https://i.ibb.co/fdL1pfM/5a76c9ebc122b99fe48d3e0e6278ea65.png"
                alt=""
              />
            </div>
            <div className="flex gap-3">
              {/* <div className="w-[120px] cursor-pointer h-9 p-2.5 bg-primary rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-sm font-semibold font-['Montserrat']">
                  Upload
                </div>
              </div> */}
              <div onClick={()=>handleDelete(occasion?._id)} className="w-[220px] cursor-pointer h-9 p-2.5 bg-primary rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-sm font-semibold font-['Montserrat']">
                  Delete Occasion 
                </div>
              </div>
            </div>
          </div>
          <div className="border-secondary flex gap-3 border-[1px] rounded-2xl p-[30px]">
            <OccasionsSingleVideo />
            <OccasionsSingleVideo />
            <OccasionsSingleVideo />
          </div>
          {/* <div className="cursor-pointer">
            <div className="w-full h-10 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-lg font-semibold font-['Montserrat']">
                Save
              </div>
            </div>
          </div> */}
        </div>
      </Modal>
    </>
  );
};

export default OccasionsCard;
