import { useState } from "react"
import { Leftchat } from "./chat-messages/leftchat"
import { Rightchat } from "./chat-messages/rightchat"

export function ChatWindow({messages}) {

  return (
    <div style={{
      // border: '1px solid black',
      height: 'calc(100% - 120px)',
    }}>    
    {messages.map((message, index) => {
      if (message.from === 'bot') {
        return <Leftchat key={index} message={message.message}/>
      } else {
        return <Rightchat key={index} message={message.message}/>
      }
    })}
    </div>
  )
}

