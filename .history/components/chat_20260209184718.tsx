import { Button } from "@/components/ui/button";

export function ChatPage({ activeChat }: { activeChat: number | null }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between gap-4 bg-red-900 mt-2">
      <h1>Active Chat: {activeChat}</h1>
      <div className="bottom-0 left-0 w-full p-2 bg-background flex flex-row items-center justify-center gap-4">
        <div className="gradient-border w-full">
          <input type="text" placeholder="Type your message..." className="w-full p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background" />
        </div>
        <Button className="gradient p-4">Send  </Button>
      </div>
    </div>
  )
};