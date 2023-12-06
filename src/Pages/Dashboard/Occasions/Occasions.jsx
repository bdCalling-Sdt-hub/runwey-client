import React, { useState, useRef } from "react";
import { Modal, Pagination } from "antd";
import OccasionsCard from "../../../Components/Occasions/OccasionsCard";

const Occasions = () => {
  const [selectedFiles, setSelectedFiles] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mt-[24px] h-[780px] ">
      <div className="p-[30px]">
        <div className="flex justify-between items-center border-b-[1px] border-primary pb-[30px]">
          <h1 className="text-3xl font-semibold font-['Montserrat'] text-primary ">
            Occasions
          </h1>
          <div
            onClick={showModal}
            className="w-36 group  h-9 cursor-pointer p-2.5 border-primary border-[1px] hover:bg-white bg-primary rounded-lg justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white group-hover:text-primary text-sm font-semibold font-['Montserrat']">
              Add Occasion
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
          <OccasionsCard />
        </div>
      </div>
      <Modal
        open={isModalOpen}
        title={
          <div className="text-2xl py-2 border-b-2 border-primary font-semibold font-['Montserrat'] text-primary">
            <span>Add Occasion</span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={1000}
      >
        <div className="flex flex-col">
          <div className="border-dashed border-2 rounded-[20px] my-[30px] border-secondary">
            <div className="flex justify-center items-center flex-col mt-[32px] gap-4 my-auto h-[200px]">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.9833 30.5007L28.1771 30.6632L42.6104 44.8298C41.5441 45.4878 40.3155 45.8356 39.0625 45.834H15.1041C13.8514 45.8362 12.6227 45.4892 11.5562 44.8319L25.9896 30.6632L26.1625 30.5152C26.4264 30.3228 26.7439 30.2179 27.0706 30.2153C27.3972 30.2127 27.7164 30.3125 27.9833 30.5007ZM39.0625 8.33398C39.9516 8.33398 40.8321 8.50912 41.6536 8.84938C42.475 9.18965 43.2215 9.68839 43.8502 10.3171C44.4789 10.9458 44.9776 11.6923 45.3179 12.5137C45.6582 13.3352 45.8333 14.2157 45.8333 15.1048V39.0631C45.8333 40.3694 45.4625 41.5902 44.8229 42.6256L30.3666 28.4319L30.1 28.1902C29.2578 27.482 28.1933 27.0927 27.0929 27.0904C25.9925 27.0881 24.9264 27.473 24.0812 28.1777L23.8 28.434L9.34373 42.6236C8.68127 41.5543 8.33127 40.321 8.33331 39.0631V26.0465C10.8107 27.0804 13.5394 27.3546 16.1729 26.8344C18.8065 26.3142 21.226 25.023 23.1242 23.1249C25.0224 21.2267 26.3136 18.8072 26.8338 16.1736C27.354 13.5401 27.0797 10.8113 26.0458 8.33398H39.0625ZM13.5416 2.08398C15.0464 2.08398 16.5364 2.38036 17.9266 2.9562C19.3167 3.53203 20.5799 4.37605 21.6439 5.44005C22.7079 6.50406 23.5519 7.76721 24.1278 9.1574C24.7036 10.5476 25 12.0376 25 13.5423C25 15.047 24.7036 16.537 24.1278 17.9272C23.5519 19.3174 22.7079 20.5806 21.6439 21.6446C20.5799 22.7086 19.3167 23.5526 17.9266 24.1284C16.5364 24.7043 15.0464 25.0007 13.5416 25.0007C10.5027 25.0007 7.58823 23.7934 5.43938 21.6446C3.29053 19.4957 2.08331 16.5813 2.08331 13.5423C2.08331 10.5034 3.29053 7.58891 5.43938 5.44005C7.58823 3.2912 10.5027 2.08398 13.5416 2.08398ZM34.9 14.584C33.6557 14.584 32.4623 15.0783 31.5825 15.9581C30.7026 16.838 30.2083 18.0313 30.2083 19.2757C30.2083 20.52 30.7026 21.7133 31.5825 22.5932C32.4623 23.473 33.6557 23.9673 34.9 23.9673C36.1443 23.9673 37.3376 23.473 38.2175 22.5932C39.0973 21.7133 39.5916 20.52 39.5916 19.2757C39.5916 18.0313 39.0973 16.838 38.2175 15.9581C37.3376 15.0783 36.1443 14.584 34.9 14.584ZM34.9 17.709C35.3155 17.709 35.714 17.874 36.0078 18.1679C36.3016 18.4617 36.4666 18.8601 36.4666 19.2757C36.4666 19.6912 36.3016 20.0896 36.0078 20.3834C35.714 20.6773 35.3155 20.8423 34.9 20.8423C34.4845 20.8423 34.086 20.6773 33.7922 20.3834C33.4984 20.0896 33.3333 19.6912 33.3333 19.2757C33.3333 18.8601 33.4984 18.4617 33.7922 18.1679C34.086 17.874 34.4845 17.709 34.9 17.709ZM13.5416 6.25065L13.3541 6.26523C13.146 6.30326 12.9544 6.40376 12.8048 6.55337C12.6552 6.70298 12.5547 6.8946 12.5166 7.10273L12.5 7.29232V12.5007H7.28748L7.09998 12.5173C6.89185 12.5553 6.70023 12.6558 6.55062 12.8055C6.40101 12.9551 6.3005 13.1467 6.26248 13.3548L6.24581 13.5423L6.26248 13.7298C6.3005 13.938 6.40101 14.1296 6.55062 14.2792C6.70023 14.4288 6.89185 14.5293 7.09998 14.5673L7.28748 14.584H12.5V19.7986L12.5166 19.9861C12.5547 20.1942 12.6552 20.3858 12.8048 20.5354C12.9544 20.685 13.146 20.7855 13.3541 20.8236L13.5416 20.8423L13.7291 20.8236C13.9373 20.7855 14.1289 20.685 14.2785 20.5354C14.4281 20.3858 14.5286 20.1942 14.5666 19.9861L14.5833 19.7986V14.584H19.8021L19.9896 14.5673C20.1977 14.5293 20.3893 14.4288 20.5389 14.2792C20.6885 14.1296 20.789 13.938 20.8271 13.7298L20.8437 13.5423L20.8271 13.3548C20.7889 13.1464 20.6881 12.9546 20.5381 12.8049C20.3881 12.6553 20.196 12.555 19.9875 12.5173L19.8 12.5007H14.5833V7.29232L14.5666 7.10482C14.529 6.8963 14.4287 6.70423 14.279 6.55421C14.1294 6.4042 13.9376 6.30339 13.7291 6.26523L13.5416 6.25065Z"
                  fill="#C2A0F3"
                />
              </svg>
              <p className="text-sm font-medium font-['Montserrat']">
                Occasion Banner
              </p>
              <div className="z-10 w-[120px] cursor-pointer h-9 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-sm font-semibold font-['Montserrat']">
                  <input
                    type="file"
                    // ref={fileInputRef}
                    className="hidden"
                    // onChange={handleFilesChosen}
                  />
                  Upload
                </div>
              </div>
            </div>
          </div>

          <div className="border-secondary p-[30px] rounded-2xl border-[1px] ">
            <div className="mb-4 w-full">
              <p className="text-zinc-800 pb-2 font-semibold font-['Montserrat']">
                Banner Name
              </p>
              <input
                className=" border rounded-[10px] w-full py-3 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter banner name"
              />
            </div>
            <div>
              <h1>Occasion Video</h1>
              <p>(Video must be 10 sec and lower than 20 MB)</p>
              <div className="flex gap-3">
                <video
                  autoPlay
                  className="w-[120px] h-[120px]"
                  src="/public/demo.mp4"
                ></video>
                <video
                  autoPlay
                  className="w-[120px] h-[120px]"
                  src="/public/demo.mp4"
                ></video>
                <video
                  autoPlay
                  className="w-[120px] h-[120px]"
                  src="/public/demo.mp4"
                ></video>
                <video
                  autoPlay
                  className="w-[120px] h-[120px]"
                  src="/public/demo.mp4"
                ></video>
              </div>
            </div>
            <div className="cursor-pointer">
              <div className="w-full h-10 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-lg font-semibold font-['Montserrat']">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Occasions;
