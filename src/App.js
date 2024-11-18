import "./App.css";
import { Header } from "./components/header";
import { ChatWindow } from "./components/chat-window";
import { MessageInput } from "./components/message-input";
import { useState } from "react";
function App() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      message: "Hello! How are you?",
    },
    {
      from: "user",
      message: "I am fine",
    },
  ]);
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Header />
      <ChatWindow messages={messages} />
      <MessageInput setMessages={setMessages} />
    </div>
  );
}

export default App;
