import React, { useContext } from "react";
import { getUserInfo } from "../utils/Helpers";
import { UserContext } from "../store/context/UserContext";
import "./Index.css";

const Popup = () => {
  const { users } = useContext(UserContext);
  const loggedUserChatId = getUserInfo();
  const userInfo = users.find((user) => {
    if (user.id === loggedUserChatId) {
      return user;
    }
  });

  return (
    <div className="popup">
      <div>
        {users.map((user) => {
          if (user.id === loggedUserChatId)
            return (
              <div key={user.id}>
                <img src={user.loginimage} className="LoginPicPopup" />
              </div>
            );
        })}
      </div>
      Hoş Geldin {userInfo.username}
    </div>
  );
};

export default Popup;
