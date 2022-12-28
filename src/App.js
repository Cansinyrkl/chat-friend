import "./App.css";
import Chat from "./chat/Chat";
import { ChatContextProvider } from "./store/context/ChatContext";
import Bar from "./bar/Bar";
function App() {
  return (
    <ChatContextProvider>
      <div className="App">
        <Bar />
        <Chat />
      </div>
    </ChatContextProvider>
  );
}

export default App;
