import React from "react";
import { useStatus } from "../store/context/StatusContext";
import "./Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faCamera,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import TopBar from "../topbar/TopBar";

const Input = ({ click }) => {
  const { sendValue, setSendValue } = useStatus();

  const onChange = (e) => {
    setSendValue(e.target.value);
  };

  return (
    <div className="buttonIn">
      <input
        className="ChatInput"
        type="text"
        onChange={onChange}
        maxLength="64"
        placeholder="Mesaj"
        value={sendValue}
      />
      <div className="Faicon">
        <FontAwesomeIcon
          type="submit"
          onClick={click}
          icon={faMicrophone}
          size="lg"
        />
      </div>
    </div>
  );
};

export default Input;
