import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import SignleUser from "./SignleUser";

const MessageList = () => {

  // const [chatList, setChatList] = useState([]);
  // useEffect(() => {
  //   var socket = io("ws://192.168.10.17:3008");
  //   // Emit an event to request chat list from the server
  //   socket.emit(
  //     "chat-list",
  //     {
  //       userId: "65644026f93d85b49bea41a8",
  //       options: {
  //         limit: 0,
  //         page: 1,
  //       },
  //     },
  //     (response) => {
  //       console.log("Received response:", response); // Log the entire response object

  //       if (response && response.status === "Success") {
  //         setChatList(response.data);
  //         console.log("Received chat list:", response.data);
  //         // Handle the received chat list data here
  //       } else {
  //         console.error("Error fetching chat list:", response.message);
  //         // Handle the error state
  //       }
  //     }
  //   );
  // }, []);
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
