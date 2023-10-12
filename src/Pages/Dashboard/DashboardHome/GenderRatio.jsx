import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#6611E0", "#A370EC", "#E0CFF9"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {/* {`${(percent * 100).toFixed(0)}%`} */}
    </text>
  );
};

const GenderRatio = () => {
  return (
    <div>
      <div className="w-[410px]  h-[250px] relative bg-white rounded-[30px] border border-violet-200 ml-4 mt-[24px]">
        <div className="left-[24px] top-[20px] absolute text-zinc-800 text-lg font-medium font-['Montserrat']">
          Gender Ratio
        </div>
        <div className="flex">
          <div className="left-[24px] top-[93px] absolute flex-col justify-start items-start gap-4 inline-flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 bg-violet-700 rounded" />
              <div className="text-zinc-800 text-sm font-normal font-['Montserrat']">
                Female (55%)
              </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 bg-purple-500 rounded" />
              <div className="text-zinc-800 text-sm font-normal font-['Montserrat']">
                Male (30%)
              </div>
            </div>
            <div className="justify-start items-center gap-4 inline-flex">
              <div className="w-6 h-6 bg-violet-200 rounded" />
              <div className="text-zinc-800 text-sm font-normal font-['Montserrat']">
                Others (15%)
              </div>
            </div>
          </div>
          <div>
            <PieChart width={400} height={300}>
              <Pie
                data={data}
                cx={300}
                cy={140}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                <Legend />
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderRatio;
