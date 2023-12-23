import React, { useEffect } from "react";
import { BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";
import baseAxios from "../../../Config";

const COLORS = ["#6611E0", "#A370EC", "#E0CFF9"];

const Earnings = () => {
  const [chartData, setChartData] = React.useState([]);

  function extractDayRanges(dateRangeString) {
    const [startDate, endDate] = dateRangeString.split("-");
    const start = new Date(startDate);
    const end = new Date(endDate);

    const daysInMonth = end.getUTCDate() - start.getUTCDate() + 1;
    const dayRanges = [];

    for (let i = 0; i < daysInMonth; i += 5) {
      const startDay = (start.getUTCDate() + i).toString().padStart(2, "0");
      const endDay = Math.min(start.getUTCDate() + i + 4, end.getUTCDate())
        .toString()
        .padStart(2, "0");
      dayRanges.push(`${startDay}-${endDay}`);
    }
    return dayRanges;
  }

  useEffect(() => {
    baseAxios
      .get("/api/payment/earning")
      .then((res) => {
        // setChartData(res.data.data)
        setChartData(
          res.data.data.map((entry) => ({
            ...entry,
            days: extractDayRanges(entry.days),
          }))
        );
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


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
          <BarChart width={350} height={150} data={chartData}>
            <XAxis className="text-[10px]" dataKey="days" />
            <Tooltip />
            <Bar dataKey="totalAmount">
              {chartData?.map((entry, index) => (
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
