import React, { useState, useContext } from "react";
import uuid from "react-uuid";
import { ChatContext } from "../store/context/ChatContext";

const Input = ({ sendMessage }) => {
  const [chat, setChat] = useContext(ChatContext);
  const [chatSend, setChatSend] = useState("");
  const onChange = (e) => {
    setChatSend(e.target.value);
  };
  const onSubmitHandle = (e) => {
    e.preventDefault();
    sendMessage(chatSend);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          onChange={onChange}
          maxLength="16"
          placeholder="istediğiniz mesaj"
          value={chatSend}
        />
        <button type="submit">Yolla</button>
      </form>
    </div>
  );
};

export default Input;
