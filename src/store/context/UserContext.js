import { createContext, useState } from "react";
import Ahmet from "./image/01.jpeg";
import Mehmet from "./image/02.jpeg";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Ahmet",
      passwword: "123",
      chatId: 1,
      loginimage:  Ahmet ,
    },
    {
      id: 2,
      username: "Mehmet",
      passwword: "123",
      chatId: 2,
      loginimage:  Mehmet ,
    },
  ]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
