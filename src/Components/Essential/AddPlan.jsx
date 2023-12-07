import React, { useEffect } from "react";

const AddPlan = ({addModal}) => {


  return (
    <div
    onClick={addModal}
      className={`w-[230px] border-2 h-[259px] border-dashed rounded-3xl cursor-pointer overflow-hidden `}
    >
      <div  className="flex flex-col justify-center items-center my-[90px]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z"
            stroke="#858585"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-zinc-500 text-lg font-medium font-['Montserrat']">
          Add Package
        </p>
      </div>
    </div>
  );
};

export default AddPlan;
