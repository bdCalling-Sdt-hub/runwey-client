import React from "react";
import DashboardOverview from "./DashboardOverview";
import TransactionTable from "./TransactionTable";
import PendingRequests from "./PendingRequests";
import GenderRatio from "./GenderRatio";
import Earnings from "./Earnings";

const DashboardHome = () => {
  return (
    <div className="flex mt-[24px] h-[800px] overflow-scroll ">
      <div className="flex flex-col w-[1020px]">
        <DashboardOverview />
        <TransactionTable />
      </div>
      <div className="mr-5">
        <PendingRequests />
        <GenderRatio />
        <Earnings />
      </div>
    </div>
  );
};

export default DashboardHome;
