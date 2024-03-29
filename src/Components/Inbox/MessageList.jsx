import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import SignleUser from "./SignleUser";
import socket from "../../lib/socket";
import baseAxios from "../../../Config";

const MessageList = ({ chatList, handleChat }) => {
  console.log("chatList", chatList?.data[0].chat.userId.image.publicFileUrl);

  const socket = io("ws://localhost:3008");

  // const [chatList, setChatList] = useState([]);
  // useEffect(() => {
  //   // var socket = io("ws://192.168.10.17:3008");
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


  // useEffect(() => {
  //   socket.on(`new-message::${currentChatId}`, (messageData) => {
  //     console.log(messageData);
  //     console.log(currentChatId)
  //     setChats((prevChats) => {
  //       return [...prevChats, messageData];
  //     });
  //   });
  
  //   // Clean up the socket listener when component unmounts or when chat ID changes
  //   return () => {
  //     socket.off(`new-message::${currentChatId}`);
  //   };
  // }, [currentChatId]);


  return (
    <div className="mt-[24px] bg-white border-secondary border-[1px] h-[780px] w-[500px] rounded-2xl">
      <div className="p-[30px]">
        <h1 className="text-2xl font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[20px]">
          Message List
        </h1>
        <div className="overflow-y-scroll h-[690px]">
          {chatList?.data?.map((item) => {
            return (
              <SignleUser
                key={item?._id}
                handleChat={handleChat}
                status={false}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageList;
