import { Switch } from "antd";
import React from "react";

const SubscriptionPackage = () => {
  return (
    <div className="p-5">
      <div className="flex px-5 justify-between cursor-pointer border-b-secondary border-x-0 border-t-0 py-3 my-3 border-[1px]">
        <p className="text-lg font-medium font-['Montserrat']">Regular</p>
        <Switch onChange={(e) => handleNotification(e)} defaultChecked />
      </div>
      <div className="flex px-5 justify-between cursor-pointer border-b-0 border-x-0 border-t-0 py-3 my-3 border-[1px]">
        <p className="text-lg font-medium font-['Montserrat']">Premium</p>
        <Switch onChange={(e) => handleNotification(e)} defaultChecked />
      </div>
    </div>
  );
};

export default SubscriptionPackage;
