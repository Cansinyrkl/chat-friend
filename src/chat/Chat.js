import React, { useContext, useState } from "react";
import { ChatContext } from "../store/context/ChatContext";
const Chat = () => {
  const [chat, setChat] = useContext(ChatContext);
  const [chatSend, setChatSend] = useState("");
  const onChange = (e) => {
    setChat(e.target.value);
  };

  return (
    <div>
      {chat.map((chat) => (
        <li key={chat.id}>{chat.chat}</li>
      ))}

      <input
        type="text"
        onChange={onChange}
        maxLength="16"
        placeholder="istediğiniz mesaj"
        value={chatSend}
      />
      <button type="submit">Yolla</button>
    </div>
  );
};

export default Chat;
