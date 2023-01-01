import uuid from "react-uuid";
import Input from "../ınput/Input";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../store/context/ChatContext";
import "./Index.css";
import Ahmet from "./image/01.jpeg";
import Mehmet from "./image/02.jpeg";
import { useStatus } from "../store/context/StatusContext";
import { getUserInfo, removeUserInfo } from "../utils/Helpers";

const Chat = () => {
  const navigate = useNavigate();
  const [chat, setChat] = useContext(ChatContext);
  const { sendValue } = useStatus();
  const loggedUserChatId = getUserInfo();

  const handleSendClick = (e) => {
    e.preventDefault();
    if (loggedUserChatId === 1) {
      setChat((prev) => {
        return [...prev, { id: uuid(), chatId: 1, sendTheMessage: sendValue }];
      });
    } else if (loggedUserChatId === 2) {
      setChat((prev) => {
        return [...prev, { id: uuid(), chatId: 2, sendTheMessage: sendValue }];
      });
    }
  };

  const handleExit = () => {
    navigate("/");
    removeUserInfo();
  };
  getUserInfo();

  return (
    <>
      <div className="container">
        {chat.map((chat) => {
          if (chat.chatId === 1) {
            return (
              <div className="text-container-left" key={chat.id}>
                <img src={Ahmet} alt="Avatar" className="Images" />
                {chat.sendTheMessage}
                {chat.chat}
              </div>
            );
          } else if (chat.chatId === 2) {
            return (
              <div className="text-container-right" key={chat.id}>
                <img src={Mehmet} alt="Avatar" className="Images" />
                {chat.sendTheMessage}
                {chat.chat}
              </div>
            );
          }
        })}
      </div>
      <Input className="ChatInput" click={handleSendClick} />
      <div className="exit-btn-container">
        <button type="button" onClick={handleExit} className="ExitButton">
          Exit
        </button>
      </div>
    </>
  );
};

export default Chat;
