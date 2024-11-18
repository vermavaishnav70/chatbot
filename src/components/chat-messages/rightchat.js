import React from "react";

export const Rightchat = ({message}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "10px",
          width: "70%",
          marginTop: "10px",
          borderRadius: "10px",
          backgroundColor: "lightblue",
          border: "1px solid black",
          marginLeft: "auto",
        }}
      >
        <p>{message}</p>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
        width={50}
        height={50}
        alt=""
      />
    </div>
  );
};
