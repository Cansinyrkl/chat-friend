import "./Index.css";
import uuid from "react-uuid";
import Input from "../ınput/Input";
import Ahmet from "./image/01.jpeg";
import Mehmet from "./image/02.jpeg";
import TopBar from "../topbar/TopBar";
import React, { useContext, useEffect, useRef, useState } from "react";
import darktheme from "./image/darktheme.jpg";
import { getUserInfo } from "../utils/Helpers";
import { ChatContext } from "../store/context/ChatContext";
import { useStatus } from "../store/context/StatusContext";
import { UserContext } from "../store/context/UserContext";
import Popup from "../popup/Popup";

const Chat = () => {
  const { users } = useContext(UserContext);
  const [chat, setChat] = useContext(ChatContext);
  const loggedUserChatId = getUserInfo();
  const { sendValue, setSendValue } = useStatus();

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
    setSendValue("");
  };

  const bottomScrollRef = useRef();

  const scrollToBottom = () => {
    bottomScrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const userInfo = users.find((user) => {
    if (user.id !== loggedUserChatId) {
      return user;
    }
  });

  return (
    <>
      <Popup />
      <TopBar className="TopBar" />
      <div
        className="container"
        style={{ backgroundImage: `url(${darktheme})` }}
      >
        {chat.map((chat) => {
          if (chat.chatId === loggedUserChatId) {
            return (
              <div className="text-container-right" key={chat.id}>
                {chat.sendTheMessage}
              </div>
            );
          } else if (chat.chatId === 1 || chat.chatId === 2) {
            return (
              <div className="text-container-left" key={chat.id}>
                <div className="username">{userInfo.username}</div>
                <div className="text-container">{chat.sendTheMessage}</div>
              </div>
            );
          }
        })}
        <div ref={bottomScrollRef}></div>
      </div>
      <Input className="ChatInput" click={handleSendClick} />
    </>
  );
};

export default Chat;
