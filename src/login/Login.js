import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/context/UserContext";
import { setUserInfo } from "../utils/Helpers";
import "./Index.css";
const Login = () => {
  const navigate = useNavigate();
  const { users } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [userPasswword, setUserPasswword] = useState("");

  const UserName = (e) => {
    setUserName(e.target.value);
  };
  const Passwword = (e) => {
    setUserPasswword(e.target.value);
  };
  const onSubmit = () => {
    users.find((user) => {
      const loginCheck =
        user.username === userName && user.passwword === userPasswword;
      if (loginCheck) {
        setUserInfo(user.chatId);
        return navigate("/chat");
      }
    });
  };

  return (
    <div className="LoginContainer">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={UserName}
          placeholder="UserName"
          value={userName}
        />
        <input
          type="password"
          onChange={Passwword}
          placeholder="Passwword"
          value={userPasswword}
        />
        <button type="submit">Yolla</button>
      </form>
    </div>
  );
};

export default Login;
