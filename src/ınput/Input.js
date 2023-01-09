import React, { useEffect, useState } from "react";
import { useStatus } from "../store/context/StatusContext";
import "./Index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faCamera,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Input = ({ click }) => {
  const { sendValue, setSendValue } = useStatus();
  const [isWritingIcon, setIsWritingIcon] = useState();
  const onChange = (e) => {
    setSendValue(e.target.value);
  };

  useEffect(() => {
    if (sendValue?.length > 0) {
      setIsWritingIcon(
        <FontAwesomeIcon
          type="submit"
          onClick={click}
          icon={faPaperPlane}
          size="lg"
        />
      );
    } else {
      setIsWritingIcon(
        <FontAwesomeIcon
          type="submit"
          onClick={click}
          icon={faMicrophone}
          size="lg"
        />
      );
    }
  }, [sendValue]);

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
      <button className="Faicon">{isWritingIcon}</button>
    </div>
  );
};

export default Input;
