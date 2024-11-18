import { useState } from "react";

export function MessageInput({ setMessages }) {
  const [value, setValue] = useState("");

  const handleSend = (message) => {
    setMessages((messages) => [...messages, { from: "user", message }]);
    setValue("");
  };
  return (
    <div
      style={{
        display: "flex ",
        height: "70px",
      }}
    >
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        style={{
          flex: "1",
          padding: "10px",
        }}
        type="text"
        placeholder="type message"
      />
      <button
        onClick={() => handleSend(value)}
        style={{ width: "100px", height: "70px" }}
      >
        send
      </button>
    </div>
  );
}
