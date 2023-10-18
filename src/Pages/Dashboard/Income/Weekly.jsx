import React from "react";
import Status from "../../../Components/Common/Status";
import WeeklyIncomeTable from "./WeeklyIncomeTable";

const Weekly = () => {
  return (
    <div className="flex flex-col mt-[24px] h-[800px]">
      <Status />
      <div className="mt-[24px]">
        <WeeklyIncomeTable />
      </div>
    </div>
  );
};

export default Weekly;
