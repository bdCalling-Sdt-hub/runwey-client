import React from "react";


const PendingRequests = () => {
  return (
    <>
      <div className="w-[410px]  relative bg-white rounded-[30px] border ml-4 ">
        <div className="flex justify-between p-[24px]">
          <div>
            <p className="text-lg font-medium font-['Montserrat']">
              Pending Requests{" "}
              <span className="text-xl font-semibold font-['Montserrat']">
                (30)
              </span>
            </p>
          </div>
          <div>
            <p className="text-lg font-medium font-['Montserrat'] cursor-pointer text-primary">
              See All
            </p>
          </div>
        </div>
        <div className="mb-[24px]">
          <div className="w-[348px] h-[85px] p-2 justify-center items-center gap-4 inline-flex">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src="https://i.ibb.co/gvGDhg7/c7914fd4db3fd28b3ad21ba32ad6f0ec-1.png"
            />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Montserrat']">
                Alissa wants to upload a video.
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-[120px] h-9 p-2.5 bg-white rounded-lg border cursor-pointer border-violet-700 justify-center items-center gap-2.5 flex">
                  <div className="text-violet-700 text-sm font-semibold font-['Montserrat']">
                    Cancel
                  </div>
                </div>
                <div className="w-[120px] cursor-pointer h-9 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 flex">
                  <div className="text-white text-sm font-semibold font-['Montserrat']">
                    Accept
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[348px] h-[85px] p-2 justify-center items-center gap-4 inline-flex">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src="https://i.ibb.co/8csF7Sz/d3a6834f892ff357dd39bf45ab6f500f-1.png"
            />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Montserrat']">
                Alissa wants to upload a video.
              </div>
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-[120px] h-9 p-2.5 bg-white rounded-lg border cursor-pointer border-violet-700 justify-center items-center gap-2.5 flex">
                  <div className="text-violet-700 text-sm font-semibold font-['Montserrat']">
                    Cancel
                  </div>
                </div>
                <div className="w-[120px] cursor-pointer h-9 p-2.5 bg-violet-700 rounded-lg justify-center items-center gap-2.5 flex">
                  <div className="text-white text-sm font-semibold font-['Montserrat']">
                    Accept
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingRequests;
