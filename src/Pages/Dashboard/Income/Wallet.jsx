import React from "react";
import Status from "../../../Components/Common/Status";
import IncomePercentage from "./IncomePercentage";

const Wallet = () => {
  return (
    <div className="flex flex-col mt-[24px] h-[800px]">
      <Status />
      <div className="mt-[24px] relative bg-white rounded-[30px] border">
        <IncomePercentage />
      </div>
    </div>
  );
};

export default Wallet;
