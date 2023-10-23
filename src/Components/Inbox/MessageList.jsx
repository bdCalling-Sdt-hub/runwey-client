import React from "react";
import SignleUser from "./SignleUser";

const MessageList = () => {
  return (
    <div className="mt-[24px] bg-white border-secondary border-[1px] h-[780px] w-[500px] rounded-2xl">
      <div className="p-[30px]">
        <h1 className="text-2xl font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[20px]">
          Message List
        </h1>
        <div className="overflow-y-scroll h-[690px]">
          <SignleUser status={true} />
          <SignleUser />
          <SignleUser />
          <SignleUser />
          <SignleUser />
          <SignleUser />
          <SignleUser />
          <SignleUser />
          <SignleUser />
          <SignleUser />
        </div>
      </div>
    </div>
  );
};

export default MessageList;
