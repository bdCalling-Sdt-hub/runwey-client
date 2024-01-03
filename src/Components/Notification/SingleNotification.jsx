import React from "react";

const SingleNotification = ({data  }) => {
  return (
    <>
      <div className="border-b-[1px] pb-[10px] mt-3">
        <div className="flex">
          <div>
            <img
              className="h-[60px] w-[60px] rounded-full"
              src={data?.imageLink}
              alt=""
            />
          </div>
          <div className="flex flex-col ml-2">
            <h1 className="text-sm font-normal mt-5 font-['Montserrat']">
            {data?.message}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNotification;
