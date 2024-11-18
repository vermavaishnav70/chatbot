import { useState } from "react";

export function MessageInput({ setMessages }) {
  const [value, setValue] = useState("");

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
      <button   onClick={() => setMessages((prev) => [...prev, { from: "user", message: value }])} style={{ width: "100px", height: "70px" }}>send</button>
    </div>
  );
}
