import { Modal } from "antd";
import React, { useState } from "react";
import testVideo from "./../../../public/tikvideo.mp4";
import OccasionsSingleVideo from "./OccasionsSingleVideo";
import baseAxios from "../../../Config";
import NoVideo from "./NoVideo";

const OccasionsCard = ({ occasion, handleDelete }) => {
  const [isVideoDelete, setIsVideoDelete] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState();
  const [singleOccasionVideos, setSingleOccasionVideos] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (occasion) => {
    setIsModalOpen(true);
    console.log(occasion?._id);
    baseAxios
      .get(`/api/contents/category-wise-video/${occasion?._id}`)
      .then((res) => {
        console.log(res.data.data.attributes);
        setSingleOccasionVideos(res.data.data.attributes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        onClick={() => showModal(occasion)}
        className="cursor-pointer mt-5 rounded-xl "
      >
        <div className="relative flex justify-center  items-center mx-auto  ">
          <img
            className="rounded-xl h-[150px] w-[200px]  opacity-70"
            src={occasion?.categoryImage}
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
                src={occasion?.categoryImage}
                alt=""
              />
            </div>
            <div className="flex gap-3">
              {/* <div className="w-[120px] cursor-pointer h-9 p-2.5 bg-primary rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-sm font-semibold font-['Montserrat']">
                  Upload
                </div>
              </div> */}
              <div
                onClick={() => handleDelete(occasion?._id)}
                className="w-[220px] cursor-pointer h-9 p-2.5 bg-primary rounded-lg justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-white text-sm font-semibold font-['Montserrat']">
                  Delete Occasion
                </div>
              </div>
            </div>
          </div>
          <div className="border-secondary grid grid-cols-4 h-[300px] overflow-y-scroll overflow-x-hidden gap-3 border-[1px] rounded-2xl p-[30px]">
            {singleOccasionVideos.length === 0 && <NoVideo />}
            {singleOccasionVideos?.map((video) => (
              <OccasionsSingleVideo video={video} />
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OccasionsCard;
