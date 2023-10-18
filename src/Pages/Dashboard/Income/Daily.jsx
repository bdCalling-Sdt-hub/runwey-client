import React from "react";
import Status from "../../../Components/Common/Status";
import IncomeTable from "./IncomeTable";

const Daily = () => {

  
  return (
    <div className="flex flex-col mt-[24px] h-[800px]">
      <Status />
      <div className="mt-[24px]">
        <IncomeTable />
      </div>
    </div>
  );
};

export default Daily;
