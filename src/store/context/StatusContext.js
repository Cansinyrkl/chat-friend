import { createContext, useContext, useState } from "react";

export const StatusContext = createContext(null);

export function StatusContextProvider({ children }) {
  const [sendValue, setSendValue] = useState("");
  return (
    <StatusContext.Provider value={{ sendValue, setSendValue }}>
      {children}
    </StatusContext.Provider>
  );
}

export const useStatus = () => {
  return useContext(StatusContext);
};
