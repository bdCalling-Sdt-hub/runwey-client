import React from "react";
import { BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";

const COLORS = ["#6611E0", "#A370EC", "#E0CFF9"];

const data = [
  {
    name: "01-05",
    amt: 2400,
  },
  {
    name: "06-10",
    amt: 510,
  },
  {
    name: "11-15",
    amt: 1200,
  },
  {
    name: "16-20",
    amt: 1000,
  },
  {
    name: "21-25",
    amt: 500,
  },
  {
    name: "26-30",
    amt: 1181,
  },
];

const Earnings = () => {
  return (
    <>
      <div className="w-[410px]  relative bg-white rounded-[30px] border ml-4 mt-[24px]">
        <div className="flex justify-between p-[24px]">
          <div>
            <p className="text-lg font-medium font-['Montserrat']">Earnings</p>
          </div>
          <div className="text-primary font-normal font-['Poppins'] leading-[14px]">
            Monthly
          </div>
        </div>
        <div className="flex">
          <div className="self-end pb-7 ml-5">
            <p className="text-[10px]">date</p>
          </div>
          <BarChart width={350} height={150} data={data}>
            <XAxis className="text-[10px]" dataKey="name" />
            <Tooltip />
            <Bar dataKey="amt">
              {data.map((entry, index) => (
                <Cell
                  className="rounded-xl"
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default Earnings;
