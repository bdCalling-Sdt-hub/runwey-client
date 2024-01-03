import React, { useEffect, useState } from "react";
import SingleNotification from "../../../Components/Notification/SingleNotification";
import { Pagination } from "antd";
import baseAxios from "../../../../Config";
import ShowingPegination from "../../../Components/ShowingPegination";

const Notification = () => {
  const pageSize = 10;
  const [notificationData, setNotificationDat] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    baseAxios
      .get(`api/notification?page=${page}&limit=${10}`)
      .then((res) => {
        setNotificationDat(res.data.data.attributes);
      })
      .then((err) => {
        console.log(err);
      });
  }, [page]);

  const notificationsDataGetByPagination = (page) => {
    console.log("page", page);

    setPage(page);
  };

  console.log(notificationData);

  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl">
      <div className="p-[40px]">
        <div className="border-primary border-b-[1px] pb-[35px] mb-[18px]">
          <h1 className="text-3xl text-primary font-semibold font-['Montserrat']">
            Notification
          </h1>
        </div>
        <div className="overflow-y-scroll h-[580px]">
          {notificationData?.notifications?.map((data) => (
            <SingleNotification data={data} />
          ))}
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <div lg={{ span: 12 }}>
              <p className="text-lg font-normal font-['Montserrat'] text-primary ">
              <ShowingPegination pagination={notificationData?.pagination} />
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <Pagination
                pageSize={pageSize}
                className="text-primary font-['Montserrat']"
                defaultCurrent={notificationData?.pagination?.page}
                total={notificationData?.pagination?.totalResults}
                showQuickJumper={false}
                showSizeChanger={false}
                onChange={notificationsDataGetByPagination}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
