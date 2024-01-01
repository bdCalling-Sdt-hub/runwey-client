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

  console.log("name",currentChatPersonName)

  useEffect(() => {
    baseAxios
      .get("/api/chats")
      .then((res) => {
        setChatList(res.data.data.attributes);
        console.log(res.data.data.attributes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChat = (data) => {
    setCurrentChatId(data?.chat._id);
    setCurrentChatPersonName(data?.chat.userId.fullName);

    baseAxios
      .get(`api/messages/${data?.chat._id}`)
      .then((res) => {
        setChat(res.data.data.attributes);
        console.log(res.data.data.attributes.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex gap-5">
      <MessageList chatList={chatList} setCurrentChatPersonName={setCurrentChatPersonName} handleChat={handleChat} />
      {currentChatPersonName ? <SinglePersonChatDetails chat={chat} currentChatId={currentChatId} currentChatPersonName={currentChatPersonName} /> :<NoChatOpen/> }
      
    </div>
  );
};

export default ChatInboxLayout;
