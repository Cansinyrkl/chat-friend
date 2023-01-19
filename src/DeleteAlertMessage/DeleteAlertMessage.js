import React, { useContext } from "react";
import "./Index.css";
import { ChatContext } from "../store/context/ChatContext";

const DeleteAlertMessage = ({ setShowPopupWindow }) => {
  const [chat, setChat] = useContext(ChatContext);

  const deleteByValue = (value) => {
    setChat((oldValues) => {
      return oldValues.filter((chat) => chat !== value);
    });
  };

  return (
    <>
      <div className="delete-alert">
        Delete Modal
        <button
          type="button"
          onClick={() => {
            setShowPopupWindow(false);
          }}
        >
          No
        </button>
        <button
          type="button"
          key={chat.chatId}
          onClick={(e) => {
            console.log(e.currentTarget);
          }}
        >
          Yes
        </button>
      </div>
      ;
    </>
  );
};

export default DeleteAlertMessage;
