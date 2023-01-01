import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, username: "ahmet", passwword: "123", chatId: 1 },
    { id: 2, username: "mehmet", passwword: "123", chatId: 2 },
  ]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
