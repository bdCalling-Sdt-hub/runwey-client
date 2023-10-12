import React from "react";
import DashboardOverview from "./DashboardOverview";
import TransactionTable from "./TransactionTable";

const DashboardHome = () => {
  return (
    <div className="flex mt-[24px]">
      <div className="flex flex-col w-[1020px]">
        <DashboardOverview />
        <TransactionTable />
      </div>
      <div>
        <div>Pending Request</div>
        <div>Gender Ratio</div>
        <div>Earnings</div>
      </div>
    </div>
  );
};

export default DashboardHome;
