import React from "react";

const SingleBanner = () => {
  return (
    <div className="flex justify-between items-center my-[24px]">
      <div>
        <img
          className="w-[200px] rounded-[10px] h-[100px] object-cover"
          src="https://i.ibb.co/bz71fsY/e1842982e8fad15f9d07c106b099a1aa.png"
          alt=""
        />
      </div>
      <div className="text-zinc-800 text-left  text-lg font-semibold font-['Montserrat']">
        Halloween Banner
      </div>
      <div className="text-zinc-800 text-lg font-semibold font-['Montserrat']">
        10:50 AM, 04/10/23
      </div>
      <div className="pr-10 ">
        <svg
          className="cursor-pointer"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.417 6.41667L16.6219 17.5473C16.5534 18.5067 15.7551 19.25 14.7933 19.25H7.20738C6.24554 19.25 5.44723 18.5067 5.3787 17.5473L4.58366 6.41667M9.16699 10.0833V15.5833M12.8337 10.0833V15.5833M13.7503 6.41667V3.66667C13.7503 3.16041 13.3399 2.75 12.8337 2.75H9.16699C8.66073 2.75 8.25033 3.16041 8.25033 3.66667V6.41667M3.66699 6.41667H18.3337"
            stroke="#858585"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SingleBanner;
