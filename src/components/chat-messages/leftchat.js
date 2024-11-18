import React from 'react'

export const Leftchat = ({message}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/8943/8943377.png"
        width={50}
        height={50}
        alt=""
      />
      <div
        style={{
          padding: "10px",
          width: "70%",
          marginTop: "10px",
          borderRadius: "10px",
          backgroundColor: "lightblue",
          border: "1px solid black",
        }}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}
