import "./App.css";
import Chat from "./chat/Chat";
import { ChatContextProvider } from "./store/context/ChatContext";
import { UserContextProvider } from "./store/context/UserContext";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import { StatusContextProvider } from "./store/context/StatusContext";
function App() {
  return (
    <div className="App">
      <StatusContextProvider>
        <UserContextProvider>
          <ChatContextProvider>
            <div className="Container">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </div>
          </ChatContextProvider>
        </UserContextProvider>
      </StatusContextProvider>
    </div>
  );
}

export default App;
