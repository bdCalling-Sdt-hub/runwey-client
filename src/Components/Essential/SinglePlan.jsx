import React from "react";
import { PiCrownSimpleFill } from "react-icons/pi";
import SubscriptionShowModal from "./SubscriptionShowModal";

const SinglePlan = ({ plan, setModalData, showModal,setReload,handleCancel,isModalOpen,modalData,handleDelete,setIsModalOpen,reload }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: plan?.package?.mainColor,
          borderColor: plan?.package?.mainColor,
        }}
        onClick={() => setModalData(plan)}
        className={`w-[230px] h-[259px] rounded-3xl overflow-hidden cursor-pointer border-[1px]`}
      >
        <div onClick={showModal} className="flex flex-col">
          <div className="flex rounded-t-3xl justify-center flex-col text-center items-center">
            <div className="bg-white p-5 rounded-full mt-[16px]">
              <PiCrownSimpleFill
                style={{ color: plan?.package?.mainColor }}
                className="h-6 text-primary text-[24px]"
              />
            </div>

            <div>
              <h1 className=" text-lg text-white font-medium font-['Montserrat']">
                {plan?.package?.name}
              </h1>
              <p className="text-white text-xs mb-5 font-normal font-['Montserrat']">
                {plan?.package?.price}
              </p>
            </div>
          </div>
          <div
            style={{ color: plan?.package?.mainColor }}
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
              Can Upload {plan?.package?.limitation} Video
            </p>
          </div>
          <div
            style={{ backgroundColor: plan?.package?.opacity3 }}
            className="h-[100px] "
          >
            <div
              style={{ backgroundColor: plan?.package?.opacity1 }}
              className=" py-[10px]"
            ></div>
            <div
              style={{ backgroundColor: plan?.package?.opacity2 }}
              className=" py-[10px]"
            ></div>
          </div>
        </div>
      </div>
      <SubscriptionShowModal
            setModalData={setModalData}
            modalData={modalData}
            setReload={setReload}
            setIsModalOpen={setIsModalOpen}
            handleCancel={handleCancel}
            isModalOpen={isModalOpen}
            handleDelete={handleDelete}
            reload={reload}
          />
    </>
  );
};

export default SinglePlan;
