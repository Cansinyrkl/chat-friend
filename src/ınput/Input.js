import React, { useState } from "react";
import "./Index.css";

const Input = ({ sendMessage }) => {
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
          className="ChatInput"
          type="text"
          onChange={onChange}
          maxLength="64"
          placeholder="istediğiniz mesaj"
          value={chatSend}
        />
        <button type="submit" className="ChatButton">
          Send
        </button>
      </form>
    </div>
  );
};

export default Input;
