import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../pages/api/firebase";

const testMessages = [
  {
    user: "user 1",
    message: "Hello there!",
    time: "10:00 AM"
  },
  {
    user: "user 2",
    message: "How are you?",
    time: "11:00 AM"
  },
  {
    user: "user 1",
    message: "I'm good, thanks! How about you?",
    time: "11:05 AM"
  },
  {
    user: "user 2",
    message: "I'm doing well, thanks for asking!",
    time: "11:10 AM"
  },
  {
    user: "user 1",
    message: "Hello there!",
    time: "10:00 AM"
  },
  {
    user: "user 2",
    message: "How are you?",
    time: "11:00 AM"
  },
  {
    user: "user 1",
    message: "I'm good, thanks! How about you?",
    time: "11:05 AM"
  },
  {
    user: "user 2",
    message: "I'm doing well, thanks for asking!",
    time: "11:10 AM"
  },
  {
    user: "user 1",
    message: "Hello there!",
    time: "10:00 AM"
  },
  {
    user: "user 2",
    message: "How are you?",
    time: "11:00 AM"
  },
  {
    user: "user 1",
    message: "I'm good, thanks! How about you?",
    time: "11:05 AM"
  },
  {
    user: "Test Name",
    message: "I'm doing well, thanks for asking!",
    time: "11:10 AM"
  },
  {
    user: "user 1",
    message: "Hello there!",
    time: "10:00 AM"
  },
  {
    user: "user 2",
    message: "How are you?",
    time: "11:00 AM"
  },
  {
    user: "user 1",
    message: "I'm good, thanks! How about you?",
    time: "11:05 AM"
  },
  {
    user: "test name",
    message: "I'm doing well, thanks for asking!",
    time: "11:10 AM"
  }
]

export function ChatPage({ activeChat }: { activeChat: number | null }) {
  const [activeInput, setActiveInput] = useState("");
  const [activeUser, setActiveUser] = useState<string | null>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setActiveUser(user.displayName);
      console.log("Active user:", user.displayName);
    }
  });

  async function postMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const messageData = new FormData(event.currentTarget);
    const response = await fetch('api/postMessage', {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
          user: activeUser,
          message: messageData.get('message'),
          time: new Date().toString()
        }),
    })
  }
  

  return (
    <ScrollArea className="min-h-screen w-full flex flex-col items-center justify-between gap-4 p-2 py-0 pb-5 glassmorphism">
      <div className="w-full minh-screen h-full p-4 mr-4 bg-background rounded-lg shadow-lg overflow-y-auto">
        <h1 className="glassmorphism w-full fixed top-0 left-0 p-4 flex items-center justify-center">Active Chat: {activeChat}</h1>
        <div className="min-h-screen h-full w-full flex flex-col gap-4 p-1 pt-10 pb-20">
          {
            testMessages.map((msg, index) => (
              <div className={`flex flex-col rounded-lg gap-2 w-full ${msg.user === activeUser ? 
                "justify-end items-end" : 
                "justify-start items-start"}`} key={index}>
                <div className={`font-semibold ${msg.user === activeUser ? "gradient-text" : ""}`}>{msg.user}</div>
                <div className={`rounded-lg p-2 ${msg.user === activeUser ? 
                "gradient text-background flex flex-row justify-end" : 
                "bg-foreground text-white self-start"}`} key={index} >
                  <div>{msg.message}</div>
                </div>
                <div className="text-xs text-gray-400">{msg.time}</div>
              </div>
            ))
          }
        </div>
        <form className="bottom-0 left-0 w-full p-2 fixed flex flex-row items-center justify-center gap-4 glassmorphism" onSubmit={postMessage}>
          <div className="gradient-border w-full">
            <input id="message-input" type="text" placeholder="Type your message..." className="w-full p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background" />
          </div>
          <Button type="submit" className="gradient p-5 flex flex-row items-center gap-2" size="sm">Send <Send /></Button>
        </form>
      </div>
      <ScrollBar orientation="vertical" className=""/>
    </ScrollArea>
  )
};