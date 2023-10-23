import React from "react";
import { Pagination } from "antd";
import SingleBanner from "../../../Components/Essential/SingleBanner";

const bannerData = [
  {
    id: 1,
    image: "https://i.ibb.co/bz71fsY/e1842982e8fad15f9d07c106b099a1aa.png",
    name: "Offer Banner",
    date: "10:50 AM, 04/10/23",
  },
  {
    id: 2,
    image: "https://i.ibb.co/bz71fsY/e1842982e8fad15f9d07c106b099a1aa.png",
    name: "Offer Banner",
    date: "10:50 AM, 04/10/23",
  },
  {
    id: 3,
    image: "https://i.ibb.co/bz71fsY/e1842982e8fad15f9d07c106b099a1aa.png",
    name: "Offer Banner",
    date: "10:50 AM, 04/10/23",
  },
  {
    id: 4,
    image: "https://i.ibb.co/bz71fsY/e1842982e8fad15f9d07c106b099a1aa.png",
    name: "Offer Banner",
    date: "10:50 AM, 04/10/23",
  },
  {
    id: 5,
    image: "https://i.ibb.co/bz71fsY/e1842982e8fad15f9d07c106b099a1aa.png",
    name: "Offer Banner",
    date: "10:50 AM, 04/10/23",
  },
  {
    id: 6,
    image: "https://i.ibb.co/bz71fsY/e1842982e8fad15f9d07c106b099a1aa.png",
    name: "Offer Banner",
    date: "10:50 AM, 04/10/23",
  },
  {
    id: 7,
    image: "https://i.ibb.co/bz71fsY/e1842982e8fad15f9d07c106b099a1aa.png",
    name: "Offer Banner",
    date: "10:50 AM, 04/10/23",
  },
];

const Banner = () => {
  return (
    <div className="mt-[24px] border-secondary border-[1px] h-[780px] rounded-2xl ">
      <div className="p-[30px]">
        <div className="flex justify-between items-center border-b-[1px] border-primary pb-[30px]">
          <h1 className="text-3xl font-semibold font-['Montserrat'] text-primary ">
            Current Banners
          </h1>
          <div className="w-36 group  h-9 cursor-pointer p-2.5 border-primary border-[1px] hover:bg-white bg-primary rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-white group-hover:text-primary text-sm font-semibold font-['Montserrat']">
              Add Banner
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-[1px] border-primary border-x-0 border-t-0 flex justify-between py-3">
            <p className="text-lg w-[220px] font-semibold font-['Montserrat'] text-primary">
              Banner Photo
            </p>
            <p className="text-lg font-semibold font-['Montserrat'] text-primary">
              Banner Name
            </p>
            <p className="text-lg font-semibold font-['Montserrat'] text-primary">
              Upload Date & Time
            </p>
            <p className="text-lg pr-5 font-semibold font-['Montserrat'] text-primary">
              Action
            </p>
          </div>
          <div className="h-[555px] overflow-y-scroll">
            {/* here all Single card show */}
            {bannerData.map((data) => (
              <SingleBanner key={data.id} data={data} />
            ))}
          </div>
          <div className="">
            <div className="flex border-t-[1px] pt-5 border-primary justify-between">
              <div>
                <p className="text-primary text-lg font-medium font-['Montserrat']">
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
    </div>
  );
};

export default Banner;
