import { Button } from "@/components/ui/button";
import { time } from "console";
import { Send } from "lucide-react";

const activeUser = "user 1";

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
    user: "user 2",
    message: "I'm doing well, thanks for asking!",
    time: "11:10 AM"
  },
]

export function ChatPage({ activeChat }: { activeChat: number | null }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between gap-4 pt-4 glassmorphism">
      <div className="w-full minh-screen h-full p-4 mx-2 bg-background rounded-lg shadow-lg overflow-y-auto">
        <h1 className="glassmorphism w-full fixed top-0 left-0 p-4 flex items-center justify-center">Active Chat: {activeChat}</h1>
        {
          testMessages.map((msg, index) => (
            <div key={index} className={`w-full p-4 rounded-lg mb-2 
            ${msg.user === activeUser ? 
            "gradient text-background flex text-end" : 
            "bg-foreground text-white self-start"}`}>
              <div className="w-1/2 flex flex-col items-start gap-1">
                <div className="font-semibold">{msg.user}</div>
                <div>{msg.message}</div>
                <div className="text-xs text-gray-400">{msg.time}</div>
              </div>
            </div>
          ))
        }
        <div className="bottom-0 left-0 w-full p-2 bg-background fixed flex flex-row items-center justify-center gap-4 glassmorphism">
          <div className="gradient-border w-full">
            <input type="text" placeholder="Type your message..." className="w-full p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary glassmorphism" />
          </div>
          <Button className="gradient p-5 flex flex-row items-center gap-2" size="sm">Send <Send /></Button>
        </div>
      </div>
    </div>
  )
};