import "./Index.css";
import uuid from "react-uuid";
import Input from "../ınput/Input";
import TopBar from "../topbar/TopBar";
import React, { useContext, useEffect, useRef, useState } from "react";
import darktheme from "./image/darktheme.jpg";
import { getUserInfo } from "../utils/Helpers";
import { ChatContext } from "../store/context/ChatContext";
import { useStatus } from "../store/context/StatusContext";
import { UserContext } from "../store/context/UserContext";
import Popup from "../popup/Popup";
import { loggedUserInfo } from "../utils/Helpers";
import DeleteAlertMessage from "../DeleteAlertMessage/DeleteAlertMessage";

const Chat = () => {
  const { users } = useContext(UserContext);
  const {chat, setChat} = useContext(ChatContext);
  const loggedUserChatId = getUserInfo();
  const { sendValue, setSendValue } = useStatus();
  const userInfo = loggedUserInfo(users, loggedUserChatId);
  const [rightClick, setRightClick] = useState({
    x: null,
    y: null,
  });
  const [showPopupWindow, setShowPopupWindow] = useState(false);

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

  const deleteByValue = (value) => {
    setChat((oldValues) => {
      return oldValues.filter((chat) => chat !== value);
    });
  };

  const rightClickMenu = (e, chat) => {
    e.preventDefault();
    const xPosition = e?.pageX;
    const yPosition = e?.pageY;
    setRightClick({ x: xPosition, y: yPosition });
    setShowPopupWindow(false);
  };

  return (
    <>
      <Popup />
      <TopBar className="TopBar" />
      <div
        onClick={() => {
          setRightClick({ x: null, y: null });
          setShowPopupWindow(false);
        }}
        className="container"
        style={{ backgroundImage: `url(${darktheme})` }}
      >
        {chat.map((chat) => {
          if (chat.chatId === loggedUserChatId) {
            return (
              <div
                className="text-container-right"
                key={chat.chatId}
                onContextMenu={(e) => {
                  rightClickMenu(e, chat);
                }}
              >
                {chat.sendTheMessage}
              </div>
            );
          } else if (chat.chatId === 1 || chat.chatId === 2) {
            return (
              <div className="text-container-left" key={chat.id}>
                <div className="username">{userInfo.username}</div>
                <div
                  className="text-container"
                  onClick={() => deleteByValue(chat)}
                >
                  {chat.sendTheMessage}
                </div>
              </div>
            );
          }
        })}
        <div ref={bottomScrollRef}></div>
      </div>
      <Input className="ChatInput" click={handleSendClick} />
      {rightClick?.x && rightClick?.y && (
        <button
          className="delete-button"
          type="button"
          style={{
            top: rightClick?.y,
            left: rightClick?.x,
          }}
          onClick={() => {
            setRightClick({ x: null, y: null });
            setShowPopupWindow(true);
          }}
        >
          Delete
        </button>
      )}
      {showPopupWindow ? (
        <DeleteAlertMessage setShowPopupWindow={setShowPopupWindow} />
      ) : null}
    </>
  );
};

export default Chat;
