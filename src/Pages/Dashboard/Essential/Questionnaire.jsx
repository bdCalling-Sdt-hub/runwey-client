import React, { useState } from "react";
import SignleQuestions from "../../../Components/Essential/SignleQuestions";
import { Modal } from "antd";

const Questionnaire = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //
  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl ">
      <div className="p-[30px]">
        <div className="flex justify-between items-center border-b-[1px] border-primary pb-[30px]">
          <h1 className="text-3xl font-semibold font-['Montserrat'] text-primary ">
            Questionnaire
          </h1>
          <div
            onClick={showModal}
            className="w-36 group  h-9 cursor-pointer p-2.5 border-primary border-[1px] hover:bg-white bg-primary rounded-lg justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white group-hover:text-primary text-sm font-semibold font-['Montserrat']">
              Add Questions
            </div>
          </div>
        </div>
        <div className="h-[670px] overflow-y-scroll">
          <SignleQuestions />
          <SignleQuestions />
          <SignleQuestions />
          <SignleQuestions />
          <SignleQuestions />
          <SignleQuestions />
          <SignleQuestions />
          <SignleQuestions />
        </div>
      </div>

      <Modal
        open={isModalOpen}
        title={
          <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
            <span>Add Banner</span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={1000}
      >
        <div className="flex flex-col">
          <div class="mb-4 w-full">
            <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
            Question
            </p>
            <input
              class=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write your question"
            />
          </div>
          <div class="mb-4 w-full">
            <p class="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
            Answer
            </p>
            <textarea
              class=" border rounded-[10px] h-[150px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Write your answer"
            />
          </div>
          <div className="cursor-pointer">
            <div className="w-full h-10 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-lg font-semibold font-['Montserrat']">
                Save
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Questionnaire;
