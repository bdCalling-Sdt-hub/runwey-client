import React from "react";

function DashboardOverview() {
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));
  return (
    <>
      <div className="w-full bg-primary text-white p-[32px] rounded-2xl ">
        <div>
          <p className="">Dashboard Overview</p>
          <h1 className="text-[44px] font-semibold font-['Montserrat']">
            Hello {UserData?.fullName}
          </h1>
        </div>
        <div className="flex justify-between mt-[20px]">
          <div className="p-7">
            <p className="text-lg font-medium font-['Montserrat']">
              Total Income
            </p>
            <h2 className=" text-3xl font-semibold font-['Montserrat']">
              $ 22,500.00
            </h2>
          </div>
          <div className="border-l-2 p-7">
            <p className="text-lg font-medium font-['Montserrat']">
              Total Users
            </p>
            <h2 className=" text-3xl font-semibold font-['Montserrat']">
              1,234
            </h2>
          </div>
          <div className="border-l-2 p-7">
            <p className="text-lg font-medium font-['Montserrat']">
              Total Videos
            </p>
            <h2 className=" text-3xl font-semibold font-['Montserrat']">
              20,350
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardOverview;
