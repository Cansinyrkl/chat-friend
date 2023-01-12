import React from "react";
import { useStatus } from "../store/context/StatusContext";
import "./Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Input = ({ click }) => {
  const { sendValue, setSendValue } = useStatus();

  return (
    <div className="buttonIn">
      <input
        className="ChatInput"
        type="text"
        onChange={(event) => setSendValue(event.target.value)}
        maxLength="64"
        placeholder="Mesaj"
        value={sendValue}
      />
      <button
        type="submit"
        disabled={!sendValue}
        className="Faicon"
        onClick={click}
      >
        <FontAwesomeIcon
          icon={sendValue?.length > 0 ? faPaperPlane : faMicrophone}
          size="lg"
        />
      </button>
    </div>
  );
};

export default Input;
