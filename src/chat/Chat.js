import React, { useContext } from "react";
import { ChatContext } from "../store/context/ChatContext";
import Input from "../ınput/Input";
import uuid from "react-uuid";

const Chat = () => {
  const [chat, setChat] = useContext(ChatContext);

  const sendMessage = (chat) => {
    setChat([...chat, { id: uuid(), chat: chat }]);
  };
  return (
    <div>
      {chat.map((chat) => (
        <div key={chat.id}>{chat.chat}</div>
      ))}
      <Input sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
