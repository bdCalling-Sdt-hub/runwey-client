import React, { useEffect, useState } from "react";
import SingleNotification from "../../../Components/Notification/SingleNotification";
import {Pagination } from "antd";
import baseAxios from "../../../../Config";

const Notification = () => {
const [notificationData, setNotificationDat] = useState([]);


useEffect(() => {
  baseAxios.get(`/api/contents/notification`).then((res) => {
    setNotificationDat(res.data.data.attributes);
  }).then((err) => {
    console.log(err);
  })
}, [])

console.log(notificationData)


  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl">
      <div className="p-[40px]">
        <div className="border-primary border-b-[1px] pb-[35px] mb-[18px]">
          <h1 className="text-3xl text-primary font-semibold font-['Montserrat']">
            Notification
          </h1>
        </div>
        <div className="overflow-y-scroll h-[580px]">
          <SingleNotification />
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <div lg={{ span: 12 }}>
              <p className="text-lg font-normal font-['Montserrat'] text-primary ">
                Showing 1-10 OF 250
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <Pagination
                className="text-primary font-['Montserrat']"
                defaultCurrent={1}
                total={200}
                showQuickJumper={false}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
