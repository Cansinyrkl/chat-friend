import uuid from "react-uuid";
import Input from "../ınput/Input";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../store/context/ChatContext";
import "./Index.css";
import Ahmet from "./image/01.jpeg";
import Mehmet from "./image/02.jpeg";
const Chat = () => {
  const navigate = useNavigate();
  const [chat, setChat] = useContext(ChatContext);

  const sendMessage = (chat) => {
    setChat((prev) => {
      return [...prev, { id: uuid(), chat: chat }];
    });
  };
  const exit = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container">
        {chat.map((chat) => (
          <div key={chat.id}>
            <img src={Ahmet} alt="Avatar" className="Images" />
            {chat.sendTheMessage}
            {chat.chat}
          </div>
        ))}
      </div>
      <div className="darker">
        {chat.map((chat) => (
          <div key={chat.id}>
            <img src={Mehmet} alt="Avatar" className="Images" />
            {chat.sendTheMessage}
            {chat.chat}
          </div>
        ))}
      </div>
      <Input sendMessage={sendMessage} className="ChatInput" />
      <button onClick={exit} className="ExitButton">
        Exit
      </button>
    </>
  );
};

export default Chat;
