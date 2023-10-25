import React from "react";
import Status from "../../../Components/Common/Status";
import IncomePercentage from "./../../../Components/Income/IncomePercentage";
import YearlyIncomeTable from "../../../Components/Income/YearlyIncomeTable";

const Wallet = () => {
  return (
    <div className="flex flex-col mt-[24px] h-[800px]">
      <Status />
      <div className="mt-[24px] flex gap-[45px]">
        <YearlyIncomeTable/>
        <IncomePercentage />
      </div>
    </div>
  );
};

export default Wallet;
