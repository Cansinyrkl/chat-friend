import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, username: "ahmet", passwword: "123", sendTheMessage: "ahmet" },
    { id: 2, username: "mehmet", passwword: "123", sendTheMessage: "mehmet" },
  ]);
  return (
    <UserContext.Provider value={[users, setUsers]}>
      {children}
    </UserContext.Provider>
  );
}
