import React from "react";

const SignleUser = ({ status }) => {
  return (
    <div
      className={`{ ${
        status
          ? "bg-secondary flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
          : " flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
      } `}
    >
      <div>
        <img
          className="w-[60px] h-[60px] rounded-full"
          src="https://picsum.photos/200/300"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-primary font-semibold font-['Montserrat'] text-lg">
          Ann Marie
        </h1>
        <p className="text-sm font-normal font-['Montserrat']">
          Lorem ipsum dolor...
        </p>
      </div>
    </div>
  );
};

export default SignleUser;