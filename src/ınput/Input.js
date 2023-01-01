import React, { useState } from "react";
import { useStatus } from "../store/context/StatusContext";
import "./Index.css";

const Input = ({click}) => {
  const { sendValue, setSendValue } = useStatus();

  const onChange = (e) => {
    setSendValue(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          className="ChatInput"
          type="text"
          onChange={onChange}
          maxLength="64"
          placeholder="istediğiniz mesaj"
          value={sendValue}
        />
        <button type="submit" className="ChatButton" onClick={click}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Input;
