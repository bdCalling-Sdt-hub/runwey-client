import React from "react";

const OccasionsCard = () => {
  return (
    <div className="mt-5 rounded-xl ">
      <div className="relative flex justify-center  items-center mx-auto  ">
        <img
          className="rounded-xl h-[150px] w-[200px]  opacity-70"
          src="https://picsum.photos/200/300"
            // src="https://i.ibb.co/fdL1pfM/5a76c9ebc122b99fe48d3e0e6278ea65.png"
          alt=""
        />
        <p className="text-white absolute text-lg font-medium font-['Montserrat'] z-10">
          Summer
        </p>
      </div>
    </div>
  );
};

export default OccasionsCard;
