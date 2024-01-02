import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubscriptionData } from "../../../ReduxSlices/SubscriptionSlice";

const SubscriptionPackage = () => {
  const dispatch = useDispatch();
  const [reload, setReload] = useState(1);
  const data = useSelector((state) => state.SubscriptionData.SubscriptionList);

  useEffect(() => {
    let data = {
      page: 1,
    };
    dispatch(SubscriptionData(data));
  }, [reload]);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  return (
    <div className="p-5">
      {data.map((item) => {
        return (
          <div className="flex px-5 justify-between cursor-pointer border-b-secondary border-x-0 border-t-0 py-3 my-3 border-[1px]">
            <p className="text-lg font-medium font-['Montserrat']">
              {item?.name}
            </p>
            <p className="text-lg font-medium font-['Montserrat']">
            <Switch defaultChecked onChange={onChange} />
            </p>
          </div>
        );
      })}
      {/* <div className="flex px-5 justify-between cursor-pointer border-b-secondary border-x-0 border-t-0 py-3 my-3 border-[1px]">
        <p className="text-lg font-medium font-['Montserrat']">Regular</p>
        <Switch onChange={(e) => handleNotification(e)} defaultChecked />
      </div>
      <div className="flex px-5 justify-between cursor-pointer border-b-0 border-x-0 border-t-0 py-3 my-3 border-[1px]">
        <p className="text-lg font-medium font-['Montserrat']">Premium</p>
        <Switch onChange={(e) => handleNotification(e)} defaultChecked />
      </div> */}
    </div>
  );
};

export default SubscriptionPackage;
