import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import SinglePersonChatDetails from "./SinglePersonChatDetails";
import baseAxios from "../../../Config";

const ChatInboxLayout = () => {
  const [chatList, setChatList] = useState();
  const [chat, setChat] = useState();
  const [isChatOpen, setIsChatOpen] = useState(false);

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

  const handleChat = (id) => {
    console.log(id);
    baseAxios
      .get(`api/messages/${id}`)
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
      <MessageList chatList={chatList} handleChat={handleChat} />
      <SinglePersonChatDetails chat={chat} />
    </div>
  );
};

export default ChatInboxLayout;
