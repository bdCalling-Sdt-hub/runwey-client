import React from "react";
import DashboardOverview from "./DashboardOverview";
import TransactionTable from "./TransactionTable";
import PendingRequests from "./PendingRequests";
import GenderRatio from "./GenderRatio";
import Earnings from "./Earnings";

const DashboardHome = () => {
  return (
    <div className="flex mt-[24px]">
      <div className="flex flex-col w-[1020px]">
        <DashboardOverview />
        <TransactionTable />
      </div>
      <div>
        <PendingRequests />
        <GenderRatio />
        <Earnings />
      </div>
    </div>
  );
};

export default DashboardHome;
