import React, { useEffect } from "react";
import baseAxios from "../../../Config";

function DashboardOverview() {
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));
  const [data, setData] = React.useState();

  useEffect(() => {
    baseAxios
      .get(`api/contents/calculate`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
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
              $ {data?.totalIncome || 0}
            </h2>
          </div>
          <div className="border-l-2 p-7">
            <p className="text-lg font-medium font-['Montserrat']">
              Total Users
            </p>
            <h2 className=" text-3xl font-semibold font-['Montserrat']">
              {data?.totalUsers || 0}
            </h2>
          </div>
          <div className="border-l-2 p-7">
            <p className="text-lg font-medium font-['Montserrat']">
              Total Videos
            </p>
            <h2 className=" text-3xl font-semibold font-['Montserrat']">
              {data?.totalVideo || 0}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardOverview;
