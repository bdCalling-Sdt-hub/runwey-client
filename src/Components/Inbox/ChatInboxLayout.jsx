import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import SinglePersonChatDetails from "./SinglePersonChatDetails";
import baseAxios from "../../../Config";
import NoChatOpen from "./NoChatOpen";

const ChatInboxLayout = () => {
  const [chatList, setChatList] = useState();
  const [chat, setChat] = useState();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [currentChatPersonName, setCurrentChatPersonName] = useState(null);
  const [senderId, setSenderId] = useState(null);

  console.log("name", currentChatPersonName);

  useEffect(() => {
    baseAxios
      .get("/api/chats")
      .then((res) => {
        setChatList(res.data.data.attributes);
        console.log(res.data.data.attributes);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
      });
  }, []);

  const handleChat = (data) => {
    setCurrentChatId(data?.chat._id);
    console.log(data)
    setCurrentChatPersonName(data?.chat.userId.fullName);
    console.log(data?.chat.userId._id);
    setSenderId(data?.chat.userId._id)

    baseAxios
      .get(`api/messages/${data?.chat._id}`)
      .then((res) => {
        setChat(res.data.data.attributes);
        console.log(res.data.data.attributes.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("token");
          localStorage.removeItem("yourInfo");
        }
      });
  };

  return (
    <div className="flex gap-5">
      <MessageList
        chatList={chatList}
        setCurrentChatPersonName={setCurrentChatPersonName}
        handleChat={handleChat}
      />
      {currentChatPersonName ? (
        <SinglePersonChatDetails
          chat={chat}
          currentChatId={currentChatId}
          currentChatPersonName={currentChatPersonName}
          senderId={senderId}
        />
      ) : (
        <NoChatOpen />
      )}
    </div>
  );
};

export default ChatInboxLayout;
