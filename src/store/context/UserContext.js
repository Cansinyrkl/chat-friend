import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, chat: "user", passwword: "123" },
    { id: 2, chat: "user1", passwword: "123" },
  ]);
  return (
    <UserContext.Provider value={[users, setUsers]}>
      {children}
    </UserContext.Provider>
  );
}
