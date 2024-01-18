import React from "react";
import baseAxios from "../../../Config";

const Status = () => {
  const [data, setData] = React.useState();
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    baseAxios
      .get("/api/payment/income", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
      });
  }, []);

  return (
    <div className="flex gap-11">
      <div className="bg-primary w-[330px] rounded-[20px]">
        <div className="p-[16px]">
          <div className="">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10.5H21M7 15.5H8M12 15.5H13M6 19.5H18C19.6569 19.5 21 18.1569 21 16.5V8.5C21 6.84315 19.6569 5.5 18 5.5H6C4.34315 5.5 3 6.84315 3 8.5V16.5C3 18.1569 4.34315 19.5 6 19.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-[16px]">
            <p className="text-white text-lg font-medium font-['Montserrat']">
              Total Income
            </p>
          </div>
          <div className="mt-[16px]">
            <h1 className="text-white text-3xl font-semibold font-['Montserrat']">
              $ {data?.totalIncome}
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-primary w-[330px] rounded-[20px]">
        <div className="p-[16px]">
          <div className="">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10.5H21M7 15.5H8M12 15.5H13M6 19.5H18C19.6569 19.5 21 18.1569 21 16.5V8.5C21 6.84315 19.6569 5.5 18 5.5H6C4.34315 5.5 3 6.84315 3 8.5V16.5C3 18.1569 4.34315 19.5 6 19.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-[16px]">
            <p className="text-white text-lg font-medium font-['Montserrat']">
              Daily Income
            </p>
          </div>
          <div className="mt-[16px]">
            <h1 className="text-white text-3xl font-semibold font-['Montserrat']">
              $ {data?.dailyTotalIncome}
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-primary w-[330px] rounded-[20px]">
        <div className="p-[16px]">
          <div className="">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10.5H21M7 15.5H8M12 15.5H13M6 19.5H18C19.6569 19.5 21 18.1569 21 16.5V8.5C21 6.84315 19.6569 5.5 18 5.5H6C4.34315 5.5 3 6.84315 3 8.5V16.5C3 18.1569 4.34315 19.5 6 19.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-[16px]">
            <p className="text-white text-lg font-medium font-['Montserrat']">
              Weekly Income
            </p>
          </div>
          <div className="mt-[16px]">
            <h1 className="text-white text-3xl font-semibold font-['Montserrat']">
              $ {data?.weeklyTotalIncome}
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-primary w-[330px] rounded-[20px]">
        <div className="p-[16px]">
          <div className="">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10.5H21M7 15.5H8M12 15.5H13M6 19.5H18C19.6569 19.5 21 18.1569 21 16.5V8.5C21 6.84315 19.6569 5.5 18 5.5H6C4.34315 5.5 3 6.84315 3 8.5V16.5C3 18.1569 4.34315 19.5 6 19.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-[16px]">
            <p className="text-white text-lg font-medium font-['Montserrat']">
              Monthly Income
            </p>
          </div>
          <div className="mt-[16px]">
            <h1 className="text-white text-3xl font-semibold font-['Montserrat']">
              $ {data?.monthlyTotalIncome}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
