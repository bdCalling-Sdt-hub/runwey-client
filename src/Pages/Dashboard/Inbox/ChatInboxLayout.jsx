import React from "react";
import MessageList from "./MessageList";
import SinglePersonChatDetails from "./SinglePersonChatDetails";

const ChatInboxLayout = () => {
  return (
    <div className="flex gap-5">
      <MessageList />
      <SinglePersonChatDetails />
    </div>
  );
};

export default ChatInboxLayout;
