import React from "react";
import DashboardOverview from "./../../../Components/DashboardHome/DashboardOverview";
import TransactionTable from "./../../../Components/DashboardHome/TransactionTable";
import PendingRequests from "./../../../Components/DashboardHome/PendingRequests";
import GenderRatio from "./../../../Components/DashboardHome/GenderRatio";
import Earnings from "./../../../Components/DashboardHome/Earnings";

const DashboardHome = () => {
  return (
    <div className="flex mt-[24px] h-[800px] overflow-y-scroll">
      <div className="flex flex-col w-[1020px]">
        <DashboardOverview />
        <TransactionTable />
      </div>
      <div className="mr-5">
        {/* <PendingRequests /> */}
        <GenderRatio />
        <Earnings />
      </div>
    </div>
  );
};

export default DashboardHome;
