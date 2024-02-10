import React from "react";
import moment from "moment";
import Swal from "sweetalert2";
import baseAxios from "../../../Config";
import { imageUrl } from "../../lib/constant";

const SingleBanner = ({ item, setReload, reload }) => {
  function formatDate(originalDateString) {
    const formattedDate =
      moment(originalDateString).format("hh:mm A, MM/DD/YY");
    return formattedDate;
  }
  const token = localStorage.getItem("token");
  const formatted = formatDate(item?.createdAt);

  const deleteBanner = async () => {
    try {
      let response = await baseAxios.delete(`/api/banner/${item._id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      // here reload + 1 is used to reload the page after deleting the banner
      setReload((reload) => reload + 1);
      Swal.fire({
        icon: "success",
        title: "Banner Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      return response.data;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Banner Not Deleted",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="flex justify-evenly items-center my-[24px]">
      <div>
        <img
          className="w-[200px] rounded-[10px] items-center  h-[100px] object-cover"
          src={imageUrl +item?.bannerImage}
          alt=""
        />
      </div>
      <div className="text-zinc-800  text-left w-[200px]  text-lg font-semibold font-['Montserrat']">
        {item.bannerName}
      </div>
      <div className="text-zinc-800 w-[300px] text-lg font-semibold font-['Montserrat']">
        {formatted}
      </div>
      <div className="pr-10  w-[120px]">
        <svg
        onClick={deleteBanner}
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SingleBanner;
