import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../store/context/UserContext";
import { useNavigate } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../utils/Helpers";
import "./Index.css";
import { useStatus } from "../store/context/StatusContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faVideo,
  faPhone,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  const { sendValue, setSendValue } = useStatus();
  const [isWriting, setIsWriting] = useState();
  const { users } = useContext(UserContext);
  const navigate = useNavigate();
  const loggedUserChatId = getUserInfo();
  const handleExit = () => {
    navigate("/");
    removeUserInfo();
  };

  useEffect(() => {
    if (sendValue?.length > 0) {
      setIsWriting("Yazıyor...");
    } else {
      setIsWriting("");
    }
  }, [sendValue]);

  return (
    <div className="TopBar">
      <div className="TopBarContainer">
        {users.map((user) => {
          if (user.id !== loggedUserChatId)
            return (
              <div key={user.id} className="TopbarContext">
                <button
                  type="button"
                  onClick={handleExit}
                  className="ExitButton"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <img src={user.loginimage} className="LoginPic" />
                <div className="LoginName">
                  {user.username}
                  <div className="Writing">{isWriting}</div>
                </div>
                <div className="Icons">
                  <FontAwesomeIcon icon={faVideo} />
                  <FontAwesomeIcon icon={faPhone} />
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default TopBar;
