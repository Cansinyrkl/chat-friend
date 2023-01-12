export const setUserInfo = (data) => {
  return window.sessionStorage.setItem("userInfo", data);
};

export const getUserInfo = () => {
  return Number(window.sessionStorage.getItem("userInfo"));
};

export const removeUserInfo = () => {
  return window.sessionStorage.removeItem("userInfo");
};

export const loggedUserInfo = (users , loggedUserChatId) => {
  return users.find((user) => {
    if (user.id !== loggedUserChatId) {
      return user;
    }
  });
};
