import { createContext, useState } from "react";
import uuid from "react-uuid";
export const ChatContext = createContext(null);

export function ChatContextProvider({ children }) {
  const [chat, setChat] = useState([
    { id: uuid(), chat: "chat1", sendTheMessage: "ahmet" },
    { id: uuid(), chat: "chat2", sendTheMessage: "mehmet" },
  ]);
  return (
    <ChatContext.Provider value={[chat, setChat]}>
      {children}
    </ChatContext.Provider>
  );
}
