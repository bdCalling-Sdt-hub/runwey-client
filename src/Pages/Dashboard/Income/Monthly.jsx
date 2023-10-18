import React from "react";
import Status from "../../../Components/Common/Status";
import MonthlyIncomeTable from "./MonthlyIncomeTable";

const Monthly = () => {
  return (
    <div className="flex flex-col mt-[24px] h-[800px]">
      <Status />
      <div className="mt-[24px]">
       <MonthlyIncomeTable />
      </div>
    </div>
  );
};

export default Monthly;
