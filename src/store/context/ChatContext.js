import { createContext, useState } from "react";
import uuid from "react-uuid";
export const ChatContext = createContext(null);

export function ChatContextProvider({ children }) {
  const [chat, setChat] = useState([
    { id: uuid(), chatId: 1, sendTheMessage: "Nasılsın" },
    { id: uuid(), chatId: 2, sendTheMessage: "İyi Senden" },
  ]);
  return (
    <ChatContext.Provider value={[chat, setChat]}>
      {children}
    </ChatContext.Provider>
  );
}
